"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, BrainCircuit, ClipboardCheck, ClipboardList, Dumbbell, Flag, Globe2, GraduationCap, Hourglass, Landmark, LibraryBig, Mail, MapPin, MessageCircle, Palette, Phone, Send, Smartphone, Sprout, UsersRound, WalletCards, X, type LucideIcon } from "lucide-react";
import Image from "next/image";
import type { FormEvent, KeyboardEvent, SVGProps } from "react";
import { useEffect, useRef, useState } from "react";
import cardLogo from "../../assets/cards.jpeg";
import classroomImage from "../../assets/elevesenlasse.png";
import heroImage from "../../assets/hero.jpeg";
import cultureImage from "../../assets/journeeculturelle.png";
import labImage from "../../assets/laboratoire.png";
import libraryImage from "../../assets/lecture.png";
import sportImage from "../../assets/sport.png";
import techImage from "../../assets/tech.png";
import teamworkImage from "../../assets/travialequipe.png";
import celebrationImage from "../../assets/graduate.png";
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

const modernIconBadge = "grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-[#E9C46A] to-[#C99A2E] text-white shadow-lg shadow-[#C99A2E]/25 ring-1 ring-white/70 transition duration-300 group-hover:scale-105 group-hover:rotate-3";
const smallIconBadge = "grid size-10 place-items-center rounded-2xl bg-[#81C3D7]/20 text-[#2F6690] ring-1 ring-[#81C3D7]/35";

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.55 } };
const programIcons = [BrainCircuit, BookOpen, Smartphone, Palette, Dumbbell, Landmark, UsersRound] as const;
const galleryImages = [classroomImage, teamworkImage, cultureImage, labImage, sportImage, libraryImage, celebrationImage, techImage] as const;

const classCycles = [
  { label: "Préscolaire", compactLabel: "Préscol.", classes: openingClasses.slice(0, 3) },
  { label: "Fondamentale I", compactLabel: "Fond. I", classes: openingClasses.slice(3, 6) },
  { label: "Fondamentale II", compactLabel: "Fond. II", classes: openingClasses.slice(6, 9) },
] as const;

function MetricCard({ icon: Icon, value, suffix, label, className }: { icon: LucideIcon; value: number; suffix: string; label: string; className?: string }) {
  return <motion.div {...fade} className={`absolute z-20 w-32 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-xl backdrop-blur sm:w-36 ${className ?? ""}`}><span className="grid size-11 place-items-center rounded-2xl bg-white text-[#C99A2E] shadow-inner ring-1 ring-[#E9C46A]/30"><Icon className="size-6" aria-hidden="true" /></span><strong className="mt-2 block font-heading text-2xl font-black text-[#16425B]">{value}{suffix}</strong><span className="text-xs font-semibold text-slate-600">{label}</span></motion.div>;
}

