import React from 'react';
import './Quizbox.css';

const Quizbox = () => {
    return (
        <div className="quizbox-container">
            <div className="quizbox-information">
                <p>Vraag:</p>
                <label htmlFor="Awnser">Antwoord:</label>
                <input name="Awnser" type="text"/>
            </div>

        </div>
    );
};

export default Quizbox;
