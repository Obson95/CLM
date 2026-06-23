"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, ClipboardCheck, ClipboardList, Dumbbell, Flag, Globe, GraduationCap, Hourglass, Landmark, Library, Mail, MapPin, Palette, Phone, Send, Smartphone, TreeDeciduous, Users, WalletCards, X, type LucideIcon } from "lucide-react";
import Image from "next/image";
import type { FormEvent, SVGProps } from "react";
import { useState } from "react";
import cardLogo from "../../assets/cards.jpeg";
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
const programIcons = [Brain, BookOpen, Smartphone, Palette, Dumbbell, Landmark, Users] as const;

function MetricCard({ icon: Icon, value, suffix, label, className }: { icon: LucideIcon; value: number; suffix: string; label: string; className?: string }) {
  return <motion.div {...fade} className={`absolute z-20 w-32 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-xl backdrop-blur sm:w-36 ${className ?? ""}`}><Icon className="size-6 text-[#C99A2E]" aria-hidden="true" /><strong className="mt-2 block font-heading text-2xl font-black text-[#16425B]">{value}{suffix}</strong><span className="text-xs font-semibold text-slate-600">{label}</span></motion.div>;
}

export default function Home() {
  const { t, language } = useLanguage();
  const [sent, setSent] = useState(false);
  const [selectedClass, setSelectedClass] = useState<(typeof openingClasses)[number] | null>(null);
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
            <p className="mb-5 font-semibold tracking-[0.2em] text-[#E9C46A] uppercase">{t.hero.eyebrow}</p>
            <h1 className="font-heading text-5xl font-black leading-tight md:text-7xl">{t.hero.headline}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-50 md:text-xl">{t.hero.text}</p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><a href="#admissions" className="rounded-full bg-[#E9C46A] px-7 py-4 font-bold text-[#16425B] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#E9C46A]/90">{t.hero.cta}</a><a href="#about" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white/10">{t.hero.secondary}</a></div>
          </motion.div>
        </section>

        <section id="about" className="section-pad relative overflow-hidden bg-[#F7F8F5]">
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-12 size-80 rounded-full bg-[#81C3D7]/30 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-4 size-96 rounded-full bg-[#E9C46A]/25 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div {...fade}>
                <p className="font-bold text-[#2F6690]">{t.nav.about}</p>
                <h2 className="mt-3 font-heading text-4xl font-black text-[#16425B] md:text-5xl">{t.about.title}</h2>
                <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">{t.about.intro.map((p, index) => <p key={`about-${index}`}>{p}</p>)}</div>
              </motion.div>
              <motion.div {...fade} className="relative mx-auto h-[36rem] w-full max-w-md sm:h-[31rem] sm:max-w-lg lg:h-[30rem]">
                <div className="absolute left-1/2 top-[40%] z-10 grid size-44 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border border-white/60 bg-white/70 text-center shadow-2xl backdrop-blur sm:top-1/2 sm:size-52 md:size-56">
                  <Image src={cardLogo} alt="" aria-hidden="true" fill sizes="224px" className="object-cover opacity-10" />
                  <div className="relative px-4">
                    <strong className="font-heading text-5xl font-black text-[#16425B]">{t.stats[1].value}{t.stats[1].suffix}</strong>
                    <p className="mt-1 text-sm font-bold text-slate-600">{t.stats[1].label}</p>
                  </div>
                </div>
                <MetricCard icon={Hourglass} {...t.stats[0]} className="right-4 top-0 sm:right-8 sm:top-5" />
                <MetricCard icon={GraduationCap} {...t.stats[2]} className="bottom-32 left-4 sm:bottom-16 sm:left-8 lg:bottom-14 lg:left-2" />
                <MetricCard icon={ClipboardCheck} {...t.stats[3]} className="bottom-0 right-4 sm:bottom-8 sm:right-4 lg:bottom-4" />
              </motion.div>
            </div>
            <div className="mt-16 flex items-center justify-center gap-10 text-[#2F6690] sm:gap-14">
              <Library className="size-8" aria-hidden="true" />
              <TreeDeciduous className="size-8" aria-hidden="true" />
              <Flag className="size-8" aria-hidden="true" />
              <Globe className="size-8" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="programs" className="section-pad"><div className="mx-auto max-w-7xl"><motion.div {...fade} className="max-w-3xl"><p className="font-bold text-[#2F6690]">{t.nav.programs}</p><h2 className="mt-3 font-heading text-4xl font-black text-[#16425B]">{t.programsTitle}</h2><p className="mt-4 text-lg text-slate-600">{t.programsText}</p></motion.div><div className="mt-10 grid gap-5 md:grid-cols-2">{t.programs.map((program, index) => { const ProgramIcon = programIcons[index] ?? BookOpen; return <article key={`program-${index}-${program.title}`} className="group rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl"><ProgramIcon className="mb-5 size-10 text-[#C99A2E]" aria-hidden="true" /><h3 className="font-heading text-2xl font-bold text-[#16425B]">{program.title}</h3><p className="mt-3 leading-7 text-slate-600">{program.description}</p></article>; })}</div></div></section>

        <section id="classes" className="section-pad bg-[#F7F8F5]">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fade} className="max-w-3xl">
              <p className="font-bold text-[#2F6690]">{t.nav.classes}</p>
              <h2 className="mt-3 font-heading text-4xl font-black text-[#16425B]">{t.classes.title}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{t.classes.text}</p>
            </motion.div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {openingClasses.map((schoolClass, classIndex) => (
                <article key={`class-${classIndex}-${schoolClass.title}`} className="relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-[#D9DCD6] bg-white shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative bg-[#16425B] p-6 text-white">
                    <Image src={cardLogo} alt="" width={92} height={92} className="absolute right-4 top-4 size-20 rounded-full border-4 border-white/20 object-cover opacity-90" />
                    <p className="pr-24 text-sm font-bold uppercase tracking-wide text-[#E9C46A]">{schoolClass.level}</p>
                    <h3 className="mt-3 max-w-[14rem] font-heading text-3xl font-black leading-tight">{schoolClass.title}</h3>
                    <p className="mt-4 text-sm font-bold text-white/75">2026-2027</p>
                  </div>

                  <div className="flex flex-1 flex-col gap-5 p-6">
                    <div className="rounded-2xl bg-[#81C3D7]/20 p-4">
                      <p className="text-sm font-bold text-[#2F6690]">{t.classes.feeLabel}</p>
                      <p className="font-heading text-4xl font-black text-[#16425B]">{schoolClass.fee}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-700">
                      <span className="rounded-xl bg-[#F7F8F5] px-2 py-3">{schoolClass.payments.length} {t.classes.paymentsLabel}</span>
                      <span className="rounded-xl bg-[#F7F8F5] px-2 py-3">{schoolClass.books.length} {t.classes.booksLabel}</span>
                      <span className="rounded-xl bg-[#F7F8F5] px-2 py-3">{schoolClass.supplies.length} {t.classes.suppliesLabel}</span>
                    </div>
                    <button type="button" suppressHydrationWarning onClick={() => setSelectedClass(schoolClass)} className="mt-auto inline-flex justify-center rounded-full bg-[#16425B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2F6690]">{t.classes.openLabel}</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {selectedClass && (
          <div className="fixed inset-0 z-[70] overflow-y-auto bg-[#16425B]/80 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="class-modal-title">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div className="relative bg-[#16425B] p-6 text-white md:p-8">
                <Image src={cardLogo} alt="" width={116} height={116} className="absolute right-8 top-8 size-24 rounded-full border-4 border-white/20 object-cover opacity-90" />
                <p className="pr-28 text-sm font-bold uppercase tracking-wide text-[#E9C46A]">{selectedClass.level}</p>
                <h3 id="class-modal-title" className="mt-3 max-w-2xl font-heading text-4xl font-black leading-tight md:text-5xl">{selectedClass.title}</h3>
                <p className="mt-3 font-bold text-white/75">Année scolaire 2026-2027</p>
                <button type="button" suppressHydrationWarning onClick={() => setSelectedClass(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-[#16425B] shadow-lg transition hover:bg-[#81C3D7]" aria-label="Close class details"><X /></button>
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8">
                <aside className="space-y-5">
                  <div className="rounded-2xl bg-[#81C3D7]/20 p-5">
                    <p className="text-sm font-bold text-[#2F6690]">{t.classes.feeLabel}</p>
                    <p className="font-heading text-4xl font-black text-[#16425B]">{selectedClass.fee}</p>
                  </div>
                  <section className="rounded-2xl border border-[#D9DCD6] p-5">
                    <h4 className="flex items-center gap-2 font-heading text-xl font-extrabold text-[#16425B]"><WalletCards className="size-5 text-[#2F6690]" />{t.classes.paymentsLabel}</h4>
                    <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
                      {selectedClass.payments.map((payment, index) => <li key={`payment-${index}`} className="rounded-xl bg-[#F7F8F5] px-3 py-2">{payment}</li>)}
                    </ul>
                  </section>
                </aside>

                <div className="grid gap-6">
                  <section className="rounded-2xl border border-[#D9DCD6] p-5">
                    <h4 className="flex items-center gap-2 font-heading text-xl font-extrabold text-[#16425B]"><BookOpen className="size-5 text-[#2F6690]" />{t.classes.booksLabel}</h4>
                    <ol className="mt-4 columns-1 gap-8 space-y-2 pl-5 text-sm leading-6 text-slate-700 md:columns-2">
                      {selectedClass.books.map((book, index) => <li key={`book-${index}`} className="break-inside-avoid list-decimal">{book}</li>)}
                    </ol>
                  </section>

                  <section className="rounded-2xl border border-[#D9DCD6] p-5">
                    <h4 className="flex items-center gap-2 font-heading text-xl font-extrabold text-[#16425B]"><ClipboardList className="size-5 text-[#2F6690]" />{t.classes.suppliesLabel}</h4>
                    <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 md:grid-cols-2">
                      {selectedClass.supplies.map((item, index) => <li key={`supply-${index}`} className="flex gap-2 rounded-xl bg-[#F7F8F5] px-3 py-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2F6690]" />{item}</li>)}
                    </ul>
                  </section>

                  <a href="#admissions" onClick={() => setSelectedClass(null)} className="inline-flex justify-center rounded-full bg-[#16425B] px-6 py-4 font-bold text-white transition hover:bg-[#2F6690]">{t.classes.viewLabel}</a>
                </div>
              </div>
            </div>
          </div>
        )}

        <section id="life" className="section-pad bg-[#D9DCD6]"><div className="mx-auto max-w-7xl"><motion.div {...fade} className="text-center"><h2 className="font-heading text-4xl font-black text-[#16425B]">{t.galleryTitle}</h2><p className="mx-auto mt-4 max-w-2xl text-slate-700">{t.galleryText}</p></motion.div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{t.gallery.map((caption, i) => <motion.figure {...fade} key={`gallery-${i}`} className={`min-h-44 rounded-3xl bg-gradient-to-br ${i % 2 ? "from-[#2F6690] to-[#16425B]" : "from-white to-[#81C3D7]/40"} p-5 shadow-lg shadow-slate-300`}><div className="flex h-full items-end"><figcaption className={`font-bold ${i % 2 ? "text-white" : "text-[#16425B]"}`}>{caption}</figcaption></div></motion.figure>)}</div></div></section>

        <section id="admissions" className="section-pad"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><motion.div {...fade}><p className="font-bold text-[#2F6690]">{t.nav.admissions}</p><h2 className="mt-3 font-heading text-4xl font-black text-[#16425B]">{t.admissions.title}</h2><p className="mt-4 text-lg leading-8 text-slate-600">{t.admissions.text}</p><ol className="mt-8 space-y-4">{t.admissions.steps.map((step, i) => <li key={`step-${i}`} className="flex items-center gap-4 rounded-2xl bg-[#F7F8F5] p-4"><span className="grid size-10 place-items-center rounded-full bg-[#2F6690] font-bold text-white">{i + 1}</span><span className="font-semibold text-[#16425B]">{step}</span></li>)}</ol></motion.div>
          <motion.form {...fade} onSubmit={submit} className="rounded-3xl bg-[#F7F8F5] p-6 shadow-xl shadow-slate-200"><h3 className="font-heading text-2xl font-bold text-[#16425B]">{t.admissions.formTitle}</h3>{["name", "phone", "email"].map((field) => <label key={field} className="mt-4 block text-sm font-bold text-slate-700">{t.admissions.fields[field as "name" | "phone" | "email"]}<input suppressHydrationWarning required={field !== "email"} type={field === "email" ? "email" : "text"} className="mt-2 w-full rounded-xl border border-[#D9DCD6] bg-white px-4 py-3" /></label>)}<label className="mt-4 block text-sm font-bold text-slate-700">{t.admissions.fields.grade}<select suppressHydrationWarning className="mt-2 w-full rounded-xl border border-[#D9DCD6] bg-white px-4 py-3"><option>Petite Section</option><option>Moyenne Section</option><option>Grande Section</option><option>1ère Année Fondamentale</option><option>2ème Année Fondamentale</option><option>3ème Année Fondamentale</option><option>4ème Année Fondamentale</option><option>5ème Année Fondamentale</option><option>6ème Année Fondamentale</option></select></label><label className="mt-4 block text-sm font-bold text-slate-700">{t.admissions.fields.message}<textarea suppressHydrationWarning rows={4} className="mt-2 w-full rounded-xl border border-[#D9DCD6] bg-white px-4 py-3" /></label>{/* TODO: connect to backend or email service */}<button type="submit" suppressHydrationWarning className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#16425B] px-7 py-4 font-bold text-white hover:bg-[#2F6690]"><Send size={18} />{t.admissions.send}</button>{sent && <p role="status" className="mt-4 font-semibold text-[#2F6690]">{t.admissions.success}</p>}</motion.form></div></section>

        <section id="contact" className="section-pad bg-[#F7F8F5]"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><motion.div {...fade}><h2 className="font-heading text-4xl font-black text-[#16425B]">{t.contact.title}</h2><p className="mt-4 text-lg text-slate-600">{t.contact.text}</p><div className="mt-8 grid gap-4"><p><MapPin className="mr-2 inline text-[#2F6690]" />{schoolInfo.address}</p><p><Phone className="mr-2 inline text-[#2F6690]" />{schoolInfo.phone}</p><p><Mail className="mr-2 inline text-[#2F6690]" />{schoolInfo.email}</p><p><Smartphone className="mr-2 inline text-[#2F6690]" />{language === "kr" ? schoolInfo.hoursKr : schoolInfo.hoursFr}</p></div><div className="mt-6 flex gap-3"><a aria-label="Facebook" href={socialLinks.facebook} className="rounded-full bg-white p-3 text-[#16425B]"><FacebookIcon className="size-6" /></a><a aria-label="Instagram" href={socialLinks.instagram} className="rounded-full bg-white p-3 text-[#16425B]"><InstagramIcon className="size-6" /></a><a aria-label="WhatsApp" href={socialLinks.whatsapp} className="rounded-full bg-white p-3 text-[#16425B]"><Phone /></a></div></motion.div><motion.div {...fade} className="grid min-h-80 place-items-center rounded-3xl bg-white p-8 text-center shadow-xl shadow-slate-200"><div><MapPin className="mx-auto mb-4 size-12 text-[#2F6690]" /><p className="font-heading text-2xl font-bold text-[#16425B]">{t.contact.map}</p><p className="mt-2 text-slate-600">19.608° N, 72.214° W</p></div></motion.div></div></section>
      </main>
      <footer className="bg-[#16425B] px-4 py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><strong className="font-heading text-xl">{schoolInfo.name}</strong><p className="text-white/70">{language === "kr" ? schoolInfo.mottoKr : schoolInfo.mottoFr}</p></div><p>© {new Date().getFullYear()} • {t.footer.made}</p></div></footer>
    </>
  );
}
