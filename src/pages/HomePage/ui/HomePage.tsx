import { Button, Input } from '@/shared/ui/Form';
import { Page } from '@/shared/ui/Page';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  };

  return (
    <Page>
      <button onClick={toggle}>{t('translate')}</button>
      <div>{t('Test')}</div>
      <Input />
      <Button>Test</Button>
    </Page>
  );
}

export default HomePage;
