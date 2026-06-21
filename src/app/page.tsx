"use client";

import { motion } from "framer-motion";
import { BookOpen, ClipboardList, Mail, MapPin, Phone, Send, Smartphone, WalletCards } from "lucide-react";
import Image from "next/image";
import type { FormEvent, SVGProps } from "react";
import { useState } from "react";
import heroImage from "../../assets/hero.jpeg";
import { Header } from "@/components/Header";
import { useLanguage } from "@/hooks/useLanguage";
import { openingClasses, schoolInfo, socialLinks } from "@/lib/constants";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.5V6.75c0-.7.16-1.05 1.13-1.05H17V2.24C16.1 2.12 15.45 2 14.56 2c-2.77 0-4.67 1.69-4.67 4.79V8.5H7v3.88h2.89V22h4.11v-9.62h2.8l.47-3.88H14Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.55 } };

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return <motion.div {...fade} className="rounded-2xl bg-white p-6 text-center shadow-lg shadow-slate-200/70"><strong className="font-heading text-4xl text-[#2F6690]">{value}{suffix}</strong><p className="mt-2 text-sm font-semibold text-slate-600">{label}</p></motion.div>;
}

export default function Home() {
  const { t, language } = useLanguage();
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-3">Skip to content</a>
      <Header />
      <main id="main">
        <section id="home" className="relative grid min-h-[60vh] place-items-center overflow-hidden px-4 pt-28 text-white md:min-h-[80vh]">
          <Image src={heroImage} alt="Citadelle Laferrière overlooking the mountains near Milot, Haiti" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#16425B]/85 via-[#2F6690]/70 to-[#81C3D7]/55" />
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-5xl py-24 text-center">
            <p className="mb-5 font-semibold tracking-[0.2em] text-blue-100 uppercase">{t.hero.eyebrow}</p>
            <h1 className="font-heading text-5xl font-black leading-tight md:text-7xl">{t.hero.headline}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">{t.hero.text}</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><a href="#admissions" className="rounded-full bg-white px-7 py-4 font-bold text-[#16425B] shadow-xl transition hover:-translate-y-0.5">{t.hero.cta}</a><a href="#about" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white/10">{t.hero.secondary}</a></div>
          </motion.div>
        </section>

        <section id="about" className="section-pad bg-[#F7F8F5]"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...fade}><p className="font-bold text-[#2F6690]">{t.nav.about}</p><h2 className="mt-3 font-heading text-4xl font-black text-[#16425B] md:text-5xl">{t.about.title}</h2><div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">{t.about.intro.map((p) => <p key={p}>{p}</p>)}</div></motion.div>
          <motion.aside {...fade} className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200"><p className="text-2xl font-semibold leading-10 text-[#16425B]">“{t.about.quote}”</p><p className="mt-5 font-bold text-[#2F6690]">{t.about.quoteBy}</p></motion.aside>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">{t.stats.map((s) => <StatCounter key={s.label} {...s} />)}</div>
        </div></section>

        <section id="programs" className="section-pad"><div className="mx-auto max-w-7xl"><motion.div {...fade} className="max-w-3xl"><p className="font-bold text-[#2F6690]">{t.nav.programs}</p><h2 className="mt-3 font-heading text-4xl font-black text-[#16425B]">{t.programsTitle}</h2><p className="mt-4 text-lg text-slate-600">{t.programsText}</p></motion.div><div className="mt-10 grid gap-5 md:grid-cols-2">{t.programs.map((program) => { const Icon = program.icon; return <motion.article {...fade} key={program.title} className="group rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl"><Icon className="mb-5 size-10 text-[#3A7CA5]" aria-hidden="true" /><h3 className="font-heading text-2xl font-bold text-[#16425B]">{program.title}</h3><p className="mt-3 leading-7 text-slate-600">{program.description}</p></motion.article>; })}</div></div></section>

        <section id="classes" className="section-pad bg-[#F7F8F5]"><div className="mx-auto max-w-7xl"><motion.div {...fade} className="max-w-3xl"><p className="font-bold text-[#2F6690]">{t.nav.classes}</p><h2 className="mt-3 font-heading text-4xl font-black text-[#16425B]">{t.classes.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{t.classes.text}</p></motion.div><div className="mt-10 grid gap-5 lg:grid-cols-3">{openingClasses.map((schoolClass) => <motion.article {...fade} key={schoolClass.title} className="flex min-h-full flex-col rounded-2xl border border-[#D9DCD6] bg-white p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-wide text-[#3A7CA5]">{schoolClass.level}</p><h3 className="mt-2 font-heading text-2xl font-black text-[#16425B]">{schoolClass.title}</h3></div><span className="rounded-full bg-[#81C3D7]/25 px-3 py-1 text-xs font-black text-[#16425B]">2026-2027</span></div><div className="mt-5 rounded-2xl bg-[#16425B] p-4 text-white"><p className="text-sm font-semibold text-white/75">{t.classes.feeLabel}</p><p className="font-heading text-3xl font-black">{schoolClass.fee}</p></div><details open className="group mt-5 rounded-2xl bg-[#F7F8F5] p-4"><summary className="flex cursor-pointer list-none items-center gap-2 font-heading text-lg font-extrabold text-[#16425B]"><WalletCards className="size-5 text-[#2F6690]" />{t.classes.paymentsLabel}</summary><ul className="mt-3 grid gap-2 text-sm font-semibold text-slate-700">{schoolClass.payments.map((payment) => <li key={payment} className="rounded-xl bg-white px-3 py-2">{payment}</li>)}</ul></details><details className="group mt-3 rounded-2xl bg-[#F7F8F5] p-4"><summary className="flex cursor-pointer list-none items-center gap-2 font-heading text-lg font-extrabold text-[#16425B]"><BookOpen className="size-5 text-[#2F6690]" />{t.classes.booksLabel}</summary><ol className="mt-3 space-y-2 pl-5 text-sm leading-6 text-slate-700">{schoolClass.books.map((book) => <li key={book} className="list-decimal">{book}</li>)}</ol></details><details className="group mt-3 rounded-2xl bg-[#F7F8F5] p-4"><summary className="flex cursor-pointer list-none items-center gap-2 font-heading text-lg font-extrabold text-[#16425B]"><ClipboardList className="size-5 text-[#2F6690]" />{t.classes.suppliesLabel}</summary><ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">{schoolClass.supplies.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2F6690]" />{item}</li>)}</ul></details><a href="#admissions" className="mt-5 inline-flex justify-center rounded-full bg-[#16425B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2F6690]">{t.classes.viewLabel}</a></motion.article>)}</div></div></section>

        <section id="life" className="section-pad bg-[#D9DCD6]"><div className="mx-auto max-w-7xl"><motion.div {...fade} className="text-center"><h2 className="font-heading text-4xl font-black text-[#16425B]">{t.galleryTitle}</h2><p className="mx-auto mt-4 max-w-2xl text-slate-700">{t.galleryText}</p></motion.div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{t.gallery.map((caption, i) => <motion.figure {...fade} key={caption} className={`min-h-44 rounded-3xl bg-gradient-to-br ${i % 2 ? "from-[#2F6690] to-[#16425B]" : "from-white to-[#81C3D7]/40"} p-5 shadow-lg shadow-slate-300`}><div className="flex h-full items-end"><figcaption className={`font-bold ${i % 2 ? "text-white" : "text-[#16425B]"}`}>{caption}</figcaption></div></motion.figure>)}</div></div></section>

        <section id="admissions" className="section-pad"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><motion.div {...fade}><p className="font-bold text-[#2F6690]">{t.nav.admissions}</p><h2 className="mt-3 font-heading text-4xl font-black text-[#16425B]">{t.admissions.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{t.admissions.text}</p><ol className="mt-8 space-y-4">{t.admissions.steps.map((step, i) => <li key={step} className="flex items-center gap-4 rounded-2xl bg-[#F7F8F5] p-4"><span className="grid size-10 place-items-center rounded-full bg-[#2F6690] font-bold text-white">{i + 1}</span><span className="font-semibold text-[#16425B]">{step}</span></li>)}</ol></motion.div>
          <motion.form {...fade} onSubmit={submit} className="rounded-3xl bg-[#F7F8F5] p-6 shadow-xl shadow-slate-200"><h3 className="font-heading text-2xl font-bold text-[#16425B]">{t.admissions.formTitle}</h3>{["name", "phone", "email"].map((field) => <label key={field} className="mt-4 block text-sm font-bold text-slate-700">{t.admissions.fields[field as "name" | "phone" | "email"]}<input required={field !== "email"} type={field === "email" ? "email" : "text"} className="mt-2 w-full rounded-xl border border-[#D9DCD6] bg-white px-4 py-3" /></label>)}<label className="mt-4 block text-sm font-bold text-slate-700">{t.admissions.fields.grade}<select className="mt-2 w-full rounded-xl border border-[#D9DCD6] bg-white px-4 py-3"><option>Petite Section</option><option>Moyenne Section</option><option>Grande Section</option><option>1ère Année Fondamentale</option><option>2ème Année Fondamentale</option><option>3ème Année Fondamentale</option><option>4ème Année Fondamentale</option><option>5ème Année Fondamentale</option><option>6ème Année Fondamentale</option></select></label><label className="mt-4 block text-sm font-bold text-slate-700">{t.admissions.fields.message}<textarea rows={4} className="mt-2 w-full rounded-xl border border-[#D9DCD6] bg-white px-4 py-3" /></label>{/* TODO: connect to backend or email service */}<button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#16425B] px-7 py-4 font-bold text-white hover:bg-[#2F6690]"><Send size={18} />{t.admissions.send}</button>{sent && <p role="status" className="mt-4 font-semibold text-[#2F6690]">{t.admissions.success}</p>}</motion.form></div></section>

        <section id="contact" className="section-pad bg-[#F7F8F5]"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><motion.div {...fade}><h2 className="font-heading text-4xl font-black text-[#16425B]">{t.contact.title}</h2><p className="mt-4 text-lg text-slate-600">{t.contact.text}</p><div className="mt-8 grid gap-4"><p><MapPin className="mr-2 inline text-[#2F6690]" />{schoolInfo.address}</p><p><Phone className="mr-2 inline text-[#2F6690]" />{schoolInfo.phone}</p><p><Mail className="mr-2 inline text-[#2F6690]" />{schoolInfo.email}</p><p><Smartphone className="mr-2 inline text-[#2F6690]" />{language === "kr" ? schoolInfo.hoursKr : schoolInfo.hoursFr}</p></div><div className="mt-6 flex gap-3"><a aria-label="Facebook" href={socialLinks.facebook} className="rounded-full bg-white p-3 text-[#16425B]"><FacebookIcon className="size-6" /></a><a aria-label="Instagram" href={socialLinks.instagram} className="rounded-full bg-white p-3 text-[#16425B]"><InstagramIcon className="size-6" /></a><a aria-label="WhatsApp" href={socialLinks.whatsapp} className="rounded-full bg-white p-3 text-[#16425B]"><Phone /></a></div></motion.div><motion.div {...fade} className="grid min-h-80 place-items-center rounded-3xl bg-white p-8 text-center shadow-xl shadow-slate-200"><div><MapPin className="mx-auto mb-4 size-12 text-[#2F6690]" /><p className="font-heading text-2xl font-bold text-[#16425B]">{t.contact.map}</p><p className="mt-2 text-slate-600">19.608° N, 72.214° W</p></div></motion.div></div></section>
      </main>
      <footer className="bg-[#16425B] px-4 py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><strong className="font-heading text-xl">{schoolInfo.name}</strong><p className="text-white/70">{language === "kr" ? schoolInfo.mottoKr : schoolInfo.mottoFr}</p></div><p>© {new Date().getFullYear()} • {t.footer.made}</p></div></footer>
    </>
  );
}
