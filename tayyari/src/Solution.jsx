import React from "react";

const Solution = ({ question }) => {
  return (
    <div className="flex flex-col justify-center items-center p-3 gap-5">
      <div>
        <h1 className="text-3xl font-semibold">Answer</h1>
      </div>
      <div className="bg-blue-100 p-2 w-40 flex justify-center rounded-md">
        {question.answer}
      </div>
      <div>
        <img src={question.answerImg} alt="" />
      </div>
      <div>
        <h1 className="text-xl flex justify-center">Solution Explanation</h1>
        <p>{question.explanation}</p>
      </div>
    </div>
  );
};

export default Solution;
