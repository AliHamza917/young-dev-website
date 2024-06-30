
import './App.css';
import Layout from "./global/layouts/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path ='/' element ={<HomePage/>}/>
              </Routes>

          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
