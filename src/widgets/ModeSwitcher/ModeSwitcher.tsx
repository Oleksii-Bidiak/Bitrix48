import { IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '../../app/providers/Theme/lib/useTheme';

const NightModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      data-testid="night-mode-toggle"
      onClick={toggleTheme}
      color="inherit">
      {theme === 'dark' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default NightModeToggle;
