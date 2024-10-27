import React from "react";

const About = () => {
  return (
    <div>
      <div className="tw-w-full tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-0">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-16 tw-mx-auto max-md:tw-px-2 tw-my-32">
          <div className="tw-img">
            <div className="tw-img-box h-fill max-lg:tw-mx-auto d-flex justify-content-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10474.547119800594!2d71.2987242523689!3d21.845511509291267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39588c692b252e6b%3A0x9b4371259e95bf49!2sPatel%20Computer%20Babra!5e0!3m2!1sen!2sin!4v1730016698406!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="tw-rounded-2xl"
              ></iframe>
            </div>
          </div>
          <div className="tw-data tw-w-full lg:tw-pr-8 tw-pr-0 xl:tw-justify-start tw-justify-center tw-flex tw-items-start max-lg:tw-pb-10 xl:tw-my-2 lg:tw-my-5 tw-my-0">
            <div className="tw-data tw-w-full tw-max-w-xl">
              <h2 className="tw-font-manrope tw-font-bold tw-text-3xl tw-leading-10 tw-text-gray-900 tw-mb-2 tw-capitalize">
                Patel Computer
              </h2>

              <p className="tw-text-gray-500 tw-text-base tw-font-normal tw-mb-5">
              nana bus stop, Babra, Gujarat 365421
              </p>
              <button className="tw-rounded-md tw-bg-gray-900 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-gray-100 tw-shadow-sm hover:tw-bg-gray-600 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-white">
                Contact Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
