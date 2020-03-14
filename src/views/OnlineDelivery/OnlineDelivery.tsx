import React from "react";
import styles from "./OnlineDelivery.module.css";
import { ReactComponent as LinkSVG } from "../../assets/link.svg";
import Helmet from 'react-helmet';

export function OnlineDelivery() {
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
          <h3>
            <a
              href="https://glovoapp.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Glovo"
            >
              Glovo <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>
          <h3>
            <a
              href="https://pizzaportal.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pizzaportal.pl"
            >
              Pizzaportal.pl <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>
          <h3>
            <a
              href="https://pizzaportal.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pyszne.pl"
            >
              Pyszne.pl <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>
          <h3>
            <a
              href="https://www.ubereats.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uber Eats"
            >
              Uber Eats <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>
        </section>
        <section>
          <h2 className={styles.GridHeader}>Zakupy z dowozem</h2>
          <h3>
            <a
              href="https://www.auchandirect.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Auchan"
            >
              Auchan <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>
          <h3>
            <a
              href="https://zakupycodzienne.carrefour.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Carrefour"
            >
              Carrefour <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>

          <h3>
            <a
              href="https://www.frisco.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Frisco"
            >
              Frisco <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>
          <h3>
            <a
              href="https://www.e-piotripawel.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Piotr i Paweł"
            >
              Piotr i Paweł <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>

          <h3>
            <a
              href="https://polskikoszyk.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Polski koszyk"
            >
              Polski koszyk <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>

          <h3>
            <a
              href="https://app.szopi.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Szopi"
            >
              Szopi <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>

          <h3>
            <a
              href="https://ezakupy.tesco.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tesco"
            >
              Tesco <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>
          <h3>
            <a
              href="https://www.zakupyzdowozem.pl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zakupy z dowozem"
            >
              Zakupy z dowozem <LinkSVG className={styles.SVGLine} />
            </a>
          </h3>
        </section>
      </div>
    </div>
  );
}
