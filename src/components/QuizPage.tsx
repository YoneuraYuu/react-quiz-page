import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQuizStore from "../store/quizStore";
import quizList from "../const/quiz";

const QuizPage = () => {
  const { quiz, userAnswer, setQuiz, setUserAnswer } = useQuizStore();
  const navigate = useNavigate();
  const [count, setCount] = React.useState(0);

  //初期表示
  useEffect(() => {
    setQuiz(quizList[Math.floor(Math.random() * quizList.length)]);
    setUserAnswer("");
  }, [setQuiz]);

  // 問題文と答えを比較
  React.useEffect(() => {
    if (!quiz) return;
    if (
      userAnswer === quiz.correct_answer ||
      userAnswer.length === quiz.correct_answer.length
    ) {
      // ページ遷移
      navigate("/result");
    }
  }, [navigate, quiz, userAnswer]);

  // ボタン押下時の処理
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
    console.log(count);
    setUserAnswer(userAnswer + e.currentTarget.textContent);
  };

  // 配列をシャッフルする関数
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // ボタンを生成
  const createButton = () => {
    if (!quiz) return;
    //選択肢から先頭1文字ずつ取り出して配列を作る
    const choicesArray = [quiz.correct_answer, ...quiz.incorrect_answers].map(
      (v) => v.charAt(count)
    );
    console.log(count);
    //選択肢をシャッフルしてボタンを生成
    return shuffleArray(choicesArray).map((v, index) => {
      return (
        <button key={index} onClick={handleClick}>
          {v}
        </button>
      );
    });
  };

  return (
    <div>
      <h1>問題</h1>
      <p>{quiz?.question}</p>
      <p>答え：{userAnswer}</p>
      <div className="button">{createButton()}</div>
    </div>
  );
};

export default QuizPage;
