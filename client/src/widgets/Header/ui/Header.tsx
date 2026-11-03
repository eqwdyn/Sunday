import cl from "./Header.module.css";
import { BEAUTY_TEL_NUMBER, TEL_NUMBER } from "@shared/config";
import { Container } from "@shared/ui/Сontainer";
import Image from "next/image";
import { Navigation } from "../components/Navigation";
import { NotStyledLink } from "@shared/ui/NotStyledLink";

export const Header = () => {
  return (
    <header className={cl.header}>
      <Container className={cl.container}>
        <NotStyledLink href="/">
          <Image
            className={cl.logo}
            src="/images/logo.png"
            alt="Sunday"
            width={48}
            height={48}
            loading="lazy"
          />
        </NotStyledLink>
        <nav className={cl.nav}>
          <Navigation />
        </nav>
        <div className={cl.contacts}>
          <a href={`tel:${TEL_NUMBER}`} className={cl.phone}>
            {BEAUTY_TEL_NUMBER}
          </a>
          <span className={cl.address}>Севастополь · ул. Сенявина, 1</span>
        </div>
        <NotStyledLink className={cl.cartBtn} href="/cart">
          <Image
            src="svg/box.svg"
            width={19}
            height={19}
            alt=""
            loading="lazy"
          />
          <span>Корзина</span>
          {/* <span>Корзина · 1 190 ₽</span>
          <span className={cl.cartCount}>4</span> */}
        </NotStyledLink>
      </Container>
    </header>
  );
};
