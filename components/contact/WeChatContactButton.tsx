"use client";

import { useState } from "react";
import Image from "next/image";

export default function WeChatContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hw-link inline p-0 underline decoration-[var(--accent-red)] underline-offset-4"
      >
        WeChat
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-wechat-dialog-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-[360px] border border-[rgba(245,230,200,0.22)] bg-[var(--bg-surface)] p-5 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2
              id="contact-wechat-dialog-title"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-cream)]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Add Dr-Haz on WeChat
            </h2>
            <div className="mt-5 overflow-hidden bg-white p-3">
              <Image
                src="/photos/wechat-qr.jpg"
                alt="WeChat QR code for Dr-Haz"
                width={700}
                height={700}
                className="h-auto w-full"
                unoptimized
              />
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-5 inline-flex h-11 w-full items-center justify-center border border-[var(--accent-red)] bg-[var(--accent-red)] px-5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
