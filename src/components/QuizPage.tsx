import React, { JSX, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Button,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import useQuizStore from "../store/quizStore";
import quizList from "../const/quiz";
import useQuizInputStore from "../store/quizInputStore";
import useControllStore from "../store/controllStore";

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
`;

const AnswerCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.palette.primary.contrastText};
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
`;

const CenteredBox = styled(Box)`
  text-align: center;
  margin: ${(props) => props.theme.spacing(2)};
`;

const CenteredCardContent = styled(CardContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 25px;
`;

const CHOICES_NUM = 4; //選択肢の数

const QuizPage = () => {
  const { quiz, userAnswer, setQuiz, setUserAnswer, setPushPoint } =
    useQuizStore();
  const { quizInputs, nextIndex, incrementIndex } = useQuizInputStore();
  const { inputFlag } = useControllStore(); // controllStoreからinputFlagを取得
  const navigate = useNavigate();
  const [count, setCount] = React.useState(0);
  const [displayedQuestion, setDisplayedQuestion] = React.useState(""); //表示中の質問
  const [buttons, setButtons] = React.useState<JSX.Element[]>([]); //回答ボタンの配列
  const [showButtons, setShowButtons] = React.useState(false); //ボタンの表示状態
  const intervalId = React.useRef<NodeJS.Timeout | null>(null); // タイマーID

  // ボタン押下時の処理
  // createButtonでhandleClickを利用しているので、useCallbackでメモ化する
  // 依存配列にcountを追加することで、countが変わったときにhandleClickが再生成される
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setCount(count + 1);
      console.log(count);
      setUserAnswer(userAnswer + e.currentTarget.textContent);
    },
    [count, setUserAnswer, userAnswer]
  );

  // ボタンを生成する関数をuseCallbackでメモ化
  // useEffect内でcreateButtonを使用するため、依存配列にquizとcountを追加
  const createButton = React.useCallback((): JSX.Element[] => {
    if (!quiz) return []; // quizがundefinedの場合は空の配列を返す

    const tempChoicesArray = [
      quiz.correct_answer,
      ...quiz.incorrect_answers.map((answer) => answer.trim()), // 改行や空白を削除
    ].map((v) => v.charAt(count));

    let choicesArraySet = new Set(tempChoicesArray.filter((v) => v));
    while (choicesArraySet.size !== CHOICES_NUM) {
      let char = /[ァ-ヴー・]/.test(tempChoicesArray[0])
        ? getRandomKatakana()
        : /[ぁ-ん]/.test(tempChoicesArray[0])
        ? getRandomHiragana()
        : /[a-z]/.test(tempChoicesArray[0])
        ? getRandomAlphabet()
        : getRandomNumber();
      choicesArraySet.add(char);
    }

    return shuffleArray(Array.from(choicesArraySet)).map((v, index) => (
      <Button
        key={index}
        onClick={handleClick}
        variant="contained"
        sx={{
          width: "100px",
          height: "100px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {v}
      </Button>
    ));
  }, [quiz, count, handleClick]);

  //初期表示
  useEffect(() => {
    let selectedQuiz = quizList[Math.floor(Math.random() * quizList.length)];

    // inputFlagがtrueの場合、quizInputStoreからクイズを取得
    // ただしquizInputStoreがnullの場合、もとの設定通りquizListからランダムに取得
    if (inputFlag && quizInputs) {
      // inputFlagがtrueの場合、quizInputStoreからクイズを取得
      selectedQuiz = quizInputs[nextIndex];
    }

    setQuiz(selectedQuiz);
    setUserAnswer("");
    setDisplayedQuestion("");
    console.log(selectedQuiz);

    //タイマーを設定
    if (selectedQuiz?.question) {
      const id = setInterval(() => {
        setDisplayedQuestion((prev) => {
          const nextChar = selectedQuiz.question.charAt(prev.length);
          return prev + nextChar;
        });
      }, 200);
      intervalId.current = id;
    }

    // strictモードで2回実行されるので、タイマーをクリアする必要がある
    // 2回目のuseEffectでクリーンアップ関数を実行することで、タイマーをクリアする
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [inputFlag, nextIndex, quizInputs, setQuiz, setUserAnswer]);

  // quizが変更されたときにボタンを生成
  // countが変更されたときにボタンを再生成する
  useEffect(() => {
    if (quiz) {
      setButtons(createButton());
    }
  }, [quiz, count, createButton]); //countを依存配列に追加

  //表示文字列を監視し、もとのクイズ文と一致したらタイマー停止
  useEffect(() => {
    if (displayedQuestion === quiz?.question) {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    }
  }, [displayedQuestion, quiz, intervalId]);

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
  }, [incrementIndex, inputFlag, navigate, quiz, quizInputs, userAnswer]);

  // 配列をシャッフルする関数
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // ランダムなひらがなを生成する関数
  const getRandomHiragana = () => {
    const hiragana =
      "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
    return hiragana.charAt(Math.floor(Math.random() * hiragana.length));
  };

  // ランダムなカタカナを生成する関数
  const getRandomKatakana = () => {
    const katakana =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    return katakana.charAt(Math.floor(Math.random() * katakana.length));
  };

  //ランダムなアルファベットを生成する関数
  const getRandomAlphabet = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  };

  //ランダムな数字を生成する関数
  const getRandomNumber = (): string => {
    return Math.floor(Math.random() * 10).toString();
  };

  // 「Push」ボタンを押下したときの処理
  const handlePushClick = () => {
    // クイズの文章生成をストップ
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    setPushPoint(displayedQuestion); // 回答を保存
    setShowButtons(true); // 回答ボタンを表示
    setButtons(createButton()); // ボタンを生成
  };

  return (
    <div>
      <CenteredBox>
        <CenteredBox>
          <StyledCard className="questionCard" variant="outlined">
            <CardContent
              sx={{
                display: "flex", // フレックスボックスを使用
                flexDirection: "column", // 縦方向に配置
                justifyContent: "center", // 水平方向に中央揃え
                alignItems: "center", // 垂直方向に中央揃え
                textAlign: "center", // テキストの中央揃え
              }}
            >
              <h1>問題</h1>
              <Typography
                variant="body1"
                sx={{
                  wordWrap: "break-word", // 長い単語を折り返す
                  width: "530px", // 必要に応じて幅を調整
                  textAlign: "left",
                  fontSize: "16px",
                }}
              >
                {displayedQuestion}
              </Typography>
            </CardContent>
          </StyledCard>
        </CenteredBox>
        <CenteredBox>
          <AnswerCard className="answerCard" variant="outlined">
            <CenteredCardContent>
              <p>答え：{userAnswer}</p>
            </CenteredCardContent>
          </AnswerCard>
        </CenteredBox>
        <CenteredBox
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: 2,
            my: 2,
          }}
        >
          <Stack direction="row" spacing={2}>
            {!showButtons ? (
              <Button
                variant="contained"
                onClick={handlePushClick} // 「Push」ボタンを押下で回答ボタンを表示
              >
                Push
              </Button>
            ) : (
              buttons // 回答ボタンを表示
            )}
          </Stack>
        </CenteredBox>
      </CenteredBox>
      <button
        onClick={() => {
          if (intervalId.current) {
            clearInterval(intervalId.current);
          }
          navigate("/input"); // Inputボタン押下でInputページに遷移
        }}
      >
        input画面へ
      </button>
    </div>
  );
};

export default QuizPage;
