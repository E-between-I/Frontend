import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { theme } from "./style/Theme";
import Header from "./components/common/Header";
import MainRouter from "./router";

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
            <MainRouter />
          </BrowserRouter>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
