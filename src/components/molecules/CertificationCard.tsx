"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  /** Path to a PDF file to display in the lightbox (e.g. "/images/cert.pdf") */
  pdfUrl?: string;
}

export const CertificationCard = ({
  title,
  issuer,
  date,
  imageUrl,
  pdfUrl,
}: CertificationCardProps) => {
  const hasMedia = !!(imageUrl || pdfUrl);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* News-article style card */}
      <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-blue-400/50 dark:hover:border-blue-600/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">

        {/* Large image banner (top) */}
        {hasMedia ? (
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-full overflow-hidden cursor-zoom-in bg-zinc-100 dark:bg-zinc-800"
            style={{ aspectRatio: "16 / 9" }}
            title="Click to view certificate"
          >
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={`${title} certificate`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 600px"
                quality={90}
              />
            ) : pdfUrl ? (
              /* PDF thumbnail — small non-interactive iframe preview */
              <>
                <iframe
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full border-0 pointer-events-none"
                  title={`${title} preview`}
                  aria-hidden="true"
                  tabIndex={-1}
                />
                {/* Overlay to block iframe mouse events so button click works */}
                <div className="absolute inset-0" />
              </>
            ) : null}

            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30 shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                {pdfUrl && !imageUrl ? (
                  <svg className="w-6 h-6 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2zm5-16v4a1 1 0 001 1h4" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-6-3v6m-3-3h6" />
                  </svg>
                )}
              </div>
            </div>
          </button>
        ) : (
          /* Fallback placeholder if no media */
          <div className="w-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center" style={{ aspectRatio: "16 / 9" }}>
            <svg className="w-12 h-12 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        )}

        {/* Card info (bottom) */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          {/* Issuer badge */}
          <span className="self-start text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 rounded-full">
            {issuer}
          </span>

          {/* Title */}
          <h3 className="font-bold text-base leading-snug text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-3">
            {title}
          </h3>

          {/* Footer: date + view button */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-zinc-100 dark:border-zinc-800 gap-2">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </span>

            {hasMedia && (
            <button
              onClick={() => setIsOpen(true)}
              className="mt-1 self-start text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors shrink-0"
            >
              {pdfUrl && !imageUrl ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2zm5-16v4a1 1 0 001 1h4" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
              {pdfUrl && !imageUrl ? "Open PDF" : "View Certificate"}
            </button>
          )}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && hasMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ animation: "fadeIn 0.2s ease" }}
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-5xl flex flex-col gap-3"
            style={{ animation: "scaleIn 0.25s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-white font-bold text-lg leading-tight">{title}</p>
                <p className="text-zinc-400 text-sm mt-0.5">{issuer} · {date}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="shrink-0 text-zinc-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
                title="Close (Esc)"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Full Certificate Viewer */}
            {imageUrl ? (
              <div
                className="relative w-full rounded-2xl overflow-hidden bg-white shadow-2xl border border-white/10"
                style={{ height: "calc(90vh - 140px)" }}
              >
                <Image
                  src={imageUrl}
                  alt={`${title} certificate`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 1024px"
                  quality={95}
                />
              </div>
            ) : pdfUrl ? (
              <div
                className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white"
                style={{ height: "calc(90vh - 140px)" }}
              >
                <iframe
                  src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                  className="w-full h-full border-0"
                  title={`${title} PDF`}
                />
              </div>
            ) : null}

            <p className="text-center text-zinc-500 text-xs">
              Click outside · press Esc to close
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.94) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  );
};
