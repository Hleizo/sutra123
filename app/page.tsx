"use client";

import { motion } from "framer-motion";
import Products from "./sections/Products";
 // ← this is the only new import

export default function Home() {
  return (
    <>
      {/* HERO (keep as-is) */}
      <main className="relative min-h-[80vh] grid place-items-center p-6 overflow-hidden">
        {/* Blush background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute right-1/2 top-10 translate-x-1/2 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(closest-side, #F4D6D9 0%, transparent 70%)" }}
          />
        </div>

        <motion.div
          className="text-center max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block bg-blush text-cocoa font-bold px-5 py-2 rounded-2xl mb-4">
            سُترة عباية
          </span>

          <div className="relative inline-block">
            <h1 className="text-4xl font-semibold mb-3">عبايات أنثوية راقية 💗</h1>

            {/* hand-written underline animation */}
            <motion.svg
              width="300"
              height="16"
              viewBox="0 0 300 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/2 -bottom-2 -translate-x-1/2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            >
              <motion.path
                d="M4 12 C 40 12, 80 4, 150 8 C 220 12, 260 14, 296 10"
                stroke="#6E2C2C"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </motion.svg>
          </div>

          <p className="text-cocoa/80 mt-4 mb-7">
            خامات عملية، تفاصيل ناعمة، وقصّات تناسب يومك.
          </p>

          <motion.div
            className="flex justify-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="https://www.instagram.com/sutrah_abayajo?igsh=OTRyajhsNXJyZG44"
              target="_blank"
              className="no-underline"
            >
              <button className="bg-burgundy text-cream px-5 py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                تابعينا على إنستغرام
              </button>
            </a>

            <a href="https://wa.me/962000000000" target="_blank" className="no-underline">
              <button className="border-2 border-burgundy text-burgundy px-5 py-3 rounded-2xl font-semibold hover:bg-rose/40 transition">
                تواصلي عبر واتساب
              </button>
            </a>
          </motion.div>
        </motion.div>
      </main>

      {/* PRODUCTS (new section) */}
      <Products />
    </>
  );
}
