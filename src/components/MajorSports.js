import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { db } from "../Firebase-config";
import { child, get, onValue, ref } from "firebase/database";

const columns = [
  { field: "id", headerName: `Course`, width: 200, type: "string" },

  {
    field: "Basketball",
    headerName: "Basketball",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "BasketBallMen",
    headerName: "Men",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "BasketBallWomen",
    headerName: "Women",
    type: "number",
    width: 70,
    editable: true,
  },

  {
    field: "Volleyball",
    headerName: "Volleyball",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "VolleyballMen",
    headerName: "Men",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "VolleyballWomen",
    headerName: "Women",
    type: "number",
    width: 70,
    editable: true,
  },
  {
    field: "MrandMsSTI",
    headerName: "Mr and Ms STI",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "MRandMSMen",
    headerName: "Men",
    type: "number",
    width: 50,
    editable: true,
  },
  {
    field: "MRandMSWomen",
    headerName: "Women",
    type: "number",
    width: 70,
    editable: true,
  },
  {
    field: "Cheerdance",
    headerName: "Cheerdance",
    type: "number",
    width: 160,
    editable: true,
  },
  {
    field: "BannerRaising",
    headerName: "Banner Raising",
    type: "number",
    width: 160,
    editable: true,
  },
  {
    field: "HatawSayaw",
    headerName: "Hataw Sayaw",
    type: "number",
    width: 160,
    editable: true,
  },
  {
    field: "BattleOfTheBands",
    headerName: "Battle Of The Bands",
    type: "number",
    width: 200,
    editable: true,
  },
  {
    field: "PopIdol",
    headerName: "Pop Idol",
    type: "number",
    width: 160,
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

const MajorSports = () => {
  const [data, setData] = useState(null);

  const getdata = () => {
    const dbRef = ref(db);
    get(child(dbRef, "Major Sports"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
  const rows = [
    {
      id: "IT-SPHINX",
      Cheerdance: 0,
      BasketBallMen: 0,
      BasketBallWomen: 0,
      MRandMSMen: 0,
      MRandMSWomen: 0,
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
    <Box
      sx={{
        height: 500,
        width: "100%",
        padding: "50px",
        marginBottom: "50px",
      }}
    >
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
          Major Sports
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
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default MajorSports;
