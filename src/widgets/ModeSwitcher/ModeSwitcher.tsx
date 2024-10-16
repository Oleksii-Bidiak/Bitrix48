import { IconButton } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '../../app/providers/Theme/lib/useTheme';

const NightModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme === 'dark' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default NightModeToggle;
