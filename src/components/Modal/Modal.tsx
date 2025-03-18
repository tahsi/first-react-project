import React, { useState } from 'react';
import styles from './Modal.module.css';
import Form from '../Form/Form.tsx'

function Modal() {
  const [isFormVisible, setFormVisible] = useState(false);

  const showForm = () => {
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };

  return (
    <>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}>
        <p className={styles.overlayTitle}>FISHER</p>
        <p className={styles.overlaySubtitle}></p>
        <button className={styles.overlayButton} onClick={showForm}>Click me!</button>
      </div>

      {isFormVisible && <Form hideForm={hideForm} />}
    </>
  );
}

export default Modal;