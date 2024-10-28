import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomeProductCategory(props) {
  const [data, setData] = useState([]);

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
      isMounted = false; // cleanup flag to avoid setting state if unmounted
    };
  }, []);

  return (
    <div className="tw-bg-gray-100">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-mx-auto tw-max-w-2xl tw-py-16 sm:tw-py-24 lg:tw-max-w-none lg:tw-py-32">
          <div className="tw-flex tw-justify-between tw-items-center">
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900">
              Product Categories
            </h2>
            <Link
              to="/product"
              className="tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-gray-600 tw-mt-2"
            >
              View Categories
              <span className="tw-ml-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div className="tw-mt-6 tw-space-y-12 lg:tw-grid lg:tw-grid-cols-4 lg:tw-gap-x-6 lg:tw-space-y-0">
            {data.map((callout) => (
              <Link
                key={callout.category_id}
                className="tw-group tw-relative"
                to={`/productitem/${callout.category_id}`}
              >
                <div className="tw-relative tw-h-80 tw-w-full tw-overflow-hidden tw-rounded-lg tw-bg-white sm:tw-aspect-h-1 sm:tw-aspect-w-2 lg:tw-aspect-h-1 lg:tw-aspect-w-1 tw-group-hover:tw-opacity-75 sm:tw-h-64">
                  <img
                    alt="Images"
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
