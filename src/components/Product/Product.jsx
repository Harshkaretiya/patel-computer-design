
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Product(props) {
 
  const [data,setData] = useState([]);

  useEffect(() => {
    let isMounted = true; //to remove 2 times mount
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/categories");
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
      isMounted = false;  // cleanup flag to avoid setting state if unmounted
    };
  }, []);
  
  


  return (
    <div className="tw-bg-gray-100">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-8 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-mx-auto tw-max-w-2xl tw-py-8 sm:tw-py-12 lg:tw-max-w-none lg:tw-py-16">
          <div className="tw-flex tw-justify-center tw-items-center">
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900">
              Product Categories
            </h2>
          </div>

          <div className="tw-mt-6 tw-space-y-12 lg:tw-grid lg:tw-grid-cols-3 lg:tw-gap-x-6 lg:tw-space-y-0">
            {data.map((callout) => (
              <Link
                key={callout.category_id}
                className="tw-group tw-relative"
                to="/productitem"
                onClick={() => props.onClick(callout.category_id)}
              >
                <div className="tw-relative tw-h-80 tw-w-full tw-overflow-hidden tw-rounded-lg tw-bg-white sm:tw-aspect-h-1 sm:tw-aspect-w-2 lg:tw-aspect-h-1 lg:tw-aspect-w-1 tw-group-hover:tw-opacity-75 sm:tw-h-64">
                  <img
                    alt="img"
                    src={callout.category_img}
                    className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                  />
                </div>
                <p className="tw-text-base tw-mt-3 tw-font-semibold tw-text-gray-900">
                  {callout.category_name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
