import Routes from "./routes/routes";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "./styles/typography";


function App() {
  return (
    <div className="App">
      <Typography/>
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
