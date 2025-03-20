import React, { useEffect } from "react";
import useQuizStore from "../store/quizStore";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const { quiz, userAnswer, setUserAnswer } = useQuizStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!quiz) navigate("/");
  }, [navigate, quiz]);

  //ユーザーの答えと正解を比較
  const result = userAnswer === quiz?.correct_answer ? "正解" : "不正解";

  const handleClick = () => {
    setUserAnswer("");
    navigate("/");
  };

  return (
    <div>
      <h1>{result}</h1>
      <br />
      <p>答え：{quiz?.correct_answer}</p>
      <p>{quiz?.description}</p>
      <p>あなたの回答：{userAnswer}</p>
      <br />
      <button onClick={handleClick}>次の問題へ</button>
    </div>
  );
};

export default ResultPage;
