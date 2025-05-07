import styles from './Modal.module.css';

const Modal_info = ({ModalRef,change,lt,ln}) => {
    return ( 
        <div ref={ModalRef} className={styles.Model}>
        <div className={styles.ModelConteiner}>
          <b>Ваші кординати: <br></br> {`Широта: ${lt},`}<br></br> {`Довгота: ${ln}`} </b>
        </div>
        <button className={styles.ModelBack} onClick={change}>Назад</button>
      </div>

     );
}
 
export default Modal_info;