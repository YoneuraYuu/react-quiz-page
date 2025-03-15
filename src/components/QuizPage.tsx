import React from "react";

const QuizPage = () => {
  const [userAnser, setUserAnswer] = React.useState("");

  // ボタン押下時の処理
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUserAnswer(userAnser + e.currentTarget.textContent);
  };

  // 問題文と答えを比較
  React.useEffect(() => {
    if (userAnser === "マロリー") {
      // ページ遷移
      window.location.href = "/result";
    }
  }, [userAnser]);

  return (
    <div>
      <h1>問題</h1>
      <p>
        「なぜ山に登るのか」と問われ「そこに山があるから」と答えた、有名な登山家は誰でしょう？
      </p>
      <p>こたえ：{userAnser}</p>
      <button onClick={handleClick}>リ</button>
      <button onClick={handleClick}>マ</button>
      <button onClick={handleClick}>ー</button>
      <button onClick={handleClick}>ロ</button>
    </div>
  );
};

export default QuizPage;
