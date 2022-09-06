const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());


const { getCompliment, getFortune, getMotivation, getQuote, createNewPerson, deletePerson } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/motivation", getMotivation);
app.get("/api/quote", getQuote);
app.post("/api/person" , createNewPerson)
app.delete("/api/delete/:name" , deletePerson)






app.listen(4000, () => console.log("Server running on 4000"));
