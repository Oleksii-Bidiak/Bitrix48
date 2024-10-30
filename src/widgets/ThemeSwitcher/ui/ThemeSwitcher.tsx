import { useTheme } from '@/app/providers/Theme';

interface Props {
  className?: string;
}

export const ThemeSwitcher = ({ className }: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      data-testid="night-mode-toggle"
      className={className}
      onClick={toggleTheme}>
      {theme === 'dark' ? 'DARK' : 'LIGHT'}
    </button>
  );
};
