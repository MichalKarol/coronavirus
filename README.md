# coronavirus

Coronavirus in Poland site: koronawiruswpl.pl

# API

/api/cases -> returns

```
{
    updated: UTCDateTime;
    cases: Array<{
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
    powiat: string;
    sick: number;
    deaths: number;
}>
```
