import { SectionTitle } from "@shared/ui/SectionTitle";
import cl from "./Atmosphere.module.css";
import { Container } from "@shared/ui/Сontainer";
import { Section } from "@shared/ui/Section";

export const Atmosphere = () => {
  return (
    <Section>
      <Container className={cl.container}>
        <div className={cl.topLeft}>
          <p className={cl.sectionLabel}>ЗНАКОМИМСЯ БЛИЖЕ</p>
          <SectionTitle>
            Ваш маленький
            <br />
            Sunday среди недели
          </SectionTitle>
        </div>
        <div className={cl.topRight}>
          <p className={cl.primaryColoredText}>
            В кафе Sunday царит особая атмосфера. Её создают современная,
            стильная музыка и потрясающий персонал.
          </p>
          <p className={cl.cuisine}>
            Здесь готовят, без преувеличения, самую вкусную шаурму в Севастополе
            — сочную и большую. А со сливочным сыром — просто идеально.
          </p>
          <p className={cl.secondaryColoredText}>
            Европейская, американская и итальянская кухни
          </p>
        </div>
      </Container>
    </Section>
  );
};
