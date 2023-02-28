import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { HiOutlineViewGrid, HiBell } from "react-icons/hi";

import Profil from '../../assets/profil.png';
import Logo from '../../assets/logo.png';

const mapStatetoProps = states => {
    return {
        postUserCount: states.dataReducer.postUserCount,
    }
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const Header = connect(
    mapStatetoProps,
    mapDispatchToProps
)
    (props => {

        const { postUserCount } = props;

        return (
            <div className='flex justify-between h-16 bg-white items-center px-4'>
                <Link to='/'>
                    <div className='flex items-center gap-4 '>
                        <img src={Logo} alt="" className='w-8' />
                        <span className='font-bold text-xl'>Arbit Blog</span>
                    </div>
                </Link>
                <div className='flex gap-4 items-center'>
                    <div className='font-semibold relative cursor-pointer'>
                        Posts
                        <span className='absolute bottom-5 left-8 bg-green-300 rounded-full w-4 h-4 flex justify-center items-center 
                        font-semibold text-[9px] text-slate-500'>
                            {postUserCount}
                        </span>
                    </div>
                    <HiBell className='text-2xl fill-slate-500 text-slate-500 hover:scale-110 transition-transform duration-200 cursor-pointer' />
                    <HiOutlineViewGrid className='text-2xl fill-slate-500 text-slate-500 hover:scale-110 transition-transform duration-200 cursor-pointer' />
                    <img src={Profil} className='w-8 rounded-full cursor-pointer' alt="" />
                </div>
            </div>
        )
    });

export { Header };