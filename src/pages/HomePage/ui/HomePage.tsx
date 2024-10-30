import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  return (
    <div>
      <button onClick={toggle}>{t('translate')}</button>
      <div>{t('Test')}</div>
    </div>
  );
}

export default HomePage;
