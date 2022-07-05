import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, CircularProgress } from "@chakra-ui/react";

import { auth } from "../config/firebase";
import routes from "../config/routes";

import Center from "../components/utils/Center";
import AuthChecker from "../components/auth/AuthChecker";

import { theme } from "./theme";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);
    });
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
                element={
                  route.protected ? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                  ) : (
                    <route.component />
                  )
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      )}
    </ChakraProvider>
  );
}

export default App;
