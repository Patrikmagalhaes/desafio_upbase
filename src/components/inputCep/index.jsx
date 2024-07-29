import InputMask from 'react-input-mask';
import style from './cepInput.module.css'
const CepInput = () => {
  return (
    <div>
      <InputMask
        id="cep"
        mask="99999-999"
        maskChar={null}
      >
        {(inputProps) => <input placeholder='CEP' className={style.cep} {...inputProps} type="text" />}
      </InputMask>
    </div>
  );
};

export default CepInput;
