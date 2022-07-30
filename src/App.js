import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn/SignIn";
import { LogIn } from "./pages/LogIn/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <SignIn title="Регистрация" link="Вход" path="/login" indent="14" />
          }
        />
        <Route
          path="/login"
          element={
            <LogIn title="Вход" link="Регистрация" path="/" indent="27" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
