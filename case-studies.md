# Case Studies — Eko Nugroho

Deep-dives into two backend systems. Structure: **Problem → Architecture → Engineering highlights & trade-offs → Outcome.** Reusable as GitHub repo READMEs or blog posts.

---

## 1. BookingKuy — Travel Booking Platform Backend

**Repo:** [be-bookingkuy](https://github.com/ekonugroho98/be-bookingkuy) · **Role:** Backend Engineer / Architect · **Stack:** Go 1.25, PostgreSQL 15, Redis 7, chi, JWT, Docker, Midtrans, Hotelbeds, SendGrid

### Problem

An online travel agency needs to sell hotel inventory it doesn't own. That means pulling availability and pricing from external suppliers in real time, applying its own markup, taking payment locally, and confirming the booking back with the supplier — all while staying fast enough for a search page and reliable enough that money and reservations never get out of sync. The hard parts are: depending on third-party APIs that are slow and occasionally down, keeping payment and booking state consistent, and building it so new suppliers can be added without rewriting the core.

### Architecture

The system is a **modular monolith, microservice-ready**: a single deployable binary, but split internally into ~20 self-contained domain modules under `internal/` (`auth`, `user`, `search`, `ai-search`, `booking`, `payment`, `pricing`, `provider`, `notification`, `review`, `subscription`, `webhook`, …). Each module follows the same layered pattern — `handler → service → repository → model` — so business logic never touches HTTP or SQL directly, and any module can later be extracted into its own service with minimal change.

The standout piece is the **provider abstraction layer**. Suppliers (Hotelbeds, HotelPlanner, …) sit behind a single `Provider` interface, registered in a `registry` that handles selection and **failover** between them. The rest of the system talks to canonical, supplier-agnostic models — so adding a new hotel supplier means writing one adapter, not touching search, pricing, or booking.

Supporting infrastructure: **PostgreSQL 15** as the source of truth (22 SQL migrations), **Redis 7** for caching hot search results and rate limiting, **JWT** auth, **Midtrans** for Indonesian payment processing, **SendGrid** for transactional email, and a **worker process** (`cmd/sync`) plus webhook handlers for asynchronous supplier sync and payment callbacks. The whole thing ships via **Docker / docker-compose** with **Swagger/OpenAPI** docs and an integration test suite.

### Engineering highlights & trade-offs

- **Provider interface + registry with failover** — the design decision that matters most. Trade-off: an abstraction layer adds indirection, but it pays for itself the moment a second supplier or an outage appears.
- **Modular monolith over microservices from day one** — deliberately avoided premature distributed-systems complexity (network calls, distributed transactions) while keeping clean seams so extraction stays cheap later.
- **Async by design** — payment confirmation and supplier sync run through workers/webhooks rather than blocking the request path, so a slow supplier never stalls the user.
- **Consistency around money** — payment (Midtrans) and booking state are coordinated so a failed payment never leaves a confirmed booking, and vice versa.
- **Operability built in** — Swagger docs, integration tests, and containerized local stack so the project is runnable and reviewable, not just readable.

### Outcome

A production-shaped booking backend that can onboard a new hotel supplier by adding a single adapter, survive a supplier outage via failover, and keep payment and reservation state consistent — packaged so anyone can spin up the full stack with `docker-compose` and explore the API through Swagger.

> *Add concrete numbers here if available: search latency (p95), number of suppliers integrated, test coverage %, transactions handled. Numbers make a case study land harder.*

---

## 2. gRPC Search Service — Typed, Secure Service-to-Service API

**Repo:** [grpc-simple](https://github.com/ekonugroho98/grpc-simple) · **Role:** Backend Engineer · **Stack:** Go, gRPC, Protocol Buffers, MySQL, TLS

### Problem

REST over JSON is fine at the edge, but for internal service-to-service calls it's loose: no enforced schema, verbose payloads, and no built-in transport security. This project builds a **strongly-typed, TLS-secured gRPC service** as a reference for how internal APIs should talk to each other.

### Architecture

The contract is defined first in **Protocol Buffers** (`proto/search.proto`) and code-generated (`generate.sh`) — the `.proto` file is the single source of truth for both server and client, so the schema can never drift. The server is layered cleanly: a **connection layer** (`connector/grpc`) sets up the gRPC server, a **service layer** (`service/`) holds the business logic, and a **repository layer** (`repository/mysql.go`) handles persistence in MySQL. Transport is secured with **TLS certificates** (self-signed CA, server cert/key under `ssl/`), demonstrating encrypted service-to-service communication rather than plaintext.

### Engineering highlights & trade-offs

- **Contract-first with Protobuf** — schema defined once, generated for both sides; eliminates the drift and guesswork of hand-written JSON contracts. Trade-off: a build/codegen step, in exchange for type safety and smaller, faster payloads.
- **TLS by default** — service starts from the assumption that internal traffic should be encrypted, with a documented certificate-generation flow.
- **Clear layering** — connection / service / repository separation keeps the transport (gRPC) swappable and the business logic testable.

### Outcome

A compact, correct reference implementation of a secure gRPC service in Go — Protobuf contract, TLS transport, and a clean service/repository split — useful as a template for typed internal APIs.

---

*Both case studies describe real, committed code. Metrics marked with placeholders should be filled with measured numbers where available — never estimated.*
