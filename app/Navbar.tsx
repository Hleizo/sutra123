export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-cream/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <a href="/" className="text-lg font-semibold tracking-wide">
          سُترة <span className="text-cocoa/70">عباية</span>
        </a>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/sutrah_abayajo?igsh=OTRyajhsNXJyZG44"
            target="_blank"
            className="px-4 py-2 rounded-2xl border border-cocoa/25 hover:bg-rose transition"
          >
            إنستغرام
          </a>
          <a
            href="https://wa.me/962000000000"
            target="_blank"
            className="px-4 py-2 rounded-2xl bg-burgundy text-cream hover:opacity-90 transition"
          >
            واتساب
          </a>
        </div>
      </nav>
    </header>
  );
}
