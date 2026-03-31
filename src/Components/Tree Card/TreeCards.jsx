import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { TbCoinTakaFilled } from 'react-icons/tb';
import { toast } from 'react-toastify';



const TreeCards = ({ plants }) => {
     const [addCart , setAddCart] = useState(true);

     const handleAddCart=()=>{
        setAddCart(!addCart)
        toast.success(`Successfully add ${plants.name} to cart 🛒`)

     }

    return (
        <div>
            <div className="card bg-base-100  shadow-xl hover:scale-105">
                <figure className="w-full h-30  md:h-50 overflow-hidden">
                    <img
                        src={plants.image}
                        alt="Shoes" className='w-50 h-50 md:w-full md:h-full object-cover' />
                </figure>
                <div className="px-4 py-4 space-y-4">
                    <h2 className="card-title">{plants.name}</h2>
                    <div className='flex flex-col md:flex-row justify-between gap-2'>
                        <p className='bg-yellow-300 rounded-xl px-1 py-1 text-sm text-center'>{plants.category}</p>
                        <p className='text-sm md:text-xl font-bold flex items-center'><TbCoinTakaFilled/>{plants.price}</p>
                    </div>

                    <div className="card-actions justify-end">

                        <button onClick={handleAddCart} disabled={!addCart} className={` 
                            ${addCart === true ? "bg-[#15803d]" : ''}   btn font-bold text-white  w-full text-[11px] md:text-lg `}>Add to Cart
                            <FaShoppingCart/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreeCards;