import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { db } from "../Firebase-config";
import { child, get, onValue, ref } from "firebase/database";
import { MinorColumns as columns } from "../utils/columns";

const MinorSports = () => {
  const [data, setData] = useState(null);

  const getdata = () => {
    const starCountRef = ref(db, "Minor");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  console.log(data);
  const rows = [
    {
      id: "IT-SPHINX",
      BadmintonMen: data && data["Badminton(Men)"].sphinx,
      BadmintonWomen: data && data["Badminton(Women)"].sphinx,
      BadmintonDoubles: data && data["Badminton(Doubles)"].sphinx,
      TableTennisMen: data && data["Table Tennis(Men)"].sphinx,
      TableTennisWomen: data && data["Table Tennis(Women)"].sphinx,
      TableTennisDoubles: data && data["Table Tennis(Doubles)"].sphinx,
      ChessMen: data && data["Chess(Men)"].sphinx,
      ChessWomen: data && data["Chess(Women)"].sphinx,
      ScrabbleMen: data && data["Scrabble(Men)"].sphinx,
      ScrabbleWomen: data && data["Scrabble(Women)"].sphinx,
      TugOfWarMen: data && data["Tug of War(Men)"].sphinx,
      TugOfWarWomen: data && data["Tug of War(Women)"].sphinx,
      DartMen: data && data["Dart(Men)"].sphinx,
      DartWomen: data && data["Dart(Women)"].sphinx,
      Sackrace: data && data["Sack Race"].sphinx,
      SepakTakraw: data && data["Sepak Takraw"].sphinx,
      PosterMaking: data && data["Poster Making"].sphinx,
      Patintero: 10,
      RunningMan: data && data["Running Man"].sphinx,
      WordFactoryScribble: 10,
      Total:
        data &&
        parseInt(data["Badminton(Men)"].sphinx) +
          parseInt(data["Badminton(Women)"].sphinx) +
          parseInt(data["Badminton(Doubles)"].sphinx) +
          parseInt(data["Table Tennis(Men)"].sphinx) +
          parseInt(data["Table Tennis(Women)"].sphinx) +
          parseInt(data["Table Tennis(Doubles)"].sphinx) +
          parseInt(data["Chess(Men)"].sphinx) +
          parseInt(data["Chess(Women)"].sphinx) +
          parseInt(data["Scrabble(Women)"].sphinx) +
          parseInt(data["Scrabble(Women)"].sphinx) +
          parseInt(data["Tug of War(Men)"].sphinx) +
          parseInt(data["Tug of War(Women)"].sphinx) +
          parseInt(data["Dart(Men)"].sphinx) +
          parseInt(data["Dart(Women)"].sphinx) +
          parseInt(data["Sack Race"].sphinx),
    },
    {
      id: "HM-PHOENIX",
      BadmintonMen: data && data["Badminton(Men)"].phoenix,
      BadmintonWomen: data && data["Badminton(Women)"].phoenix,
      BadmintonDoubles: data && data["Badminton(Doubles)"].phoenix,
      TableTennisMen: data && data["Table Tennis(Men)"].phoenix,
      TableTennisWomen: data && data["Table Tennis(Women)"].phoenix,
      TableTennisDoubles: data && data["Table Tennis(Doubles)"].phoenix,
      ChessMen: data && data["Chess(Men)"].phoenix,
      ChessWomen: data && data["Chess(Women)"].phoenix,
      ScrabbleMen: data && data["Scrabble(Men)"].phoenix,
      ScrabbleWomen: data && data["Scrabble(Women)"].phoenix,
      TugOfWarMen: data && data["Tug of War(Men)"].phoenix,
      TugOfWarWomen: data && data["Tug of War(Women)"].phoenix,
      DartMen: data && data["Dart(Men)"].phoenix,
      DartWomen: data && data["Dart(Women)"].phoenix,
      Sackrace: data && data["Sack Race"].phoenix,
      SepakTakraw: data && data["Sepak Takraw"].phoenix,
      PosterMaking: data && data["Poster Making"].phoenix,
      Patintero: 10,
      RunningMan: data && data["Running Man"].phoenix,
      WordFactoryScribble: 10,
      Total:
        data &&
        parseInt(data["Badminton(Men)"].phoenix) +
          parseInt(data["Badminton(Women)"].phoenix) +
          parseInt(data["Badminton(Doubles)"].phoenix) +
          parseInt(data["Table Tennis(Men)"].phoenix) +
          parseInt(data["Table Tennis(Women)"].phoenix) +
          parseInt(data["Table Tennis(Doubles)"].phoenix) +
          parseInt(data["Chess(Men)"].phoenix) +
          parseInt(data["Chess(Women)"].phoenix) +
          parseInt(data["Scrabble(Women)"].phoenix) +
          parseInt(data["Scrabble(Women)"].phoenix) +
          parseInt(data["Tug of War(Men)"].phoenix) +
          parseInt(data["Tug of War(Women)"].phoenix) +
          parseInt(data["Dart(Men)"].phoenix) +
          parseInt(data["Dart(Women)"].phoenix) +
          parseInt(data["Sack Race"].phoenix),
    },
    {
      id: "BA-GRIFFIN",
      BadmintonMen: data && data["Badminton(Men)"].griffin,
      BadmintonWomen: data && data["Badminton(Women)"].griffin,
      BadmintonDoubles: data && data["Badminton(Doubles)"].griffin,
      TableTennisMen: data && data["Table Tennis(Men)"].griffin,
      TableTennisWomen: data && data["Table Tennis(Women)"].griffin,
      TableTennisDoubles: data && data["Table Tennis(Doubles)"].griffin,
      ChessMen: data && data["Chess(Men)"].griffin,
      ChessWomen: data && data["Chess(Women)"].griffin,
      ScrabbleMen: data && data["Scrabble(Men)"].griffin,
      ScrabbleWomen: data && data["Scrabble(Women)"].griffin,
      TugOfWarMen: data && data["Tug of War(Men)"].griffin,
      TugOfWarWomen: data && data["Tug of War(Women)"].griffin,
      DartMen: data && data["Dart(Men)"].griffin,
      DartWomen: data && data["Dart(Women)"].griffin,
      Sackrace: data && data["Sack Race"].griffin,
      SepakTakraw: data && data["Sepak Takraw"].griffin,
      PosterMaking: data && data["Poster Making"].griffin,
      Patintero: 10,
      RunningMan: data && data["Running Man"].griffin,
      WordFactoryScribble: 10,
      Total:
        data &&
        parseInt(data["Badminton(Men)"].griffin) +
          parseInt(data["Badminton(Women)"].griffin) +
          parseInt(data["Badminton(Doubles)"].griffin) +
          parseInt(data["Table Tennis(Men)"].griffin) +
          parseInt(data["Table Tennis(Women)"].griffin) +
          parseInt(data["Table Tennis(Doubles)"].griffin) +
          parseInt(data["Chess(Men)"].griffin) +
          parseInt(data["Chess(Women)"].griffin) +
          parseInt(data["Scrabble(Women)"].griffin) +
          parseInt(data["Scrabble(Women)"].griffin) +
          parseInt(data["Tug of War(Men)"].griffin) +
          parseInt(data["Tug of War(Women)"].griffin) +
          parseInt(data["Dart(Men)"].griffin) +
          parseInt(data["Dart(Women)"].griffin) +
          parseInt(data["Sack Race"].griffin),
    },
  ];

  return (
    <Box sx={{ height: 500, width: "100%", padding: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "rgb(0, 114, 187)",
          color: "white",
        }}
      >
        <Typography
          sx={{
            fontSize: "38px",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          MINOR SPORTS
        </Typography>
      </Box>

      <DataGrid
        sx={{
          fontSize: "15px",
          "& .css-1j9kmqg-MuiDataGrid-toolbarContainer": {
            padding: "20px !important",
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default MinorSports;
