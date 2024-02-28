import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRouter } from "./routers";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {publicRouter.map((arr, i) => {
            const Page = arr.element;
            return <Route path={arr.path} element={<Page></Page>} key={i} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
