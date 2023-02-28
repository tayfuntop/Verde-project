import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { HiSave, HiOutlineTrash, HiPencil, HiArrowNarrowLeft } from "react-icons/hi";

import { Header } from '../../components/Header';
import { getPostDetails, getPostComments, updatePostDetails, deletePostDetails } from '../../redux/actions';

import Logo from '../../assets/logo.png';

const mapStatetoProps = states => {
  return {
    postDetails: states.dataReducer.postDetails,
    postComments: states.dataReducer.postComments,
  }
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const Details = connect(
  mapStatetoProps,
  mapDispatchToProps,
)(
  props => {
    const { postDetails, postComments, dispatch } = props;
    const [postsDisabled, setPostsDisabled] = useState(true);
    const { id } = useParams();
    const textArea = useRef();
    const postDetailsPage = useRef();
    const navigate = useNavigate();
    const [textInput, setTextInput] = useState({
      title: '',
      body: '',
    });

    useEffect(() => {
      dispatch(getPostDetails(id));
      dispatch(getPostComments(id));
    }, [dispatch, id]);

    window.onload = () => {
      navigate('/');
    };

    const updatePost = (id) => {
      const newData = {
        ...postDetails,
        title: textInput.title === '' ? postDetails.title : textInput.title,
        body: textInput.body === '' ? postDetails.body : textInput.body,
      };
      dispatch(updatePostDetails(id, newData));
      setPostsDisabled(true);
      navigate('/');
    };

    const deletePost = (id) => {
      dispatch(deletePostDetails(id));
      navigate('/');
    };

    if (postComments.length !== 0 && postDetails !== null) {
      return (
        <div ref={postDetailsPage} className='flex flex-col gap-6'>
          <Header />
          <div className='grid grid-cols-9 bg-white px-10 pt-4 pb-8 gap-8'>
            <div className='flex flex-col gap-10 col-span-9 lg:col-span-6 lg:border-r-2 lg:pr-8'>
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
                  <textarea type='text' disabled={postsDisabled} ref={textArea}
                    value={textInput.title === '' ? postDetails.title : textInput.title} onChange={(e) => setTextInput({ ...textInput, title: e.target.value })} className='px-6 py-3 border-2 font-bold text-lg rounded-md h-36 sm:h-24 bg-main-color' />
                </div>
                <div className='flex flex-col gap-1'>
                  <span>Detail</span>
                  <textarea type='text' disabled={postsDisabled}
                    value={textInput.body === '' ? postDetails.body : textInput.body} onChange={(e) => setTextInput({ ...textInput, body: e.target.value })} className='px-6 py-3 border-2 rounded-md h-60 sm:h-44 bg-main-color' />
                </div>
              </div>
              {
                postDetails.userId === 1 && (
                  <div className='flex gap-8 justify-end'>
                    <button onClick={() => deletePost(id)} type='submit' className='bg-red-500 py-1 px-4 rounded-lg flex justify-center items-center gap-2 text-white hover:scale-102 transition-transform duration-100'>
                      <HiOutlineTrash />
                      Delete
                    </button>
                    {
                      postsDisabled && postDetails.userId === 1 ?
                        <button onClick={async () => { await setPostsDisabled(false); textArea.current.focus() }} type='submit' className='bg-blue-500 py-1 px-4 rounded-lg flex justify-center items-center gap-2 text-white hover:scale-102 transition-transform duration-100'>
                          <HiPencil />
                          Update
                        </button> :
                        <button onClick={() => updatePost(id)} type='submit' className='bg-blue-500 py-1 px-4 rounded-lg flex justify-center items-center gap-2 text-white hover:scale-102 transition-transform duration-100'>
                          <HiSave />
                          Save
                        </button>
                    }
                  </div>
                )
              }
            </div>
            <div className='col-span-9 lg:col-span-3 flex flex-col gap-1'>
              <div className='font-bold text-xl text-center py-2'>Comments</div>
              {
                postComments.map((item) => {
                  return (
                    <div key={item.id} className='py-5 flex flex-col gap-2'>
                      <span className='text-sm font-bold'>{item.name}</span>
                      <span className='text-sm -mt-2'>{item.email}</span>
                      <div className='border-2 flex rounded-lg'>
                        <span className='px-2 text-xs'>{item.body}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='flex flex-col gap-6'>
          <Header />
          <div className='flex justify-center pt-36 w-full'>
            <img className='animate-left-right' src={Logo} alt="logo" />
          </div>
        </div>
      )
    }
  }
);

export default Details;