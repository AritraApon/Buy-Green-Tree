import React from 'react';
import LeftImg from '../../assets/hero-leaf1.png'
import RightImg from '../../assets/hero-leaf2.png'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-[#cff0dc] flex justify-between items-center py-5 lg:py-0 '>
                <div className='hidden md:block'>
                    <img src={LeftImg} alt="" />
                </div>
                <div className='text-center space-y-4 px-5'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Plant a Tree, Grow a Future</h1>
                    <p className=' text-[8px] md:text-sm '>Join our mission to plant 1 million trees and make the Earth greener for future
                        generations.</p>
                    <button className='bg-[#facc15] hover:bg-[#a48507] px-2 md:px-4 py-2 font-bold text-green-800 rounded-full shadow '>Buy Now</button>
                </div>
                <div className='hidden md:block'>
                    <img src={RightImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;