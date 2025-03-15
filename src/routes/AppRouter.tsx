import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizPage from "../components/QuizPage";
import { ErrorPage } from "../components/ErrorPage";
import ResultPage from "../components/ResultPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
