import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { db } from "../Firebase-config";
import { onValue, ref } from "firebase/database";
import { MajorColumns as columns } from "../utils/columns";
const MajorSports = () => {
  const [data, setData] = useState(null);

  const getdata = () => {
    const starCountRef = ref(db, "Major");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const rows = [
    {
      id: "IT-SPHINX",
      Cheerdance: data && data.Cheerdance.sphinx,
      BasketBallMen: data && data["Basketball(Men)"].sphinx,
      BasketBallWomen: data && data["Basketball(Women)"].sphinx,
      MRandMSMen: data && data["Mr STI 2022"].sphinx,
      MRandMSWomen: data && data["Ms STI 2022"].sphinx,
      VolleyballMen: data && data["Volleyball(Men)"].sphinx,
      VolleyballWomen: data && data["Volleyball(Women)"].sphinx,
      BannerRaising: data && data["Banner Raising"].sphinx,
      HatawSayaw: data && data["Hataw Sayaw"].sphinx,
      BattleOfTheBands: data && data["Battle of the Bands"].sphinx,
      PopIdol: data && data["Pop Idol"].sphinx,
      Total:
        data &&
        parseInt(data.Cheerdance.sphinx) +
          parseInt(data["Basketball(Men)"].sphinx) +
          parseInt(data["Basketball(Women)"].sphinx) +
          parseInt(data["Mr STI 2022"].sphinx) +
          parseInt(data["Ms STI 2022"].sphinx) +
          parseInt(data["Volleyball(Men)"].sphinx) +
          parseInt(data["Volleyball(Women)"].sphinx) +
          parseInt(data["Banner Raising"].sphinx) +
          parseInt(data["Hataw Sayaw"].sphinx) +
          parseInt(data["Battle of the Bands"].sphinx) +
          parseInt(data["Pop Idol"].sphinx),
    },
    {
      id: "HM-PHOENIX",
      Cheerdance: data && data.Cheerdance.phoenix,
      BasketBallMen: data && data["Basketball(Men)"].phoenix,
      BasketBallWomen: data && data["Basketball(Women)"].phoenix,
      MRandMSMen: data && data["Mr STI 2022"].phoenix,
      MRandMSWomen: data && data["Ms STI 2022"].phoenix,
      VolleyballMen: data && data["Volleyball(Men)"].phoenix,
      VolleyballWomen: data && data["Volleyball(Women)"].phoenix,
      BannerRaising: data && data["Banner Raising"].phoenix,
      HatawSayaw: data && data["Hataw Sayaw"].phoenix,
      BattleOfTheBands: data && data["Battle of the Bands"].phoenix,
      PopIdol: data && data["Pop Idol"].phoenix,
      Total:
        data &&
        parseInt(data.Cheerdance.phoenix) +
          parseInt(data["Basketball(Men)"].phoenix) +
          parseInt(data["Basketball(Women)"].phoenix) +
          parseInt(data["Mr STI 2022"].phoenix) +
          parseInt(data["Ms STI 2022"].phoenix) +
          parseInt(data["Volleyball(Men)"].phoenix) +
          parseInt(data["Volleyball(Women)"].phoenix) +
          parseInt(data["Banner Raising"].phoenix) +
          parseInt(data["Hataw Sayaw"].phoenix) +
          parseInt(data["Battle of the Bands"].phoenix) +
          parseInt(data["Pop Idol"].phoenix),
    },
    {
      id: "BA-GRIFFIN",
      Cheerdance: data && data.Cheerdance.griffin,
      BasketBallMen: data && data["Basketball(Men)"].griffin,
      BasketBallWomen: data && data["Basketball(Women)"].griffin,
      MRandMSMen: data && data["Mr STI 2022"].griffin,
      MRandMSWomen: data && data["Ms STI 2022"].griffin,
      VolleyballMen: data && data["Volleyball(Men)"].griffin,
      VolleyballWomen: data && data["Volleyball(Women)"].griffin,
      BannerRaising: data && data["Banner Raising"].griffin,
      HatawSayaw: data && data["Hataw Sayaw"].griffin,
      BattleOfTheBands: data && data["Battle of the Bands"].griffin,
      PopIdol: data && data["Pop Idol"].griffin,
      Total:
        data &&
        parseInt(data.Cheerdance.griffin) +
          parseInt(data["Basketball(Men)"].griffin) +
          parseInt(data["Basketball(Women)"].griffin) +
          parseInt(data["Mr STI 2022"].griffin) +
          parseInt(data["Ms STI 2022"].griffin) +
          parseInt(data["Volleyball(Men)"].griffin) +
          parseInt(data["Volleyball(Women)"].griffin) +
          parseInt(data["Banner Raising"].griffin) +
          parseInt(data["Hataw Sayaw"].griffin) +
          parseInt(data["Battle of the Bands"].griffin) +
          parseInt(data["Pop Idol"].griffin),
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
          MAJOR EVENTS & MAJOR SPORTS
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
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default MajorSports;
