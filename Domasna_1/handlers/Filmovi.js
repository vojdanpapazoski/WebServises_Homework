const filmovi = require("../package/filmovi-Sch/Schema")

    // getting all movies 

const getALLmovies = async (req,res) => {
  try {
     const query = {...req.query};
     let querySTR = JSON.stringify(query);
     querySTR = querySTR.replace(
      /\b(gte|gt|lte|lt)\b/g, 
      (match) => `$${match}`
     );
  const parsed = JSON.parse(querySTR);
  const moviesQ = await filmovi.find(parsed);
  res.status(200).json({
  status:"All movies sucessfully loaded",
  data: moviesQ
  });
  } catch (err) {
  res.status(404).json({
  status: "Error getting the movies Database",
  message: err
  });
};
};



    //getting one movie

const getOneMovie = async (req,res) => {
  try {
    const create = await filmovi.findOne(req.body);
    res.status(200).json({
    status: "Movie found sucesfully",
    data:create
    });
    } catch(err) {
    res.send(404).json({
    status:"There was a error creating a Movie",
    message:err
    });
  };
};

    // creating a movie 

const createMovie = async (req,res) => {
  try {
    const newMovie = await filmovi.create(req.body);
    res.status(200).json({
    status: "Movie was sucesfully created",
    data: newMovie
    });
  } catch (err) {
    res.status(400).json({
    status: "Error durng Creating a movie",
    message: err
    });
  }
};

    // updating a movie

const updateMovies = async (req,res) => {
    try {
    const updated = await filmovi.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators: true
    });
    res.status(200).json({
    status:"The Movie was updated",
    data: updated
    });
    } catch (err) {
    res.status(400).json({
    status: "Error occured during updating",
    message: err
    });
  };
};

    // deleting a movie

const deleteMovie = async (req,res) => {
    try {
    const deleted = await filmovi.findByIdAndDelete(req.params.id);
    res.status(200).json({
    status:"The Movie was removed from database",
    data: deleted
    });
    } catch (err) {
    res.status(404).json({
    status:"Error during removing a movie",
    message: err
    });
  };
};


    // Exportiranje na filmovite
module.exports = {
  getALLmovies,
  getOneMovie,
  createMovie,
  updateMovies,
  deleteMovie
}





