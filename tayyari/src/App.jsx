import React, { useReducer, useEffect } from "react";
import axios from "axios";
import QuestionCarousel from "./QuestionCarousel";

const initialState = {
  loading: true,
  error: "",
  questions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        questions: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: action.payload,
        questions: [],
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://tayyari-1ir1.onrender.com/api/v1/ques"
        );
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: "Error fetching data" });
      }
    };

    fetchQuestions();
  }, []);

  return (
    <>
      {state.loading ? (
        <p>Backend is Hosted on FREE Resources , Please Wait :). Loading...</p>
      ) : state.error ? (
        <p>{state.error}</p>
      ) : (
        <QuestionCarousel questions={state.questions} />
      )}
    </>
  );
}

export default App;
