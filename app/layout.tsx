import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Добавили импорт Link

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Банковская система", // Поменяли заголовок
  description: "Учебное приложение на Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Навигационное меню */}
        <header style={{ 
          padding: '1rem', 
          borderBottom: '1px solid #ccc', 
          display: 'flex', 
          gap: '1.5rem',
          backgroundColor: '#f5f5f5'
        }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'black' }}><strong>Главная</strong></Link>
          <Link href="/about" style={{ textDecoration: 'none', color: 'black' }}>О приложении</Link>
          <Link href="/accounts" style={{ textDecoration: 'none', color: 'black' }}>Банковские счета</Link>
        </header>

        {/* Здесь отображается содержимое страниц */}
        <main>{children}</main>
      </body>
    </html>
  );
}