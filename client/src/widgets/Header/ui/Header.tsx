import Link from "next/link";
import cl from "./Header.module.css";
import { BEAUTY_TEL_NUMBER, TEL_NUMBER } from "../../../shared/config";

export const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <div className={cl.logo}>Sunday</div>

        <nav className={cl.nav}>
          <Link href="/" className={cl.link}>
            Меню и доставка
          </Link>
          <Link href="/about" className={cl.link}>
            О нас
          </Link>
        </nav>

        <div className={cl.contacts}>
          <a href={`tel:${TEL_NUMBER}`} className={cl.phone}>
            {BEAUTY_TEL_NUMBER}
          </a>
          <span className={cl.address}>Севастополь · ул. Сенявина, 1</span>
        </div>

        <button className={cl.cartBtn}>
          Корзина · 1 190 ₽ <span className={cl.cartCount}>4</span>
        </button>
      </div>
    </header>
  );
};
