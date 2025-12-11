import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useTheme } from '../ThemeContext';
import { Palette } from 'lucide-react';
import { Badge } from './ui/badge';

export function ThemeSwitcher() {
  const { theme, setTheme, availableThemes } = useTheme();

  // Group themes by mode
  const lightThemes = availableThemes.filter((t) => t.mode === 'light');
  const darkThemes = availableThemes.filter((t) => t.mode === 'dark');

  const handleThemeChange = (themeId: string) => {
    const selectedTheme = availableThemes.find((t) => t.id === themeId);
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <Palette className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      <Select value={theme.id} onValueChange={handleThemeChange}>
        <SelectTrigger className="w-full h-9">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span>{theme.name}</span>
              <Badge variant="outline" className="text-[10px] px-1 py-0">
                {theme.mode}
              </Badge>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="px-2 py-2 text-xs font-semibold text-foreground bg-muted/50 border-b border-border mb-1">
              ☀️ Light Themes
            </SelectLabel>
            {lightThemes.map((t) => (
              <SelectItem key={t.id} value={t.id} className="pl-8">
                <div className="flex items-center justify-between w-full">
                  <span>{t.name}</span>
                  {t.description && (
                    <span className="text-xs text-muted-foreground ml-2">
                      {t.description.replace(' (Light)', '')}
                    </span>
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
          {darkThemes.length > 0 && (
            <SelectGroup>
              <SelectLabel className="px-2 py-2 text-xs font-semibold text-foreground bg-muted/50 border-b border-border mb-1 mt-1">
                🌙 Dark Themes
              </SelectLabel>
              {darkThemes.map((t) => (
                <SelectItem key={t.id} value={t.id} className="pl-8">
                  <div className="flex items-center justify-between w-full">
                    <span>{t.name}</span>
                    {t.description && (
                      <span className="text-xs text-muted-foreground ml-2">
                        {t.description.replace(' (Dark)', '')}
                      </span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
