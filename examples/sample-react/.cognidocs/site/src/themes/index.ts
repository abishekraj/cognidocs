export interface ThemeColors {
  // Base colors
  background: string;
  foreground: string;
  card: string;
  'card-foreground': string;
  popover: string;
  'popover-foreground': string;

  // Primary
  primary: string;
  'primary-foreground': string;

  // Secondary
  secondary: string;
  'secondary-foreground': string;

  // Muted
  muted: string;
  'muted-foreground': string;

  // Accent
  accent: string;
  'accent-foreground': string;

  // Destructive
  destructive: string;
  'destructive-foreground': string;

  // Border & Input
  border: string;
  input: string;
  ring: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  mode: 'light' | 'dark';
  colors: ThemeColors;
}

// GitBook Theme (Light - Default)
export const gitbookLight: Theme = {
  id: 'gitbook-light',
  name: 'GitBook',
  description: 'Clean and minimal (Light)',
  mode: 'light',
  colors: {
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    card: '0 0% 100%',
    'card-foreground': '222.2 84% 4.9%',
    popover: '0 0% 100%',
    'popover-foreground': '222.2 84% 4.9%',
    primary: '221.2 83.2% 53.3%',
    'primary-foreground': '210 40% 98%',
    secondary: '210 40% 96.1%',
    'secondary-foreground': '222.2 47.4% 11.2%',
    muted: '210 40% 96.1%',
    'muted-foreground': '215.4 16.3% 46.9%',
    accent: '210 40% 96.1%',
    'accent-foreground': '222.2 47.4% 11.2%',
    destructive: '0 84.2% 60.2%',
    'destructive-foreground': '210 40% 98%',
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
    ring: '221.2 83.2% 53.3%',
  },
};

// GitBook Dark
export const gitbookDark: Theme = {
  id: 'gitbook-dark',
  name: 'GitBook',
  description: 'Clean and minimal (Dark)',
  mode: 'dark',
  colors: {
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
    card: '222.2 84% 4.9%',
    'card-foreground': '210 40% 98%',
    popover: '222.2 84% 4.9%',
    'popover-foreground': '210 40% 98%',
    primary: '217.2 91.2% 59.8%',
    'primary-foreground': '222.2 47.4% 11.2%',
    secondary: '217.2 32.6% 17.5%',
    'secondary-foreground': '210 40% 98%',
    muted: '217.2 32.6% 17.5%',
    'muted-foreground': '215 20.2% 65.1%',
    accent: '217.2 32.6% 17.5%',
    'accent-foreground': '210 40% 98%',
    destructive: '0 62.8% 30.6%',
    'destructive-foreground': '210 40% 98%',
    border: '217.2 32.6% 17.5%',
    input: '217.2 32.6% 17.5%',
    ring: '224.3 76.3% 48%',
  },
};

// GitHub Theme (Light)
export const githubLight: Theme = {
  id: 'github-light',
  name: 'GitHub',
  description: 'GitHub-inspired (Light)',
  mode: 'light',
  colors: {
    background: '0 0% 100%',
    foreground: '220 9% 7%',
    card: '0 0% 100%',
    'card-foreground': '220 9% 7%',
    popover: '0 0% 100%',
    'popover-foreground': '220 9% 7%',
    primary: '212 100% 48%',
    'primary-foreground': '0 0% 100%',
    secondary: '220 13% 91%',
    'secondary-foreground': '220 9% 7%',
    muted: '220 13% 96%',
    'muted-foreground': '220 8.9% 46.1%',
    accent: '220 13% 91%',
    'accent-foreground': '220 9% 7%',
    destructive: '0 73% 52%',
    'destructive-foreground': '0 0% 100%',
    border: '220 13% 91%',
    input: '220 13% 91%',
    ring: '212 100% 48%',
  },
};

// GitHub Dark
export const githubDark: Theme = {
  id: 'github-dark',
  name: 'GitHub',
  description: 'GitHub-inspired (Dark)',
  mode: 'dark',
  colors: {
    background: '220 13% 9%',
    foreground: '213 31% 91%',
    card: '220 13% 12%',
    'card-foreground': '213 31% 91%',
    popover: '220 13% 12%',
    'popover-foreground': '213 31% 91%',
    primary: '212 92% 63%',
    'primary-foreground': '220 13% 9%',
    secondary: '215 14% 22%',
    'secondary-foreground': '213 31% 91%',
    muted: '215 14% 18%',
    'muted-foreground': '217 10% 65%',
    accent: '215 14% 22%',
    'accent-foreground': '213 31% 91%',
    destructive: '0 63% 52%',
    'destructive-foreground': '213 31% 91%',
    border: '215 14% 22%',
    input: '215 14% 22%',
    ring: '212 92% 63%',
  },
};

