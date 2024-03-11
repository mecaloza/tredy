import styles from "./Footer.module.css";
import Button from "../Button/Button";
export default function Footer({ content }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <img
          src={content.Logo.data.attributes.url}
          alt="MotoryFooter"
          layout="fill"
          objectfit="cover"
        ></img>
        <div className={styles.title_comunication}>
          {content.Titulo_comunicate}{" "}
        </div>

        <div className={styles.line_atention}>{content.Linea_atencion} </div>
      </div>
      <div className={styles.line_separator}></div>
      <div className={styles.legal_terms}>
        <div className={styles.legal_rights}>{content.Derechos_reservados}</div>
        <div className={styles.container_term}>
          <div className={styles.legal_rights}>{content.Terminos.Texto}</div>
          <div className={styles.legal_rights}>
            {content.Politica_cookies.Texto}
          </div>
          <img
            src={content.Power_by.data.attributes.url}
            alt="MotoryPower_by"
            layout="fill"
            objectfit="cover"
          ></img>
        </div>
      </div>
    </div>
  );
}
