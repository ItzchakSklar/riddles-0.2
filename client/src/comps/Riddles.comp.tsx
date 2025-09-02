import { useState, useEffect,useRef } from "react";

export function Riddles({ setPage }: { setPage: Function }) {
  const [riddles, setRiddles] = useState<any[]>([]);
  const [riddleIndex, setRiddleIndex] = useState(0);
  const codeRef = useRef<HTMLInputElement>(null);

  const PORT = import.meta.env.VITE_PORT || 3005;

  useEffect(() => {
    async function fetchRiddles() {
      try {
        const res = await fetch(`http://localhost:${PORT}/riddles/all`);
        if (!res.ok) throw new Error("HTTP error " + res.status);
        const data = await res.json();
        setRiddles(data);
        console.log("Loaded riddles:", data);
      } catch (err) {
        console.error("Error:", err);
      }
    }
    fetchRiddles();
  }, []);

  function enserAndClick() {
    const value = codeRef.current?.value || "";
    let right = false;
    if (value == riddles[riddleIndex].correctAnswer) {
      right = true;
    }
    if (codeRef.current) {codeRef.current.value = ""};
    if (riddleIndex < riddles.length - 1) {
      setRiddleIndex(riddleIndex + 1);
    }
    if(right){
      return (
        <>
        <p>right enser</p>
        <button onClick={()=>{setPage("riddles")}} >continu</button>
        </>
      )
    }
    
  }
  if (riddles.length === 0) {
    return (
      <>
        <p>loding riddles</p>;
        <button onClick={() => setPage("enter")}>back to menu</button>
      </>
    );
  }

  return (
    <>
      <p>{riddles[riddleIndex].name}</p>
      <p>{riddles[riddleIndex].taskDescription}</p>
      <input type="text" ref={codeRef} placeholder="enter your enser" />
      <button onClick={enserAndClick}>enser</button>
      <button className="back" onClick={() => setPage("enter")}>
        back to menu
      </button>
    </>
  );
}

// r.id, r.name, r.taskDescription, r.correctAnswer
