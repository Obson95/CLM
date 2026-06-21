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
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-white/95 py-2 shadow-sm backdrop-blur" : "bg-white/85 py-4 backdrop-blur"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 font-heading text-[#16425B]">
          <span className="relative size-14 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-[#D9DCD6]" aria-hidden="true">
            <Image src={logo} alt="" fill sizes="56px" className="object-contain p-1" />
          </span>
          <span className="leading-tight">
            <span className="block text-xl font-black tracking-wide">{schoolInfo.shortName}</span>
            <span className="block max-w-[13rem] text-xs font-bold sm:max-w-none">College Laferriere de milot</span>
            <span className="hidden text-[0.68rem] font-semibold text-[#3A7CA5] sm:block">{schoolInfo.motto}</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([key, href]) => <a key={key} href={href} className="text-sm font-semibold text-slate-700 hover:text-[#2F6690]">{t.nav[key]}</a>)}
          <LanguageToggle />
        </div>
        <button type="button" onClick={() => setOpen(true)} className="rounded-full p-2 text-[#16425B] lg:hidden" aria-label="Open menu"><Menu /></button>
      </nav>
      {open && <div className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden" onClick={() => setOpen(false)}><div className="ml-auto h-dvh w-80 max-w-[85vw] bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="mb-8 flex items-center justify-between"><strong>Menu</strong><button aria-label="Close menu" onClick={() => setOpen(false)}><X /></button></div><div className="grid gap-4">{links.map(([key, href]) => <a key={key} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold hover:bg-slate-50">{t.nav[key]}</a>)}<LanguageToggle /></div></div></div>}
    </header>
  );
}
