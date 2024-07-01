import React from 'react';
import headerImg from '../../../assets/header-about.png';
import aboutImg from '../../../assets/ab.jpg';

const Main = () => {
    return (
        <div className="mx-auto max-w-screen-xl">
            {/* Header Image */}
            <img src={headerImg} className="w-full" alt="Header" />

            {/* Main Content */}
            <div className='grid md:grid-cols-2 gap-8 place-items-center px-4 md:px-8 lg:px-16 py-8'>
                {/* About Image */}
                <img src={aboutImg} className="md:rounded-lg shadow-md" alt="About" />

                {/* Text Content */}
                <div className='text-center md:text-left'>
                    <h1 className='text-4xl font-bold mb-4'>Why Choose Us?</h1>
                    <p className='text-sm mb-4'>
                        At YoungDev Interns, we're committed to fostering talent and offering exceptional learning experiences. We believe in breaking down barriers to entry by providing free, remote internship opportunities that empower aspiring developers to kickstart their careers.
                    </p>
                    <p className="text-sm mb-4">
                        We offer a unique month-long internship program, allowing you to gain practical experience from the comfort of your own workspace. Each month, interns will tackle 3 to 4 real-world tasks, giving you hands-on exposure to industry-relevant projects. Upon successful completion of the internship, we provide a certificate to recognize your dedication and skills gained during your time with us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
