// Polska typografia: niełamliwa spacja po jednoliterowych spójnikach i przyimkach,
// zeby nie zostawaly sieroty na koncu linii. Dziala rekurencyjnie na obiektach z tekstem.
const RE = /(^|[\s(„"])([aiouwzAIOUWZ])\s+(?=\S)/g;

export function nb(text: string): string {
  return text.replace(RE, (_m, pre, c) => `${pre}${c} `);
}

export function nbDeep<T>(value: T): T {
  if (typeof value === 'string') return nb(value) as T;
  if (Array.isArray(value)) return value.map(nbDeep) as T;
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = nbDeep(v);
    return out as T;
  }
  return value;
}
