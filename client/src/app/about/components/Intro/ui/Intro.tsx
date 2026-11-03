import Image from "next/image";
import cl from "./Intro.module.css";
import { Button } from "@shared/ui/Button";
import { Container } from "@shared/ui/Сontainer";

export const Intro = () => {
  return (
    <section className={cl.about} id="about">
      <Container className={cl.container}>
        {/* Верхняя часть */}
        <div className={cl.topBlock}>
          <div className={cl.topLeft}>
            <p className={cl.sectionLabel}>ЗНАКОМИМСЯ БЛИЖЕ</p>
            <h2 className={cl.heading}>
              Ваш маленький
              <br />
              Sunday среди недели
            </h2>
          </div>
          <div className={cl.topRight}>
            <p>
              В кафе Sunday царит особая атмосфера. Её создают современная,
              стильная музыка и потрясающий персонал.
            </p>
            <p>
              Здесь готовят, без преувеличения, самую вкусную шаурму в
              Севастополе — сочную и большую. А со сливочным сыром — просто
              идеально.
            </p>
            <p className={cl.cuisine}>
              Европейская, американская и итальянская кухня
            </p>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className={cl.bottomBlock}>
          <div className={cl.imageWrapper}>
            <Image
              src="/images/exterior.png"
              fill
              alt="Вход в кафе"
              className={cl.image}
            />
            <p className={cl.imageCaption}>
              Тот самый вход на улице Сенявина, 1
            </p>
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
                <span className={cl.featureDesc}>
                  Средний чёт · средние цены
                </span>
              </div>
              <div className={cl.featureItem}>
                <span className={cl.featureTitle}>С собой</span>
                <span className={cl.featureDesc}>Еда навынос и кофе</span>
              </div>
            </div>

            <Button>Посмотреть меню ↗</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
