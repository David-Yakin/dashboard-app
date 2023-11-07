import { Box } from "@mui/material";
import Layout from "./layout/Layout";
import Router from "./router/Router";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Layout>
        <Router />
      </Layout>
    </Box>
  );
}

export default App;
