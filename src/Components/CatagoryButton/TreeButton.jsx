import React, { useState } from 'react';
import { CgPlayButton } from 'react-icons/cg';

const TreeButton = ({ btn, selectedCategories, handleFilter }) => {


    return (
        <div className='flex items-center' >

            <button onClick={() => handleFilter(btn.category_name)} className={` ${selectedCategories === btn.category_name ? "text-red-700 border-b-2 border-red-700" : "text-green-700"} hover:border-b-2 border-red-800 text-md font-bold`}>{btn.category_name}</button>
            <CgPlayButton />
        </div>
    );
};

export default TreeButton;