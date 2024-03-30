import React from "react";
import Section10Card from "./Section10Card";
import Section10Data from "./Section10Data";

const Section10 = () => {
  return (
    <>
      <div className="sec-10-container bg-slate-300 py-12">
        <h1 className="text-6xl font-bold justify-center flex m-12 p-5">
          Latest Design trends
        </h1>
        <div className="container mx-auto"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-12">  
            {Section10Data.map((val,key) => {
              return (
                <Section10Card
                  sec10img={val.sec10img}
                  sec10h1={val.sec10h1}
                  sec10p={val.sec10p}
                  sec10h5={val.sec10h5}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section10;
