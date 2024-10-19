import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div>
      <Typography component="h1" variant="h1">
        {t('PageError')}
      </Typography>
      <Button variant="contained" onClick={reloadPage}>
        {t('Reload')}
      </Button>
    </div>
  );
};
