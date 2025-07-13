import React, { useEffect, useState } from "react";
import "./App.css";

const cards = [
  { id: 1, title: "سبحان الله", count: 100, backgroundColor: "#E3F2FD" },
  { id: 2, title: "الحمد لله", count: 33, backgroundColor: "#FFF3E0" },
  { id: 3, title: "لا إله إلا الله", count: 7, backgroundColor: "#E8F5E9" },
  { id: 4, title: "الله أكبر", count: 10, backgroundColor: "#FCE4EC" },
  { id: 5, title: "سبحان الله وبحمده", count: 100, backgroundColor: "#F3E5F5" },
  { id: 6, title: "أستغفر الله", count: 33, backgroundColor: "#E0F7FA" },
  {
    id: 7,
    title: "اللهم صل وسلم على نبينا محمد",
    count: 10,
    backgroundColor: "#FFFDE7",
  },
  {
    id: 8,
    title: "لا حول ولا قوة إلا بالله",
    count: 33,
    backgroundColor: "#F9FBE7",
  },
  { id: 9, title: "سبحان الله العظيم", count: 100, backgroundColor: "#E1F5FE" },
  { id: 10, title: "رضيت بالله رباً", count: 7, backgroundColor: "#FFF8E1" },
  {
    id: 11,
    title: "رضيت بالإسلام ديناً",
    count: 7,
    backgroundColor: "#E0F2F1",
  },
  { id: 12, title: "رضيت بمحمد نبياً", count: 7, backgroundColor: "#F3E5F5" },
  {
    id: 13,
    title: "يا حي يا قيوم برحمتك أستغيث",
    count: 10,
    backgroundColor: "#FCE4EC",
  },
  {
    id: 14,
    title: "حسبي الله لا إله إلا هو",
    count: 33,
    backgroundColor: "#FFF3E0",
  },
  {
    id: 15,
    title: "اللهم إني أسألك الجنة",
    count: 10,
    backgroundColor: "#E8F5E9",
  },
  {
    id: 16,
    title: "اللهم نجني من النار",
    count: 10,
    backgroundColor: "#FFFDE7",
  },
  {
    id: 17,
    title: "اللهم أنت ربي لا إله إلا أنت",
    count: 7,
    backgroundColor: "#E1F5FE",
  },
  {
    id: 18,
    title: "اللهم اجعلني من التوابين",
    count: 33,
    backgroundColor: "#E0F7FA",
  },
  {
    id: 19,
    title: "اللهم اجعلني من المتطهرين",
    count: 33,
    backgroundColor: "#F9FBE7",
  },
  {
    id: 20,
    title: "اللهم أعني على ذكرك",
    count: 10,
    backgroundColor: "#F3E5F5",
  },
  {
    id: 21,
    title: "اللهم أعني على شكرك",
    count: 10,
    backgroundColor: "#FFF8E1",
  },
  {
    id: 22,
    title: "اللهم أعني على حسن عبادتك",
    count: 10,
    backgroundColor: "#E0F2F1",
  },
  { id: 23, title: "اللهم اشرح صدري", count: 33, backgroundColor: "#E8F5E9" },
  { id: 24, title: "اللهم يسر أمري", count: 33, backgroundColor: "#FCE4EC" },
  {
    id: 25,
    title: "اللهم اجعلني من الحامدين",
    count: 100,
    backgroundColor: "#FFF3E0",
  },
  {
    id: 26,
    title: "اللهم اجعلني من الشاكرين",
    count: 100,
    backgroundColor: "#E3F2FD",
  },
  {
    id: 27,
    title: "اللهم اجعلني من عبادك الصالحين",
    count: 100,
    backgroundColor: "#E1F5FE",
  },
  {
    id: 28,
    title: "اللهم ارزقني حسن الخاتمة",
    count: 10,
    backgroundColor: "#E0F7FA",
  },
  {
    id: 29,
    title: "اللهم احفظني من بين يدي",
    count: 10,
    backgroundColor: "#FFFDE7",
  },
  {
    id: 30,
    title: "اللهم احفظني من خلفي",
    count: 10,
    backgroundColor: "#F3E5F5",
  },
];

function Azkar() {
  const [azkar, setAzkar] = useState([]);

  useEffect(() => {
    const updated = cards.map((card) => ({
      ...card,
      remaining: card.count,
      initialRemaining: card.count,
    }));
    setAzkar(updated);
  }, []);

  const handleClick = (index) => {
    setAzkar((prevAzkar) =>
      prevAzkar.map((card, i) =>
        i === index && card.remaining > 0
          ? { ...card, remaining: card.remaining - 1 }
          : card
      )
    );
  };

  const handleReset = (e, index) => {
    e.stopPropagation();
    setAzkar((prevAzkar) =>
      prevAzkar.map((card, i) =>
        i === index ? { ...card, remaining: card.initialRemaining } : card
      )
    );
  };

  return (
    <div className="azkar-cards">
      {azkar.map((card, index) => (
        <div
          key={card.id}
          className="card"
          onClick={() => handleClick(index)}
          style={{ backgroundColor: card.backgroundColor, cursor: "pointer" }}
        >
          <p className="zekr">{card.title}</p>
          <div className="icon" onClick={(e) => handleReset(e, index)}>
            🔄
          </div>
          <h2>{card.remaining}</h2>
          <p>{card.remaining}</p>
        </div>
      ))}
    </div>
  );
}

export default Azkar;
