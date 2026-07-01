"use client";

import type { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { useLanguage } from "@/hooks/useLanguage";
import { schoolInfo, socialLinks } from "@/lib/constants";

function FacebookIcon(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M14 8.5V6.75c0-.7.16-1.05 1.13-1.05H17V2.24C16.1 2.12 15.45 2 14.56 2c-2.77 0-4.67 1.69-4.67 4.79V8.5H7v3.88h2.89V22h4.11v-9.62h2.8l.47-3.88H14Z" /></svg>; }
function InstagramIcon(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>; }
function YoutubeIcon(props: SVGProps<SVGSVGElement>) { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.4V8.6l6 3.4-6 3.4Z" /></svg>; }

const quick = [["home", "/"], ["about", "/#about"], ["programs", "/#programs"], ["classes", "/classes"], ["admissions", "/admissions"], ["life", "/#vie-scolaire"], ["contact", "/admissions#contact"]] as const;

export function Footer() {
  const { t, language } = useLanguage();
  const resources = [t.footer.calendar, t.footer.documents, t.footer.rules, t.footer.faq];
  return <footer className="bg-[#16425B] px-4 py-12 text-white"><div className="mx-auto max-w-7xl"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><div className="flex items-center gap-3"><span className="relative size-16"><Image src={logo} alt="" fill sizes="64px" className="object-contain" /></span><div><strong className="font-heading text-3xl">{schoolInfo.shortName}</strong><p className="text-sm text-white/75">{schoolInfo.name}</p></div></div><p className="mt-4 text-sm text-white/75">{language === "kr" ? schoolInfo.mottoKr : schoolInfo.mottoFr}</p><div className="mt-5 flex gap-3"><a aria-label="Facebook" href={socialLinks.facebook} className="grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-[#E5AD32] hover:text-[#16425B]"><FacebookIcon className="size-5"/></a><a aria-label="Instagram" href={socialLinks.instagram} className="grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-[#E5AD32] hover:text-[#16425B]"><InstagramIcon className="size-5"/></a><a aria-label="YouTube" href={socialLinks.youtube} className="grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-[#E5AD32] hover:text-[#16425B]"><YoutubeIcon className="size-5"/></a></div></div><div><h3 className="font-heading text-lg font-black">{t.footer.quickLinks}</h3><div className="mt-4 grid gap-2">{quick.map(([key, href]) => <Link key={key} href={href} className="text-sm text-white/75 hover:text-[#E5AD32]">{t.nav[key]}</Link>)}</div></div><div><h3 className="font-heading text-lg font-black">{t.footer.resources}</h3><div className="mt-4 grid gap-2">{resources.map((r) => <a key={r} href="#" className="text-sm text-white/75 hover:text-[#E5AD32]">{r}</a>)}</div></div><div><h3 className="font-heading text-lg font-black">{t.footer.mission}</h3><p className="mt-4 text-sm leading-7 text-white/75">{t.footer.missionText}</p></div></div><div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between"><p>© {new Date().getFullYear()} {schoolInfo.name}. {t.footer.rights}</p><p>{t.footer.tagline}</p></div></div></footer>;
}
