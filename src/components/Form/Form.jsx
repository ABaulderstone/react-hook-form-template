import style from './styles.module.scss';

const Form = ({ children, onSubmit }) => {
  return (
    <form className={style} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
