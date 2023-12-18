
import React from "react";
import CategoriesList from "../../Components/CategoriesList/CategoriesList";

const detailPage = ({params}) => {
   
  return (
    <div className="bg-white">
   <CategoriesList  params={params}/>
   
    </div>
  );
};

export default detailPage;