import { RoutePath } from '@/shared/config/routeConfig';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Form';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './sidebar.module.scss';

interface Props {
  className?: string;
}

export const Sidebar = ({ className }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useTranslation();

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.sidebar,
        {
          [cls.collapsed]: isCollapsed,
        },
        [className]
      )}>
      <nav className={classNames()}>
        <AppLink to={RoutePath.home}>{t('home')}</AppLink>
        <AppLink to={RoutePath.files}>{t('files')}</AppLink>
      </nav>
      <ThemeSwitcher />
      <Button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? '→' : '←'}
      </Button>
    </aside>
  );
};
