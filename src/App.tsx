import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainPage from "./pages/MainPage";
import Stock from "./components/Stock";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { theme } from "./style/Theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/com" element={<Stock />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
