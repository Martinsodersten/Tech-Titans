import express from "express";
import cors from "cors";
import { User, Account, Session } from "./types";
import mysql from "mysql2/promise";

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

app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  const result = await query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password]
  );
  res.send(result);
});

app.get("/users", async (req, res) => {
     const users = await query("SELECT * FROM users", "");
  res.send(users);
});


app.post("/sessions", async (req, res) => {
  const { username, password } = req.body;

  const user = (await query("SELECT * FROM users WHERE username = ?", [username]) as Array<Object>)[0] as User;
 
  console.log(user)
  if (user.password === password) {
    const generatedToken = generateOTP() 
    console.log(generatedToken)

    const result = await query(
      "INSERT INTO sessions (username, token) VALUES (?, ?)",
      [username, generatedToken]
    );

    res.status(200).send(generatedToken)
  } 
  else {
    res.status(401).send("Incorrect username or password")
  }
});

app.get("/sessions", (req, res) => {
  res.send(sessions)
});

// Databas uppkoppling
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banksajt",
  port: 3306, // Obs! 3306 för windowsanvändare
});

app.post("/accounts", (req, res) => {
  const {amount, token } = req.body;
  const foundSession = sessions.find((session) => session.token === token) 
  if (foundSession)
    {
    accounts.push({ username: foundSession.username, amount: amount });
    res.status(200).send(accounts)
  } 
  else res.status(401).send("Token or username not found")
});

app.get("/accounts", (req, res) => {
  const { token } = req.body
  const foundSession = sessions.find((session) => session.token === token) 
  if (foundSession)
    {
      const foundAccount = accounts.find((account => account.username === foundSession.username))
      res.send(foundAccount?.amount.toString());
  }
  res.send("No token found")
});


// Funktion för att göra förfrågan till databas
async function query(sql: any, params: any) {
  const [results] = await pool.execute(sql, params);
  return results;
}

