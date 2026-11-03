import {
  ADDRESS,
  BEAUTY_TEL_NUMBER,
  TEL_NUMBER,
  TG_LINK,
  VK_LINK,
} from "@shared/config";
import cl from "./Contacts.module.css";

const schedule = [
  { day: "Понедельник", time: "11:00–23:00" },
  { day: "Вторник", time: "11:00–23:00" },
  { day: "Среда", time: "11:00–23:00" },
  { day: "Четверг", time: "11:00–23:00" },
  { day: "Пятница", time: "11:00–00:00" },
  { day: "Суббота", time: "12:00–00:00" },
  { day: "Воскресенье", time: "12:00–23:00" },
];

export const Contacts = () => {
  return (
    <section className={cl.contacts}>
      <div className={cl.container}>
        <div className={cl.left}>
          <p className={cl.label}>ДО ВСТРЕЧИ В SUNDAY</p>
          <h2 className={cl.title}>Мы здесь</h2>

          <address className={cl.info}>
            {ADDRESS}
            <br />
            <br />
            <a href={`tel:${TEL_NUMBER}`} className={cl.phone}>
              {BEAUTY_TEL_NUMBER}
            </a>
          </address>

          <div className={cl.socials}>
            <a href={VK_LINK}>Telegram ↗</a>
            <a href={TG_LINK}>Вконтакте ↗</a>
          </div>
          <p className={cl.payment}>Принимаем наличные и карты</p>
        </div>

        <div className={cl.right}>
          <h3 className={cl.scheduleTitle}>Когда приходить</h3>
          <ul className={cl.scheduleList}>
            {schedule.map((item, i) => (
              <li key={i}>
                <span>{item.day}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
