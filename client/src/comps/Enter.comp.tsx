import { useRef } from "react";

export function Enter({setPage}:{setPage:Function}) {
  const codeRef = useRef<HTMLInputElement>(null); 

  function enterCode() {
    const value = codeRef.current?.value || "";
    if (value === "1234") {
      setPage("Admin")
    } else {
      alert(value + " : isn't correct");
    }
    if (codeRef.current) {
      codeRef.current.value = "";
    }
  }
  return (
    <>
      <button onClick={() => setPage("riddles")}>play game</button>
      <input type="text" ref={codeRef} placeholder="enter admin code" />
      <button onClick={enterCode}>enter admin </button>
    </>
  );
}
