import mongoose from "mongoose";
import { Question } from "../models/questionModel.js";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.js";

const getAllQuestions = async (req, res) => {
  const questions = await Question.find();
  if (!questions) {
    throw new Error("Question does not exist");
  }
  return res.status(200).json(questions);
};

const addQuestion = async (req, res) => {
  const { question, option1, option2, option3, option4, answer, explanation } =
    req.body;

  const answerImgLocalPath = req.file.path;

  if (answerImgLocalPath) {
    const answerImg = await uploadOnCloudinary(answerImgLocalPath);
    if (!answerImg) {
      throw new Error("Error occured while uploading on Cloudinary");
    }

    const ques = await Question.create({
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
      explanation,
      answerImg: answerImg.url,
    });

    if (!ques) {
      throw new Error("Internal server Error");
    }

    return res.status(200).json(ques);
  } else {
    const ques = await Question.create({
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
      explanation,
    });

    if (!ques) {
      throw new Error("Internal server Error");
    }

    return res.status(200).json(ques);
  }
};

export { getAllQuestions, addQuestion };
