import React, { useState } from "react";
import { Map as LMap, Marker, Popup, TileLayer, GeoJSON } from "react-leaflet";
import styles from "./LiveFeed.module.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// @ts-ignore
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Hostpitals from "../../assets/hospitals.json";
import HeartSVG from "../../assets/heart.svg";
import powiaty from "../../assets/powiaty.json";
import { useTimer } from "../../hooks/use-timer";
import Helmet from 'react-helmet';

type Cases = {
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
          cases: Map<string, Cases>;
        };
      }
  >({ tag: "not_loading" });
  const [popupData, setPopupData] = useState<
    (Cases & { lat: number; lng: number }) | null
  >(null);

  function fetchData() {
    fetch("/api/cases")
      .then(res => res.json())
      .then(res =>
        setDataState({
          tag: "loaded",
          data: {
            updated: res.updated,
            cases: new Map(res.cases.map((c: Cases) => [c.powiat, c]))
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
    iconUrl: HeartSVG,
    iconRetinaUrl: HeartSVG,
    iconSize: new L.Point(24, 24)
  });
  const LEVELS = [
    { min: 1, max: 9, color: "#FFCCCC" },
    { min: 10, max: 24, color: "#FF7F7F" },
    { min: 25, max: 49, color: "#FF0000" },
    { min: 50, max: 99, color: "#B20000" },
    { min: 99, max: Number.POSITIVE_INFINITY, color: "#660000" }
  ];

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
        const level =
          LEVELS.find(i => i.min <= cases.sick && i.max >= cases.sick) ||
          LEVELS[0];
        return {
          color: level.color,
          opacity: 0.2,
          fillColor: level.color
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
    layer.on("click", function(e: any) {
      if (dataState.tag === "loaded") {
        const cases = dataState.data.cases.get(feature.properties.nazwa);
        if (cases) {
          setPopupData({ ...cases, ...e.latlng });
        }
      }
    });
  }

  return (
    <div className={styles.LiveFeed}>
      <Helmet>
        <title>Na żywo</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Podgląd sytuacji w Polsce na żywo"
        />
        <link rel="canonical" href="http://koronawiruswpl.pl/" />
      </Helmet>
      <div className={styles.MapContainer}>
        <h2>
          Stan na:{" "}
          {dataState.tag === "loaded"
            ? formatDate(dataState.data.updated)
            : " - "}
        </h2>
        <LMap
          center={POLAND_CENTER_COORD}
          zoom={7}
          className={styles.MapElement}
        >
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            id="mapbox.light"
          ></TileLayer>
          {dataState.tag === "loaded" && (
            <GeoJSON
              key={dataState.data.updated}
              data={powiaty as any}
              style={stylePolygons}
              onEachFeature={onEachFeature}
            />
          )}
          {Hostpitals.hospitalpoints.map((hospital, idx) => (
            <Marker position={hospital.coords} key={idx} icon={HOSPITAL_ICON}>
              <Popup>{hospital.name}</Popup>
            </Marker>
          ))}
          {popupData && (
            <Popup
              key={`${popupData.lat}${popupData.lng}`}
              position={popupData}
              onPopupClose={() => {
                console.log("XD");
                setPopupData(null);
              }}
            >
              <div>
                <h3>Powiat {popupData.powiat}</h3>
                <h4>Chorzy: {popupData.sick}</h4>
                <h4>Śmierci: {popupData.deaths}</h4>
              </div>
            </Popup>
          )}
        </LMap>
      </div>
      <div className={styles.TwitterContainer}>
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
  );
}
