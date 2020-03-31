import React, { useState } from "react";
import styles from "./HelpLocally.module.css";
import { ReactComponent as LinkSVG } from "../../assets/link.svg";
import { ReactComponent as FacebookSVG } from "../../assets/facebook.svg";
import { ReactComponent as PhoneSVG } from "../../assets/phone.svg";
import Helmet from "react-helmet";
import Select, { ValueType } from "react-select";
import { useLocation, useHistory } from "react-router-dom";

type OptionType = { label: string; value: string };
type AppType = { name: string; url: string };
type GroupType = { name: string; fb?: string; tel?: string };
type GastronomyType = {
  name: string;
  url?: string;
  fb?: string;
  pysznepl?: string;
  ubereats?: string;
  talon?: string;
};
type SourceType = { name: string; url: string };
type Cities = {
  [key: string]: {
    apps: Array<AppType>;
    groups: Array<GroupType>;
    restaurants: Array<GastronomyType>;
    sources: Array<SourceType>;
  };
};

export function HelpLocally() {
  const history = useHistory();
  const location = useLocation();
  const CITIES: Cities = {
    Wrocław: {
      apps: [{ name: "IHELPYOU", url: "https://ihelpyou.app" }],
      groups: [
        {
          name: "Widzialna ręka - Wrocław",
          fb: "https://www.facebook.com/groups/787701908419782"
        },
        {
          name: "WIDZIALNA ŁAPA - Wrocław",
          fb: "https://www.facebook.com/groups/1261968554002453"
        },
        {
          name: "Wrocław szyje maski dla medyków",
          fb: "https://www.facebook.com/groups/202213307722540"
        },
        {
          name: "Pupil w potrzebie 👑",
          fb: "https://www.facebook.com/groups/2660303067432147"
        },
        {
          name: "Pogotowie Sąsiedzkie Wrocław",
          fb: "https://www.facebook.com/groups/pogotowiesasiedzkiewroclaw"
        },
        {
          name: "WIDZIALNA RĘKA - KOMPUTERY DLA DZIECI Wrocław",
          fb: "https://www.facebook.com/groups/210832976927757"
        },
        {
          name: "Wrocław Kwarantanna - grupa wsparcia/ koronawirus",
          fb: "https://www.facebook.com/groups/1939561812844884"
        },
        {
          name: "Moto Wolontariusze - Wrocław",
          fb: "https://www.facebook.com/groups/660358714776231"
        },
        {
          name: "Pomoc coronavirus Wrocław",
          fb: "https://www.facebook.com/groups/pomoccoronaviruswroclaw"
        },
        {
          name: "Wrocławska grupa pomocowa",
          tel: "502901550"
        },
        {
          name: "Przyłbice 3D dla lekarzy - okręg Wrocław",
          fb: "https://www.facebook.com/groups/1044630732587457"
        }
      ],
      restaurants: [
        {
          name: "OGIEŃ",
          fb: "https://www.facebook.com/ogien.wro/",
          talon: "https://www.facebook.com/ogien.wro/posts/2495250640791202"
        },
        {
          name: "Wilk Syty",
          fb: "https://www.facebook.com/WilkSytyWroclaw",
          talon:
            "https://www.facebook.com/WilkSytyWroclaw/posts/3680419375334021"
        },
        {
          name: "Vinyl Cafe",
          fb: "https://www.facebook.com/vinylcafe.wroclaw",
          talon: "https://zrzutka.pl/wsparcie-dla-vinyl-cafe"
        },
        {
          name: 'Restauracja "Po drodze"',
          fb: "https://www.facebook.com/restauracjapodrodze",
          talon: ""
        },
        {
          name: "Grana Food",
          fb: "https://www.facebook.com/GranaFood",
          talon: ""
        },
        {
          name: "Cocofli - books art cafe wine bar",
          fb: "https://www.facebook.com/Cocofli",
          talon: "https://www.facebook.com/Cocofli/posts/2653668051426572"
        },
        { name: "Pan Tort", url: "https://www.pantort.pl", talon: "" },
        {
          name: "Art Cafe Kalambur",
          fb: "https://www.facebook.com/Pod.Kalamburem",
          talon:
            "https://www.facebook.com/Pod.Kalamburem/posts/10156781363772633"
        },
        {
          name: "Petits Fours Café",
          fb: "https://www.facebook.com/PetitsFoursCafe",
          talon: ""
        },
        {
          name: "Fancy Pizza",
          fb: "https://www.facebook.com/fancypizzawroclaw",
          talon: ""
        },
        {
          name: "osiem misek",
          fb: "https://www.facebook.com/osiemmisek",
          talon: "https://www.facebook.com/osiemmisek/posts/2690603304509289"
        },
        {
          name: "KASZA I PASZA",
          fb: "https://www.facebook.com/kaszaipasza",
          talon: ""
        },
        {
          name: "Tajne Komplety. Prawdziwa księgarnia, a nie sklep z książkami",
          fb: "https://www.facebook.com/ksiegarniatajnekomplety",
          talon:
            "https://www.facebook.com/ksiegarniatajnekomplety/posts/2901839033209567"
        },
        {
          name: "Noriko Sushi",
          fb: "https://www.facebook.com/sushinoriko",
          talon: ""
        },
        {
          name: "Studio Kulinarne Browar Mieszczański",
          fb:
            "https://www.facebook.com/Studio-Kulinarne-Browar-Mieszczański-339707122876369",
          talon: ""
        },
        {
          name: "Czaisz? Czajownia Wrocław",
          fb: "https://www.facebook.com/CzaiszCzajowniaWroclaw",
          talon: ""
        },
        {
          name: "Bułka Tarta",
          fb: "https://www.facebook.com/piekarniabulkatarta",
          talon: ""
        },
        {
          name: "Bistro Narożnik",
          fb: "https://www.facebook.com/bistronaroznik",
          talon:
            "https://www.facebook.com/bistronaroznik/photos/a.386863438170597/1256490461207886/"
        },
        {
          name: "cafe rozrusznik",
          fb: "https://www.facebook.com/caferozrusznik",
          talon:
            "https://www.facebook.com/caferozrusznik/photos/a.856494931031282/3390479200966163/"
        },
        {
          name: "Ajvar Restauracja",
          fb: "https://www.facebook.com/ajvarjagodno",
          talon: ""
        },
        {
          name: "KOTON Kocia Kawiarnia",
          fb: "https://www.facebook.com/kotonkociakawiarnia",
          talon:
            "https://www.facebook.com/kotonkociakawiarnia/videos/254490178892719/"
        },
        {
          name: "Yemsetu",
          fb: "https://www.facebook.com/Yemsetu",
          talon:
            "https://www.facebook.com/Yemsetu/photos/a.1460650800892787/2398986673725857"
        },
        {
          name: "w kontakcie",
          fb: "https://www.facebook.com/wkontakcie.wro"
        }
      ],
      sources: [
        {
          name: "Widzialna ręka - Wrocław",
          url: "https://www.facebook.com/groups/787701908419782"
        },
        {
          name: "Post na FB",
          url:
            "https://www.facebook.com/groups/787701908419782/permalink/794310347758938/"
        }
      ]
    }
  };

  const cityFormHash = location.hash && decodeURI(location.hash.substr(1));

  const [city, setCity] = useState<OptionType | null>(
    (cityFormHash &&
      CITIES[cityFormHash] && {
        label: cityFormHash,
        value: cityFormHash
      }) ||
      null
  );

  function setCityWithPath(city: OptionType) {
    setCity(city);
    history.push(`#${city.value}`);
  }

  function sorted<T>(array: Array<{ name: string } & T>) {
    return array.sort((a, b) => a.name.localeCompare(b.name));
  }

  function getTodaysRestaurant(city: OptionType) {
    const today = new Date();
    const isLeapYear = (date: Date) => {
      const year = date.getFullYear();
      if ((year & 3) !== -0) return false;
      return year % 100 !== 0 || year % 400 === 0;
    };

    const dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    const mn = today.getMonth();
    const dn = today.getDate();
    const dayOfYear = dayCount[mn] + dn + (mn > 1 && isLeapYear(today) ? 1 : 0);
    const lengthOfRestaurants = CITIES[city.value].restaurants.length;
    const restaurant =
      CITIES[city.value].restaurants[dayOfYear % lengthOfRestaurants];
    const href = restaurant.url || restaurant.fb || "";

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={restaurant.name}
        className={styles.NonBreakable}
      >
        {restaurant.name}
      </a>
    );
  }

  const customSlectorStyles = {
    control: (base: any) => ({
      ...base,
      background: "#292f33",
      color: "white"
    }),
    menu: (base: any) => ({
      ...base,
      background: "#292f33",
      color: "white"
    }),
    placeholder: (base: any) => ({
      ...base,
      background: "#292f33",
      color: "white"
    }),
    option: (base: any) => ({
      ...base,
      background: "#3a4349",
      color: "white"
    }),
    singleValue: (base: any) => ({
      ...base,
      color: "white"
    })
  };

  return (
    <div className={styles.HelpLocally}>
      <Helmet>
        <title>Pomoc lokalnie</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Lista stron, grup i aplikacji do pomocy"
        />
        <link rel="canonical" href="https://koronawiruswpl.pl/helplocally" />
      </Helmet>
      <h1>Pomoc lokalnie</h1>
      <Select
        name="form-field-name"
        value={city}
        options={Object.keys(CITIES).map(name => ({
          label: name,
          value: name
        }))}
        placeholder="Wybierz miasto..."
        isSearchable={true}
        onChange={(selectedOption: ValueType<OptionType>) =>
          setCityWithPath(selectedOption as OptionType)
        }
        className={styles.Selector}
        styles={customSlectorStyles}
      />
      {city && (
        <>
          <section className={styles.TodaySpecial}>
            <h2>
              Codzienne #wspieramgastro:&nbsp;&shy;
              {getTodaysRestaurant(city)}
            </h2>
          </section>
          <section className={styles.Apps}>
            <h2 className={styles.SectionTitle}>Aplikacje</h2>
            {sorted(CITIES[city.value].apps).map((e, idx) => (
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
          <section className={styles.Groups}>
            <h2 className={styles.SectionTitle}> Grupy</h2>
            {sorted(CITIES[city.value].groups).map((e, idx) => {
              const href = e.fb || (e.tel && `tel: ${e.tel}`) || "";
              return (
                <h3 key={idx}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={e.name}
                    className={styles.LinkWithIcon}
                  >
                    <span className={styles.LinkWithIcon}>{e.name}</span>
                    {e.fb && <FacebookSVG className={styles.SVGLine} />}
                    {e.tel && (
                      <>
                        <PhoneSVG className={styles.SVGLine} />
                        {e.tel}
                      </>
                    )}
                  </a>
                </h3>
              );
            })}
          </section>
          <section className={styles.Gastronomy}>
            <h2 className={styles.SectionTitle}>#wspieramgastro</h2>
            <div className={styles.GridRowHeader}>
              <div>
                <h3>Nazwa</h3>
              </div>
              <div>Facebook</div>
              <div>Url</div>
              <div>Talony</div>
            </div>
            {sorted(CITIES[city.value].restaurants).map((e, idx) => {
              const href = e.url || e.fb || "";
              return (
                <div key={idx} className={styles.GridRow}>
                  <div>
                    <h3>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={e.name}
                      >
                        <span className={styles.LinkWithIcon}>{e.name}</span>
                      </a>
                    </h3>
                  </div>
                  <div>
                    {e.fb && (
                      <a
                        href={e.fb}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Facebook ${e.name}`}
                      >
                        Facebook&nbsp;
                        <FacebookSVG className={styles.SVGLine} />
                      </a>
                    )}
                  </div>
                  <div>
                    {e.url && (
                      <a
                        href={e.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Facebook ${e.name}`}
                      >
                        Link&nbsp;
                        <LinkSVG className={styles.SVGLine} />
                      </a>
                    )}
                  </div>
                  <div>
                    {e.talon && (
                      <a
                        href={e.talon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Talony ${e.name}`}
                      >
                        Talony&nbsp;
                        <LinkSVG className={styles.SVGLine} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </section>
          Źródła:
          {sorted(CITIES[city.value].sources).map((e, idx) => (
            <span key={idx}>
              &nbsp;
              <a
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={e.name}
              >
                {e.name}
              </a>
            </span>
          ))}
        </>
      )}
    </div>
  );
}
