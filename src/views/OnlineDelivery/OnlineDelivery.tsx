import React from "react";
import styles from "./OnlineDelivery.module.css";
import { ReactComponent as LinkSVG } from "../../assets/link.svg";
import Helmet from "react-helmet";

export function OnlineDelivery() {
  const food = [
    { name: "Glovo", url: "https://glovoapp.com/pl" },
    { name: "Głodny.pl", url: "https://glodny.pl" },
    { name: "KFC", url: "https://kfc.pl" },
    { name: "PizzaHut", url: "https://pizzahut.pl" },
    { name: "PizzaPortal.pl", url: "https://pizzaportal.pl" },
    { name: "Pyszne.pl", url: "https://pyszne.pl" },
    { name: "Uber Eats", url: "https://www.ubereats.com/pl" },
    { name: "Wolt", url: "https://wolt.com/pl" }
  ];

  const grocery = [
    { name: "Auchan", url: "https://www.auchandirect.pl" },
    { name: "Carrefour", url: "https://zakupycodzienne.carrefour.pl" },
    { name: "Frisco", url: "https://www.frisco.pl" },
    { name: "Piotr i Paweł", url: "https://www.e-piotripawel.pl" },
    { name: "Polski koszyk", url: "https://polskikoszyk.pl" },
    { name: "Szopi", url: "https://app.szopi.pl" },
    { name: "Tesco", url: "https://ezakupy.tesco.pl" },
    { name: "Zakupy z dowozem", url: "https://www.zakupyzdowozem.pl" }
  ];

  return (
    <div className={styles.OnlineDelivery}>
      <Helmet>
        <title>Zakupy i jedzenie z dowozem</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Lista stron i aplikacji zapewniajacych jedzenie lub zakupy z dowozem"
        />
        <link rel="canonical" href="https://koronawiruswpl.pl/onlinedelivery" />
      </Helmet>
      <h1>Zakupy i jedzenie z dowozem</h1>
      <div className={styles.OnlineDeliveryGrid}>
        <section>
          <h2 className={styles.GridHeader}>Jedzenie z dowozem</h2>
          {food.map((e, idx) => (
            <h3 key={idx}>
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={e.name}
              >
                <span className={styles.LinkWithIcon}>{e.name}</span>
                <LinkSVG className={styles.SVGLine} />
              </a>
            </h3>
          ))}
        </section>
        <section>
          <h2 className={styles.GridHeader}>Zakupy z dowozem</h2>
          {grocery.map((e, idx) => (
            <h3 key={idx}>
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={e.name}
              >
                <span className={styles.LinkWithIcon}>{e.name}</span>
                <LinkSVG className={styles.SVGLine} />
              </a>
            </h3>
          ))}
        </section>
      </div>
    </div>
  );
}
