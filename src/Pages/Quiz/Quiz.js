import React from 'react';
import { useParams } from "react-router-dom";

const Quiz = () => {
    const { id } = useParams();
    return (
        <div>
            <p>Test: { id }</p>
        </div>
    );
};

export default Quiz;
