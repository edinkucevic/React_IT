import React, { useEffect, useState } from "react";
import classes from "./HomePage.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardWatch from "../../Card/CardWatch";
import axios from "axios";



const Movies = () => {
  const [showed, setShowed] = useState([]);
  const getMovies = () => {
    axios
      .get(`https://imdb-api.com/en/API/Top250Movies/k_khlg45sc`)
      .then((res) => {
        setShowed(res.data.results);
        console.log(showed);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <div className={classes.search}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch", textAlign: "center" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Search by Title"
            variant="outlined"
          />
        </Box>
      </div>
      <div className={classes.cards}>
       
        <CardWatch image="" title="" description="" />
      </div>
    </>
  );
};

export default Movies;