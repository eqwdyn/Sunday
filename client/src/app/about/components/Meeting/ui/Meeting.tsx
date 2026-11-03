import Image from "next/image";
import cl from "./Meeting.module.css";
import { Button } from "@shared/ui/Button";
import { Container } from "@shared/ui/Сontainer";

export const Meeting = () => {
  return (
    <section className={cl.aboutImages}>
      <Container className={cl.container}>
        <div className={cl.imageWrapper}>
          <Image
            src="/images/exterior.png"
            fill
            alt="Вход в кафе"
            className={cl.image}
          />
        </div>

        <div className={cl.bottomRight}>
          <h2 className={cl.headingSmall}>
            Заглянуть на кофе.
            <br />
            Остаться на ужин.
          </h2>
          <p className={cl.desc}>
            Взять любимое с собой или устроиться за столиком — выбирайте свой
            способ провести время с Sunday.
          </p>

          <div className={cl.features}>
            <div className={cl.featureItem}>
              <span className={cl.featureTitle}>300–500 ₽</span>
              <span className={cl.featureDesc}>Средний чёт · средние цены</span>
            </div>
            <div className={cl.featureItem}>
              <span className={cl.featureTitle}>С собой</span>
              <span className={cl.featureDesc}>Еда навынос и кофе</span>
            </div>
          </div>

          <Button className={cl.button}>Посмотреть меню ↗</Button>
        </div>
      </Container>
    </section>
  );
};
