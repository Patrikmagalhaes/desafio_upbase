import { useRef, useState } from 'react'
import styles from './textArea.module.css'

function TextArea() {
    const [text, setText] = useState()
    const textRef = useRef()

    function countText(e) {
        setText(textRef.current.value.length)
    }
    return (
        <>
            <div className={styles.input_descricao_container}>
                <textarea
                    onChange={countText}
                    className={styles.input_description}
                    maxLength={250}
                    ref={textRef}
                    placeholder="Descrição">

                </textarea>
                <p className={styles.max_caracter}>{text}/250</p>
            </div>
        </>
    )

}
export default TextArea