// Nord Theme (Light)
export const nordLight: Theme = {
  id: 'nord-light',
  name: 'Nord',
  description: 'Nordic-inspired (Light)',
  mode: 'light',
  colors: {
    background: '220 16% 96%',
    foreground: '220 16% 22%',
    card: '0 0% 100%',
    'card-foreground': '220 16% 22%',
    popover: '0 0% 100%',
    'popover-foreground': '220 16% 22%',
    primary: '213 32% 52%',
    'primary-foreground': '0 0% 100%',
    secondary: '220 16% 92%',
    'secondary-foreground': '220 16% 22%',
    muted: '220 16% 92%',
    'muted-foreground': '220 9% 46%',
    accent: '179 25% 65%',
    'accent-foreground': '220 16% 22%',
    destructive: '354 42% 56%',
    'destructive-foreground': '0 0% 100%',
    border: '220 16% 88%',
    input: '220 16% 88%',
    ring: '213 32% 52%',
  },
};

// Nord Dark
export const nordDark: Theme = {
  id: 'nord-dark',
  name: 'Nord',
  description: 'Nordic-inspired (Dark)',
  mode: 'dark',
  colors: {
    background: '220 16% 22%',
    foreground: '218 27% 94%',
    card: '220 17% 26%',
    'card-foreground': '218 27% 94%',
    popover: '220 17% 26%',
    'popover-foreground': '218 27% 94%',
    primary: '213 32% 52%',
    'primary-foreground': '220 16% 22%',
    secondary: '220 17% 32%',
    'secondary-foreground': '218 27% 94%',
    muted: '220 17% 32%',
    'muted-foreground': '218 20% 65%',
    accent: '179 25% 45%',
    'accent-foreground': '218 27% 94%',
    destructive: '354 42% 56%',
    'destructive-foreground': '218 27% 94%',
    border: '220 17% 32%',
    input: '220 17% 32%',
    ring: '213 32% 52%',
  },
};

// Dracula Theme
export const dracula: Theme = {
  id: 'dracula',
  name: 'Dracula',
  description: 'Vibrant purple theme',
  mode: 'dark',
  colors: {
    background: '231 15% 18%',
    foreground: '60 30% 96%',
    card: '232 14% 21%',
    'card-foreground': '60 30% 96%',
    popover: '232 14% 21%',
    'popover-foreground': '60 30% 96%',
    primary: '265 89% 78%',
    'primary-foreground': '231 15% 18%',
    secondary: '191 97% 77%',
    'secondary-foreground': '231 15% 18%',
    muted: '232 14% 31%',
    'muted-foreground': '60 20% 75%',
    accent: '326 100% 74%',
    'accent-foreground': '231 15% 18%',
    destructive: '0 100% 67%',
    'destructive-foreground': '60 30% 96%',
    border: '232 14% 31%',
    input: '232 14% 31%',
    ring: '265 89% 78%',
  },
};

// Monokai Theme
export const monokai: Theme = {
  id: 'monokai',
  name: 'Monokai',
  description: 'Warm retro theme',
  mode: 'dark',
  colors: {
    background: '70 8% 15%',
    foreground: '60 30% 96%',
    card: '66 7% 18%',
    'card-foreground': '60 30% 96%',
    popover: '66 7% 18%',
    'popover-foreground': '60 30% 96%',
    primary: '54 70% 68%',
    'primary-foreground': '70 8% 15%',
    secondary: '81 58% 66%',
    'secondary-foreground': '70 8% 15%',
    muted: '66 7% 26%',
    'muted-foreground': '60 9% 62%',
    accent: '31 100% 71%',
    'accent-foreground': '70 8% 15%',
    destructive: '338 95% 56%',
    'destructive-foreground': '60 30% 96%',
    border: '66 7% 26%',
    input: '66 7% 26%',
    ring: '54 70% 68%',
  },
};

