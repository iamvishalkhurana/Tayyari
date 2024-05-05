import mongoose, { Schema } from "mongoose";
const questionSchema = Schema({
  question: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  answerImg: {
    type: String,
  },
  explanation: {
    type: String,
  },
});
export const Question = mongoose.model("Question", questionSchema);
