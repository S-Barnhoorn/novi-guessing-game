import React, { useState } from 'react';
import styles from './Easy.module.css';
import Quizbox from "../../Components/Quizbox/Quizbox";
import questions from '../../data/questions.json'

const Easy = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className={styles.easy_quizbox_container}>
            <h1>Easy Questions</h1>
            <h4>Question {currentQuestion + 1}/{questions.length}</h4>
            <Quizbox>
                {showScore ? (
                    <p>You scored {score} out of {questions.length}</p>
                ) : (
                    <div className={styles.easy_quizbox_information}>
                        <p>{questions[currentQuestion].questionText}</p>
                        <div className={styles.easy_quizbox_answers}>
                            <ul>
                            {questions[currentQuestion].answerOptions.map((answer) => (
                                <li key={answer.id}>
                                    <button
                                        type='button'
                                        onClick={() => handleAnswerOptionClick(answer.isCorrect)}>{answer.answerText}
                                    </button>
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                )}
            </Quizbox>
        </div>
    );
};

export default Easy;
