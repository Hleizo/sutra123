export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="text-center max-w-xl">
        <span className="inline-block bg-blush text-cocoa font-bold px-5 py-2 rounded-2xl mb-4">
          سُترة عباية
        </span>

        <h1 className="text-4xl font-semibold mb-2">عبايات أنثوية راقية 💗</h1>
        <p className="text-cocoa/80 mb-6">خامات عملية، تفاصيل ناعمة، وقصّات تناسب يومك.</p>

        <div className="flex justify-center gap-3 flex-wrap">
          <a href="https://www.instagram.com/sutrah_abayajo?igsh=OTRyajhsNXJyZG44" target="_blank" className="no-underline">
            <button className="bg-burgundy text-cream px-5 py-3 rounded-2xl font-semibold hover:opacity-90">
              تابعينا على إنستغرام
            </button>
          </a>
          <a href="https://wa.me/962000000000" target="_blank" className="no-underline">
            <button className="border-2 border-burgundy text-burgundy px-5 py-3 rounded-2xl font-semibold">
              تواصلي عبر واتساب
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
