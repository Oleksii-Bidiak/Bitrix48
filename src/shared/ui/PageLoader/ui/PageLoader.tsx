import { Loader } from '../../Loader';
import cls from './pageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={cls.loader}>
      <Loader />
    </div>
  );
};
