import React from 'react';
import TreeImage from '../../assets/about.png'
const ComCart = () => {
    return (
        <div className='container mx-auto'>
           <div className='w-8/12 mx-auto mt-20'>
             <div className='my-3 '>
                <h1 className='text-5xl font-bold text-center'>About the Campaign</h1>
            </div>
            <div className='my-10 flex flex-col md:flex-row justify-center items-center gap-10'>
                <div>
                    <img src={TreeImage} alt=""  className='w-400'/>
                </div>
                <div>
                    <p className='text-lg font-semibold'>
                        Green Earth is a global tree plantation initiative dedicated to fighting climate change. Since our start, we’ve planted over 500,000 trees worldwide. By joining our campaign, you help restore forests, create habitats for wildlife, and combat global warming.
                    </p>
                    <ul className='list-disc mt-10 mx-10'>
                        <li>Restoration of natural habitats</li>
                        <li>Improvement of air quality</li>
                        <li>Support for local communities</li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ComCart;