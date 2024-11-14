import classNames from 'classnames';
import { memo } from 'react';
import './input.scss';

interface Props {
  className?: string;
}

export const Input = memo(({ className }: Props) => {
  return (
    <div className={classNames(className, 'search-container')}>
      <input className="search-input" />
    </div>
  );
});
