
import './App.css';
import Layout from "./global/layouts/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path ='/' element ={<HomePage/>}/>
                  <Route path ='/about-us-page' element ={<AboutUsPage/>}/>
              </Routes>

          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
