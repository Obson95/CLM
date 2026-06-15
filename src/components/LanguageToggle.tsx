"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="flex rounded-full border border-slate-200 bg-white p-1 text-sm font-semibold shadow-sm" aria-label="Language selector">
      {(["kr", "fr"] as const).map((code) => (
        <button key={code} type="button" onClick={() => setLanguage(code)} className={`rounded-full px-3 py-1.5 transition ${language === code ? "bg-[#5BA4CF] text-white" : "text-slate-600 hover:text-[#3A7CB8]"}`} aria-pressed={language === code}>
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
