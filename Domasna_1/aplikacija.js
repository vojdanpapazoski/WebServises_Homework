    //gi povikuvame paketite
const express = require('express');
const db = require('./package/db/index');

    //inicijalizirame aplikacija
const app = express();

    //middlewares
app.set("view engine","ejs");                    //viewenginot na express app da e setiran na EJS 
app.use(express.json());                         // parsira incoming request-i vo json data 
app.use(express.urlencoded({extended:true}));    //parsira incoming request-i vo json data 

    //izvrsuvanje na init funkcija za konektiranje so DB
db.init();

    // gi importirame funkciite od Handler
const { getALLmovies,
    getOneMovie,
    createMovie,
    updateMovies,
    deleteMovie } = require ("./handlers/Filmovi");     

    //Setiranje na ruti
    
app.get("/api/films/:title", getOneMovie);
app.get("/api/films", getALLmovies);
app.post("/api/films", createMovie);
app.patch("/api/films/:id", updateMovies);
app.delete("/api/films/:id", deleteMovie);


    //slusanje
app.listen(process.env.PORT, (err) => {
if (err) return console.error("Server is NOT STARTED");
console.log(`Server launched on port ${process.env.PORT}`);
});