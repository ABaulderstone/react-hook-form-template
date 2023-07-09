import style from './styles.module.scss';

const Field = ({ children }) => {
  return <div className={style.field}>{children}</div>;
};

export default Field;
