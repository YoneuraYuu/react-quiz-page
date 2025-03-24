import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Button, Stack, styled } from "@mui/material";
import useQuizStore from "../store/quizStore";
import quizList from "../const/quiz";

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

  // ボタンを生成
  const createButton = () => {
    if (!quiz) return;

    //選択肢から先頭1文字ずつ取り出して一時配列を作る
    const tempChoicesArray = [
      quiz.correct_answer,
      ...quiz.incorrect_answers,
    ].map((v) => v.charAt(count));

    //一時配列から重複を削除したSetを作成し、足りない分をランダムな文字で埋める
    let choicesArraySet = new Set(tempChoicesArray);
    while (choicesArraySet.size !== tempChoicesArray.length) {
      let char = /[ァ-ヴー・]/.test(tempChoicesArray[0])
        ? getRandomKatakana()
        : getRandomHiragana();
      choicesArraySet.add(char);
    }

    console.log(count);
    //選択肢をシャッフルしてボタンを生成
    return shuffleArray(Array.from(choicesArraySet)).map((v, index) => {
      return (
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
      );
    });
  };

  return (
    <div>
      <CenteredBox>
        <CenteredBox>
          <StyledCard className="questionCard" variant="outlined">
            <CardContent>
              <h1>問題</h1>
              <p>{quiz?.question}</p>
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
            {createButton()}
          </Stack>
        </CenteredBox>
      </CenteredBox>
    </div>
  );
};

export default QuizPage;
