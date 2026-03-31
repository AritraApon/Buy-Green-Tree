import React from 'react';

const Impact = () => {
    return (
        <div className='container mx-auto '>
            <div className='bg-[#cff0dc] py-20 space-y-10'>
                <div>
                    <h1 className='text-3xl font-bold text-center'> Our Impact</h1>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
                    <div className='bg-white shadow-xl text-center rounded-2xl px-30 py-10'>
                        <h1 className='font-bold text-4xl text-green-600'>500k+</h1>
                        <p>Trees Planted</p>
                    </div>
                    <div className='bg-white shadow-xl text-center rounded-2xl px-30 py-10'>
                        <h1 className='font-bold text-4xl  text-green-600'>200+</h1>
                        <p>Communities Involved</p>
                    </div>
                    <div className='bg-white shadow-xl text-center rounded-2xl px-30 py-10'>
                        <h1 className='font-extrabold text-4xl text-green-600'>30+</h1>
                        <p>Countries Reached</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impact;