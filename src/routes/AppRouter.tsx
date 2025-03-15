import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizPage from "../components/QuizPage";
import { ErrorPage } from "../components/ErrorPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
