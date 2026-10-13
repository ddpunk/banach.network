# banach.network

Strona Banach Network. Statyczna, bez CMS, bez zewnetrznych trackerow, fonty self-hosted.

## Stack

- Astro 5 (output static, i18n wbudowane, sitemap)
- Vanilla CSS z tokenami w `src/styles/global.css`
- Fonty: Newsreader Variable (naglowki) i Inter Variable (tekst), pakiety `@fontsource-variable/*`, serwowane z wlasnej domeny
- Brak JS poza: przelaczaniem klasy `no-js`, subtelnym reveal przy przewijaniu i obsluga formularza

## Uruchomienie

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
npm run preview    # podglad builda
```

Node 20+.

## Struktura

```
src/
  i18n/            teksty: pl.ts (glowny), en.ts, index.ts (rejestr jezykow)
  lib/nb.ts        niełamliwe spacje po jednoliterowych spojnikach (PL)
  styles/          global.css: tokeny kolorow, typografia, komponenty
  components/      Logo, Header, Footer, Home (sekcje strony glownej), LayerDiagram (SVG), ContactForm
  layouts/         Base (head, SEO, JSON-LD, header, footer), Prose (dlugi tekst ze spisem sekcji)
  content/         manifest.md (tresc manifestu)
  pages/           index, manifest, technologia, dla-instytucji, kontakt, en/index
public/            favicon.svg, robots.txt (dodaj og.png 1200x630)
```

## Jak dodac podstrone

1. Utworz `src/pages/nazwa.astro`.
2. Dla dlugiego tekstu uzyj `layouts/Prose.astro` (przekaz `headings` do spisu sekcji) albo `layouts/Base.astro` dla dowolnego ukladu.
3. Podaj `title`, `description` i `path` (do canonical i OG).
4. Dodaj link w `src/i18n/pl.ts` (`nav`, `footer.links`) i w `Header.astro`, jesli ma byc w menu.

Sitemap generuje sie sam z listy stron.

## Jak podmienic manifest

Podmien tresc `src/content/manifest.md`. Naglowki `##` trafiaja automatycznie do spisu sekcji na `/manifest`. Uzywaj cudzyslowow „ " i zwyklego dywizu, bez polpauzy i myslnika.

## Logo

Zrodlo: `public/brand.svg`, sprite z dwoma symbolami: `#mark` (sygnet B z siatki trojkatow) i `#wordmark` (logotyp BANACH), oba `fill="currentColor"`, wiec kolor ustawia CSS. Plik powstal z `transparent-logo.svg` po optymalizacji svgo (62 KB -> 20 KB).

Komponent `src/components/Logo.astro`:

- `variant`: `text` (sygnet + BANACH w Manrope, uzywany w naglowku, bo obrysowy logotyp ponizej ~30 px traci czytelnosc), `lockup` (sygnet + logotyp z pliku, poziomo), `stacked` (jak w oryginale, uzywany w stopce), `mark` (sam sygnet)
- `tone`: `dark`, `light` lub `inherit`
- `height`: wysokosc sygnetu w px

Sygnet jest tez grafika w hero (`Home.astro`) i w `public/favicon.svg`. Zeby podmienic logo na nowa wersje: wygeneruj nowy `brand.svg` z tymi samymi id symboli i viewBoxami albo dostosuj je w komponencie.

## Jak podpiac formularz

Formularz w `src/components/ContactForm.astro` wysyla JSON POST na adres z `PUBLIC_FORM_ENDPOINT` (plik `.env`, wzor w `.env.example`).

- Formspree: `PUBLIC_FORM_ENDPOINT=https://formspree.io/f/TWOJ_ID`
- Wlasny endpoint (np. Cloudflare Worker + Resend): przyjmij JSON z polami `name, organization, role, email, message, consent`, odpowiedz 200.

Gdy zmienna jest pusta, formularz pokazuje instrukcje z adresem mailowym i linkiem `mailto:` z wypelniona trescia. Nic nie jest wysylane.

## Analityka

Bez trackerow domyslnie. Ustaw `PUBLIC_PLAUSIBLE_DOMAIN=banach.network`, zeby dodac skrypt Plausible (`layouts/Base.astro`).

## i18n

- Domyslny jezyk: `pl` bez prefiksu w URL. Angielski pod `/en`.
- Slowniki w `src/i18n/`. Strona glowna PL i EN korzysta z tego samego komponentu `Home.astro`, wiec tlumaczenie to tylko wpis w `en.ts`.
- Zeby przetlumaczyc podstrone: utworz `src/pages/en/nazwa.astro`, przekaz `locale="en"` do layoutu i dodaj `hreflang` w `Base.astro`, jesli sciezki roznia sie od PL.

## Wdrozenie: Cloudflare Pages

Projekt `banach-network` na koncie Cloudflare (maciej@binarapps.com). Produkcja: https://banach-network.pages.dev oraz domena banach.network.

Reczny deploy z lokalnego builda (wymaga `npx wrangler login`):

```bash
npm run build
npx wrangler pages deploy dist --project-name banach-network --branch main
```

Deploy automatyczny z GitHuba: w panelu Cloudflare, Workers & Pages, banach-network, Settings, Builds, Connect to Git, wybierz repo `ddpunk/banach.network`, build command `npm run build`, output `dist`. Od tego momentu kazdy push do `main` publikuje produkcje, pull requesty dostaja preview URL.

Domena: DNS banach.network na Cloudflare (jak binar.com i bynet.io); rekordy i certyfikat Pages ustawia samo po dodaniu domeny w projekcie.

## Zasady tresci

- Polski jako jezyk glowny, cudzyslowy „ ", zwykly dywis zamiast polpauzy i myslnika (dotyczy tez kodu i komentarzy).
- Nie: nazwy gield, slowo "kryptowaluty", nazwy bankow jako uczestnikow, obietnice zyskow, slowa "rewolucja", "przelom", "web3", "DeFi", "ekosystem" poza `/technologia`.
- Terminy prawne precyzyjnie: MiCA, art. 60 MiCA, MiFID II, DORA, DLT Pilot Regime, art. 328(1) KSH.

## Lighthouse

Build z `inlineStylesheets: 'always'`, fonty subsetowane po zakresach unicode. Ostatni pomiar (mobile, symulowany 4G): performance 96-100, accessibility 100, best practices 100, SEO 100 na wszystkich stronach.
