import React, { useState } from 'react';
import styles from './Easy.module.css';
import Quizbox from "../../Components/Quizbox/Quizbox";

const Easy = () => {

    const easyQuestions = [
        {
            questionText: "What did the fish say when he swam into the wall?",
            answerOptions:[
                {answerText: "Dam", isCorrect: true},
                {answerText: "Godd$*%@!", isCorrect: false},
                {answerText: "Auw.. :'(", isCorrect: false},
                {answerText: "blub", isCorrect: false},
            ]
        },
        {
            questionText: "What room do ghosts avoid?",
            answerOptions:[
                {answerText: "The bathroom", isCorrect: false},
                {answerText: "The study room", isCorrect: false},
                {answerText: "The bedroom", isCorrect: false},
                {answerText: "The living room", isCorrect: true},
            ]
        },
        {
            questionText: "What did the ocean say to the beach?",
            answerOptions:[
                {answerText: "Wazaaaa", isCorrect: false},
                {answerText: "Nothing.. it just waved", isCorrect: true},
                {answerText: "How you doing?", isCorrect: false},
                {answerText: "blub", isCorrect: false},
            ]
        },
        {
            questionText: "You live in a one story house made entirely of redwood. What color would the stairs be?",
            answerOptions:[
                {answerText: "Red", isCorrect: false},
                {answerText: "Blue", isCorrect: false},
                {answerText: "There are no stairs", isCorrect: true},
                {answerText: "Yellow", isCorrect: false},
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < easyQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className={styles.easy_quizbox_container}>
            <Quizbox>
                {showScore ? (
                    <div>You scored {score} out of {easyQuestions.length}</div>
                ) : (
                <div className={styles.easy_quizbox_information}>
                    <>
                        <div className={styles.easy_quizbox_question}>
                            <div>
                                <span>Question {currentQuestion + 1}</span>/{easyQuestions.length}
                            </div>
                            <div>{easyQuestions[currentQuestion].questionText}</div>
                        </div>
                        <div className={styles.easy_quizbox_answers}>
                            {easyQuestions[currentQuestion].answerOptions.map((answer) => (
                                <button onClick={() => handleAnswerOptionClick(answer.isCorrect)}>{answer.answerText}</button>
                            ))}
                        </div>
                    </>
                </div>
                    )}
            </Quizbox>
        </div>
    );
};

export default Easy;
