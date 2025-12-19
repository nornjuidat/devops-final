const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.send("Server is running!");
});

   

app.get("/api/test", (req, res) => {
    res.json({ message: "API OK" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
