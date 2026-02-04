const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // dynamic port for Render

app.use(cors());
app.use(express.json());

// Optional: log all requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, req.body);
  next();
});

const USERS_FILE = path.join(__dirname, "data", "users.json");
const PROPERTIES_FILE = path.join(__dirname, "data", "properties.json");

// Helper: read users safely
function readUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

// Helper: write users safely
function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Test route
app.get("/", (req, res) => {
  res.send("Backend running OK");
});

// SIGNUP
app.post("/api/signup", (req, res) => {
  const { name, email, phone, password, userType } = req.body;

  if (!name || !email || !phone || !password || !userType) {
    return res.status(400).json({ message: "All fields required" });
  }

  const users = readUsers();
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = { id: Date.now(), name, email, phone, password, userType };
  users.push(newUser);
  writeUsers(users);

  return res.status(201).json({ message: "User created", user: newUser });
});

// LOGIN
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login success", user });
});

// POST PROPERTY
app.post("/api/properties", (req, res) => {
  const {
    title, type, price, location, city, bedrooms, bathrooms, area,
    description, furnishing, amenities, ownerName, ownerPhone, ownerEmail
  } = req.body;

  if (!title || !type || !price || !location || !city || !bedrooms ||
      !bathrooms || !area || !description || !furnishing ||
      !ownerName || !ownerPhone || !ownerEmail) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let properties = [];
  try {
    const data = fs.readFileSync(PROPERTIES_FILE, "utf-8");
    properties = data ? JSON.parse(data) : [];
  } catch {
    properties = [];
  }

  const newProperty = {
    id: Date.now(), title, type, price, location, city, bedrooms,
    bathrooms, area, description, furnishing, amenities,
    ownerName, ownerPhone, ownerEmail,
    createdAt: new Date().toISOString()
  };

  properties.push(newProperty);
  fs.writeFileSync(PROPERTIES_FILE, JSON.stringify(properties, null, 2));

  res.status(201).json({ message: "Property posted successfully", property: newProperty });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