// Solarized Light
export const solarizedLight: Theme = {
  id: 'solarized-light',
  name: 'Solarized',
  description: 'Solarized color scheme (Light)',
  mode: 'light',
  colors: {
    background: '44 87% 94%',
    foreground: '192 81% 14%',
    card: '44 96% 98%',
    'card-foreground': '192 81% 14%',
    popover: '44 96% 98%',
    'popover-foreground': '192 81% 14%',
    primary: '205 69% 49%',
    'primary-foreground': '44 87% 94%',
    secondary: '44 87% 90%',
    'secondary-foreground': '192 81% 14%',
    muted: '44 87% 90%',
    'muted-foreground': '194 14% 40%',
    accent: '175 59% 40%',
    'accent-foreground': '44 87% 94%',
    destructive: '1 71% 52%',
    'destructive-foreground': '44 87% 94%',
    border: '44 87% 86%',
    input: '44 87% 86%',
    ring: '205 69% 49%',
  },
};

// Solarized Dark
export const solarizedDark: Theme = {
  id: 'solarized-dark',
  name: 'Solarized',
  description: 'Solarized color scheme (Dark)',
  mode: 'dark',
  colors: {
    background: '192 100% 11%',
    foreground: '44 87% 94%',
    card: '193 100% 13%',
    'card-foreground': '44 87% 94%',
    popover: '193 100% 13%',
    'popover-foreground': '44 87% 94%',
    primary: '205 69% 49%',
    'primary-foreground': '192 100% 11%',
    secondary: '192 14% 23%',
    'secondary-foreground': '44 87% 94%',
    muted: '192 14% 23%',
    'muted-foreground': '186 8% 55%',
    accent: '175 59% 40%',
    'accent-foreground': '44 87% 94%',
    destructive: '1 71% 52%',
    'destructive-foreground': '44 87% 94%',
    border: '192 14% 23%',
    input: '192 14% 23%',
    ring: '205 69% 49%',
  },
};

// One Dark (Atom-inspired)
export const oneDark: Theme = {
  id: 'one-dark',
  name: 'One Dark',
  description: 'Atom editor theme',
  mode: 'dark',
  colors: {
    background: '220 13% 18%',
    foreground: '220 14% 71%',
    card: '220 13% 21%',
    'card-foreground': '220 14% 71%',
    popover: '220 13% 21%',
    'popover-foreground': '220 14% 71%',
    primary: '207 82% 66%',
    'primary-foreground': '220 13% 18%',
    secondary: '220 13% 26%',
    'secondary-foreground': '220 14% 71%',
    muted: '220 13% 26%',
    'muted-foreground': '218 11% 52%',
    accent: '95 38% 62%',
    'accent-foreground': '220 13% 18%',
    destructive: '355 65% 65%',
    'destructive-foreground': '220 14% 71%',
    border: '220 13% 26%',
    input: '220 13% 26%',
    ring: '207 82% 66%',
  },
};

// Material Theme
export const material: Theme = {
  id: 'material',
  name: 'Material',
  description: 'Google Material Design',
  mode: 'dark',
  colors: {
    background: '234 18% 12%',
    foreground: '0 0% 100%',
    card: '234 18% 16%',
    'card-foreground': '0 0% 100%',
    popover: '234 18% 16%',
    'popover-foreground': '0 0% 100%',
    primary: '199 92% 56%',
    'primary-foreground': '234 18% 12%',
    secondary: '265 82% 66%',
    'secondary-foreground': '0 0% 100%',
    muted: '234 18% 22%',
    'muted-foreground': '240 5% 64.9%',
    accent: '171 100% 41%',
    'accent-foreground': '0 0% 100%',
    destructive: '0 91% 71%',
    'destructive-foreground': '234 18% 12%',
    border: '234 18% 22%',
    input: '234 18% 22%',
    ring: '199 92% 56%',
  },
};

// Export all themes
export const themes: Theme[] = [
  gitbookLight,
  gitbookDark,
  githubLight,
  githubDark,
  nordLight,
  nordDark,
  dracula,
  monokai,
  solarizedLight,
  solarizedDark,
  oneDark,
  material,
];

// Helper to get theme by ID
export function getThemeById(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}

// Helper to get theme by mode
export function getThemesByMode(mode: 'light' | 'dark'): Theme[] {
  return themes.filter((t) => t.mode === mode);
}
