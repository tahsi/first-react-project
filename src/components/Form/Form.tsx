import styles from './Form.module.css';

interface FormProps { hideForm: boolean }

function Form({ hideForm }: FormProps ) {
  return (
    <>
      <div className={styles.modalOverlay}>
        <form className={styles.modalFormContent}>
          <div className={styles.modalFormHeader}>
            <h1 className={styles.modalLabel}>Form</h1>
            <button type="button" onClick={hideForm}>Close</button>
          </div>
          <div className={styles.modalFormBody}>
            <label>test</label>
            <input placeholder="First name" type="text"/>
          </div>
          <div className={styles.modalFormFooter}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form;