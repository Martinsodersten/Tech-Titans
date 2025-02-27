import express from "express";
import cors from "cors";
import { User, Account, Session } from "./types";

const users: User[] = [];

const accounts: Account[] = [];

const sessions: Session[] = [];

const app = express();

function generateOTP() {
  // Generera en sexsiffrig numerisk OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Node.js and Express.js with TypeScript");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.post("/users", (req, res) => {
  const { user, password } = req.body;
  users.push({ username: user, password: password });
  res.send("SEND OK")
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/accounts", (req, res) => {
  const { user, amount } = req.body;
  accounts.push({ username: user, amount: amount });
  res.send("SEND OK")
});

app.get("/accounts", (req, res) => {
  res.send(accounts);
});

app.post("/sessions", (req, res) => {
  const { username, password } = req.body;
  if (users.find((user) => user.username === username)?.password === password) {
    sessions.push({ username: username, token: generateOTP() });
  } 
  res.send("SEND OK")
});

app.get("/sessions", (req, res) => {
  res.send(sessions);
});


