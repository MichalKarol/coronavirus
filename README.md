# coronavirus

Coronavirus in Poland site: koronawiruswpl.pl

# API

/api/cases -> returns

```
{
    updated: UTCDateTime;
    sick: number; // Sum of sick cases
    deaths: number; // Sum of deaths
    cases: Array<{
        wojewodztwo: string;
        powiat: string;
        sick: number;
        deaths: number;
    }>;
}
```

/api/history -> returns

```
Array<{
    date: UTCDateTime;
    wojewodztwo: string;
    powiat: string;
    sick: number;
    deaths: number;
}>
```

# Changelog

1. Initial release
2. Added sum of sick and deaths to show over the map, Added new online delivery options.