export default function Home() {
  const { t, language } = useLanguage();
  const [sent, setSent] = useState(false);
  const [selectedClass, setSelectedClass] = useState<(typeof openingClasses)[number] | null>(null);
  const [activeClassCycle, setActiveClassCycle] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeCycle = classCycles[activeClassCycle];
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  const selectClassCycle = (index: number) => setActiveClassCycle((index + classCycles.length) % classCycles.length);
  const handleClassTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") { event.preventDefault(); selectClassCycle(index + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); selectClassCycle(index - 1); }
    if (event.key === "Home") { event.preventDefault(); selectClassCycle(0); }
    if (event.key === "End") { event.preventDefault(); selectClassCycle(classCycles.length - 1); }
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectClassCycle(index); }
  };
  const handleClassTouchEnd = (clientX: number) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - clientX;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) return;
    selectClassCycle(activeClassCycle + (delta > 0 ? 1 : -1));
  };
  useEffect(() => { document.body.classList.toggle("overflow-hidden", Boolean(selectedClass)); return () => document.body.classList.remove("overflow-hidden"); }, [selectedClass]);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-3">Skip to content</a>
      <Header />
      <main id="main">
        <section id="home" className="relative grid min-h-[70svh] place-items-center overflow-hidden px-4 pt-24 text-white sm:pt-28 md:min-h-[80vh]">
          <Image src={heroImage} alt="Citadelle Laferrière overlooking the mountains near Milot, Haiti" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#16425B]/85 via-[#2F6690]/70 to-[#81C3D7]/55" />
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-5xl py-16 text-center sm:py-24">
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[#E9C46A] uppercase sm:mb-5 sm:text-base sm:tracking-[0.2em]">{t.hero.eyebrow}</p>
            <h1 className="font-heading text-4xl font-black leading-tight min-[380px]:text-5xl md:text-7xl">{t.hero.headline}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-blue-50 sm:mt-6 md:text-xl md:leading-8">{t.hero.text}</p>
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
                <h2 className="mt-3 font-heading text-3xl font-black text-[#16425B] sm:text-4xl md:text-5xl">{t.about.title}</h2>
                <div className="mt-6 space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{t.about.intro.map((p, index) => <p key={`about-${index}`}>{p}</p>)}</div>
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
              <span className={smallIconBadge}><LibraryBig className="size-5" aria-hidden="true" /></span>
              <span className={smallIconBadge}><Sprout className="size-5" aria-hidden="true" /></span>
              <span className={smallIconBadge}><Flag className="size-5" aria-hidden="true" /></span>
              <span className={smallIconBadge}><Globe2 className="size-5" aria-hidden="true" /></span>
            </div>
          </div>
        </section>

        <section id="programs" className="section-pad"><div className="mx-auto max-w-7xl"><motion.div {...fade} className="max-w-3xl"><p className="font-bold text-[#2F6690]">{t.nav.programs}</p><h2 className="mt-3 font-heading text-3xl font-black text-[#16425B] sm:text-4xl">{t.programsTitle}</h2><p className="mt-4 text-lg text-slate-600">{t.programsText}</p></motion.div><div className="mt-10 grid gap-5 md:grid-cols-2">{t.programs.map((program, index) => { const ProgramIcon = programIcons[index] ?? BookOpen; return <article key={`program-${index}-${program.title}`} className="group rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl"><span className={`${modernIconBadge} mb-5`}><ProgramIcon className="size-6" aria-hidden="true" /></span><h3 className="font-heading text-2xl font-bold text-[#16425B]">{program.title}</h3><p className="mt-3 leading-7 text-slate-600">{program.description}</p></article>; })}</div></div></section>

        <section id="classes" className="section-pad bg-[#F7F8F5]">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fade} className="max-w-3xl">
              <p className="font-bold text-[#2F6690]">{t.nav.classes}</p>
              <h2 className="mt-3 font-heading text-3xl font-black text-[#16425B] sm:text-4xl">{t.classes.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{t.classes.text}</p>
            </motion.div>
            <div className="mt-8 border-b border-[#D9DCD6]" role="tablist" aria-label="Cycles des classes ouvertes">
              <div className="flex gap-2 overflow-x-auto">
                {classCycles.map((cycle, index) => {
                  const isActive = activeClassCycle === index;
                  return (
                    <button
                      key={cycle.label}
                      id={`class-cycle-tab-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`class-cycle-panel-${index}`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => selectClassCycle(index)}
                      onKeyDown={(event) => handleClassTabKeyDown(event, index)}
                      className={`relative shrink-0 rounded-t-2xl px-4 py-3 text-sm font-extrabold transition duration-300 sm:px-6 sm:text-base ${isActive ? "bg-[#16425B] text-white shadow-lg shadow-[#16425B]/15" : "text-slate-500 hover:text-[#16425B]"}`}
                    >
                      <span className="sm:hidden">{cycle.compactLabel}</span>
                      <span className="hidden sm:inline">{cycle.label}</span>
                      <span className={`absolute inset-x-3 -bottom-px h-1 rounded-full bg-[#2F6690] transition-all duration-300 ease-out ${isActive ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </div>
            <div
              className="mt-6 overflow-hidden"
              onTouchStart={(event) => { touchStartX.current = event.changedTouches[0]?.clientX ?? null; }}
              onTouchEnd={(event) => handleClassTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeCycle.label}
                  id={`class-cycle-panel-${activeClassCycle}`}
                  role="tabpanel"
                  aria-labelledby={`class-cycle-tab-${activeClassCycle}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
                >
                  {activeCycle.classes.map((schoolClass, classIndex) => (
                    <article key={`class-${activeClassCycle}-${classIndex}-${schoolClass.title}`} className="relative flex h-full min-h-full flex-col overflow-hidden rounded-2xl border border-[#D9DCD6] bg-white shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative bg-[#16425B] p-5 text-white sm:p-6">
                        <Image src={cardLogo} alt="" width={92} height={92} className="float-right ml-3 mb-3 size-16 rounded-full border-4 border-white/20 object-cover opacity-90 sm:absolute sm:right-4 sm:top-4 sm:mb-0 sm:ml-0 sm:size-20" />
                        <p className="text-xs font-bold uppercase tracking-wide text-[#E9C46A] sm:pr-24 sm:text-sm">{schoolClass.level}</p>
                        <h3 className="mt-3 max-w-full clear-none font-heading text-2xl font-black leading-tight sm:max-w-[14rem] sm:text-3xl">{schoolClass.title}</h3>
                        <p className="mt-4 text-sm font-bold text-white/75">2026-2027</p>
                      </div>

                      <div className="flex flex-1 flex-col gap-5 p-6">
                        <div className="rounded-2xl bg-[#81C3D7]/20 p-4">
                          <p className="text-sm font-bold text-[#2F6690]">{t.classes.feeLabel}</p>
                          <p className="font-heading text-3xl font-black text-[#16425B] sm:text-4xl">{schoolClass.fee}</p>
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
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {selectedClass && (
          <div className="fixed inset-0 z-[70] overflow-y-auto bg-[#16425B]/80 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-6" role="dialog" aria-modal="true" aria-labelledby="class-modal-title">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl">
              <div className="relative bg-[#16425B] p-5 text-white sm:p-6 md:p-8">
                <Image src={cardLogo} alt="" width={116} height={116} className="float-right ml-3 mb-3 size-16 rounded-full border-4 border-white/20 object-cover opacity-90 sm:absolute sm:right-8 sm:top-8 sm:mb-0 sm:ml-0 sm:size-24" />
                <p className="pr-12 text-xs font-bold uppercase tracking-wide text-[#E9C46A] sm:pr-28 sm:text-sm">{selectedClass.level}</p>
                <h3 id="class-modal-title" className="mt-3 max-w-2xl font-heading text-3xl font-black leading-tight sm:text-4xl md:text-5xl">{selectedClass.title}</h3>
                <p className="mt-3 font-bold text-white/75">Année scolaire 2026-2027</p>
                <button type="button" suppressHydrationWarning onClick={() => setSelectedClass(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-[#16425B] shadow-lg transition hover:bg-[#81C3D7]" aria-label="Close class details"><X /></button>
              </div>

              <div className="grid gap-5 p-4 sm:p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8">
                <aside className="space-y-5">
                  <div className="rounded-2xl bg-[#81C3D7]/20 p-5">
                    <p className="text-sm font-bold text-[#2F6690]">{t.classes.feeLabel}</p>
                    <p className="font-heading text-3xl font-black text-[#16425B] sm:text-4xl">{selectedClass.fee}</p>
                  </div>
                  <section className="rounded-2xl border border-[#D9DCD6] p-5">
                    <h4 className="flex items-center gap-2 font-heading text-xl font-extrabold text-[#16425B]"><span className="grid size-9 place-items-center rounded-xl bg-[#81C3D7]/20 text-[#2F6690]"><WalletCards className="size-5" /></span>{t.classes.paymentsLabel}</h4>
                    <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
                      {selectedClass.payments.map((payment, index) => <li key={`payment-${index}`} className="rounded-xl bg-[#F7F8F5] px-3 py-2">{payment}</li>)}
                    </ul>
                  </section>
                </aside>

                <div className="grid gap-6">
                  <section className="rounded-2xl border border-[#D9DCD6] p-5">
                    <h4 className="flex items-center gap-2 font-heading text-xl font-extrabold text-[#16425B]"><span className="grid size-9 place-items-center rounded-xl bg-[#81C3D7]/20 text-[#2F6690]"><BookOpen className="size-5" /></span>{t.classes.booksLabel}</h4>
                    <ol className="mt-4 columns-1 gap-8 space-y-2 pl-5 text-sm leading-6 text-slate-700 md:columns-2">
                      {selectedClass.books.map((book, index) => <li key={`book-${index}`} className="break-inside-avoid list-decimal">{book}</li>)}
                    </ol>
                  </section>

                  <section className="rounded-2xl border border-[#D9DCD6] p-5">
                    <h4 className="flex items-center gap-2 font-heading text-xl font-extrabold text-[#16425B]"><span className="grid size-9 place-items-center rounded-xl bg-[#81C3D7]/20 text-[#2F6690]"><ClipboardList className="size-5" /></span>{t.classes.suppliesLabel}</h4>
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

        <section id="life" className="section-pad bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fade} className="text-center">
              <h2 className="font-heading text-3xl font-black text-[#16425B] sm:text-4xl">{t.galleryTitle}</h2>
              <div className="mx-auto mt-4 h-0.5 w-[60px] rounded-full bg-[#2F6690]" aria-hidden="true" />
              <p className="mx-auto mt-4 max-w-2xl text-slate-700">{t.galleryText}</p>
            </motion.div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.gallery.map((caption, i) => (
                <motion.figure
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={`gallery-${i}`}
                  className="group relative min-h-[240px] overflow-hidden rounded-xl bg-slate-200 shadow-md shadow-slate-200 transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-lg"
                >
                  <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-slate-500" aria-hidden="true">Photo à venir</div>
                  <Image src={galleryImages[i]} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-5 pt-14 text-base font-semibold text-white">{caption}</figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section id="admissions" className="section-pad"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><motion.div {...fade}><p className="font-bold text-[#2F6690]">{t.nav.admissions}</p><h2 className="mt-3 font-heading text-3xl font-black text-[#16425B] sm:text-4xl">{t.admissions.title}</h2><p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{t.admissions.text}</p><ol className="mt-8 space-y-4">{t.admissions.steps.map((step, i) => <li key={`step-${i}`} className="flex items-center gap-4 rounded-2xl bg-[#F7F8F5] p-4"><span className="grid size-10 place-items-center rounded-full bg-[#2F6690] font-bold text-white">{i + 1}</span><span className="font-semibold text-[#16425B]">{step}</span></li>)}</ol></motion.div>
          <motion.form {...fade} onSubmit={submit} className="rounded-3xl bg-[#F7F8F5] p-5 shadow-xl shadow-slate-200 sm:p-6"><h3 className="font-heading text-2xl font-bold text-[#16425B]">{t.admissions.formTitle}</h3>{["name", "phone", "email"].map((field) => <label key={field} className="mt-4 block text-sm font-bold text-slate-700">{t.admissions.fields[field as "name" | "phone" | "email"]}<input suppressHydrationWarning required={field !== "email"} type={field === "email" ? "email" : "text"} className="mt-2 w-full rounded-xl border border-[#D9DCD6] bg-white px-4 py-3" /></label>)}<label className="mt-4 block text-sm font-bold text-slate-700">{t.admissions.fields.grade}<select suppressHydrationWarning className="mt-2 w-full rounded-xl border border-[#D9DCD6] bg-white px-4 py-3"><option>Petite Section</option><option>Moyenne Section</option><option>Grande Section</option><option>1ère Année Fondamentale</option><option>2ème Année Fondamentale</option><option>3ème Année Fondamentale</option><option>4ème Année Fondamentale</option><option>5ème Année Fondamentale</option><option>6ème Année Fondamentale</option></select></label><label className="mt-4 block text-sm font-bold text-slate-700">{t.admissions.fields.message}<textarea suppressHydrationWarning rows={4} className="mt-2 w-full rounded-xl border border-[#D9DCD6] bg-white px-4 py-3" /></label>{/* TODO: connect to backend or email service */}<button type="submit" suppressHydrationWarning className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#16425B] px-7 py-4 font-bold text-white hover:bg-[#2F6690]"><Send size={18} />{t.admissions.send}</button>{sent && <p role="status" className="mt-4 font-semibold text-[#2F6690]">{t.admissions.success}</p>}</motion.form></div></section>

        <section id="contact" className="section-pad bg-[#F7F8F5]"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><motion.div {...fade}><h2 className="font-heading text-3xl font-black text-[#16425B] sm:text-4xl">{t.contact.title}</h2><p className="mt-4 text-lg text-slate-600">{t.contact.text}</p><div className="mt-8 grid gap-4"><p><span className="mr-3 inline-grid size-9 place-items-center rounded-xl bg-white text-[#2F6690] shadow-sm"><MapPin className="size-5" /></span>{schoolInfo.address}</p><p><span className="mr-3 inline-grid size-9 place-items-center rounded-xl bg-white text-[#2F6690] shadow-sm"><Phone className="size-5" /></span>{schoolInfo.phone}</p><p><span className="mr-3 inline-grid size-9 place-items-center rounded-xl bg-white text-[#2F6690] shadow-sm"><Mail className="size-5" /></span>{schoolInfo.email}</p><p><span className="mr-3 inline-grid size-9 place-items-center rounded-xl bg-white text-[#2F6690] shadow-sm"><Smartphone className="size-5" /></span>{language === "kr" ? schoolInfo.hoursKr : schoolInfo.hoursFr}</p></div><div className="mt-6 flex gap-3"><a aria-label="Facebook" href={socialLinks.facebook} className="rounded-2xl bg-white p-3 text-[#16425B] shadow-sm transition hover:-translate-y-0.5 hover:text-[#2F6690] hover:shadow-md"><FacebookIcon className="size-5" /></a><a aria-label="Instagram" href={socialLinks.instagram} className="rounded-2xl bg-white p-3 text-[#16425B] shadow-sm transition hover:-translate-y-0.5 hover:text-[#2F6690] hover:shadow-md"><InstagramIcon className="size-5" /></a><a aria-label="WhatsApp" href={socialLinks.whatsapp} className="rounded-2xl bg-white p-3 text-[#16425B] shadow-sm transition hover:-translate-y-0.5 hover:text-[#2F6690] hover:shadow-md"><MessageCircle className="size-5" /></a></div></motion.div><motion.div {...fade} className="grid min-h-80 place-items-center rounded-3xl bg-white p-8 text-center shadow-xl shadow-slate-200"><div><span className="mx-auto mb-4 grid size-16 place-items-center rounded-3xl bg-gradient-to-br from-[#81C3D7] to-[#2F6690] text-white shadow-lg shadow-[#2F6690]/20"><MapPin className="size-8" /></span><p className="font-heading text-2xl font-bold text-[#16425B]">{t.contact.map}</p><p className="mt-2 text-slate-600">19.608° N, 72.214° W</p></div></motion.div></div></section>
      </main>
      <footer className="bg-[#16425B] px-4 py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><strong className="font-heading text-xl">{schoolInfo.name}</strong><p className="text-white/70">{language === "kr" ? schoolInfo.mottoKr : schoolInfo.mottoFr}</p></div><p>© {new Date().getFullYear()} • {t.footer.made}</p></div></footer>
    </>
  );
}
