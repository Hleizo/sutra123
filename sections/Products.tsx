"use client";

import { motion } from "framer-motion";

type Item = {
  id: string;
  title: string;
  price: string;
  img?: string; // optional for now
};

const items: Item[] = [
  { id: "1", title: "عباية كريب ناعمة",  price: "35 JOD" },
  { id: "2", title: "عباية عملية يومية",  price: "29 JOD" },
  { id: "3", title: "عباية رسمية أنيقة",  price: "42 JOD" },
];

export default function Products() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">مختارات سُترة</h2>
        <p className="text-cocoa/70 mt-2">تصاميم بسيطة، تفاصيل أنثوية، وخامات عملية.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <motion.article
            key={p.id}
            className="rounded-2xl overflow-hidden border border-cocoa/10 bg-rose/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {/* Placeholder image area */}
            <div className="aspect-[4/5] bg-cream/60 grid place-items-center text-cocoa/60">
              {/* If you add real images later, replace with:
                 <img src="/abaya1.jpg" className="w-full h-full object-cover" />
               */}
              صورة المنتج
            </div>

            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-cocoa/70 text-sm mt-1">{p.price}</p>
              </div>
              <a
                href="https://wa.me/962000000000"
                target="_blank"
                className="px-3 py-2 rounded-xl border border-burgundy text-burgundy hover:bg-rose/40 text-sm font-semibold"
              >
                اسألي عن المقاس
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
