import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchApi } from "../api/fetchApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const [category, setCategory] = useState("general");
  const { isLoding, error, data } = useQuery("repoData", () =>
    fetchApi(category)
  );

  const { user } = useSelector((state) => state.Auth);
  console.log(user);

  console.log(data?.articles);

  return (
    <div className="container m-5 mt-12 bg-gray-50 flex ml-52">
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 p-14 bg-slate-100 ">
        {user ? <h1>Hoş geldin {user.email}</h1> : null}
        {data?.articles.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-md overflow-hidden "
            >
              <Link to={item.url}>
                <img
                  className="h-48 w-full object-cover p-5 rounded-md"
                  src={item.urlToImage}
                  alt="Mountain landscape"
                />
              </Link>
              <div className="p-4">
                <p className="font-bold  mb-2">
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
