import React from 'react';
import styles from './Quizbox.module.css';

const Quizbox = ({children}) => {
    return (
        <div className={styles.quizbox_container}>
            <div className={styles.quizbox_information}>
                {children}
            </div>
        </div>
    );
};

export default Quizbox;
