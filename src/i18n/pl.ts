import { nbDeep } from '../lib/nb';

export const pl = nbDeep({
  lang: 'pl',
  brand: 'Banach',
  brandFormal: 'Banach Network',
  operator: 'Polska Tokenizacja S.A.',
  nav: {
    manifest: 'Manifest',
    technology: 'Technologia',
    institutions: 'Dla instytucji',
    contact: 'Kontakt',
    cta: 'Zostań założycielem',
    lang: 'EN',
    langHref: '/en',
    menu: 'Menu',
  },
  meta: {
    title: 'Banach Network - Polska sieć dla aktywów cyfrowych',
    description: 'Wspólna infrastruktura polskiego sektora finansowego dla pieniądza tokenizowanego, aktywów tokenizowanych i tożsamości cyfrowej. Jeden standard, wiele instytucji, polski nadzór.',
  },
  hero: {
    h1: 'Polska sieć dla aktywów cyfrowych.',
    lead: 'Jeden standard, na którym banki, domy maklerskie i instytucje płatnicze emitują własne tokeny, obsługują własnych klientów i zachowują własną markę.',
    cta: 'Zostań założycielem',
    secondary: 'Przeczytaj manifest',
  },
  why: {
    eyebrow: 'Dlaczego teraz',
    h2: 'Rynek jest gotowy. Infrastruktury nie ma.',
    stats: [
      { num: '47%', text: 'dorosłych Polaków posiada cyfrowe aktywa. Najwyższy wynik w UE: 2,8 mln posiadaczy, około 40 mld zł.' },
      { num: '10 z 20', text: 'największych banków Europy oferuje już cyfrowe aktywa swoim klientom.' },
      { num: '3 mln', text: 'rachunków maklerskich w Polsce. 85% nieaktywnych, czeka na produkt.' },
      { num: 'Holandia', text: 'Pierwszy stablecoin złotego wyemitowano w Holandii, nie w Polsce.' },
    ],
    line: 'Polska ma wszystko, żeby zbudować infrastrukturę finansową nowej generacji. Poza jedną rzeczą: nikt jej jeszcze nie zbudował.',
  },
  how: {
    eyebrow: 'Jak to działa',
    h2: 'Trzy kroki. Jedna sieć.',
    steps: [
      { h3: 'Bank emituje.', p: 'Obligację, akcję, fundusz lub token PLN. Na własnej licencji, bez nowej.' },
      { h3: 'Sieć rozlicza.', p: 'Aktywo za pieniądz w jednej transakcji, finalność natychmiastowa, 24/7. Klient zweryfikowany raz, przez mObywatel.' },
      { h3: 'Klient korzysta.', p: 'W aplikacji swojego banku, pod jego marką. Od 100 zł. Człowiek, firma lub agent AI.' },
    ],
    bar: 'Jeden ledger. Hyperledger Besu, ten sam stack, na którym JPMorgan rozlicza biliony. Walidatory u banków założycieli. Mosty do Cardano, Ethereum i Canton.',
  },
  layers: {
    eyebrow: 'Pięć warstw',
    h2: 'Tożsamość, pieniądz, aktywa, płatności, interoperacyjność.',
    items: [
      { h3: 'Tożsamość', p: 'mObywatel jako źródło prawdy. Klient weryfikuje się raz i używa tej weryfikacji w każdej instytucji na sieci. Dowód zerowej wiedzy bez ujawniania PESEL.' },
      { h3: 'Pieniądz', p: 'PLT, stablecoin złotego z pokryciem 1:1, już działa i jest pierwszym pieniądzem sieci. Każdy bank może wyemitować własny token e-pieniądza na własnej licencji, przez notyfikację do KNF (art. 60 MiCA). Kilka stablecoinów, jeden standard.' },
      { h3: 'Aktywa', p: 'Obligacje, akcje, fundusze, nieruchomości jako tokeny. Emisja, obrót, rozliczenie i wykup na jednym ledgerze. Rozliczenie atomowe. KDPW jako depozyt.' },
      { h3: 'Płatności', p: 'Klient, firma, agent AI płacą tym samym standardem. Escrow, cash pooling, trade finance jako smart kontrakty. Mandaty AI (AP2) jako weryfikowalne poświadczenia.' },
      { h3: 'Interoperacyjność', p: 'Mosty do Cardano, Ethereum, Canton. Polska instytucja rozlicza się z globalnymi sieciami bez opuszczania polskiej jurysdykcji.' },
    ],
  },
  plt: {
    eyebrow: 'Pieniądz sieci',
    h2: 'Pierwszy pieniądz sieci już istnieje. Nazywa się PLT.',
    lead: 'PLT to stablecoin złotego z pokryciem 1:1 w PLN, zgodny z MiCA, emitowany na licencji instytucji pieniądza elektronicznego. Banach nie czeka na pieniądz rozliczeniowy. Ma go od pierwszego dnia.',
    facts: [
      { k: 'Pokrycie', v: '1:1 w złotym, rezerwy w regulowanych instytucjach finansowych, comiesięczne niezależne atestacje.' },
      { k: 'Regulacja', v: 'Zgodność z MiCA. Emitent z licencją instytucji pieniądza elektronicznego (EMI). Dystrybutor: Fizen.' },
      { k: 'Sieci', v: 'Dostępny na Cardano, Ethereum, Polygon i Solana. Na Banach jako natywny token rozliczeniowy.' },
      { k: 'Rola na Banach', v: 'Rozliczenie DvP dla tokenizowanych aktywów, płatności B2B, wypłaty dla agentów AI. Banki dokładają własne tokeny e-pieniądza w tym samym standardzie.' },
    ],
    cta: 'plt.network',
    href: 'https://plt.network',
  },
  model: {
    eyebrow: 'Model',
    h2: 'Jak BLIK, tylko dla aktywów cyfrowych.',
    cols: [
      { h3: 'Założyciele', p: '3-5 instytucji. Udziały w operatorze, miejsce w radzie, prawo weta, pierwszeństwo dostępu, udział w przychodach od tych, którzy dołączą później.' },
      { h3: 'Operator', p: 'Polska Tokenizacja S.A. Buduje, utrzymuje i rozwija sieć. Neutralny wobec uczestników. Odpowiedzialny za technologię, bezpieczeństwo i compliance.' },
      { h3: 'Regulator', p: 'KNF i NBP przy stole od pierwszego dnia. Sieć zbudowana pod polskie prawo i polski nadzór.' },
    ],
  },
  firsts: {
    eyebrow: 'Sześć razy pierwszy',
    h2: 'Co powstanie na sieci.',
    items: [
      { text: 'Pierwsza polska tokenizowana obligacja', year: '2027' },
      { text: 'Pierwszy polski bankowy stablecoin, wyemitowany z Warszawy', year: '2027' },
      { text: 'Pierwsza polska tożsamość wielokrotnego użytku na mObywatel', year: '2027' },
      { text: 'Pierwszy polski standard płatności dla agentów AI', year: '2027' },
      { text: 'Pierwsza polska sieć konsorcjalna dla aktywów cyfrowych', year: '2027' },
      { text: 'Pierwsza polska sieć połączona z globalnymi', year: '2028' },
    ],
  },
  reg: {
    eyebrow: 'Regulacja gotowa',
    h2: 'Nie czekamy na nowe prawo.',
    items: [
      'MiCA obowiązuje. Bank emituje token e-pieniądza przez notyfikację (art. 60 MiCA).',
      'Tokenizowany papier wartościowy to instrument finansowy pod MiFID II, bez nowej licencji.',
      'Kodeks spółek handlowych (art. 328(1)) pozwala prowadzić rejestr akcjonariuszy na blockchainie.',
    ],
  },
  invite: {
    h2: 'Banach Network powstanie. Pytanie brzmi: kto będzie założycielem, a kto dołączy później.',
    p: 'Założyciele definiują standard. Mają udziały, głos i pierwszeństwo. Dołączający korzystają ze standardu, który ktoś inny ustalił.',
    cta: 'Zostań założycielem',
  },
  footer: {
    contactLabel: 'Kontakt',
    contactName: 'Maciej Krasowski',
    contactEmail: 'kontakt@banach.network',
    city: 'Warszawa',
    legal: 'Strona ma charakter informacyjny i nie stanowi oferty w rozumieniu przepisów prawa.',
    links: [
      { href: '/manifest', label: 'Manifest' },
      { href: '/technologia', label: 'Technologia' },
      { href: '/dla-instytucji', label: 'Dla instytucji' },
      { href: '/kontakt', label: 'Kontakt' },
    ],
  },
});
