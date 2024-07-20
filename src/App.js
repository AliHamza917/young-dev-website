
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
import BlogPage from "./pages/BlogPage";
import UpdateBlog from "./pages/AdminPages/Blog/UpdateBlog";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path ='/' element ={<HomePage/>}/>
                  <Route path ='/about-us-page' element ={<AboutUsPage/>}/>
                  <Route path ='/internship-page' element ={<InternshipPage/>}/>
                  <Route path ='/blogs-page' element ={<BlogPage/>}/>
                  <Route path='/login-page' element={<LoginPage/>}/>
                  <Route path='/dashboard-page' element={<DashboardPage/>}/>
                  <Route path='/registration-page' element={<RegistrationPage/>}/>
                  <Route path='/add-blog-form' element={<BlogForm/>}/>
                  <Route path='/get-blog/:b_id' element={<UpdateBlog/>}/>

              </Routes>

          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
