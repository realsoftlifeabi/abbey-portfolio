export interface Logo {
  id: string;
  name: string;
  url?: string;
}

export const logos: Logo[] = [
  { id: 'fi-options', name: 'FI Options' },
  { id: 'fin-sync', name: 'Fin-Sync' },
  { id: 'portal-apply', name: 'Portal Apply' },
  { id: 'design-synchrony', name: 'Design Synchrony' },
  { id: 'tera-organics', name: 'Tera Organics' },
  { id: 'lookman', name: 'Bouwbedrijf Lookman' },
];
