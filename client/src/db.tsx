import type {Riddle} from "./types/Riddle.ts"

export type User = {
  name: string;
  email: string;
  password: string;
};

export const mockUsers: User[] = [
  { name: "Admin", email: "admin@example.com", password: "123456" },
  { name: "dudu", email: "dudu@example.com", password: "pass" },
];


export async function getRiddels(): Promise<Riddle[]> {
  const PORT = import.meta.env.VITE_PORT || 3005;
  try {
    const res = await fetch(`http://localhost:${PORT}/riddles/all`);
    if (!res.ok) throw new Error("HTTP error " + res.status);
    const data: Riddle[] = await res.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
    return [];
  }
}