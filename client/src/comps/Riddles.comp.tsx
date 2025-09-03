








// import { useState, useEffect } from "react";

// export function Riddles({ setPage }: { setPage: Function }) {
//   const [riddles, setRiddles] = useState<any[]>([]);
//   const [riddleIndex, setRiddleIndex] = useState(0);

//   const PORT = import.meta.env.VITE_PORT || 3005;
  
//   useEffect(() => {
//     async function fetchRiddles() {
//       try {
//         const res = await fetch(`http://localhost:${PORT}/riddles/all`);
//         if (!res.ok) throw new Error("HTTP error " + res.status);
//         const data = await res.json();
//         setRiddles(data);
//         console.log("Loaded riddles:", data);
//       } catch (err) {
//         console.error("Error:", err);
//       }
//     }

//     fetchRiddles();
//   }, []);

//   if (riddles.length === 0) {
//     return (
//       <>
//         <p>loding riddles</p>;
//         <button onClick={() => setPage("enter")}>back to menu</button>
//       </>
//     );
//   }

//   return (
//     <>
//       <p>{riddles[riddleIndex].name}</p>
//       <p>{riddles[riddleIndex].taskDescription}</p>
//       <button
//         onClick={() => {
//           if (riddleIndex < riddles.length - 1) {
//             setRiddleIndex(riddleIndex + 1);
//           }
//         }}
//       >
//         enser
//       </button>
//       <button className="back" onClick={() => setPage("enter")}>
//         back to menu
//       </button>
//     </>
//   );
// }
// r.id, r.name, r.taskDescription, r.correctAnswer
