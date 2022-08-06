import * as React from "react";
import { useState } from "react";
import { SignIn } from "./pages/SignIn/SignIn";
import { ChatRoom } from "./pages/ChatRoom/ChatRoom";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      {!isAuth ? (
        <SignIn setIsAuth={setIsAuth} />
      ) : (
        <ChatRoom title="Общая комната" />
      )}
    </>
  );
}

export default App;
