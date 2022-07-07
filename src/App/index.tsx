import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, CircularProgress } from "@chakra-ui/react";

import "./App.css";
import routes from "./routes";
import { theme } from "./theme";
import Center from "../components/utils/Center";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {loading && (
        <Center>
          <CircularProgress isIndeterminate />
        </Center>
      )}

      {!loading && (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.Page />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      )}
    </ChakraProvider>
  );
}

export default App;
