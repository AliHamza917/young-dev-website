
import './App.css';
import Layout from "./global/layouts/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";
import InternshipPage from "./pages/InternshipPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import DashboardPage from "./pages/AdminPages/DashboardPage";
import RegistrationPage from "./pages/AuthPages/RegistrationPage";
import BlogForm from "./pages/AdminPages/Blog";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path ='/' element ={<HomePage/>}/>
                  <Route path ='/about-us-page' element ={<AboutUsPage/>}/>
                  <Route path ='/internship-page' element ={<InternshipPage/>}/>
                  <Route path='/login-page' element={<LoginPage/>}/>
                  <Route path='/dashboard-page' element={<DashboardPage/>}/>
                  <Route path='/registration-page' element={<RegistrationPage/>}/>
                  <Route path='/add-blog-form' element={<BlogForm/>}/>

              </Routes>

          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
