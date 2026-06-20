# gRPC Search Service

> A strongly-typed, TLS-secured gRPC service in Go — a reference for how internal services should talk to each other.

![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![gRPC](https://img.shields.io/badge/gRPC-244c5a?style=flat-square&logo=grpc&logoColor=white)
![Protobuf](https://img.shields.io/badge/Protocol%20Buffers-4285F4?style=flat-square&logo=google&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

## Overview

REST over JSON is fine at the edge, but for internal service-to-service calls it's loose: no enforced schema, verbose payloads, and no built-in transport security. This project implements a **typed, TLS-secured gRPC service** as a reference for internal APIs.

## Architecture

The contract comes first. The API is defined in **Protocol Buffers** (`proto/search.proto`) and code-generated for both server and client (`generate.sh`) — the `.proto` file is the single source of truth, so the schema can never drift between sides.

The server is layered cleanly:

```
grpc-simple/
├── proto/
│   └── search.proto        # service contract (source of truth)
├── connector/grpc/
│   └── connection.go       # gRPC server setup
├── service/
│   └── service.go          # business logic
├── repository/
│   └── mysql.go            # persistence (MySQL)
├── ssl/                    # TLS: CA + server cert/key
├── generate.sh             # protoc code generation
└── main.go
```

Transport is secured with **TLS certificates** (self-signed CA + server cert/key under `ssl/`), demonstrating encrypted service-to-service communication rather than plaintext.

## Highlights

- **Contract-first with Protobuf** — schema defined once, generated for both sides; eliminates JSON drift. Trade-off: a codegen step, in exchange for type safety and smaller, faster payloads.
- **TLS by default** — documented certificate-generation flow (`ssl/instructions.sh`).
- **Clear layering** — connection / service / repository separation keeps the transport swappable and the logic testable.

## Getting Started

### Prerequisites
- Go
- `protoc` (Protocol Buffers compiler)
- MySQL

### Generate code & run

```bash
git clone https://github.com/ekonugroho98/grpc-simple.git
cd grpc-simple

# generate Go code from the .proto contract
./generate.sh

# (optional) generate TLS certs — see ssl/instructions.sh

# run the server
go run main.go
```

---

*Built by [Eko Nugroho](https://github.com/ekonugroho98) — Backend Engineer specializing in Go & system architecture.*
