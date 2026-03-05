"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function ChatWindow() {

const [messages,setMessages] = useState<any[]>([])
const [input,setInput] = useState("")

useEffect(()=>{

loadMessages()

const channel = supabase
.channel("messages")
.on(
"postgres_changes",
{
event:"INSERT",
schema:"public",
table:"messages"
},
(payload)=>{
setMessages((prev)=>[...prev,payload.new])
}
)
.subscribe()

return ()=> supabase.removeChannel(channel)

},[])

async function loadMessages(){

const {data} = await supabase
.from("messages")
.select("*")
.order("created_at")

setMessages(data||[])

}

async function send(){

if(!input) return

await supabase
.from("messages")
.insert({
user:"guest",
message:input
})

setInput("")

}

return(

<div className="flex flex-col flex-1">

<div className="p-4 bg-purple-700">
Yahoo Messenger
</div>

<div className="flex-1 p-4 space-y-2 overflow-y-auto">

{messages.map((m)=>(
<div key={m.id} className="bg-purple-500 px-3 py-2 rounded w-fit">
{m.user}: {m.message}
</div>
))}

</div>

<div className="p-4 flex gap-2">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
className="flex-1 p-2 bg-purple-900 rounded"
/>

<button
onClick={send}
className="bg-yellow-400 text-black px-4 rounded"
>
送出
</button>

</div>

</div>

)

}
