import React from 'react';
import styles from './Hard.module.css';
import Quizbox from "../../Components/Quizbox/Quizbox";

const Hard = () => {
    return (
        <div className={styles.easy_quizbox_container}>
            <Quizbox>
                <h3>Vraag:</h3>
                <p>Wat moet er op deze plek komen te staan:</p>
            </Quizbox>
            <Quizbox>
                <h4>Vraag:</h4>
                <p>En hier?</p>
            </Quizbox>
            <Quizbox>
                <h4>Vraag:</h4>
                <p>En hier?</p>
            </Quizbox>
            <Quizbox>
                <h4>Vraag:</h4>
                <p>En hier?</p>
            </Quizbox>
            <Quizbox>
                <h4>Vraag:</h4>
                <p>En hier?</p>
            </Quizbox>
        </div>
    );
};

export default Hard;
