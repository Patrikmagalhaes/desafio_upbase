import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import style from './cepInput.module.css'

function CepInput({ value, onChange, onAddressChange }) {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    if (value.length === 9 && value !== prevValue) {
      setPrevValue(value);
      fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          onAddressChange(data);
        })
        .catch(error => console.error('error', error));
    }
  }, [value, prevValue, onAddressChange]);


  return (
    <div>
      <InputMask
        mask="99999-999"
        maskChar={null}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {(inputProps) => <input className={style.cep} placeholder='CEP' {...inputProps} />}
      </InputMask>
    </div>
  );
};

export default CepInput;
