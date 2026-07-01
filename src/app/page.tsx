"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, BookOpen, BrainCircuit, ClipboardCheck, ClipboardList, Dumbbell, Flag, Globe2, GraduationCap, HeartHandshake, Hourglass, Landmark, LibraryBig, Mail, MapPin, MessageCircle, Palette, Phone, Send, ShieldCheck, Smartphone, Sprout, UsersRound, WalletCards, X, type LucideIcon } from "lucide-react";
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
import arslinSalomonImage from "../../assets/staff/Arslin Salomon.jpg";
import berniceSaintFleurImage from "../../assets/staff/Bernice Saint-Fleur.jpg";
import brunoSalomonImage from "../../assets/staff/Bruno Salomon.jpg";
import edouardFilsAimeImage from "../../assets/staff/Edouard Fils-Aime.jpg";
import obertinSaintFleurImage from "../../assets/staff/Obertin Saint-Fleur .jpg";
import obsnicaSaintFleurImage from "../../assets/staff/Obsnica Saint-Fleur.jpg";
import obsonSaintFleurImage from "../../assets/staff/Obson Saint-Fleur.jpg";
import quettyBlaiseImage from "../../assets/staff/Quetty Blaise.jpg";
import salomonDesamoursImage from "../../assets/staff/Salomon Desamours.jpg";
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

const modernIconBadge = "grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[#0B3D5C] to-[#052E46] text-white shadow-lg shadow-[#0B3D5C]/20 ring-1 ring-white/70 transition duration-300 group-hover:scale-105 group-hover:rotate-3 group-even:from-[#E5AD32] group-even:to-[#B8790E]";
const smallIconBadge = "flex items-center gap-3 rounded-2xl bg-white/75 px-4 py-3 text-[#0B3D5C] shadow-sm ring-1 ring-[#E5AD32]/20 transition hover:-translate-y-1 hover:shadow-md";
const heroFeatures = [
  { icon: BookOpen, title: "Excellence académique", text: "Enseignement rigoureux" },
  { icon: UsersRound, title: "Valeurs et discipline", text: "Respect, intégrité, responsabilité" },
  { icon: Sprout, title: "Ancrés dans nos racines", text: "Fiers de notre culture" },
  { icon: Globe2, title: "Ouverts sur le monde", text: "Préparés pour l’avenir" },
] as const;
const values = [
  { icon: ShieldCheck, label: "Discipline" },
  { icon: LibraryBig, label: "Savoir" },
  { icon: Landmark, label: "Culture" },
  { icon: HeartHandshake, label: "Service" },
] as const;

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.55 } };
const programIcons = [BrainCircuit, BookOpen, Smartphone, Palette, Dumbbell, UsersRound] as const;
const galleryImages = [classroomImage, teamworkImage, cultureImage, labImage, sportImage, libraryImage, celebrationImage, techImage] as const;
const staffImages = [
  arslinSalomonImage,
  brunoSalomonImage,
  quettyBlaiseImage,
  obsnicaSaintFleurImage,
  salomonDesamoursImage,
  obsonSaintFleurImage,
  obertinSaintFleurImage,
  berniceSaintFleurImage,
  edouardFilsAimeImage,
] as const;
const staffNames = [
  "Arslin Salomon",
  "Bruno Salomon",
  "Quetty Blaise",
  "Obsnica Saint-Fleur",
  "Salomon Desamours",
  "Obson Saint-Fleur",
  "Obertin Saint-Fleur",
  "Bernice Saint-Fleur",
  "Edouard Fils-Aime",
] as const;

const classCycles = [
  { label: "Préscolaire", compactLabel: "Préscol.", classes: openingClasses.slice(0, 3) },
  { label: "Fondamentale I", compactLabel: "Fond. I", classes: openingClasses.slice(3, 6) },
  { label: "Fondamentale II", compactLabel: "Fond. II", classes: openingClasses.slice(6, 9) },
] as const;

