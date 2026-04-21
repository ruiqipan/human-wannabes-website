import NavStub from "@/components/proto/NavStub";
import FooterStub from "@/components/proto/FooterStub";
import HeroB from "@/components/proto/HeroB";
import Link from "next/link";

export default function HomeB() {
  return (
    <div data-theme="b" style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      <NavStub />
      <main>
        <HeroB />
      </main>
      <FooterStub />

      {/* Preview switcher pill */}
      <div
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 text-xs font-semibold tracking-widest uppercase"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        <Link
          href="/"
          className="px-4 py-2 rounded-full text-center transition-opacity hover:opacity-100 opacity-70"
          style={{
            background: "rgba(255,45,85,0.2)",
            border: "1px solid rgba(255,45,85,0.5)",
            color: "#ff2d55",
          }}
        >
          ← Version A
        </Link>
        <Link
          href="/preview-c"
          className="px-4 py-2 rounded-full text-center transition-opacity hover:opacity-100 opacity-70"
          style={{
            background: "rgba(204,17,51,0.2)",
            border: "1px solid rgba(204,17,51,0.5)",
            color: "#ff2244",
          }}
        >
          Version C →
        </Link>
      </div>
    </div>
  );
}
