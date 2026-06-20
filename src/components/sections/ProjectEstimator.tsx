import React, { useState } from 'react';
import { SectionHeading } from '../SectionHeading';

interface AddOn {
  id: string;
  label: string;
  price: number;
}

interface Package {
  id: string;
  name: string;
  price: number;
  includes: string[];
  popular?: boolean;
}

interface ProjectType {
  id: string;
  label: string;
  desc: string;
  base: number;
  monthly?: boolean;
  timeline: string;
  scope: string;
  packages?: Package[];
  addons: AddOn[];
}

const WHATSAPP = '6281519624321';

const projectTypes: ProjectType[] = [
  {
    id: 'landing',
    label: 'Landing Page UMKM',
    desc: '1 halaman company profile, mobile-friendly, deploy gratis di Vercel.',
    base: 200000,
    timeline: '3–7 hari kerja',
    scope: 'Termasuk revisi 2x. Online di Vercel (hosting gratis).',
    packages: [
      {
        id: 'basic',
        name: 'Basic',
        price: 200000,
        includes: ['1 halaman company profile', 'Mobile-friendly', 'Order via WhatsApp', 'Online di Vercel', 'Revisi 2x'],
      },
      {
        id: 'lengkap',
        name: 'Lengkap',
        price: 450000,
        popular: true,
        includes: ['Semua di Basic', 'Galeri foto', 'Katalog / menu produk', 'Form kontak'],
      },
      {
        id: 'premium',
        name: 'Premium',
        price: 800000,
        includes: ['Semua di Lengkap', 'Copywriting', 'Multi-section / halaman panjang', 'Animasi & interaktif'],
      },
    ],
    addons: [
      { id: 'wa', label: 'Order / kontak via WhatsApp', price: 50000 },
      { id: 'form', label: 'Form kontak', price: 50000 },
      { id: 'gallery', label: 'Galeri foto', price: 75000 },
      { id: 'anim', label: 'Animasi / interaktif', price: 75000 },
      { id: 'catalog', label: 'Katalog / menu produk', price: 100000 },
      { id: 'copy', label: 'Copywriting (penulisan teks)', price: 100000 },
      { id: 'multi', label: 'Multi-section / halaman panjang', price: 100000 },
    ],
  },
  {
    id: 'webapp',
    label: 'Web App',
    desc: 'Aplikasi web dengan database (Supabase free tier) + login.',
    base: 1000000,
    timeline: '2–5 minggu',
    scope: 'Termasuk revisi 2x. Database & auth via Supabase (free tier).',
    packages: [
      {
        id: 'standar',
        name: 'Standar',
        price: 1000000,
        includes: ['CRUD data', 'Login (Supabase)', 'Online di Vercel', 'Revisi 2x'],
      },
      {
        id: 'pro',
        name: 'Pro',
        price: 2000000,
        popular: true,
        includes: ['Semua di Standar', 'Dashboard admin', 'Multi-tabel data', 'Multi-user & role'],
      },
    ],
    addons: [
      { id: 'dashboard', label: 'Dashboard admin', price: 500000 },
      { id: 'multitable', label: 'Multi-tabel data', price: 400000 },
      { id: 'report', label: 'Export / laporan', price: 300000 },
      { id: 'roles', label: 'Multi-user & role', price: 400000 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend / API',
    desc: 'REST/gRPC API + 1 integrasi, sesuai keahlian backend Go/Java.',
    base: 1500000,
    timeline: '2–4 minggu',
    scope: 'Lingkup teknis & harga final menyesuaikan kebutuhan — paling baik didiskusikan.',
    addons: [
      { id: 'integration', label: 'Integrasi pihak ketiga (per API)', price: 500000 },
      { id: 'redis', label: 'Caching / Redis', price: 400000 },
      { id: 'docs', label: 'API docs (Swagger)', price: 300000 },
      { id: 'deploy', label: 'Deployment + CI/CD', price: 300000 },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    desc: 'Pemeliharaan bulanan: update konten + monitoring.',
    base: 100000,
    monthly: true,
    timeline: 'Berkelanjutan / bulanan',
    scope: 'Langganan bulanan, bisa berhenti kapan saja.',
    packages: [
      {
        id: 'm-basic',
        name: 'Basic',
        price: 100000,
        includes: ['Update konten', 'Monitoring uptime'],
      },
      {
        id: 'm-standard',
        name: 'Standard',
        price: 250000,
        popular: true,
        includes: ['Semua di Basic', 'Backup berkala', 'Prioritas support'],
      },
      {
        id: 'm-premium',
        name: 'Premium',
        price: 500000,
        includes: ['Semua di Standard', 'Perubahan fitur kecil rutin'],
      },
    ],
    addons: [
      { id: 'support', label: 'Prioritas support', price: 100000 },
      { id: 'backup', label: 'Backup berkala', price: 50000 },
      { id: 'content', label: 'Update konten rutin', price: 100000 },
    ],
  },
];

const rupiah = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const defaultPackageId = (t: ProjectType) => {
  if (!t.packages) return '';
  const popular = t.packages.find((p) => p.popular);
  return (popular ?? t.packages[0]).id;
};

export const ProjectEstimator: React.FC = () => {
  const [typeId, setTypeId] = useState(projectTypes[0].id);
  const [mode, setMode] = useState<'paket' | 'custom'>('paket');
  const [packageId, setPackageId] = useState(defaultPackageId(projectTypes[0]));
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [express, setExpress] = useState(false);

  const type = projectTypes.find((t) => t.id === typeId) as ProjectType;
  const hasPackages = !!type.packages;
  const usingPackage = hasPackages && mode === 'paket';

  const pkg = usingPackage ? type.packages!.find((p) => p.id === packageId) ?? type.packages![0] : null;
  const chosen = type.addons.filter((a) => selected[a.id]);

  const subtotal = usingPackage ? pkg!.price : type.base + chosen.reduce((s, a) => s + a.price, 0);
  const multiplier = !type.monthly && express ? 1.4 : 1;
  const total = Math.round(subtotal * multiplier);

  const pickType = (id: string) => {
    const next = projectTypes.find((t) => t.id === id) as ProjectType;
    setTypeId(id);
    setMode(next.packages ? 'paket' : 'custom');
    setPackageId(defaultPackageId(next));
    setSelected({});
    setExpress(false);
  };
  const toggle = (id: string) => setSelected((prev) => ({ ...prev, [id]: !prev[id] }));

  const offerName = usingPackage ? `${type.label} — Paket ${pkg!.name}` : `${type.label} (custom)`;
  const featureLine = usingPackage
    ? pkg!.includes.join(', ')
    : chosen.length
      ? chosen.map((a) => a.label).join(', ')
      : '-';

  const waText = encodeURIComponent(
    `Halo Eko, saya tertarik *${offerName}*.\n` +
      `Detail: ${featureLine}\n` +
      (type.monthly ? '' : `Kecepatan: ${express ? 'Express' : 'Normal'}\n`) +
      `Estimasi: ${rupiah(total)}${type.monthly ? ' / bulan' : ''}\n` +
      `Bisa diskusi lebih lanjut?`,
  );
  const waLink = `https://wa.me/${WHATSAPP}?text=${waText}`;

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 border-t border-slate-200/70 dark:border-slate-800/70">
      <SectionHeading
        index="02"
        label="estimasi"
        title="Hitung Estimasi Biaya"
        subtitle="Pilih paket siap-pakai, atau atur sendiri fitur yang kamu butuhkan. Transparan, ramah budget."
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: options */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {/* Project type */}
          <div>
            <p className="font-mono text-xs text-primary mb-3">// jenis project</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map((t) => {
                const active = t.id === typeId;
                return (
                  <button
                    key={t.id}
                    onClick={() => pickType(t.id)}
                    className={`text-left rounded-xl border p-4 transition-colors ${
                      active
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark hover:border-primary/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-slate-900 dark:text-white">{t.label}</span>
                      <span className="font-mono text-xs text-primary">
                        {t.monthly ? `${rupiah(t.base)}/bln` : `dari ${rupiah(t.base)}`}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{t.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mode toggle */}
          {hasPackages && (
            <div className="inline-flex self-start rounded-lg border border-slate-200 dark:border-slate-800 p-1 font-mono text-xs">
              <button
                onClick={() => setMode('paket')}
                className={`px-4 py-1.5 rounded-md transition-colors ${
                  mode === 'paket' ? 'bg-primary text-white' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                paket
              </button>
              <button
                onClick={() => setMode('custom')}
                className={`px-4 py-1.5 rounded-md transition-colors ${
                  mode === 'custom' ? 'bg-primary text-white' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                custom
              </button>
            </div>
          )}

          {/* Packages */}
          {usingPackage && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {type.packages!.map((p) => {
                const active = p.id === packageId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setPackageId(p.id)}
                    className={`relative text-left rounded-xl border p-4 flex flex-col gap-3 transition-colors ${
                      active
                        ? 'border-primary bg-primary/5'
                        : 'border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark hover:border-primary/40'
                    }`}
                  >
                    {p.popular && (
                      <span className="absolute -top-2 right-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-mono font-bold text-white">
                        populer
                      </span>
                    )}
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{p.name}</div>
                      <div className="font-mono text-sm text-primary">
                        {rupiah(p.price)}
                        {type.monthly && <span className="text-slate-400">/bln</span>}
                      </div>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {p.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                          <svg viewBox="0 0 24 24" className="size-3.5 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </button>
                );
              })}
            </div>
          )}

          {/* Add-ons (custom mode) */}
          {!usingPackage && (
            <div>
              <p className="font-mono text-xs text-primary mb-3">// fitur tambahan</p>
              <div className="flex flex-col gap-2.5">
                {type.addons.map((a) => {
                  const on = !!selected[a.id];
                  return (
                    <label
                      key={a.id}
                      className={`flex items-center justify-between gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                        on
                          ? 'border-primary/60 bg-primary/5'
                          : 'border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark hover:border-primary/40'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex size-5 items-center justify-center rounded border ${
                            on ? 'bg-primary border-primary text-white' : 'border-slate-300 dark:border-slate-600'
                          }`}
                          aria-hidden="true"
                        >
                          {on && (
                            <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm text-slate-700 dark:text-slate-200">{a.label}</span>
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">+{rupiah(a.price)}</span>
                      <input type="checkbox" className="sr-only" checked={on} onChange={() => toggle(a.id)} />
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Speed */}
          {!type.monthly && (
            <div>
              <p className="font-mono text-xs text-primary mb-3">// kecepatan pengerjaan</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setExpress(false)}
                  className={`rounded-lg border px-4 py-3 text-left transition-colors ${
                    !express ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-primary/40'
                  }`}
                >
                  <span className="block text-sm font-medium text-slate-800 dark:text-slate-100">Normal</span>
                  <span className="block font-mono text-xs text-slate-400">{type.timeline}</span>
                </button>
                <button
                  onClick={() => setExpress(true)}
                  className={`rounded-lg border px-4 py-3 text-left transition-colors ${
                    express ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-800 hover:border-primary/40'
                  }`}
                >
                  <span className="block text-sm font-medium text-slate-800 dark:text-slate-100">Express +40%</span>
                  <span className="block font-mono text-xs text-slate-400">Dikebut, prioritas</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: summary */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-28 rounded-2xl border border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark overflow-hidden">
            <div className="px-5 h-11 flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">
              <span className="size-2.5 rounded-full bg-primary" />
              estimasi.json
            </div>
            <div className="p-6">
              <p className="font-mono text-xs text-slate-400">estimasi biaya</p>
              <div className="mt-1 flex items-end gap-1">
                <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">{rupiah(total)}</span>
                {type.monthly && <span className="mb-1 text-sm text-slate-400">/ bln</span>}
              </div>

              <div className="mt-5 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                {usingPackage ? (
                  <div className="flex justify-between">
                    <span className="text-slate-400">
                      {type.label} · Paket {pkg!.name}
                    </span>
                    <span className="font-mono">{rupiah(pkg!.price)}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{type.label}</span>
                      <span className="font-mono">{rupiah(type.base)}</span>
                    </div>
                    {chosen.map((a) => (
                      <div key={a.id} className="flex justify-between">
                        <span className="text-slate-400">+ {a.label}</span>
                        <span className="font-mono">{rupiah(a.price)}</span>
                      </div>
                    ))}
                  </>
                )}
                {!type.monthly && express && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Express (×1.4)</span>
                    <span className="font-mono">+{rupiah(total - subtotal)}</span>
                  </div>
                )}
              </div>

              {/* Free hosting badge */}
              <div className="mt-5 flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-3 py-2">
                <svg viewBox="0 0 24 24" className="size-4 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-primary font-medium">Hosting gratis — Vercel + Supabase (free tier)</span>
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full bg-primary text-white font-mono text-sm font-semibold py-3.5 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group"
              >
                <span>diskusi_via_whatsapp()</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
                {type.scope} Harga final menyesuaikan kebutuhan. Domain opsional ~Rp 150–200rb/thn dibayar terpisah
                (atau pakai subdomain .vercel.app gratis).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
