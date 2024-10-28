import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewQueryPage = () => {
  // const { id, fullname, number, description, created_at, archived }

  const {queryId} = useParams();
  const [data,setData] = useState([]);



  useEffect(() => {
    let isMounted = true; //to remove 2 times mount

    const fetchProducts = async () => {
      try {
        const response = await axios.post("http://localhost:5000/getqueriesbyid",{
          queryId : queryId
        });
        const result = response.data;
        if (isMounted) {
          setData(result[0]);
          
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false; // cleanup flag to avoid setting state if unmounted
    };
  }, [queryId]);

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  /////////////////////to fix

  const updateArchive = async () => {
    try {
      const response = await axios.put("http://localhost:5000/updatearchived", {
        queryId: queryId,
        archived: !data.archived,
      });
      const result = response.data;
      if (result) {
        console.log("asdasd");
        data.archived?alert("Your Query is removed from Arhcived"):alert("Your Query Is Archived")
        
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  const  {fullname,created_at,number,description} = data;

  return (
    <div className="container ">
      <h2 className="tw-text-4xl tw-mt-36 tw-font-extrabold dark:tw-text-black">
        {fullname}
      </h2>
      <p className="tw-my-4 tw-text-lg tw-text-gray-500">
        {formatDate(created_at)}
      </p>
      <p className="tw-my-4 tw-text-lg tw-text-gray-500">{number}</p>
      <p className="tw-mb-4 tw-text-lg tw-font-normal tw-text-gray-500 dark:tw-text-gray-500">
        {description}
      </p>
      <button
        type="submit"
        onClick={updateArchive}
        className="tw-inline-flex tw-justify-center tw-rounded-md tw-bg-gray-900 tw-px-3 tw-py-1.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm tw-ring-1 tw-ring-gray-900/10 hover:tw-bg-gray-700"
      >
        {data.archived?"Remove from Archive":"Archive"}
      </button>
    </div>
  );
};

export default ViewQueryPage;
