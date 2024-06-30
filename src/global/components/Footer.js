import React from 'react';
import backgroundImage from '../../assets/footer-bg.jpg'
import {Link} from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer className="footer text-neutral-content p-10 px-36" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' ,  }}>
                <nav>
                    <h6 className="footer-title text-2xl">Services</h6>
                    <Link to='/' className="hover:translate-x-4 duration-300 text-[#8e44ad] text-lg font-bold  "><span className='text-[#8e44ad] text-2xl'> > </span>Home</Link>
                    <Link to='/about-us-page' className="hover:translate-x-4 duration-300 text-[#8e44ad] text-lg font-bold  "><span className='text-[#8e44ad] text-2xl'> > </span>About</Link>
                    <Link to='/internship-page' className="hover:translate-x-4 duration-300 text-[#8e44ad] text-lg font-bold  "><span className='text-[#8e44ad] text-2xl'> > </span>Internship</Link>

                </nav>
                <nav>
                    <h6 className="footer-title text-2xl">Contact Info</h6>
                    <p className=" flex  hover:translate-x-4 duration-300 text-[#8e44ad] text-lg font-bold  "><span className=' pr-2 text-[#8e44ad] text-2xl'> <FaEnvelope/> </span>Youngdevinterns60@gmail.com</p>
                    <p className=" flex hover:translate-x-4 duration-300 text-[#8e44ad] text-lg font-bold  "><span className='pr-2 text-[#8e44ad] text-2xl'><FaMap/> </span>Pakistan - Islamabad</p>

                </nav>
                <nav>
                    <h6 className="footer-title text-2xl">Follow Us</h6>
                    <Link to='' className=" text-[#8e44ad] hover:translate-x-4 duration-300 text-lg font-bold flex  "><span className=' pr-1 text-[#8e44ad] text-2xl'><FaFacebookF/> </span>Facebook</Link>
                    <Link to='' className=" text-[#8e44ad] hover:translate-x-4 duration-300 text-lg font-bold  flex "><span className=' pr-1 text-[#8e44ad] text-2xl'><IoLogoLinkedin/> </span>Linkedin</Link>
                </nav>
            </footer>


        </>
    );
};

export default Footer;