import styles from "./Header.module.css";
import Button from "../Button/Button";
export default function Header({ content }) {
  const menu_links = content["Menu"];
  const text_button = content["Boton"][0].Text;
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <img
          className={styles.logo}
          src={content["Logo"].data.attributes.url}
          alt="MotrysaLogo"
          loading="lazy"
        />
        <div className={styles.container_link}>
          {menu_links.map((menu_link) => (
            <a
              key={menu_link.id}
              href={menu_link.url}
              className={styles.menu_link}
            >
              {menu_link.Texto}
            </a>
          ))}
        </div>

        <Button
          text={text_button}
          width="140px"
          height="44px"
          borderColor="#D0D5DD"
        />
      </div>
    </div>
  );
}
