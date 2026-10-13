import { pl } from './pl';
import { en } from './en';

export type Locale = 'pl' | 'en';
export type Dict = typeof en;

const dicts: Record<Locale, Dict> = { pl: pl as Dict, en };

export function t(locale: Locale): Dict {
  return dicts[locale];
}

// Dodanie nowego jezyka: utworz src/i18n/<kod>.ts o tym samym ksztalcie co en.ts,
// dopisz go do `dicts` i do `locales` w astro.config.mjs, potem dodaj src/pages/<kod>/.
