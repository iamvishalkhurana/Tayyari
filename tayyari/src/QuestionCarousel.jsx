import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { ImCross } from "react-icons/im";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Solution from "./Solution";

function QuestionCarousel({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  const handleNext = () => {
    setSelected(null);
    setShowSolution(false);
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === questions.length - 1 ? 0 : prevIndex + 1
      );
      setSlideDirection(null);
    }, 300); // Adjust the duration to match your CSS transition duration
  };

  const handlePrev = () => {
    setSelected(null);
    setShowSolution(false);
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? questions.length - 1 : prevIndex - 1
      );
      setSlideDirection(null);
    }, 300); // Adjust the duration to match your CSS transition duration
  };
  {
  }
  return (
    <div
      className={`question-container ${slideDirection} relative ${
        showSolution && "flex gap-5 pl-10"
      }`}
    >
      <div className="flex flex-col gap-5 p-10">
        <div className="flex justify-between items-center">
          <div className="flex md:hidden" onClick={handlePrev}>
            <FaAngleLeft className="text-xl" />
          </div>
          <div className="flex gap-2 items-center md:justify-start justify-center w-full">
            <h1 className="text-xl font-semibold ">
              Question {currentIndex + 1}
            </h1>
            <CiBookmark className="font-bold text-2xl mt-1" />
          </div>
          <div className="flex md:hidden" onClick={handleNext}>
            <FaAngleRight className="text-xl" />
          </div>
        </div>
        <div>
          <p>{questions[currentIndex].question}</p>
        </div>
        <div>
          <img src="/assets/q_pic.png" alt="" className=" object-cover" />
        </div>
        <form>
          <div
            className={`grid ${
              showSolution ? "grid-cols-1 " : "md:grid-cols-2"
            } gap-4`}
          >
            <label
              onClick={() => setSelected(questions[currentIndex].option1)}
              className={`border border-black/40 p-2 w-52   rounded-xl duration-300 ${
                selected === questions[currentIndex].option1
                  ? "bg-blue-200"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="option"
                value={questions[currentIndex].option1}
              />
              {questions[currentIndex].option1}
            </label>
            <label
              onClick={() => setSelected(questions[currentIndex].option2)}
              className={`border border-black/40  p-2 w-52 rounded-xl flex justify-start duration-300 ${
                selected === questions[currentIndex].option2
                  ? "bg-blue-200"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="option"
                value={questions[currentIndex].option2}
              />
              {questions[currentIndex].option2}
            </label>
            <label
              onClick={() => setSelected(questions[currentIndex].option3)}
              className={`border border-black/40  p-2 w-52  rounded-xl flex justify-start duration-300 ${
                selected === questions[currentIndex].option3
                  ? "bg-blue-200"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="option"
                value={questions[currentIndex].option3}
              />
              {questions[currentIndex].option3}
            </label>
            <label
              onClick={() => setSelected(questions[currentIndex].option4)}
              className={`border border-black/40 p-2 w-52 rounded-xl flex justify-start tracking-wide duration-300 ${
                selected === questions[currentIndex].option4
                  ? "bg-blue-200"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="option"
                value={questions[currentIndex].option4}
              />
              {questions[currentIndex].option4}
            </label>
          </div>
        </form>

        <div className="flex gap-3 md:justify-between md:px-10 py-4 items-center">
          <div className="border-[1px] border-black/40 w-32 p-2 rounded-lg hidden md:flex gap-2 items-center hover:bg-[#257FFF] hover:text-white duration-300  cursor-pointer justify-center hover:border-0">
            <GrFormPreviousLink className="text-xl" />
            <button onClick={handlePrev} className="text-lg">
              Previous
            </button>
          </div>
          <div className="flex gap-5">
            <button
              className="border-[1px] border-black/40 w-fit p-2 rounded-lg flex justify-center items-center text-sm md:text-lg hover:bg-gray-300 duration-300"
              onClick={() => {
                window.scrollTo(0, 0);
                setShowSolution(true);
              }}
            >
              Check solution
            </button>
            <div className="border-[1px]  w-fit p-2 rounded-lg flex gap-2 items-center bg-[#257FFF] text-white duration-300  cursor-pointer hover:scale-[1.05] justify-center text-sm md:text-lg">
              <button
                onClick={() => {
                  window.scrollTo(0, 0);
                  setShowSolution(true);
                }}
              >
                Submit answer
              </button>
            </div>
          </div>
          <div
            className="border-[1px] border-black w-32 p-2 rounded-lg md:flex gap-2 
        hover:border-0 items-center hover:bg-[#257FFF] hover:text-white duration-300  cursor-pointer justify-center hidden "
          >
            <button onClick={handleNext} className="text-lg">
              Next
            </button>
            <GrFormNextLink className="text-xl" />
          </div>
        </div>
      </div>

      {showSolution && (
        <div
          className={` absolute top-0  solution-container mb-2 ${
            showSolution ? "right-0" : "right[-100%]"
          } border shadow-md shadow-black w-[60%] md:w-1/3 h-full md:h-[750px] overflow-auto bg-white duration-700`}
        >
          <div
            onClick={() => setShowSolution(false)}
            className="flex justify-end p-2 "
          >
            <ImCross className="text-xl" />
          </div>
          <Solution question={questions[currentIndex]} />
        </div>
      )}
    </div>
  );
}

export default QuestionCarousel;
