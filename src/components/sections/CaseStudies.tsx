import React from 'react';
import { SectionHeading } from '../SectionHeading';

interface Block {
  label: string;
  body: string;
}

interface CaseStudy {
  title: string;
  subtitle: string;
  stack: string[];
  repo: string;
  blocks: Block[];
}

const caseStudies: CaseStudy[] = [
  {
    title: 'BookingKuy — Travel Booking Platform Backend',
    subtitle: 'A modular-monolith backend that sells third-party hotel inventory: real-time supplier search, local markup & payments, and consistent booking state.',
    stack: ['Go 1.25', 'PostgreSQL 15', 'Redis 7', 'chi', 'JWT', 'Midtrans', 'Hotelbeds', 'SendGrid', 'Docker'],
    repo: 'https://github.com/ekonugroho98/be-bookingkuy',
    blocks: [
      {
        label: 'problem',
        body: "Sell hotel inventory the business doesn't own — pulling availability and pricing from external suppliers in real time, applying markup, taking payment locally, then confirming back with the supplier. The hard parts: depending on slow/occasionally-down third-party APIs, keeping payment and booking state in sync, and allowing new suppliers without rewriting the core.",
      },
      {
        label: 'architecture',
        body: 'A modular monolith (microservice-ready): one deployable binary split into ~20 self-contained domain modules under internal/ (auth, search, ai-search, booking, payment, pricing, provider, notification…), each following handler → service → repository → model. The standout is a provider abstraction layer: suppliers sit behind one interface, registered in a registry that handles selection and failover, so the system talks to canonical supplier-agnostic models. PostgreSQL 15 is the source of truth (22 migrations), Redis 7 caches hot search results, and a worker (cmd/sync) + webhooks handle async supplier sync and payment callbacks.',
      },
      {
        label: 'highlights & trade-offs',
        body: 'Provider interface + registry with failover means adding a supplier is one adapter, not a rewrite — the indirection pays for itself the first outage. Chose a modular monolith over microservices to avoid premature distributed-systems complexity while keeping clean seams for later extraction. Payment (Midtrans) and booking state are coordinated so a failed payment never leaves a confirmed booking. Shipped with Swagger docs, integration tests, and a docker-compose stack — runnable, not just readable.',
      },
      {
        label: 'outcome',
        body: 'A production-shaped booking backend that onboards a new supplier via a single adapter, survives supplier outages through failover, and keeps payment and reservation state consistent — with the full stack spinnable via docker-compose and explorable through Swagger.',
      },
    ],
  },
  {
    title: 'gRPC Search Service — Typed, Secure Service API',
    subtitle: 'A strongly-typed, TLS-secured gRPC service in Go — a reference for how internal services should talk to each other.',
    stack: ['Go', 'gRPC', 'Protocol Buffers', 'MySQL', 'TLS'],
    repo: 'https://github.com/ekonugroho98/grpc-simple',
    blocks: [
      {
        label: 'problem',
        body: 'REST/JSON is loose for internal service-to-service calls: no enforced schema, verbose payloads, no built-in transport security. This builds a typed, TLS-secured gRPC service as a reference for internal APIs.',
      },
      {
        label: 'architecture',
        body: 'Contract-first: the API is defined in Protocol Buffers (proto/search.proto) and code-generated for both server and client, so the schema can never drift. Layered cleanly into a connection layer (gRPC setup), a service layer (business logic), and a repository layer (MySQL). Transport is secured with TLS certificates (self-signed CA + server cert/key), demonstrating encrypted service-to-service communication.',
      },
      {
        label: 'highlights & trade-offs',
        body: 'Protobuf contract defined once and generated for both sides eliminates JSON drift — the cost is a codegen step, in exchange for type safety and smaller, faster payloads. TLS by default with a documented cert-generation flow. Connection / service / repository separation keeps the transport swappable and the logic testable.',
      },
      {
        label: 'outcome',
        body: 'A compact, correct reference implementation of a secure gRPC service in Go — Protobuf contract, TLS transport, and a clean service/repository split — usable as a template for typed internal APIs.',
      },
    ],
  },
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70">
      <SectionHeading
        index="06"
        label="case_studies"
        title="Engineering Deep-Dives"
        subtitle="How two backend systems were designed — problem, architecture, trade-offs, and outcome."
      />

      <div className="mt-12 flex flex-col gap-8">
        {caseStudies.map((cs) => (
          <article
            key={cs.title}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark overflow-hidden"
          >
            {/* Title bar */}
            <div className="px-5 md:px-7 h-11 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">
              <span className="size-2.5 rounded-full bg-primary" />
              <span className="truncate">{cs.repo.replace('https://github.com/', '')}</span>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{cs.title}</h3>
              <p className="mt-2 text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                {cs.subtitle}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {cs.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-1 rounded bg-primary/5 text-primary border border-primary/15"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {cs.blocks.map((b) => (
                  <div key={b.label} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 font-mono text-xs text-primary">
                      <span className="text-slate-400 dark:text-slate-600">//</span>
                      {b.label}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{b.body}</p>
                  </div>
                ))}
              </div>

              <a
                href={cs.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-mono text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
              >
                <span className="text-primary">→</span>
                view_source()
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
