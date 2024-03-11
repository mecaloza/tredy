import styles from "./Card.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/router";
export default function CarCard({ id, car }) {
  const router = useRouter();

  return (
    <div className={styles.container} key={"car" + String(id)}>
      <img
        className={styles.car_image}
        src={car.Imagenes_carro.data[0].attributes.url}
        alt={"Motorysacar" + String(id)}
        layout="fill"
        objectfit="cover"
      />
      <div className={styles.tile_car}>{car.Nombre}</div>

      <div className={styles.espec_container}>
        {car.Especificaciones.map((car_espec) => (
          <div className={styles.espec_containerc}>
            <img src={car_espec.Icono.data.attributes.url} alt="" />
            <div className={styles.espec_title}>{car_espec.Titulo_Espec}</div>
            <div className={styles.espec_sep}>:</div>
            <div className={styles.espec_description}>
              {car_espec.Value_espec}
            </div>
          </div>
        ))}
        <div className={styles.container_button}>
          <Button
            text={"Ver más detalles"}
            width="266px"
            height="36px"
            borderColor="#D0D5DD"
            callback={() =>
              router.push({
                pathname: "/car",
                query: { id: id },
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
