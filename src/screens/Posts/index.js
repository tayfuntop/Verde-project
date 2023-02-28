import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HiPlus } from "react-icons/hi";

import { Header } from '../../components';
import { getPostDatas } from '../../redux/actions';

import Logo from '../../assets/logo.png';

const mapStatetoProps = states => {
    return {
        postDatas: states.dataReducer.postDatas,
        postUserCount: states.dataReducer.postUserCount,
        postDetails: states.dataReducer.postDetails,
        postComments: states.dataReducer.postComments,
    }
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const Container = connect(
    mapStatetoProps,
    mapDispatchToProps,
)(props => {

    const { postDatas, dispatch } = props;

    useEffect(() => {
        dispatch(getPostDatas());
    }, [dispatch])

    if (postDatas.length !== 0) {
        return (
            <div className='flex flex-col gap-6'>
                <Header />
                <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white px-5 pt-16 pb-6 gap-6'>
                    <div className='absolute top-5 right-5'>
                        <Link to='/new-post'>
                            <button type='submit' className='bg-blue-500 py-1 px-4 rounded-lg flex items-center gap-2 text-white hover:scale-102 transition-transform duration-100'>
                                <HiPlus />
                                New Post
                            </button>
                        </Link>
                    </div>
                    {
                        postDatas.map((item, index) => {
                            return (
                                <div
                                    className="shadow-md rounded-xl cursor-pointer hover:scale-101 transition-transform duration-100" key={index}>
                                    <Link to={`/${item.id}`}>
                                        <div className=' flex flex-col gap-3 p-6'>
                                            <div className='font-bold text-2xl'>{item.title.slice(0, 20)}{item.title.length > 20 ? "..." : ""}</div>
                                            <div>
                                                {item.body}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
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

export default Container;