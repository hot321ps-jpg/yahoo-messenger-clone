const friends = [
  { name: "小明", online: true },
  { name: "小美", online: true },
  { name: "阿強", online: false },
];

export default function FriendList({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (name: string) => void;
}) {
  return (
    <div className="w-64 bg-purple-800">

      <div className="p-4 font-bold">
        Yahoo Messenger
      </div>

      {friends.map((f) => (
        <div
          key={f.name}
          onClick={() => setSelected(f.name)}
          className="p-3 cursor-pointer hover:bg-purple-700 flex justify-between"
        >
          <span>{f.name}</span>

          <span
            className={`w-3 h-3 rounded-full ${
              f.online ? "bg-green-400" : "bg-gray-400"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
