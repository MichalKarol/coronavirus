import React, { useState } from "react";
import { Map as LMap, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import styles from "./LiveFeed.module.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// @ts-ignore
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Hostpitals from "../../assets/hospitals.json";
import Crossings from "../../assets/border-crossings.json";
import PlusSVG from "../../assets/plus.svg";
import LogInSVG from "../../assets/log-in.svg";
import { ReactComponent as ReactPlusSVG } from "../../assets/plus.svg";
import { ReactComponent as ReactLogInSVG } from "../../assets/log-in.svg";
import { ReactComponent as SquareSVG } from "../../assets/square.svg";
import { ReactComponent as CheckSquareSVG } from "../../assets/check-square.svg";
import wojewodztwa from "../../assets/wojewodztwa.json";
import { useTimer } from "../../hooks/use-timer";
import Helmet from "react-helmet";

type Cases = {
  wojewodztwo: string;
  powiat: string;
  sick: number;
  deaths: number;
};

export function LiveFeed() {
  const [dataState, setDataState] = useState<
    | { tag: "not_loading" }
    | { tag: "loading" }
    | {
        tag: "loaded";
        data: {
          updated: string;
          sick: number;
          deaths: number;
          cases: Map<string, Cases>;
        };
      }
  >({ tag: "not_loading" });
  const [popupData, setPopupData] = useState<
    (Cases & { lat: number; lng: number }) | null
  >(null);

  const [hospitalVisible, setHospitalVisible] = useState(true);
  const [crossingVisible, setCrossingVisible] = useState(true);

  function fetchData() {
    fetch("https://koronawiruswpl.pl/api/cases")
      .then(res => res.json())
      .then(res =>
        setDataState({
          tag: "loaded",
          data: {
            ...res,
            cases: new Map(res.cases.map((c: Cases) => [c.wojewodztwo, c]))
          }
        })
      )
      .catch(res => setDataState({ tag: "not_loading" }));
  }

  if (dataState.tag === "not_loading") {
    fetchData();
    setDataState({ tag: "loading" });
  }

  useTimer(fetchData, 30 * 1000);

  function formatDate(date: string) {
    const parsedDate = new Date(Date.parse(date));
    return `${parsedDate.toLocaleDateString(
      "pl-PL"
    )} ${parsedDate.toLocaleTimeString("pl-PL")}`;
  }

  const POLAND_CENTER_COORD = { lat: 52.1, lng: 19.41667 };
  const HOSPITAL_ICON = new L.Icon({
    iconUrl: PlusSVG,
    iconRetinaUrl: PlusSVG,
    iconSize: new L.Point(24, 24)
  });
  const BORDER_CROSSING_ICON = new L.Icon({
    iconUrl: LogInSVG,
    iconRetinaUrl: LogInSVG,
    iconSize: new L.Point(24, 24)
  });
  const LEVELS = [
    { min: 1, max: 9, color: "#FFCCCC" },
    { min: 10, max: 24, color: "#FF7F7F" },
    { min: 25, max: 49, color: "#FF0000" },
    { min: 50, max: 99, color: "#B20000" },
    { min: 100, max: Number.POSITIVE_INFINITY, color: "#660000" }
  ];
  function getColorForSick(sick: number) {
    return (LEVELS.find(i => i.min <= sick && i.max >= sick) || LEVELS[0])
      .color;
  }

  function stylePolygons(feature: any) {
    if (dataState.tag === "loaded") {
      const cases = dataState.data.cases.get(feature.properties.nazwa);
      if (!cases) {
        return {
          color: "darkgrey",
          opacity: 0.2,
          fill: false
        };
      } else {
        const levelIdx =
          LEVELS.findIndex(i => i.min <= cases.sick && i.max >= cases.sick) ||
          0;

        return {
          color: getColorForSick(cases.sick),
          opacity: 0.2,
          fillColor: cases.deaths
            ? `url(#pattern${levelIdx})`
            : getColorForSick(cases.sick),
          fillOpacity: cases.deaths ? 1 : 0.3
        };
      }
    }
    return {
      color: "darkgrey",
      opacity: 0.2,
      fill: false
    };
  }

  function onEachFeature(feature: any, layer: any) {
    if (dataState.tag === "loaded") {
      const cases = dataState.data.cases.get(feature.properties.nazwa);
      if (cases) {
        layer.on("click", function(e: any) {
          setPopupData({ ...cases, ...e.latlng });
        });
        layer.on("mouseout", function(e: any) {
          // Unset highlight
          layer.setStyle({ color: getColorForSick(cases.sick), opacity: 0.3 });
        });
        layer.on("mouseover", function(e: any) {
          // Unset highlight
          layer.setStyle({ color: "red", opacity: 0.7 });
        });
      }
    }
  }

  return (
    <div className={styles.LiveFeed}>
      {/* Prepare patterns */}
      <svg width="100%" height="100%">
        <defs>
          {LEVELS.map((l, idx) => (
            <pattern
              width="20"
              height="20"
              id={`pattern${idx}`}
              key={idx}
              patternUnits="userSpaceOnUse"
            >
              <rect width="20" height="20" fill={l.color} opacity={0.3} />
              <line x1="0" y1="0" x2="0" y2="20" className={styles.LineStyle} />
            </pattern>
          ))}
        </defs>
      </svg>
      <Helmet>
        <title>Na żywo</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Podgląd sytuacji w Polsce na żywo" />
        <link rel="canonical" href="https://koronawiruswpl.pl/" />
      </Helmet>
      <div className={styles.MapContainer}>
        <div className={styles.MapInfoHeader}>
          <h2>
            Stan na:{" "}
            {dataState.tag === "loaded"
              ? formatDate(dataState.data.updated)
              : " - "}
          </h2>
          <div className={styles.InfoHeader}>
            {dataState.tag === "loaded" && (
              <>
                <div className={styles.SickInfo}>
                  Chorzy: <h3>{dataState.data.sick}</h3>
                </div>
                <div className={styles.DeathsInfo}>
                  Zgony: <h3>{dataState.data.deaths}</h3>
                </div>
              </>
            )}
          </div>
        </div>
        <LMap
          center={POLAND_CENTER_COORD}
          zoom={7}
          className={styles.MapElement}
        >
          <TileLayer
            url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
            attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> 
                          © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> 
                          <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank" rel="noreferer noopener">
                          Improve this map</a></strong>'
            id="mapbox.light"
            accessToken="pk.eyJ1IjoibWthcm9sIiwiYSI6ImNqazl4ODMxMDJ3OTEzd2xlbnN6OHRlMTgifQ.I_mm4Sc8fkKJaFpQc8BWjg"
          ></TileLayer>
          {dataState.tag === "loaded" && (
            <GeoJSON
              key={dataState.data.updated}
              data={wojewodztwa as any}
              style={stylePolygons}
              onEachFeature={onEachFeature}
            />
          )}
          {hospitalVisible &&
            Hostpitals.hospitalpoints.map((hospital, idx) => (
              <Marker
                position={hospital.coords}
                key={idx}
                icon={HOSPITAL_ICON}
                bubblingMouseEvents={true}
              >
                <Popup>{hospital.name}</Popup>
              </Marker>
            ))}

          {crossingVisible &&
            Crossings.crossings.map((crossing, idx) => (
              <Marker
                position={crossing.coords}
                key={idx}
                icon={BORDER_CROSSING_ICON}
                bubblingMouseEvents={true}
              >
                <Popup>{crossing.name}</Popup>
              </Marker>
            ))}

          {popupData && (
            <Popup
              key={`${popupData.lat}${popupData.lng}`}
              position={popupData}
              onPopupClose={() => {
                setPopupData(null);
              }}
            >
              <div>
                <h3>Województwo {popupData.wojewodztwo}</h3>
                <h4>Chorzy: {popupData.sick}</h4>
                <h4>Zgony: {popupData.deaths}</h4>
              </div>
            </Popup>
          )}
        </LMap>
        <div className={styles.Legend}>
          <div className={styles.MarginGroup}>
            Źródło:&nbsp;
            <a
              href="https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="gov.pl"
            >
              gov.pl
            </a>
          </div>
          <div className={styles.MarginGroup}>
            <ReactPlusSVG />
            <button
              onClick={() => setHospitalVisible(s => !s)}
              className={styles.CheckboxButton}
            >
              {hospitalVisible ? <CheckSquareSVG /> : <SquareSVG />}
            </button>
          </div>
          <div className={styles.MarginGroup}>
            <ReactLogInSVG />
            <button
              onClick={() => setCrossingVisible(s => !s)}
              className={styles.CheckboxButton}
            >
              {crossingVisible ? <CheckSquareSVG /> : <SquareSVG />}
            </button>
          </div>
          <div className={styles.MarginGroup}>
            Skala:&nbsp;
            {LEVELS.map(l => (
              <div className={styles.MarginGroup}>
                <SquareSVG color={l.color} fill={l.color} />
                {l.min}
                {l.max === Number.POSITIVE_INFINITY ? "+" : ` do ${l.max}`}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.TwitterContainer}>
        <div className={styles.TwitterContainerLoading}>Loading</div>
        <div className={styles.TwitterContainerTimeline}>
          <TwitterTimelineEmbed
            sourceType="list"
            ownerScreenName="MichalPKarol"
            slug="koronawirus"
            theme={"dark"}
            noHeader={true}
            noFooter={true}
            noBorders={true}
          />
        </div>
      </div>
    </div>
  );
}
