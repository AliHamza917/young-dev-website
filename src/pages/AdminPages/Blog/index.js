import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';
import axios from 'axios';

const BlogForm = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [inputs, setInputs] = useState({ title: '', description: '' });
    // const [imgFile, setImgFile] = useState(null);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputs((prevInput) => ({ ...prevInput, [name]: value }));
    };
    //
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setImgFile(file);
    //     const reader = new FileReader()
    //
    //     reader.onloadend = ()=>{
    //         setImgFile(reader.result)
    //     }
    //     if (file){
    //         reader.readAsDataURL(file)
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs)
        // return

        // const formData = new FormData();
        // formData.append('title', inputs.title);
        // formData.append('description', inputs.description);
        // // formData.append('imgFile', imgFile);


        const response = await axios.post('http://localhost:5000/api/blogs/create-blog', inputs);

        try {

            if (response.data.success) {
                toast.success('Blog Added Successfully');
                setInputs({ title: '', description: '' });
                // setImgFile(null);
            } else {
                toast.error('Failed to Add Blog');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error Creating Blog');
        }
    };


    const handleReset = () => {
        setInputs({ title: '', description: '' });
        // setImgFile(null);
    };

    return (
        <>
            <div className="bg-base-200 min-h-screen flex items-center justify-center">
                <div className="bg-white max-w-lg w-full p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Add New Blog</h1>

                    <ToastContainer />
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Blog Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={inputs.title}
                                onChange={handleInput}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:bg-black"
                                placeholder="Enter Blog Title"
                                required
                            />
                            {/*<label htmlFor="image" className="mt-3 block text-sm font-medium text-gray-700">*/}
                            {/*    Blog Image*/}
                            {/*</label>*/}
                            {/*<input*/}
                            {/*    name="imgFile"*/}
                            {/*    type="file"*/}
                            {/*    onChange={handleFileChange}*/}
                            {/*    accept="image/*"*/}
                            {/*    className="mt-2 file-input file-input-bordered file-input-sm w-full max-w-xs"*/}
                            {/*/>*/}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <JoditEditor
                                ref={editor}
                                name="description"
                                value={inputs.description}
                                tabIndex={1}
                                onBlur={(newContent) => setContent(newContent)}
                                onChange={(newContent) => handleInput({ target: { name: 'description', value: newContent } })}
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full bg-[#000000] text-white text-lg font-bold py-2 px-4 rounded hover:bg-[#8e44ad] focus:outline-none focus:ring-2 focus:ring-[#8e44ad] focus:ring-opacity-50"
                            >
                                Create Blog
                            </button>
                            <div className="py-2 text-md text-center font-bold w-full">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="w-full bg-[#000000] text-white text-lg font-bold py-2 px-4 rounded hover:bg-[#8e44ad] focus:outline-none focus:ring-2 focus:ring-[#8e44ad] focus:ring-opacity-50"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BlogForm;
