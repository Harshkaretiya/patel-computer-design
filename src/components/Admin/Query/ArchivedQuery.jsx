import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../../config";

const ArchivedQuery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true; //to remove 2 times mount

    const fetchProducts = async () => {
      try {
        const response = await axios.post(`${apiUrl}/getqueries`, {
          archived: true,
        });
        const result = response.data;
        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false; // cleanup flag to avoid setting state if unmounted
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  return (
    <div className="container">
      <div className="list-group">
        {data.map((oneData) => (
          <Link
            key={oneData.id}
            to={`viewquery/${oneData.id}`}
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{oneData.fullname}</h5>
              <small>{formatDate(oneData.created_at)}</small>
            </div>
            <small>{oneData.number}</small>
            <p className="mb-1 tw-line-clamp-2 tw-overflow-hidden tw-text-ellipsis tw-max-h-[3.2rem]">
              {oneData.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArchivedQuery;
