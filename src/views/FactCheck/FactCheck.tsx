import React from "react";
import styles from "./FactCheck.module.css";
import { ReactComponent as CheckCircle } from "../../assets/check-circle.svg";
import { ReactComponent as XCircle } from "../../assets/x-circle.svg";
import Helmet from 'react-helmet';

export function FactCheck() {
  const CLAIMS = [
    {
      title:
        "Koronawirus to nowy rodzaj zagrożenia, naukowcy nic o nim nie wiedzą.",
      claim: false,
      text:
        "Naukowcy znają 7 różnych koronawirusów. Średnio raz na dekadę pojawia się nowy koronawirus u ludzi. Wywołuje on rozmaite choroby układu oddechowego. "
    },

    {
      title: "Nie ma lekarstwa na koronawirus SARS-CoV-2.",
      claim: true,
      text:
        "Na razie nie ma szczepionki przeciwko koronawirusowi SARS-CoV-2. Niedostępne są też leki hamujące namnażanie się tego wirusa. Lekarze stosują dotychczas znane leki, które pomagają zwalczyć objawy choroby wirusowej (leczenie objawowe)."
    },

    {
      title:
        "Koronawirus jest bardziej zaraźliwy niż dotychczas znane nam wirusy.",
      claim: false,
      text:
        "Koronawirus SARS-CoV-2 jest bardzo zakaźny, ale daleko mu do zakaźności wirusów od dawna znanych ludzkości, takich jak wirus odry czy ospy wietrznej."
    },

    {
      title:
        "Przebieg wywołanej przez koronawirusa choroby COVID-19 jest bardzo niebezpieczny i kończy się często śmiercią pacjenta.",
      claim: false,
      text:
        "U 80% chorych, przebieg choroby jest łagodny, ciężkie powikłania występują u osób starszych, z obniżoną odpornością i chorobami przewlekłymi."
    },

    {
      title: "COVID-19 powoduje więcej zgonów, niż grypa sezonowa.",
      claim: true,
      text:
        "Około 3,4 procent potwierdzonych przypadków COVID-19 było śmiertelnych, podczas gdy w przypadku grypy jest to poniżej 1 procent. Jednocześnie COVID-19 nie przenosi się tak szeroko jak grypa. "
    },

    {
      title: "Koronawirus przenosi się drogą kropelkową, tak jak wirus grypy.",
      claim: true,
      text:
        "Nosiciel wirusa zakaża podczas kaszlu, kichania, mówienia. Jeśli jednak dotkniesz czegoś, co miało kontakt ze śliną osoby zakażonej, a potem dotkniesz twarzy – okolic nosa, oczu, uszu i ust, możesz się zakazić."
    },

    {
      title: "Koronawirus może się przenieść na rzeczach np. paczkach z Chin.",
      claim: false,
      text:
        "Zanim zostaną dostarczone do Polski, wirus zginie. Czas jego utrzymywania się na powierzchni zależy od wilgotności i temperatury powietrza, wirus zginie, nim dotrze do Polski."
    },

    {
      title:
        "Koronawirus przenosi się na pieniądzach, telefonach, klamkach, przyciskach w windzie.",
      claim: true,
      text:
        "Wirusy mogą przetrwać do kilku godzin na rzeczach, na których znajdują się wydzieliny np. ślina. Należy pamiętać, o myciu rąk."
    },

    {
      title: "Psy i koty mogą przenosić koronawirusa.",
      claim: false,
      text:
        "Obecnie brak dowodów naukowych na przenoszenie koronawirusa SARS- CoV-2 przez psy i koty. Jednak należy pamiętać o myciu rąk po głaskaniu bądź dotykaniu psa lub kota."
    },

    {
      title:
        "Nie wiadomo, jak dużo czasu mija od zakażenia się koronawirusem do zachorowania. Jeśli więc ktoś był w kraju wysokiego ryzyka w grudniu, może zakażać.",
      claim: false,
      text:
        "Objawy choroby pojawiają się między drugim a czternastym dniem od zakażenia. "
    },

    {
      title:
        "Objawy zakażenia się mogą być podobne do grypy: gorączka, kaszel i katar.",
      claim: true,
      text:
        "Najczęściej występującymi objawami choroby COVID-19, wywołanej przez koronawirus SARS-CoV-2, są: gorączka, męczący kaszel, uczucie duszności oraz problemy z oddychaniem. Czasem pojawiają się też bóle mięśniowe. W poważniejszych przypadkach rozwija się ciężkie zapalenie płuc, zespół ostrej niewydolności oddechowej, posocznica i wstrząs septyczny, które mogą prowadzić do śmierci pacjenta."
    },

    {
      title: "Żeby się nie zakazić, trzeba nosić na twarzy maseczkę ochronną.",
      claim: false,
      text:
        "Nie zaleca się noszenia maseczek ochronnych przez osoby zdrowe. Maseczki chronią inne osoby, jeśli jesteśmy nosicielami wirusa, żebyśmy ich nie zakazili. Pod warunkiem, że często je zmieniamy. Z tego samego powodu, kichając, nie powinniśmy zasłaniać ust dłonią, którą potem dotykamy np. klamek."
    },

    {
      title:
        "Żeby się nie zakazić, trzeba brać preparaty na wzmocnienie odporności, jeść czosnek i cebulę lub zażywać dużo witaminy C.",
      claim: false,
      text:
        "Preparaty witaminowe, mieszanki minerałów i witamin, wyciągi roślinne i zwierzęce i inne preparaty reklamowane jako „wzmacniacze odporności” nie mają wpływu na to, jak nasz system odpornościowy zareaguje w kontakcie z koronawirusem. Badania naukowe nie potwierdziły skuteczności tych preparatów w walce z koronawirusem. Ważny jest natomiast ogólny stan naszego organizmu, który zależy od higienicznego i zdrowego trybu życia."
    },

    {
      title:
        "Spryskiwanie ciała wódką, płynami zawierającymi chlor, smarowanie się olejem palmowym pomaga.",
      claim: false,
      text:
        "Żadna z tych substancji nie działa na koronawirusa, a może prowadzić do niepożądanej reakcji skórnej."
    },

    {
      title: "Alkohol chroni przed wirusem.",
      claim: false,
      text:
        "Picie alkoholu nie chroni przez wirusem. Alkohol obniża odporność organizmu. Wysokoprocentowy alkohol jest natomiast dobrym środkiem dezynfekującym."
    },

    {
      title: "Mycie rąk całkowicie uchroni przed wirusem.",
      claim: false,
      text:
        "Mycie rąk nie zagwarantuje nam, że nie zachorujemy. Ale jest jednym z zalecanych sposobów ochrony przed potencjalnym kontaktem z koronawirusem. Uwaga, ręce należy myć prawidłowo, dokładnie, wodą z mydłem. Na stronie Ministerstwa Zdrowia i Głównego Inspektoratu Sanitarnego znajdziesz instrukcję, jak to robić."
    },

    {
      title:
        "Wiadomo, jakich zasad należy przestrzegać, by zminimalizować ryzyko zakażenia się.",
      claim: true,
      text:
        "Zasady są proste i dostępne na stronie Ministerstwa Zdrowia oraz GIS. Należy:\nczęsto myć dłonie wodą z mydłem lub dezynfekować je środkiem na bazie alkoholu,\nzachować bezpieczną odległość od rozmówcy (1-1,5 metra),\nunikać dużych skupisk ludzi,\ndbać o higienę miejsc, w których przygotowuje się posiłki,\nnie dzielić się jedzeniem np. chipsami z jednej paczki."
    },

    {
      title: "Koronawirus jest niebezpieczny tylko dla osób starszych.",
      claim: false,
      text:
        "Zachorowania na COVID-19 obserwuje się we wszystkich grupach wiekowych. Ale najbardziej narażone na rozwinięcie ciężkiej postaci choroby i zgon są osoby starsze, z obniżoną odpornością, której towarzyszą inne choroby, w szczególności przewlekłe."
    },

    {
      title:
        "Jeśli byłeś w krajach wysokiego ryzyka w ciągu ostatnich 14 dni i zaobserwujesz u siebie kaszel, wysoką gorączkę, kłopoty z oddychaniem, powinieneś zgłosić się do przychodni lub na SOR.",
      claim: false,
      text:
        "Jeśli podejrzewasz zakażenie koronawirusem i pójdziesz do przychodni lub na SOR, będziesz zakażał innych. Zamiast tego bezzwłocznie, telefonicznie powiadom stację sanitarno-epidemiologiczną lub zgłoś się do oddziału zakaźnego."
    },

    {
      title:
        "Urządzenia do pomiaru temperatury mogą potwierdzić zakażenie koronawirusem SARS-CoV-2",
      claim: false,
      text:
        "Urządzenia pomiarowe są w stanie wykryć, że u kogoś pojawiła się gorączka, ale nie są w stanie zidentyfikować jej przyczyny."
    },

    {
      title: "Dzieci przechodzą COVID-19 łagodnie",
      claim: true,
      text:
        "Zazwyczaj choroba przebiega u dzieci łagodnie. Nie znaczy to jednak, że nie zakażają się wirusem, nie chorują, ani że nie mogą zakazić innych osób. Cięższą postacią choroby zagrożone są osoby z obniżoną odpornością lub towarzyszącymi chorobami przewlekłymi."
    },

    {
      title: "Osoba, która nie ma objawów choroby, nie zakaża",
      claim: false,
      text:
        "Odnotowano przypadki, kiedy osoba bez jakichkolwiek objawów chorobowych zakaziła swoich bliskich."
    },

    {
      title: "Kiedy zrobi się ciepło, problem z koronawirusem się skończy",
      claim: false,
      text:
        "Chociaż naukowcy zakładają, że wirus SARS-CoV-2 może podobnie do wirusa grypy wykazywać sezonowość, to brak jest wystarczającej liczby dowodów naukowych na wpływ temperatury i innych czynników środowiskowych na koronawirusa."
    },

    {
      title: "Witamina D nie zapobiega zakażeniu koronawirusem",
      claim: true,
      text:
        "Żadna witamina, w tym także D, w żadnych ilościach nie zwalcza koronawirusa. Nadużywanie witamin i suplementów diety (bez konsultacji z lekarzem lub farmaceutą), zwłaszcza takich jak witamina D, czyli rozpuszczalnych w tłuszczach, może organizmowi zaszkodzić."
    },

    {
      title: "Chinina pomaga na objawy COVID-19",
      claim: false,
      text:
        "Chinina jest lekiem na malarię, który wykazuje również słabe działanie przeciwgorączkowe i przeciwbólowe, ale ma też skutki uboczne i stosowana w niewłaściwych dawkach może być bardzo szkodliwa. Nie „załatwiaj” sobie leków na receptę, zażywaj tylko to, co przepisze Ci lekarz."
    },

    {
      title:
        "Kup rodzinie przenośny koncentrator tlenu na wypadek zachorowania na COVID-19",
      claim: false,
      text:
        "Leczenie ciężkich postaci choroby COVID-19 odbywa się w szpitalu przy użyciu profesjonalnego sprzętu, pod opieką lekarza."
    },

    {
      title:
        "Ssij tabletki z cynkiem, dzięki temu wirus nie będzie namnażał się w gardle i nosie",
      claim: false,
      text:
        "Nie przyjmuj żadnych suplementów diety bez badań i konsultacji z lekarzem, gdyż ich nieprawidłowe przyjmowanie może być szkodliwe dla zdrowia. Nie wykazano przeciwwirusowego działania suplementów zawierających cynk."
    },

    {
      title:
        "Myj ręce zwykłym mydłem w kostce, działa lepiej niż mydła w płynie i żele do mycia",
      claim: false,
      text:
        "Prawidłowe i częste mycie rąk, niezależnie od rodzaju stosowanego mydła, jest podstawowym środkiem higieny."
    },

    {
      title: "Musisz zgolić brodę, by chronić się przed koronawirusem",
      claim: false,
      text:
        "Broda nie wpływa na to, czy się zakazisz. Ale zachowaj higienę osobistą."
    },

    {
      title:
        "Osoba, która zachorowała na COVID-19 i wyzdrowiała, może ponownie zachorować",
      claim: false,
      text:
        "Aktualnie brak jest wystarczających dowodów naukowych na to, że osoba, która wyzdrowiała, może ponownie zachorować."
    },

    {
      title: "Mężczyźni ciężej chorują na COVID-19",
      claim: true,
      text:
        "Statystyki wskazują, że wśród osób ciężko chorych jest więcej mężczyzn. Naukowcy sprawdzają, czemu tak się dzieje."
    }
  ];
  return (
    <div className={styles.FactCheck}>
      <Helmet>
        <title>Fakty i mity</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Fakty i mity nt. koronawirusa"
        />
        <link rel="canonical" href="https://koronawiruswpl.pl/factcheck" />
      </Helmet>
      <h1>Fakty i mity</h1>
      <div className={styles.FactCheckGrid}>
        {CLAIMS.map((claim, idx) => (
          <div
            className={claim.claim ? styles.TrueClaim : styles.FalseClaim}
            key={idx}
          >
            <div className={styles.CardTitle}>
              {claim.claim ? <CheckCircle /> : <XCircle />}
              <h2>{claim.title}</h2>
            </div>
            <p>{claim.text}</p>
          </div>
        ))}
      </div>
      Źródło:&nbsp;
      <a
        href="https://pacjent.gov.pl/archiwum-aktualnosci/koronawirus-co-o-nim-wiemy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="pacjent.gov.pl"
      >
        pacjent.gov.pl
      </a>
    </div>
  );
}
