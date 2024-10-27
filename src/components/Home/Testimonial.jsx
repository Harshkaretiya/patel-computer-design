import React from "react";

const Testimonial = () => {
  return (
    <div className="container d-flex justify-content-center my-5">
      
      <div className="card mb-3 border-0" style={{ maxWidth: "1000px" }}>
        
        <div className="row g-0 mx-5">
          <div className="col-md-4">
            <img
              src="/assets/images/computer.jpg"
              className="img-fluid tw-rounded-xl testimonialImage"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title tw-text-balance tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-grey-900 sm:tw-text-4xl">
                Great things never come from comfort zones
              </h5>
              <p className="card-text tw-mt-6 tw-text-pretty tw-text-xl/8 tw-font-semibold tw-text-gray-900">
                Dipak Patel
              </p>
              <p className="card-text tw-text-pretty tw-text-lg/8 tw-text-gray-600">
                Owner of Patel Computer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
