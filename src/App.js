import { Box } from "@mui/material";
import "./App.css";
import MajorSports from "./components/MajorSports";
import MinorSports from "./components/MinorSports";

function App() {
  return (
    <Box sx={{ marginBottom: "100px" }} className="App">
      <MajorSports />
      <MinorSports />
    </Box>
  );
}

export default App;
