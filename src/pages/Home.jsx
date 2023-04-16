import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchApi } from "../api/fetchApi";
import { Link } from "react-router-dom";


const Home = () => {
  const [category, setCategory] = useState("general");
  const { isLoding, error, data } = useQuery("repoData", () =>
    fetchApi(category)
  );
  //console.log(data)

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };


  return (
    <div className="m-5 mt-0 bg-gray-50 flex ml-4">
    <div className="grid grid-cols-1 w-full lg:grid-cols-3 gap-6 mb-6 p-4 bg-slate-100">
      {data?.map((item) => {
        return (
          <div key={item._id} className="bg-white shadow-md rounded-md overflow-hidden">
            <Link to={item.link}>
              <img
                className="h-48 w-full object-cover p-5 rounded-md"
                src={item.media}
                alt="Mountain landscape"
              />
              <span className="flex justify-end mr-4 text-slate-500">{formatDate(item.published_date)}</span>
            </Link>
            <div className="p-4">
              <p className="font-bold mb-2">
                <span>{item.author}</span>
              </p>
              <b className="text-gray-700 leading-snug">{item.title}</b>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Home;
