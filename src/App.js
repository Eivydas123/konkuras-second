import "./App.scss";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Example from "./components/Example";
import Book from "./components/Book";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header />
        <Example />
        <Book />
        {/* <IconButton aria-label="delete">
          <ArrowDownwardIcon fontSize="secondary" />
        </IconButton> */}
      </div>
    </>
  );
}

export default App;