function MetricCard({ icon: Icon, value, suffix, label, className }: { icon: LucideIcon; value: number; suffix: string; label: string; className?: string }) {
  return <motion.div {...fade} className={`absolute z-20 w-32 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-[#0B3D5C]/10 backdrop-blur sm:w-36 ${className ?? ""}`}><Icon className="mb-2 size-7 text-[#D79B16]" aria-hidden="true" /><strong className="block font-heading text-2xl font-black text-[#0B3D5C]">{value}{suffix}</strong><span className="text-xs font-extrabold leading-tight text-slate-600">{label}</span></motion.div>;
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
        <section id="home" className="relative overflow-hidden text-white">
          <div className="relative flex min-h-svh flex-col justify-center px-4 pb-16 pt-28 sm:min-h-[620px] sm:pb-20 sm:pt-32 md:min-h-[680px] md:pb-36">
            <Image src={heroImage} alt="Citadelle Laferrière overlooking the mountains near Milot, Haiti" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#082F49]/92 via-[#0B3D5C]/66 to-[#0B3D5C]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/65 via-transparent to-transparent" />
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-7xl">
              <div className="max-w-3xl text-left">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#E5AD32] sm:mb-5 sm:text-sm sm:tracking-[0.28em] md:text-base md:tracking-[0.34em]">{t.hero.eyebrow}</p>
                <h1 className="font-heading text-3xl font-black leading-[1.08] tracking-tight min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{t.hero.headline}</h1>
                <p className="mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-blue-50 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">{t.hero.text}</p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                  <a href="#admissions" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E5AD32] px-6 py-3.5 text-sm font-extrabold text-[#0B3D5C] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#f0bf4a] sm:px-7 sm:py-4 sm:text-base"><GraduationCap className="size-5" aria-hidden="true" />{t.hero.cta}</a>
                  <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20 sm:px-7 sm:py-4 sm:text-base"><Send className="size-5 text-[#E5AD32]" aria-hidden="true" />{t.hero.secondary}</a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative z-20 mx-auto -mt-24 hidden max-w-6xl px-4 pb-4 md:block">
            <div className="grid grid-cols-4 gap-4 rounded-2xl border border-white/20 bg-[#07314B]/82 px-7 py-5 shadow-2xl shadow-[#0B3D5C]/30 backdrop-blur-xl">
              {heroFeatures.map(({ icon: Icon, title, text }) => <div key={title} className="group flex items-center gap-4 rounded-xl p-2 transition hover:bg-white/10"><Icon className="size-9 shrink-0 text-[#E5AD32] transition group-hover:scale-110" strokeWidth={1.8} aria-hidden="true" /><div><h3 className="text-sm font-extrabold">{title}</h3><p className="text-sm text-white/90">{text}</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad relative overflow-hidden border-b border-[#E5AD32]/20 bg-[#FFFDF8]">
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-12 size-80 rounded-full bg-[#81C3D7]/30 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-4 size-96 rounded-full bg-[#E9C46A]/25 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div {...fade}>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D79B16]">{t.nav.about}</p>
                <h2 className="mt-3 font-heading text-3xl font-black text-[#0B3D5C] sm:text-4xl md:text-5xl">{t.about.title}</h2>
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
            <div className="mt-12 grid grid-cols-2 gap-4 text-[#0B3D5C] sm:flex sm:flex-wrap sm:items-center sm:gap-7">
              {values.map(({ icon: Icon, label }) => <span key={label} className={smallIconBadge}><Icon className="size-5 text-[#7DA4BD]" aria-hidden="true" /><span className="text-sm font-extrabold">{label}</span></span>)}
            </div>
          </div>
        </section>

        <section id="programs" className="border-b border-[#E5AD32]/20 bg-[#FAF8F2] px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><motion.div {...fade} className="mx-auto max-w-3xl text-center"><h2 className="font-heading text-3xl font-black text-[#0B3D5C] sm:text-5xl">{t.programsTitle}</h2><div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#E5AD32]" /><p className="mt-3 text-sm font-semibold text-[#31536A]">{t.programsText}</p></motion.div><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.programs.slice(0, 6).map((program, index) => { const ProgramIcon = programIcons[index] ?? BookOpen; return <article key={`program-${index}-${program.title}`} className="group flex gap-5 rounded-2xl border border-white bg-white p-6 shadow-[0_18px_40px_rgba(11,61,92,0.10)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(11,61,92,0.16)]"><span className={modernIconBadge}><ProgramIcon className="size-8" aria-hidden="true" /></span><div><h3 className="font-heading text-xl font-black text-[#0B3D5C]">{program.title}</h3><p className="mt-2 leading-6 text-slate-600">{program.description}</p></div></article>; })}</div></div></section>

        <section id="classes" className="section-pad bg-[#F7F8F5]">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fade} className="max-w-3xl">
              <p className="font-bold text-[#2F6690]">{t.nav.classes}</p>
              <h2 className="mt-3 font-heading text-3xl font-black text-[#16425B] sm:text-4xl">{t.classes.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{t.classes.text}</p>
            </motion.div>
            <div className="mt-8 overflow-hidden border-b border-[#D9DCD6]" role="tablist" aria-label="Cycles des classes ouvertes">
              <div className="flex gap-2 overflow-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
                      className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition-colors duration-200 sm:text-base ${isActive ? "bg-[#16425B] text-white shadow-lg shadow-[#16425B]/15" : "text-slate-500 hover:bg-slate-100 hover:text-[#16425B]"}`}
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
                >
                  {activeCycle.classes.map((schoolClass, classIndex) => (
                    <article key={`class-${activeClassCycle}-${classIndex}-${schoolClass.title}`} className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#D9DCD6] bg-white shadow-md shadow-slate-200 transition-shadow duration-300 hover:shadow-lg">
                      <div className="relative bg-[#16425B] p-5 text-white sm:p-6">
                        <Image src={cardLogo} alt="" width={92} height={92} className="float-right ml-3 mb-3 size-16 rounded-full border-4 border-white/20 object-cover opacity-90 sm:absolute sm:right-4 sm:top-4 sm:mb-0 sm:ml-0 sm:size-20" />
                        <p className="text-xs font-bold uppercase tracking-wide text-[#E9C46A] sm:pr-24 sm:text-sm">{schoolClass.level}</p>
                        <h3 className="mt-3 max-w-full clear-none font-heading text-2xl font-black leading-tight sm:max-w-[14rem] sm:text-3xl">{schoolClass.title}</h3>
                        <p className="mt-4 text-sm font-bold text-white/75">2026-2027</p>
                      </div>

                      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                        <div className="rounded-2xl bg-[#81C3D7]/20 p-4">
                          <p className="text-sm font-bold text-[#2F6690]">{t.classes.feeLabel}</p>
                          <p className="font-heading text-3xl font-black text-[#16425B] sm:text-4xl">{schoolClass.fee}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-700">
                          <span className="rounded-xl bg-[#F7F8F5] px-2 py-3">{schoolClass.payments.length} {t.classes.paymentsLabel}</span>
                          <span className="rounded-xl bg-[#F7F8F5] px-2 py-3">{schoolClass.books.length} {t.classes.booksLabel}</span>
                          <span className="rounded-xl bg-[#F7F8F5] px-2 py-3">{schoolClass.supplies.length} {t.classes.suppliesLabel}</span>
                        </div>
                        <button type="button" suppressHydrationWarning onClick={() => setSelectedClass(schoolClass)} className="mt-auto inline-flex w-full justify-center rounded-full bg-[#16425B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2F6690]">{t.classes.openLabel}</button>
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

        <section id="staff" className="section-pad relative overflow-hidden bg-white">
          <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 size-80 rounded-full bg-[#81C3D7]/25 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-12 size-96 rounded-full bg-[#E9C46A]/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <motion.div {...fade} className="mx-auto max-w-3xl text-center">
              <p className="font-bold text-[#2F6690]">{t.nav.staff}</p>
              <h2 className="mt-3 font-heading text-3xl font-black text-[#16425B] sm:text-4xl md:text-5xl">{t.staff.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{t.staff.text}</p>
            </motion.div>

            <motion.div {...fade} className="mt-10 grid gap-4 rounded-3xl border border-white/70 bg-[#F7F8F5]/80 p-4 shadow-xl shadow-slate-200/70 backdrop-blur sm:grid-cols-3 sm:p-5">
              {t.staff.highlights.map((highlight, index) => {
                const HighlightIcon = index === 0 ? GraduationCap : index === 1 ? HeartHandshake : Award;
                return (
                  <div key={highlight} className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-[#D9DCD6]/60">
                    <span className="mx-auto mb-3 grid size-12 place-items-center rounded-2xl bg-[#81C3D7]/20 text-[#2F6690]">
                      <HighlightIcon className="size-6" aria-hidden="true" />
                    </span>
                    <p className="font-bold leading-6 text-[#16425B]">{highlight}</p>
                  </div>
                );
              })}
            </motion.div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {staffNames.map((name, index) => (
                <motion.article
                  key={name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                  className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200 ring-1 ring-[#D9DCD6]/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/70"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#16425B]">
                    <Image src={staffImages[index]} alt={`${name} - ${t.staff.memberAlt}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16425B]/85 via-[#16425B]/10 to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E9C46A]">{t.staff.role}</p>
                      <h3 className="mt-2 font-heading text-2xl font-black leading-tight">{name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <p className="text-sm font-semibold leading-6 text-slate-600">{t.staff.cardText}</p>
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#F7F8F5] text-[#2F6690] ring-1 ring-[#D9DCD6]">
                      <UsersRound className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

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
