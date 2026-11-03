import Image from "next/image";
import cl from "./page.module.css";

export default function Home() {
  return (
    // Оборачиваем всё в div, чтобы стили не конфликтовали с body
    <div className={cl.pageWrapper}>
      <main className={cl.container}>
        <div className={cl.bgWrapper}>
          <Image
            src="/images/interier.png"
            alt="Sunday Cafe"
            fill
            priority
            className={cl.bgImage}
          />
        </div>
        <div className={cl.overlay} />

        <div className={cl.content}>
          <h1 className={cl.logo}>Sunday</h1>
          <div className={cl.divider} />
          <h2 className={cl.title}>
            Мы готовим
            <br />
            что-то особенное
          </h2>
          <p className={cl.subtitle}>
            Наш новый сайт скоро появится.
            <br />А пока — заходите на чашку кофе.
          </p>
          <div className={cl.status}>
            <span className={cl.dot} />
            <span>Сайт в разработке</span>
          </div>
          <div className={cl.contacts}>
            <a href="tel:+79780637413" className={cl.link}>
              +7 (978) 063-74-13
            </a>
            <span className={cl.separator}>·</span>
            <address className={cl.address}>
              Севастополь, ул. Сенявина, 1
            </address>
          </div>
        </div>
      </main>
    </div>
  );
}
