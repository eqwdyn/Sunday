import Link from "next/link";
import { ADDRESS, BEAUTY_TEL_NUMBER, TG_LINK, VK_LINK } from "@shared/config";
import cl from "./Footer.module.css";
import { Container } from "@shared/ui/Сontainer";

export const Footer = () => {
  return (
    <footer className={cl.footer}>
      <Container>
        <div className={cl.top}>
          <div className={cl.col}>
            <h2 className={cl.logo}>Sunday</h2>
            <p className={cl.tagline}>Кафе · ресторан · бар</p>
          </div>
          <div className={cl.col}>
            <h4 className={cl.subTitle}>КОНТАКТЫ</h4>
            <p>{ADDRESS}</p>
            <p>{BEAUTY_TEL_NUMBER}</p>
            <div className={cl.links}>
              <a href={VK_LINK}>Telegram ↗</a>
              <a href={TG_LINK}>Вконтакте ↗</a>
            </div>
          </div>
          <div className={cl.col}>
            <h4 className={cl.subTitle}>ЧАСЫ РАБОТЫ</h4>
            <p>Пн-Чт 11:00-23:00 · Пт 11:00-00:00</p>
            <p>Сб 12:00-00:00 · Вс 12:00-23:00</p>
          </div>
        </div>

        <div className={cl.bottom}>
          <span>Sunday · Севастополь</span>
          <span>Наличными и картой</span>
          <div className={cl.bottomLinks}>
            <Link href="/" className={cl.bottomLink}>
              Меню и доставка
            </Link>
            <Link href="/about-us" className={cl.bottomLink}>
              О нас
            </Link>
            <Link href="/cart" className={cl.bottomLink}>
              Корзина
            </Link>
          </div>
        </div>

        <div className={cl.copyInfo}>
          <p className={cl.copyText}>Демо-лендинг, данные из Яндекс.Карт</p>
          <p className={cl.copyText}>
            Сайт будет удалён по первой просьбе правообладателя
          </p>
        </div>
      </Container>
    </footer>
  );
};
