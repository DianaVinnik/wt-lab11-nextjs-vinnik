import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Web-технологии</h1>
      <p>Обзорная работа по Next.js</p>
      <p>Разработка современных веб-приложений с использованием React и Next.js.</p>
      
      <nav style={{ marginTop: '2rem' }}>
        <ul>
          <li>
            <Link href="/about">О приложении</Link>
          </li>
          <li>
            <Link href="/accounts">Банковские счета</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}