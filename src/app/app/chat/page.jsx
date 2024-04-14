"use client"
import { useState } from "react";

import AuthPage from "../../../components/modules/app/auth/authPage";
import ChatsPage from "../../../components/modules/app/chat/chatsPage";

function Chat() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default Chat;