import style from './styles.module.scss';

const Input = ({ error, register, inputName, label, ...rest }) => {
  const inputId = inputName + 'input';
  return (
    <>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        className={error ? style.error_input : ''}
        id={inputId}
        {...rest}
        {...register(inputName)}
      />
      <div className={style.error_message}>
        {error && <span className={style.error_text}>{error.message}</span>}
      </div>
    </>
  );
};

export default Input;
