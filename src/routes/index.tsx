import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

const gallery = [
  { before: before1, after: after1, label: "Home window" },
  { before: before2, after: after2, label: "Shopfront" },
  { before: before3, after: after3, label: "Apartment window" },
];

function BeforeAfterSlider({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  };

  return (
    <div>
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border select-none"
        onMouseDown={(e) => {
          dragging.current = true;
          update(e.clientX);
        }}
        onMouseMove={(e) => dragging.current && update(e.clientX)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => update(e.touches[0].clientX)}
        onTouchMove={(e) => update(e.touches[0].clientX)}
      >
        <img src={after} alt={`${label} after cleaning`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt={`${label} before cleaning`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white">Before</span>
        <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">After</span>
        <div className="absolute top-0 bottom-0 w-0.5 bg-white" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-white text-xs font-bold text-foreground shadow">↔</div>
        </div>
      </div>
      <p className="mt-2 text-center text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tin i Cleaning — Professional Window Cleaning" },
      {
        name: "description",
        content:
          "Tin i Cleaning offers professional, affordable window cleaning for homes and businesses. Spotless results, friendly service, 5-star rated.",
      },
      { property: "og:title", content: "Tin i Cleaning — Professional Window Cleaning" },
      {
        property: "og:description",
        content:
          "Tin i Cleaning offers professional, affordable window cleaning for homes and businesses. Spotless results, friendly service, 5-star rated.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reviews = [
  {
    name: "Marko P.",
    text: "Tin cleaned all the windows in our house and they look brand new. Fast, friendly, and affordable. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    name: "Elena R.",
    text: "Best window cleaning service I've used. Our shopfront has never looked so clear. Will be booking again.",
    date: "1 month ago",
  },
  {
    name: "David S.",
    text: "Punctual, professional, and the windows are spotless. Even the frames got cleaned. Five stars all the way.",
    date: "1 month ago",
  },
  {
    name: "Ana K.",
    text: "Friendly service and a fair price. Our apartment windows were so dirty and now they shine. Thank you Tin!",
    date: "2 months ago",
  },
  {
    name: "Tom B.",
    text: "Booked Tin for our office building. Arrived on time, did a thorough job, and left everything tidy. Great work.",
    date: "3 months ago",
  },
];

const services = [
  {
    title: "Home Window Cleaning",
    desc: "Outside-only window cleaning for homes. Frames and sills included. We leave your windows sparkling.",
  },
  {
    title: "Commercial & Shopfronts",
    desc: "Keep your business looking its best with regular or one-off outside cleaning for shopfronts and offices.",
  },
  {
    title: "Frame & Sill Cleaning",
    desc: "We don't stop at the glass — frames and sills cleaned too for a complete outside finish.",
  },
];

const steps = [
  { n: "01", title: "Get in Touch", desc: "Email or message us with your address and what you need cleaned." },
  { n: "02", title: "Free Quote", desc: "We give you a clear, upfront price — no surprises, no hidden fees." },
  { n: "03", title: "We Clean", desc: "Tin arrives on time and gets the outside of your windows spotless." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground text-sm">
              T
            </span>
            <span>Tin i Cleaning</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground sm:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#reviews" className="transition-colors hover:text-foreground">Reviews</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-5 pt-16 pb-12 sm:pt-24">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              ⭐ 5.0 · 5 reviews
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Spotless windows, <br className="hidden sm:block" />
              friendly service.
            </h1>
            <p className="mt-4 max-w-md text-base text-muted-foreground">
              Tin i Cleaning is your local window cleaning specialist for homes
              and businesses. We clean the outside of your windows — clear
              prices, careful work, and windows that actually shine.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a Clean
              </a>
              <a
                href="#services"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                See Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-sky-100 to-sky-50">
              <img
                src="/hero.jpg"
                alt="Clean, sparkling window reflecting blue sky"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-border px-5 py-8 text-center">
          <div>
            <p className="text-2xl font-bold sm:text-3xl">100%</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Streak-free</p>
          </div>
          <div>
            <p className="text-2xl font-bold sm:text-3xl">5.0★</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">Average rating</p>
          </div>
          <div>
            <p className="text-2xl font-bold sm:text-3xl">Free</p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">No-obligation quote</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What we clean</h2>
        <p className="mt-2 text-muted-foreground">Simple, honest services for every kind of window.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-xl">
                🪟
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After Gallery */}
      <section id="gallery" className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Before & after</h2>
        <p className="mt-2 text-muted-foreground">
          Drag the slider to see the difference outside cleaning makes.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {gallery.map((g) => (
            <BeforeAfterSlider key={g.label} before={g.before} after={g.after} label={g.label} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How it works</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <span className="text-3xl font-bold text-primary/30">{s.n}</span>
                <h3 className="mt-2 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-5xl px-5 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What people say</h2>
            <p className="mt-2 text-muted-foreground">Rated 5.0 out of 5 by our customers.</p>
          </div>
          <div className="hidden text-right sm:block">
            <p className="text-3xl font-bold">5.0</p>
            <p className="text-sm text-muted-foreground">★★★★★</p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-semibold text-primary">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                  </div>
                </div>
                <span className="text-sm text-amber-500">★★★★★</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get your free quote</h2>
              <p className="mt-3 text-primary-foreground/80">
                Ready for windows that shine? Call or message Tin today — we'll
                give you a clear price with no obligation.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:tin.you@gmail.com"
                className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 px-5 py-4 text-sm font-medium transition-colors hover:bg-primary-foreground/20"
              >
                <span className="text-lg">✉️</span>
                <span>Email: tin.you@gmail.com</span>
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 px-5 py-4 text-sm font-medium transition-colors hover:bg-primary-foreground/20"
              >
                <span className="text-lg">💬</span>
                <span>Message us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-xs text-primary-foreground">
              T
            </span>
            Tin i Cleaning
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tin i Cleaning. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
