import "./globals.css";
import Navbar from "./Navbar";   // <— notice the ./ since Navbar.tsx is inside app/

export const metadata = { title: "Sutrah Abaya", description: "عبايات أنثوية راقية" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-cream text-cocoa min-h-screen antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
