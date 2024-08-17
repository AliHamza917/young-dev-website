import './App.css';
import Layout from "./global/layouts/Layout";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUs";
import InternshipPage from "./pages/InternshipPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import DashboardPage from "./pages/AdminPages/DashboardPage";
import RegistrationPage from "./pages/AuthPages/RegistrationPage";
import BlogForm from "./pages/AdminPages/Blog";
import BlogPage from "./pages/BlogPage";
import UpdateBlog from "./pages/AdminPages/Blog/UpdateBlog";
import {CookiesProvider, useCookies} from "react-cookie";

function App() {
    const [cookies] = useCookies(['Token']);
    const isLoggedIn = !!cookies.Token;

    return (
        <CookiesProvider>
            <div className="App">
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='/about-us-page' element={<AboutUsPage/>}/>
                            <Route path='/internship-page' element={<InternshipPage/>}/>
                            <Route path='/blogs-page' element={<BlogPage/>}/>

                            {/* Protect the login and registration pages */}
                            <Route path='/login-page' element={isLoggedIn ? <Navigate to="/dashboard-page" /> : <LoginPage/>}/>
                            <Route path='/registration-page' element={isLoggedIn ? <Navigate to="/dashboard-page" /> : <RegistrationPage/>}/>
                            {/* Other routes */}
                            <Route path='/dashboard-page' element={!isLoggedIn ? <Navigate to='/login-page'/> : <DashboardPage/>}/>
                            <Route path='/add-blog-form' element={<BlogForm/>}/>
                            <Route path='/get-blog/:b_id' element={<UpdateBlog/>}/>
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </div>
        </CookiesProvider>
    );
}

export default App;
