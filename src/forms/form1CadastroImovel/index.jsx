import CepInput from '../../components/inputCep'
import TextArea from '../../components/textArea'
import styles from './formCadastroImovel.module.css'
import { useState } from 'react';

function FormCadastroImovel() {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState({
        city: '',
        street: '',
        neighborhood: ''
    });

    const handleAddressChange = (data) => {
        setAddress({
            city: data.localidade || '',
            street: data.logradouro || '',
            neighborhood: data.bairro || ''
        });
    };

    return (

        <form className={styles.form}>

            <div className={styles.input_name_container}>
                <input className={styles.input_name} type="text" placeholder="Nome do imóvel" />
                <label className={styles.label}>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</label>
            </div>

            <TextArea />

            <CepInput value={cep} onChange={setCep} onAddressChange={handleAddressChange} />

            <input
                className={styles.input_cep}
                value={address.street && address.neighborhood ? `${address.street}, ${address.neighborhood}` : ''}
                readOnly
                type="text"
                placeholder="Endereço"
            />

            <div className={styles.input_number_container} >
                <input className={styles.input_number} type="number" placeholder="Número" />
                <input className={styles.input_number} type="text" placeholder="Complemento" />
            </div>

            <div className={styles.input_number_container}>

                <input
                    className={styles.input_city}
                    value={address.city}
                    type="text"
                    readOnly
                    placeholder="Cidade"
                />

                <select className={styles.input_uf}>
                    <option value="" className={styles.placeholder_uf} disabled selected >UF</option>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                </select>
            </div>
        </form>
    )

}
export default FormCadastroImovel