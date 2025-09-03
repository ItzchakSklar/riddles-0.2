import { Link, Route, Routes } from "react-router-dom";
import Game from "./Game.tsx";
import Register from "./signup.tsx";
import Login from "./Login.tsx";
import './Home.css';
export default function Home() {
  return (
    <>
    <div>RiddleQuest</div>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
    <Link to="/game">Game</Link>
    <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
    </Routes>
    </>
  ) 
}