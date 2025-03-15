import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import quizList, { Quiz } from "../const/quiz";

const QuizPage = () => {
  const [userAnser, setUserAnswer] = React.useState("");
  const navigate = useNavigate();
  const [quiz, setQuiz] = React.useState<Quiz>(
    quizList[Math.floor(Math.random() * quizList.length)]
  );
  // ボタン入力カウント
  const [count, setCount] = React.useState(0);

  // クイズをquizListからランダムに選択

  useEffect(() => {
    if (quizList.length > 0) {
      setQuiz(quizList[Math.floor(Math.random() * quizList.length)]);
    }
  }, []);

  // 問題文と答えを比較
  React.useEffect(() => {
    if (!quiz) return;
    if (
      userAnser === quiz.correct_answer ||
      quiz.correct_answer.length === userAnser.length
    ) {
      // ページ遷移
      navigate("/result");
    }
  }, [navigate, quiz, userAnser]);

  // ボタン押下時の処理
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
    console.log(count);
    setUserAnswer(userAnser + e.currentTarget.textContent);
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
      <p>答え：{userAnser}</p>
      <div className="button">{createButton()}</div>
    </div>
  );
};

export default QuizPage;
