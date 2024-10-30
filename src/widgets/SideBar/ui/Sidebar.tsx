import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import classNames from 'classnames';
import { useState } from 'react';

interface Props {
  className?: string;
}

export const Sidebar = ({ className }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      data-testid="sidebar"
      className={classNames('sidebar h-full p-md flex flex-col', className, {
        collapsed: isCollapsed,
      })}>
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="self-end mb-lg btn shadow-lg">
        {isCollapsed ? '→' : '←'}
      </button>

      <nav
        className={classNames(
          'flex flex-col gap-sm'
          // ,
          //  {
          //  'fade-out': isCollapsed,
          //  'fade-in': !isCollapsed,
          //   }
        )}>
        <ThemeSwitcher />
        {/* <a href="#home" className="text-primary">
          Головна
        </a>
        <a href="#about" className="text-primary">
          Про нас
        </a>
        <a href="#services" className="text-primary">
          Послуги
        </a>
        <a href="#contact" className="text-primary">
          Контакти
        </a> */}
      </nav>
    </aside>
  );
};
