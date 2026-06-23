"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { useLanguage } from "@/hooks/useLanguage";
import { schoolInfo } from "@/lib/constants";
import { LanguageToggle } from "./LanguageToggle";

const links = [ ["home", "#home"], ["about", "#about"], ["programs", "#programs"], ["classes", "#classes"], ["admissions", "#admissions"], ["contact", "#contact"] ] as const;

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.classList.toggle("overflow-hidden", open); return () => document.body.classList.remove("overflow-hidden"); }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/95 py-2 shadow-sm backdrop-blur" : "bg-white/85 py-3 backdrop-blur sm:py-4"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4" aria-label="Main navigation">
        <a href="#home" className="flex min-w-0 items-center gap-2 font-heading text-[#16425B] sm:gap-4">
          <span className="relative size-12 shrink-0 sm:size-16 md:size-20" aria-hidden="true">
            <Image src={logo} alt="" fill sizes="80px" className="object-contain" />
          </span>
          <span className="min-w-0 leading-[1.05]">
            <span className="block text-2xl font-black tracking-wide sm:text-3xl md:text-4xl">{schoolInfo.shortName}</span>
            <span className="block max-w-[11rem] truncate text-xs font-extrabold min-[380px]:max-w-[14rem] sm:max-w-none sm:text-sm md:text-base">College Laferriere de milot</span>
            <span className="hidden text-xs font-bold text-[#3A7CA5] sm:block md:text-sm">{schoolInfo.motto}</span>
          </span>
        </a>
        <div className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {links.map(([key, href]) => <a key={key} href={href} className="text-sm font-semibold text-slate-700 hover:text-[#2F6690]">{t.nav[key]}</a>)}
          <LanguageToggle />
        </div>
        <button type="button" suppressHydrationWarning onClick={() => setOpen(true)} className="shrink-0 rounded-full p-2 text-[#16425B] ring-1 ring-[#D9DCD6] lg:hidden" aria-label="Open menu"><Menu /></button>
      </nav>
      {open && <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)}><div className="ml-auto flex h-dvh w-full max-w-sm flex-col bg-white p-5 shadow-2xl min-[420px]:w-96" onClick={(e) => e.stopPropagation()}><div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4"><div className="flex min-w-0 items-center gap-3"><span className="relative size-11 shrink-0"><Image src={logo} alt="" fill sizes="44px" className="object-contain" /></span><strong className="truncate font-heading text-xl text-[#16425B]">Menu</strong></div><button suppressHydrationWarning aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-full p-2 text-[#16425B] ring-1 ring-slate-200"><X /></button></div><div className="grid gap-2 overflow-y-auto pb-6">{links.map(([key, href]) => <a key={key} href={href} onClick={() => setOpen(false)} className="rounded-2xl bg-[#F7F8F5] px-4 py-4 text-base font-bold text-[#16425B] transition hover:bg-[#81C3D7]/20">{t.nav[key]}</a>)}<div className="mt-2"><LanguageToggle /></div></div></div></div>}
    </header>
  );
}
