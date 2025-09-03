import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { getRiddels } from "../db.tsx";
import type { Riddle } from "../types/Riddle";

export default function Game() {
  const [card, setCard] = useState<ReactNode | null>(null);
  const [riddle, setRiddle] = useState<Riddle | null>(null);
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  getRiddels().then((data) => {
    setRiddles(data);
    if (data.length > 0) {
      setRiddle(data[0]);   
    }
    setLoading(false);
  });
}, []);
  if (riddles.length == 0) {
    console.error("Error loading riddles:");
  }
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!riddle) {
    return <p style={{ color: "red" }}>Error loading riddles</p>;
  }
  
  if (!riddle) {
    setCard(<p>Loading...</p>)
  }
  else{
    setCard(
      <>
        <p>{riddle ? riddle.name : "Loading..."}</p>
        <p>{riddle ? riddle.taskDescription : "Loading..."}</p>
        <button onClick={enser}>enser</button>
        <button className="back">
          back to menu
        </button>
      </>
    );
}
  return (
    <div style={{ color: "red" }}>
      game
      {card}
    </div>
  );
}

function enser() {
  return <></>;
}
// {r.id, r.name, r.taskDescription, r.correctAnswer}
