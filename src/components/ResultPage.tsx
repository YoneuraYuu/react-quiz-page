import React, { useEffect } from "react";
import useQuizStore from "../store/quizStore";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, styled, Typography, useTheme } from "@mui/material";

const StyledBox = styled(Box)`
  text-align: center;
  margin: ${(props) => props.theme.spacing(2)};
`;

const ResultPage = () => {
  const { quiz, userAnswer, setUserAnswer } = useQuizStore();
  const navigate = useNavigate();
  const theme = useTheme();

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
      <StyledBox>
        <StyledBox>
          <Card
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <h1>{result}</h1>
            <br />
            <Typography variant="body1">
              <strong>答え：{quiz?.correct_answer}</strong>
            </Typography>
            <Typography variant="body1">{quiz?.description}</Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
              <strong>あなたの回答：{userAnswer}</strong>
            </Typography>
          </Card>
        </StyledBox>
        <StyledBox>
          <Button variant="contained" onClick={handleClick}>
            次の問題へ
          </Button>
        </StyledBox>
      </StyledBox>
    </div>
  );
};

export default ResultPage;
