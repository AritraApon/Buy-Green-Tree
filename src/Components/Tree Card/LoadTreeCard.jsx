import React, { use } from 'react';
import TreeCards from './TreeCards';



const LoadTreeCard = ({ allTreeData }) => {
    const allTreeDatePromise = use(allTreeData)
    const plantsCardsData = allTreeDatePromise.plants;
    return (
        <div className='container mx-auto mt-10'>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 space-y-4'>
                {
                    plantsCardsData.map((plants, index) => <TreeCards
                        key={index}
                        plants={plants}
                    >


                    </TreeCards>)
                }
            </div>


        </div>
    );
};

export default LoadTreeCard;