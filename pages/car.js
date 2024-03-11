import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Header/Header";
import CarCard from "@/Components/CarCard/CarCard";
import Button from "@/Components/Button/Button";
import Footer from "@/Components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Car({
  header_info,
  home_info,
  cars_info,
  footer_info,
  carId,
}) {
  const banner_info = home_info.data.attributes.Banner_principal;
  const que_es_renting = home_info.data.attributes.Que_es_renting;
  const Estrena_Carro = home_info.data.attributes.Estrena_Carro;
  const TyC = home_info.data.attributes.TyC;
  const cars = cars_info.data;
  const banner_help = home_info.data.attributes.Baner_ayuda;
  const footer = footer_info.data.attributes;

  //idCard

  const car_filter = cars.filter((car) => car.id == carId)[0];
  console.log("dasda", cars);

  console.log("dasda", car_filter);
  console.log("dasda", carId);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header content={header_info.data.attributes}></Header>
      <div className={styles.car_show}>
        <div className={styles.container_image}>
          <img
            className={styles.car_image}
            src={car_filter.attributes.Imagenes_carro.data[0].attributes.url}
            alt={"Motorysacar" + String(carId)}
            layout="fill"
            objectfit="cover"
          />
          <div className={styles.carrusel_pic}>
            {car_filter.attributes.Imagenes_carro.data.map((car, index) => (
              <img
                className={styles.image_carrusel}
                src={car.attributes.url}
                alt={"Motorysacar" + String(carId) + String(index)}
                layout="fill"
                objectfit="cover"
              />
            ))}
          </div>
        </div>
        <div className={styles.container_info}>
          <div className={styles.title_car}>{car_filter.attributes.Nombre}</div>
          <div className={styles.espec_container}>
            {car_filter.attributes.Especificaciones.map((car_espec) => (
              <div className={styles.espec_containerc}>
                <img src={car_espec.Icono.data.attributes.url} alt="" />
                <div className={styles.espec_title}>
                  {car_espec.Titulo_Espec}
                </div>
                <div className={styles.espec_sep}>:</div>
                <div className={styles.espec_description}>
                  {car_espec.Value_espec}
                </div>
              </div>
            ))}
            <div className={styles.container_button}>
              <Button
                text={"Descargar ficha técnica"}
                width="418px"
                height="60px"
                background="#4B5563"
                color="#fff"
                fontSize="20px"
                srcIcon="/download.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.banner_cars}>
        {cars.map((car) => (
          <CarCard car={car.attributes} />
        ))}
      </div>
      <div className={styles.help_renting}>
        <div className={styles.banner_help}>
          <img
            src={banner_help.Imagen_ayuda.data.attributes.url}
            alt="MotorysaBanner"
            layout="fill"
            objectfit="cover"
          />
          <div className={styles.container_banner_help}>
            <div className={styles.tittle_help}>
              {banner_help.Titulo_banner}
            </div>
            <div className={styles.subtittle_help}>
              {banner_help.Descripcion_banner}
            </div>
            <Button
              text={banner_help.Boton_asesoria.Text}
              width="266px"
              height="36px"
              borderColor="#D0D5DD"
              background="#4B5563"
              color="#F5F5F5"
            />
          </div>
        </div>
      </div>
      <Footer content={footer}></Footer>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const apiResponseheader = await fetch(
    `${process.env.NEXT_PUBLIC_API_CMS_URL}header?populate[Menu]=*&populate[Logo]=*&populate[Boton]=*`
  );
  const header_info = await apiResponseheader.json();
  const apiResponseHome = await fetch(
    `${process.env.NEXT_PUBLIC_API_CMS_URL}home?populate[Banner_principal][populate]=Imagen_Banner&populate[Que_es_renting]=*&populate[Estrena_Carro][populate]=Imagen_ventajas&populate[TyC]=*&populate[Baner_ayuda][populate]=Imagen_ayuda&populate[Baner_ayuda][populate]=Boton_asesoria`
  );
  const home_info = await apiResponseHome.json();

  // Peticion de vehiculos

  const apiResponseCar = await fetch(
    `${process.env.NEXT_PUBLIC_API_CMS_URL}cars/?populate[Especificaciones][populate]=Icono&populate[Imagenes_carro]=*`
  );
  const cars_info = await apiResponseCar.json();

  //footer
  const apiResponseFooter = await fetch(
    `${process.env.NEXT_PUBLIC_API_CMS_URL}footer?populate=*`
  );
  const footer_info = await apiResponseFooter.json();

  const { query } = pageContext;

  // Extract the "id" parameter
  const { id } = query;
  return {
    props: {
      header_info,
      home_info,
      cars_info,
      footer_info,
      carId: id,
    },
  };
};
