import React from "react";
import styles from "./Travel.module.css";
import Helmet from "react-helmet";

export function Travel() {
  return (
    <div className={styles.Travel}>
      <Helmet>
        <title>Poza granicami</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Informacje dla osób poza granicami nt. powrotu do kraju"
        />
        <link rel="canonical" href="https://koronawiruswpl.pl/travel" />
      </Helmet>
      <h1>Poza granicami</h1>
      <section className={styles.Section}>
        <h2>Akcja #LotDoDomu</h2>
        Zgłoś zapotrzebowanie na lot do Polski:
        <h4>
          <a
            href="https://lotdodomu.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="lotdodomu.com"
          >
            lotdodomu.com
          </a>
        </h4>
      </section>
      <section className={styles.Section}>
        <h2>Infolinia MSZ dot. możliwości przekraczania granic</h2>
        <p>
          MSZ:&nbsp;
          <b>
            <a href="tel:+48225238880">+48225238880</a>
          </b>
        </p>
      </section>
      <section className={styles.Section}>
        <h2>
          Gdzie przekraczać granicę? - drogowe i piesze przejścia graniczne
        </h2>
        <ul>
          <li>
            Z Czechami
            <ul>
              <li>Cieszyn – Český Tĕšín (Most Przyjaźni) (pieszy)</li>
              <li>Cieszyn – Chotĕbuz</li>
              <li>Gorzyczki</li>
              <li>Nowe Chałupki</li>
              <li>Trzebina</li>
              <li>Kudowa – Słone</li>
              <li>Jakuszyce</li>
            </ul>
          </li>

          <li>
            Z Niemcami
            <ul>
              <li>Jędrzychowice</li>
              <li>Olszyna – Forst</li>
              <li>Gubin – Guben</li>
              <li>Świecko – Frankfurt</li>
              <li>Słubice – Frankfurt</li>
              <li>Kostrzyn nad Odrą – Kietz (pieszy)</li>
              <li>Krajnik Dolny – Schwedt</li>
              <li>Kołbaskowo – Pomellen</li>
              <li>Świnoujście – Garz</li>
              <li>Zgorzelec (pieszy)</li>
            </ul>
          </li>
          <li>
            Z Litwą
            <ul>
              <li>Budzisko</li>
            </ul>
          </li>
          <li>
            Ze Słowacją
            <ul>
              <li>Barwinek</li>
              <li>Chyżne</li>
            </ul>
          </li>

          <li>
            Z Rosją
            <ul>
              <li>Gołdap - Gusiew</li>
              <li>Gronowo - Mamonowo</li>
            </ul>
          </li>

          <li>
            Z Białorusią
            <ul>
              <li>Białowieża - Piererow</li>
              <li>Sławatycze - Domaczewo</li>
              <li>Połowce - Pieszczatka</li>
            </ul>
          </li>

          <li>
            Z Ukrainą
            <ul>
              <li>Zosin - Ustiług</li>
              <li>Dołhobyczów - Uhrynów</li>
              <li>Budomierz - Hruszew</li>
              <li>Medyka - Szeginie</li>
              <li>Krościenko - Smolnica</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className={styles.Section}>
        <h2>Ograniczenia wjazdu</h2>
        Na przejściach granicznych – zarówno na granicy wewnętrznej, jak i
        zewnętrznej – przy wjeździe do Polski wprowadzane zostają ograniczenia
        dla cudzoziemców.
        <br />
        Od 15 marca br. w zakresie ruchu osobowego na kierunku wjazdowym do
        Polski na lądowych przejściach granicznych oraz w lotniczych i morskich
        przejściach granicznych przekraczać granicę państwową będą mogli:
        <br />
        <ul>
          <li>obywatele RP;</li>
          <li>
            cudzoziemcy, którzy są małżonkami albo dziećmi obywateli RP albo
            pozostają pod stałą opieką obywateli RP;
          </li>
          <li>cudzoziemcy posiadający Kartę Polaka;</li>
          <li>
            szefowie misji dyplomatycznych oraz członkowie personelu
            dyplomatyczno- konsularnego misji, czyli osoby posiadające stopień
            dyplomatyczny oraz członkowie ich rodzin;
          </li>
          <li>
            cudzoziemcy posiadające prawo stałego lub czasowego pobytu na
            terytorium RP;
          </li>
          <li>
            {" "}
            cudzoziemcy posiadający prawo do pracy na terytorium RP tj.
            cudzoziemcy uprawnieni do wykonywania pracy na takich samych
            zasadach co obywatele polscy, posiadający zezwolenie na pracę,
            zezwolenie na pracę sezonową, oświadczenie o powierzeniu wykonywania
            pracy cudzoziemcowi na terytorium RP;
          </li>
          <li>
            w szczególnie uzasadnionych przypadkach, nieuwzględnionych powyżej,
            komendant placówki Straży Granicznej, po uzyskaniu zgody komendanta
            głównego Straży Granicznej może zezwolić cudzoziemcowi na wjazd na
            terytorium RP, w trybie określonym w ustawie z 12 grudnia 2013 r. o
            cudzoziemcach;
          </li>
          <li>
            cudzoziemcy, którzy prowadzą środek transportu służący do przewozu
            towarów.
          </li>
        </ul>
      </section>
      <section className={styles.Section}>
        <h2>Kogo dotyczy kwarantanna?</h2>
        Wszyscy przyjeżdżający do Polski zostaną poddani kontroli sanitarnej i
        zarejestrowani. Zgodnie z rozporządzeniem Ministra Zdrowia w sprawie
        ogłoszenia na obszarze Rzeczypospolitej Polskiej zostaną także
        poinformowani o obowiązku poddania się 14-dniowej kwarantannie.
        <br />
        Obowiązkowej kwarantannie nie muszą poddawać się:
        <ul>
          <li>
            osoby mieszkające w Polsce, które pracują w kraju sąsiednim i
            regularnie przekraczają granicę;
          </li>
          <li>
            cudzoziemcy mieszkający w kraju sąsiednim, którzy pracują w Polsce i
            przekraczają granicę regularnie;
          </li>
          <li> kierowcy wykonujący zawodowo transport towarowy.</li>
        </ul>
      </section>
      Źródła:&nbsp;
      <a
        href="https://www.gov.pl/web/koronawirus/jak-wrocic-do-polski-samolotem"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="gov.pl"
      >
        gov.pl
      </a>
      ,&nbsp;
      <a
        href="https://www.gov.pl/web/mswia/ograniczenia-w-ruchu-na-polskiej-granicy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="MSWiA"
      >
        MSWiA
      </a>
    </div>
  );
}
