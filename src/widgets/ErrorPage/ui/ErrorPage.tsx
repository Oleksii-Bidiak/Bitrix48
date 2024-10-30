import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div>
      <h1>{t('PageError')}</h1>
      <button onClick={reloadPage}>{t('Reload')}</button>
    </div>
  );
};
