import React, { useState } from "react";
import useQuizInputStore from "../store/quizInputStore";
import { Quiz } from "../types/quiz";
import useControllStore from "../store/controllStore";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [parsedContent, setParsedContent] = useState<string[][]>([]); // 行ごとにタブで分割した配列
  const { setQuizInputs } = useQuizInputStore();
  const { setInputFlag } = useControllStore();
  const navigate = useNavigate();

  // ファイルが選択されたときの処理
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 選択されたファイルを取得
    if (file) {
      if (file.type !== "text/plain") {
        alert("テキストファイルのみアップロード可能です。");
        return;
      }

      const reader = new FileReader(); // FileReaderを使用してファイルを読み取る
      reader.onload = (e) => {
        const content = e.target?.result as string; // ファイル内容を取得

        // ファイル内容を行ごとに分割し、さらにタブで分割
        const lines = content.split("\n"); // 行ごとに分割
        const parsed = lines.map((line) => line.split("\t")); // 各行をタブで分割
        setParsedContent(parsed); // 配列を状態に保存
      };
      reader.onerror = () => {
        alert("ファイルの読み取り中にエラーが発生しました。");
      };
      reader.readAsText(file); // ファイルをテキストとして読み取る
    }
  };

  // Inputボタン押下時の処理
  const handleInputButtonClick = () => {
    const quizArray: Quiz[] = parsedContent
      .filter((line) => line[0] && line[1]) // questionとcorrect_answerが空でない行をフィルタリング
      .map((line, index) => {
        const [question, correct_answer, description, ...incorrect_answers] =
          line;

        return {
          id: index + 1, // IDを採番
          question: question || "", // questionを格納（空の場合は空文字列）
          correct_answer: correct_answer || "", // correct_answerを格納（空の場合は空文字列）
          description: description || "", // descriptionを格納（空の場合は空文字列）
          incorrect_answers: incorrect_answers.filter(
            (answer) => answer !== ""
          ), // 空文字列を除外して格納
        };
      });

    setQuizInputs(quizArray); // quizInputsに格納
    alert("クイズデータが保存されました！");
    setInputFlag(true); // Inputフラグをtrueに設定
    console.log(quizArray); // デバッグ用にコンソールに出力
    navigate("/"); // トップページに遷移
  };

  return (
    <div>
      <h1>みんはや作問調整ページ</h1>
      <input type="file" accept=".txt" onChange={handleFileChange} />{" "}
      {/* ファイル選択 */}
      <div>
        <h2>入力内容:</h2>
        <ul>
          {parsedContent.map((line, index) => (
            <li key={index}>
              {line.map((cell, cellIndex) => (
                <span key={cellIndex}>
                  {cell}
                  {cellIndex < line.length - 1 && " | "}{" "}
                  {/* セル間に区切りを表示 */}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleInputButtonClick}>Inputボタン</button>
    </div>
  );
};

export default Input;
