import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  return (
    <div>
      <Typography
        component="h1"
        variant="h1"
        color="primary"
        sx={{ color: (theme) => theme.palette.primary.contrastText }}
        //   sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        HomePage
      </Typography>
      <button onClick={toggle}>{t('translate')}</button>
      <div>{t('Test')}</div>
    </div>
  );
}

export default HomePage;
