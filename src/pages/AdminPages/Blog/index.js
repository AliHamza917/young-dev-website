import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import JoditEditor from 'jodit-react';


const BlogForm = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    return (
        <>
            <div className="bg-base-200 min-h-screen flex items-center justify-center">
                <div className="bg-white max-w-lg w-full p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Add New Blog</h1>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Blog Title</label>
                            <input
                                type="text"
                                id="title"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                placeholder="Enter Bolg Title"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Description</label>
                            <JoditEditor
                                ref={editor}
                                value={content}

                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={newContent => {}}
                            />
                            <div className="mt-1 text-right">
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-[#000000] text-white text-lg font-bold py-2 px-4 rounded hover:bg-[#8e44ad] focus:outline-none focus:ring-2 focus:ring-[#8e44ad] focus:ring-opacity-50"
                            >
                                Create Blog
                            </button>
                            <div className='py-2 text-md text-center font-bold w-full '>
                                <button type='reset'
                                className="w-full bg-[#000000] text-white text-lg font-bold py-2 px-4 rounded hover:bg-[#8e44ad] focus:outline-none focus:ring-2 focus:ring-[#8e44ad] focus:ring-opacity-50"
                                >
                                    Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </>
    );
};

export default BlogForm;