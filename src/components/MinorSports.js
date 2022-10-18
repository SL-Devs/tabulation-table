import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: `Course`, width: 200, type: "string" },

  {
    field: "Badminton",
    headerName: "Badminton",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "BadmintonMen",
    headerName: "Men",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "BadmintonWomen",
    headerName: "Women",
    type: "number",
    width: 70,
    editable: true,
  },
  {
    field: "BadmintonDoubles",
    headerName: "Doubles",
    type: "number",
    width: 70,
    editable: true,
  },
  {
    field: "TableTennis",
    headerName: "Table Tennis",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "TableTennisMen",
    headerName: "Men",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "TableTennisWomen",
    headerName: "Women",
    type: "number",
    width: 70,
    editable: true,
  },
  {
    field: "Chess",
    headerName: "Chess",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "ChessMen",
    headerName: "Men",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "ChessWomen",
    headerName: "Women",
    type: "number",
    width: 70,
    editable: true,
  },
  {
    field: "Scrabble",
    headerName: "Scrabble",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "ScrabbleMen",
    headerName: "Men",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "ScrabbleWomen",
    headerName: "Women",
    type: "number",
    width: 70,
    editable: true,
  },
  {
    field: "TugOfWar",
    headerName: "Tug of War",
    type: "number",
    width: 160,
    editable: true,
  },
  {
    field: "TugOfWarMen",
    headerName: "Men",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "TugOfWarWomen",
    headerName: "Women",
    type: "number",
    width: 70,
    editable: true,
  },
  {
    field: "Dart",
    headerName: "Dart",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "DartMen",
    headerName: "Men",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "DartWomen",
    headerName: "Women",
    type: "number",
    width: 70,
    editable: true,
  },
  {
    field: "Sackrace",
    headerName: "Sackrace",
    type: "number",
    width: 200,
    editable: true,
  },
  {
    field: "Total",
    headerName: "Total Score",
    type: "number",
    width: 160,
    editable: true,
  },
];

const MinorSports = () => {
  const rows = [
    {
      id: "IT-SPHINX",
      Cheerdance: 60,
      BasketBallMen: 20,
      BasketBallWomen: 20,
      MRandMSMen: 20,
      MRandMSWomen: 35,
      VolleyballMen: 20,
      VolleyballWomen: 20,
      BannerRaising: 35,
      HatawSayaw: 20,
      BattleOfTheBands: 35,
      PopIdol: 35,
      Total: 250,
    },
    {
      id: "HM-PHOENIX",
      Cheerdance: 60,
      BasketBallMen: 20,
      BasketBallWomen: 20,
      MRandMSMen: 20,
      MRandMSWomen: 35,
      VolleyballMen: 20,
      VolleyballWomen: 20,
      BannerRaising: 35,
      HatawSayaw: 20,
      BattleOfTheBands: 35,
      PopIdol: 35,
      Total: 250,
    },
    {
      id: "BA-GRIFFIN",
      Cheerdance: 60,
      BasketBallMen: 20,
      BasketBallWomen: 20,
      MRandMSMen: 20,
      MRandMSWomen: 35,
      VolleyballMen: 20,
      VolleyballWomen: 20,
      BannerRaising: 35,
      HatawSayaw: 20,
      BattleOfTheBands: 35,
      PopIdol: 35,
      Total: 250,
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
          color: "yellow",
        }}
      >
        <Typography
          sx={{
            fontSize: "38px",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          Minor Sports
        </Typography>
      </Box>

      <DataGrid
        sx={{
          fontSize: "15px",
          "& .css-1j9kmqg-MuiDataGrid-toolbarContainer": {
            padding: "20px",
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
