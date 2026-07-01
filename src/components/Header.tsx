"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { useLanguage } from "@/hooks/useLanguage";
import { schoolInfo } from "@/lib/constants";
import { LanguageToggle } from "./LanguageToggle";

const links = [ ["home", "#home"], ["about", "#about"], ["programs", "#programs"], ["classes", "#classes"], ["staff", "#staff"], ["admissions", "#admissions"], ["contact", "#contact"] ] as const;

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.classList.toggle("overflow-hidden", open); return () => document.body.classList.remove("overflow-hidden"); }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 transition-all ${scrolled ? "bg-white/95 py-2 shadow-[0_8px_30px_rgba(11,61,92,0.08)] backdrop-blur-xl" : "bg-white/92 py-3 shadow-[0_8px_30px_rgba(11,61,92,0.05)] backdrop-blur-xl sm:py-4"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4" aria-label="Main navigation">
        <a href="#home" className="flex min-w-0 items-center gap-2 font-heading text-[#0B3D5C] sm:gap-4">
          <span className="relative size-12 shrink-0 sm:size-16 md:size-20" aria-hidden="true">
            <Image src={logo} alt="" fill sizes="80px" className="object-contain" />
          </span>
          <span className="min-w-0 leading-[1.05]">
            <span className="block text-2xl font-black tracking-wide sm:text-3xl md:text-4xl">{schoolInfo.shortName}</span>
            <span className="block max-w-[11rem] truncate text-xs font-extrabold min-[380px]:max-w-[14rem] sm:max-w-none sm:text-sm md:text-base">Collège Laferrière de Milot</span>
            <span className="hidden text-xs font-bold text-[#1b5b80] sm:block md:text-sm">{schoolInfo.motto}</span>
          </span>
        </a>
        <div className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {links.map(([key, href], index) => <a key={key} href={href} className="group relative text-sm font-extrabold text-[#0B2F4A] transition hover:text-[#0B3D5C]">{t.nav[key]}<span className={`absolute -bottom-4 left-0 h-1 rounded-full bg-[#E5AD32] transition-all group-hover:w-full ${index === 0 ? "w-full" : "w-0"}`} /></a>)}
          <LanguageToggle />
        </div>
        <button type="button" suppressHydrationWarning onClick={() => setOpen(true)} className="shrink-0 rounded-full p-2 text-[#0B3D5C] ring-1 ring-slate-200 lg:hidden" aria-label="Open menu"><Menu /></button>
      </nav>
      {open && <div className="fixed inset-0 z-50 bg-[#0B3D5C]/45 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}><div className="ml-auto flex h-dvh w-full max-w-sm flex-col bg-white p-5 shadow-2xl min-[420px]:w-96" onClick={(e) => e.stopPropagation()}><div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4"><div className="flex min-w-0 items-center gap-3"><span className="relative size-11 shrink-0"><Image src={logo} alt="" fill sizes="44px" className="object-contain" /></span><strong className="truncate font-heading text-xl text-[#0B3D5C]">Menu</strong></div><button suppressHydrationWarning aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-full p-2 text-[#0B3D5C] ring-1 ring-slate-200"><X /></button></div><div className="grid gap-2 overflow-y-auto pb-6">{links.map(([key, href]) => <a key={key} href={href} onClick={() => setOpen(false)} className="rounded-2xl bg-[#F7F8F5] px-4 py-4 text-base font-bold text-[#0B3D5C] transition hover:bg-[#E5AD32]/20">{t.nav[key]}</a>)}<div className="mt-2"><LanguageToggle /></div></div></div></div>}
    </header>
  );
}
