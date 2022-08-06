import * as React from "react";
import { useState } from "react";
import { SignIn } from "./pages/SignIn/SignIn";
import { ChatRoom } from "./pages/ChatRoom/ChatRoom";

function App() {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("token")));
  const [userId, setUserId] = useState();

  function handleAuth({ userId, token }) {
    setIsAuth(true);
    setUserId(userId);
    localStorage.setItem("token", token);
  }
  return (
    <>
      {!isAuth ? (
        <SignIn onAuth={handleAuth} />
      ) : (
        <ChatRoom title="Общая комната" />
      )}
    </>
  );
}

export default App;
