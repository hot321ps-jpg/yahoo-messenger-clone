"use client";

import { useState } from "react";
import FriendList from "@/components/FriendList";
import ChatWindow from "@/components/ChatWindow";

export default function Page(){

  const [friend,setFriend] = useState("小明")

  return(

  <div className="flex h-screen">

    <FriendList
    selected={friend}
    setSelected={setFriend}
    />

    <ChatWindow friend={friend}/>

  </div>

  )
}
