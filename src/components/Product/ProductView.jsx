import React from "react";
import HomeProductCategory from "../Home/HomeProductCategory";

const ProductView = () => {
  return (
    <div >
      <div className="tw-w-full tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-0">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-mx-auto max-md:tw-px-2 tw-my-32">
          <div className="tw-img">
            <div className="tw-img-box h-fill max-lg:tw-mx-auto d-flex justify-content-center">
              <img
                src="https://pagedone.io/asset/uploads/1700471600.png"
                alt="Yellow Tropical Printed Shirt image"
                className="testimonialImage tw-object-cover tw-rounded-2xl"
              />
            </div>
          </div>
          <div className="tw-data tw-w-full lg:tw-pr-8 tw-pr-0 xl:tw-justify-start tw-justify-center tw-flex tw-items-start max-lg:tw-pb-10 xl:tw-my-2 lg:tw-my-5 tw-my-0">
            <div className="tw-data tw-w-full tw-max-w-xl">
              <p className="tw-mt-6 tw-text-pretty tw-text-lg/8 tw-text-gray-600">
                Category
              </p>
              <h2 className="tw-font-manrope tw-font-bold tw-text-3xl tw-leading-10 tw-text-gray-900 tw-mb-2 tw-capitalize">
                Product Name
              </h2>
             
              <p className="tw-text-gray-500 tw-text-base tw-font-normal tw-mb-5">
                Introducing our vibrant Basic Yellow Tropical Printed Shirt - a
                celebration of style and sunshine! Embrace the essence of summer
                
              </p>
              <button className="tw-rounded-md tw-bg-gray-900 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-gray-100 tw-shadow-sm hover:tw-bg-gray-600 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-white">
                Contact For Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
      <HomeProductCategory/>
    </div>
  );
};

export default ProductView;
