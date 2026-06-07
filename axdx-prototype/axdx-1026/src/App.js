import { useState } from "react";

// ⭐ 이미지 import
import look1 from "./images/look1.jpg";
import look2 from "./images/look2.jpg";
import look3 from "./images/look3.jpg";
import look4 from "./images/look4.jpg";
import look5 from "./images/look5.jpg";
import look6 from "./images/look6.jpg";
import look7 from "./images/look7.jpg";
import look8 from "./images/look8.jpg";
import look9 from "./images/look9.jpg";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [style, setStyle] = useState("");
  const [result, setResult] = useState([]);
  const [saved, setSaved] = useState([]);

  // ⭐ 룩북 데이터 (이미지 + 코디 세트)
  const outfits = [
    {
      image: look1,
      items: ["니트", "검정바지", "갈색구두"],
    },
    {
      image: look2,
      items: ["자켓", "티", "청바지"],
    },
    {
      image: look3,
      items: ["어두운 자켓", "니트", "청바지"],
    },
    {
      image: look4,
      items: ["흰 자켓", "셔츠", "청바지"],
    },
    {
      image: look5,
      items: ["슈트", "티", "운동화"],
    },
    {
      image: look6,
      items: ["후디", "자켓", "스니커즈"],
    },
    {
      image: look7,
      items: ["자켓", "티", "검정바지"],
    },
    {
      image: look8,
      items: ["청자켓", "흰 티", "검정바지"],
    },
    {
      image: look9,
      items: ["코트", "니트", "슬랙스"],
    },
  ];

  // 랜덤 선택
  const randomPick = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  // ⭐ 추천 생성 (3개)
  const generate = () => {
    return [
      randomPick(outfits),
      randomPick(outfits),
      randomPick(outfits),
    ];
  };

  // 추천 버튼
  const recommend = () => {
    if (!style) {
      alert("스타일 입력해주세요 (캐주얼 / 스트릿 / 미니멀)");
      return;
    }

    setResult(generate());
  };

  // 저장
  const save = (item) => {
    const exists = saved.some((s) => s.image === item.image);
    if (!exists) setSaved([...saved, item]);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>AI 패션 코디 추천</h1>

      {/* 입력 */}
      <div>
        <p>키</p>
        <input value={height} onChange={(e) => setHeight(e.target.value)} />

        <p>몸무게</p>
        <input value={weight} onChange={(e) => setWeight(e.target.value)} />

        <p>스타일</p>
        <input
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          placeholder="캐주얼 / 스트릿 / 미니멀"
        />

        <br />
        <br />

        <button onClick={recommend}>추천</button>
      </div>

      {/* 결과 */}
      <h2>추천 코디</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {result.map((outfit, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <img
              src={outfit.image}
              alt="코디"
              style={{
                width: "100%",
                borderRadius: 10,
              }}
            />

            <ul>
              {outfit.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <button onClick={() => save(outfit)}>저장</button>
          </div>
        ))}
      </div>

      {/* 저장 */}
      <h2 style={{ marginTop: 40 }}>저장된 코디</h2>
      <p>저장된 코디 수: {saved.length}</p>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {saved.map((outfit, idx) => (
          <div key={idx}>
            <img
              src={outfit.image}
              alt=""
              style={{ width: 120, borderRadius: 10 }}
            />
            <ul>
              {outfit.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}