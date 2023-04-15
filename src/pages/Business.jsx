import React from 'react'
import { fetchApi } from '../api/fetchApi'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

const Business = () => {
  const [category, setCategory] = useState("business")
  const { loading, error, data } = useQuery("repoData", () => fetchApi(category))

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <div className="container m-5 mt-0 bg-gray-50 flex ml-52">
      <div className="grid grid-cols-1 w-11/12 gap-6 mb-6 lg:grid-cols-3 p-14 bg-slate-100 ">
        {
          data?.articles.map((item, index) => {
            return (
              <div key={index} className="bg-white shadow-md rounded-md overflow-hidden ">
                <Link to={item.url}>
                  <img
                    className="h-48 w-full object-cover p-5 rounded-md"
                    src={item.urlToImage}
                    alt="Mountain landscape"
                  />
                  <span className="flex justify-end mr-4 text-slate-500">
                      {
                       formatDate(item.publishedAt)
                      }</span>
                </Link>
                <div className="p-4">
                  <p className="font-bold  mb-2">
                    <span>{item.author}</span>
                  </p>
                  <b className="text-gray-700 leading-snug">
                    {item.title}
                  </b>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default Business