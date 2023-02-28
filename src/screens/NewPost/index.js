import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiSave, HiArrowNarrowLeft } from "react-icons/hi";
import { connect } from 'react-redux';

import { createNewPost } from '../../redux/actions';
import { Header } from '../../components/Header';

const mapDispatchToProps = (dispatch) => ({ dispatch });

const NewPost = connect(
    mapDispatchToProps,
)(
    props => {

        const navigate = useNavigate();
        const { dispatch } = props;
        const [newPostData, setNewPostData] = useState({
            title: '',
            body: '',
            userId: 1,
        });

        window.onload = () => {
            navigate('/');
        };

        const NewPost = () => {
            if (newPostData.title === '' || newPostData.body === '')
                return;
            dispatch(createNewPost(newPostData));
            navigate('/');
        };

        return (
            <div className='flex flex-col gap-6'>
                <Header />
                <div className='grid grid-cols-1 bg-white px-10 py-4 gap-8'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex gap-4 items-center'>
                            <Link to='/'>
                                <button type='submit' className='bg-main-color flex justify-center items-center p-3 rounded-full hover:scale-105 transition-transform duration-100'>
                                    <HiArrowNarrowLeft className='text-lg' />
                                </button>
                            </Link>
                            <span className='text-xl font-bold'>Posts</span>
                        </div>
                        <div className='pl-3 md:pl-6 lg:pl-12 flex flex-col gap-6'>
                            <div className='flex flex-col gap-1'>
                                <span>Title</span>
                                <textarea type='text' value={newPostData.title} onChange={(e) => setNewPostData({ ...newPostData, title: e.target.value })}
                                    className='px-6 py-3 border-2 font-bold rounded-md h-20 bg-main-color overflow-hidden' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span>Detail</span>
                                <textarea type='text' value={newPostData.body} onChange={(e) => setNewPostData({ ...newPostData, body: e.target.value })}
                                    className='px-6 py-3 border-2 rounded-md h-36 bg-main-color overflow-hidden' />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button onClick={NewPost} type='submit' className='bg-blue-500 py-1 px-4 rounded-lg flex items-center gap-2 text-white hover:scale-102 transition-transform duration-100'>
                                <HiSave />
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
);

export default NewPost;