import React, { use, useState } from 'react';
import TreeButton from './TreeButton';
import { CgPlayButton } from 'react-icons/cg';

const CategoryButton = ({ categoryTrees }) => {
    const category = use(categoryTrees);
    const [selectBtn, setSelectBtn] = useState(null)
    // const categorybtn = categoryTrees.categories;
    const categoryBtn = category.categories;



    return (
        <div className='container mx-auto'>

            <div className='hidden lg:flex  items-center justify-center gap-5 md:gap-6 bg-yellow-300 py-4 px-6'>
                <button  onClick={() => setSelectBtn(null)}
                    className={` ${selectBtn === null ? "text-red-700 border-b-2 border-red-700" : "text-green-700"}  flex items-center font-bold text-md  `}>All Trees <CgPlayButton/> </button>
                {
                    categoryBtn.map((btn, index) => <TreeButton key={index} btn={btn} selectBtn={selectBtn} setSelectBtn={setSelectBtn} ></TreeButton>)
                }
            </div>
            <p></p>

        </div>
    );
};

export default CategoryButton;