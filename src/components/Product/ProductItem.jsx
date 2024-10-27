import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';


const ProductItem = (props) => {

  const [data,setData] = useState([]);

  useEffect(() => {
    let isMounted = true; //to remove 2 times mount
  
    const fetchProducts = async () => {
      try {
        const response = await axios.post("http://localhost:5000/products",{
          categoryid:props.categoryId
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
      isMounted = false;  // cleanup flag to avoid setting state if unmounted
    };
  });

  return (
    <div className="tw-bg-white">
    <div className="tw-mx-auto tw-max-w-2xl tw-px-4 tw-py-8 sm:tw-px-6 sm:tw-py-12 lg:tw-max-w-7xl lg:tw-px-8">
      <h2 className="tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900">Category Name Here</h2>

      <div className="tw-mt-6 tw-grid tw-grid-cols-1 tw-gap-x-6 tw-gap-y-10 sm:tw-grid-cols-2 lg:tw-grid-cols-4 xl:tw-gap-x-8">
        {data.map((product) => (
          <Link key={product.id} className="tw-group tw-relative" to="/productview" onClick={() => props.onClicked(product)}>
            <div className="tw-aspect-h-1 tw-aspect-w-1 tw-w-full tw-overflow-hidden tw-rounded-md tw-bg-gray-200 lg:tw-aspect-none tw-group-hover:tw-opacity-75 lg:tw-h-80" >
              <img
                alt="img"
                src={product.imageurl}
                className="tw-h-full tw-w-full tw-object-cover tw-object-center lg:tw-h-full lg:tw-w-full"
              />
            </div>
            <div className="tw-mt-4 tw-flex tw-justify-between">
              <div>
                <h3 className="tw-text-sm tw-text-gray-700">
                  <p>
                    <span aria-hidden="true" className="tw-absolute tw-inset-0" />
                    {product.name}
                  </p>
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ProductItem
