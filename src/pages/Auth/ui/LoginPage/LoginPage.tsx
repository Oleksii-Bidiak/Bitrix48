import { Page } from '@/shared/ui/Page';
import cls from './loginPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '@/shared/ui/Form';

function LoginPage() {
  const { t } = useTranslation();

  return (
    <Page className={cls.page}>
      <form>
        <h1>{t('login')}</h1>
				<Input />
				<Input />
				<Button children={t('enter')} />
      </form>
    </Page>
  );
}

export default LoginPage;
