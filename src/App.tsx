import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainPage from "./pages/MainPage";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { theme } from "./style/Theme";
import Header from "./components/Main/Header";
import { WritePage } from "./pages/WritePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <Toaster />
          <BrowserRouter>
            <Header />
            <Routes>
              <Route element={<MainPage />} path="/" />
              <Route element={<WritePage />} path="/write/:type" />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
