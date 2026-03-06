"use client";

import {
  Search,
  Settings,
  Send,
  Smile,
  Phone,
  Video,
  Pencil,
  Star,
  Circle,
} from "lucide-react";

const contacts = [
  { name: "小涵", status: "線上", mood: "今天心情很好～", active: true },
  { name: "阿哲", status: "忙碌", mood: "工作中", active: false },
  { name: "奶茶", status: "離開", mood: "晚點回來", active: false },
  { name: "小宇", status: "線上", mood: "你在嗎？", active: false },
  { name: "Mika", status: "隱藏", mood: "低調模式", active: false },
];

const messages = [
  { from: "小涵", text: "哈囉～你今天忙嗎？", time: "20:11", mine: false },
  { from: "我", text: "剛忙完，現在有空 😆", time: "20:12", mine: true },
  { from: "小涵", text: "那太好了！等等要不要聊天～", time: "20:12", mine: false },
  { from: "我", text: "可以啊，這介面很有以前即時通的感覺吧", time: "20:13", mine: true },
  { from: "小涵", text: "超像！很復古耶哈哈", time: "20:13", mine: false },
];

function StatusDot({ status }: { status: string }) {
  const color =
    status === "線上"
      ? "bg-green-400"
      : status === "忙碌"
      ? "bg-red-400"
      : status === "離開"
      ? "bg-yellow-400"
      : "bg-gray-400";

  return <span className={`inline-block h-3 w-3 rounded-full ${color} shadow`} />;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#8b7cf6_0%,#5848b8_35%,#2a235d_70%,#171433_100%)] p-4 text-white md:p-8">
      <div className="mx-auto flex h-[90vh] max-w-7xl overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        
        {/* 左側好友欄 */}
        <aside className="w-[320px] border-r border-white/15 bg-gradient-to-b from-[#6d5dd3]/90 to-[#463a9c]/90">
          <div className="border-b border-white/15 bg-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-400 text-xl font-bold text-[#382f7d] shadow-lg">
                Y!
              </div>
              <div>
                <div className="text-lg font-bold">好奇寶寶</div>
                <div className="text-sm text-white/80">我的狀態：線上</div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-white/15 px-3 py-2">
              <Search className="h-4 w-4 text-white/70" />
              <input
                placeholder="搜尋好友"
                className="w-full bg-transparent text-sm outline-none placeholder:text-white/60"
              />
            </div>
          </div>

          <div className="p-3">
            <div className="mb-3 flex items-center justify-between px-2">
              <h2 className="text-sm font-semibold tracking-wide text-white/80">
                我的好友
              </h2>
              <button className="rounded-full bg-white/15 p-2 hover:bg-white/20">
                <Settings className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2">
              {contacts.map((contact) => (
                <button
                  key={contact.name}
                  className={`w-full rounded-2xl border px-3 py-3 text-left transition ${
                    contact.active
                      ? "border-white/30 bg-white/20 shadow-lg"
                      : "border-transparent bg-white/8 hover:bg-white/15"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 font-bold">
                      {contact.name.slice(0, 1)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate font-semibold">{contact.name}</span>
                        <StatusDot status={contact.status} />
                      </div>
                      <div className="mt-1 text-xs text-white/70">{contact.status}</div>
                      <div className="truncate text-xs text-white/55">{contact.mood}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* 主聊天區 */}
        <section className="flex flex-1 flex-col bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))]">
          {/* 上方聊天標題 */}
          <header className="flex items-center justify-between border-b border-white/15 bg-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-300 to-violet-300 font-bold text-[#3d2f8f] shadow">
                小
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-bold">小涵</h1>
                  <Circle className="h-3 w-3 fill-green-400 text-green-400" />
                </div>
                <p className="text-sm text-white/70">個人狀態：今天心情很好～</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="rounded-2xl bg-white/12 p-3 hover:bg-white/20">
                <Phone className="h-4 w-4" />
              </button>
              <button className="rounded-2xl bg-white/12 p-3 hover:bg-white/20">
                <Video className="h-4 w-4" />
              </button>
              <button className="rounded-2xl bg-white/12 p-3 hover:bg-white/20">
                <Star className="h-4 w-4" />
              </button>
            </div>
          </header>

          {/* 訊息區 */}
          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-[22px] px-4 py-3 shadow-lg ${
                    msg.mine
                      ? "bg-gradient-to-br from-[#8f82ff] to-[#6558d8]"
                      : "bg-white/20"
                  }`}
                >
                  <div className="mb-1 text-xs text-white/65">
                    {msg.from} ・ {msg.time}
                  </div>
                  <div className="text-sm leading-6">{msg.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 輸入區 */}
          <footer className="border-t border-white/15 bg-white/10 p-4">
            <div className="rounded-[24px] border border-white/15 bg-white/12 p-3 shadow-inner">
              <textarea
                rows={3}
                placeholder="輸入訊息..."
                className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-white/50"
              />
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="rounded-xl bg-white/12 p-2 hover:bg-white/20">
                    <Smile className="h-4 w-4" />
                  </button>
                  <button className="rounded-xl bg-white/12 p-2 hover:bg-white/20">
                    <Pencil className="h-4 w-4" />
                  </button>
                </div>

                <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-400 px-5 py-2 font-semibold text-[#3d2f8f] shadow-lg transition hover:scale-[1.02]">
                  <Send className="h-4 w-4" />
                  傳送
                </button>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
