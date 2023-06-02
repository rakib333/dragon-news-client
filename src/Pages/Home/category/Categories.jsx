// import React from 'react';

import { useParams } from "react-router-dom";

const Categories = () => {
    const { id } = useParams()
    return (
        <div>
            <h2>This is category: {id}</h2>
        </div>
    );
};

export default Categories;