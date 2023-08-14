import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./style";
import { AuthProvider } from "./context/auth";
import { RegisterLoginProvider } from "./context/registerLogin";
import RegisterLoginModal from "./components/registerLoginModal";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RegisterLoginProvider>
          <Box backgroundColor="#2D2D2D" minH="100vh" p="10px">
            <Box maxW="1500px" m="auto">
              <Router>
                <Header />
                <Switch>
                  <Route path="/video/:id">
                    <Detail />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Router>
            </Box>
          </Box>

          <RegisterLoginModal />
        </RegisterLoginProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
