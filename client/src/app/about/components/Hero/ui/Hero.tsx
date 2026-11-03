import Image from "next/image";
import cl from "./Hero.module.css";
import { ADDRESS } from "@shared/config";

export const Hero = () => {
  return (
    <section className={cl.hero}>
      <div className={cl.imageWrapper}>
        <Image
          className={cl.image}
          src="/images/interior.png"
          fill
          priority
          alt="Интерьер кафе Sunday"
          sizes="(max-width: 768px) 100vw, 70vw"
        />
      </div>
      <div className={cl.overlay} />

      <div className={cl.content}>
        <p className={cl.tags}>КАФЕ · РЕСТОРАН · БАР</p>
        <h1 className={cl.title}>Место, где хорошо быть собой.</h1>
        <p className={cl.subtitle}>
          Sunday — это вкусная еда, стильная музыка и люди, ради которых хочется
          вернуться.
        </p>
        <address className={cl.address}>{ADDRESS}</address>
      </div>
    </section>
  );
};
