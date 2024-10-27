import { Link } from 'react-router-dom';

export default function GetInTouch() {
    return (
      <div className="tw-bg-white">
        <div className="tw-mx-auto tw-max-w-7xl tw-py-24 sm:tw-px-6 sm:tw-py-32 lg:tw-px-8">
          <div className="tw-relative tw-isolate tw-overflow-hidden tw-bg-gray-100 tw-px-6 tw-pt-16 tw-shadow-2xl sm:tw-rounded-3xl sm:tw-px-16 md:tw-pt-24 lg:tw-flex lg:tw-gap-x-20 lg:tw-px-24 lg:tw-pt-0">
            <div className="tw-mx-auto tw-max-w-md tw-text-center lg:tw-mx-0 lg:tw-flex-auto lg:tw-py-32 lg:tw-text-left">
              <h2 className="tw-text-balance tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-grey-900 sm:tw-text-4xl">
              Contact Us for Fast and Effective Solutions
              </h2>
              <p className="tw-mt-6 tw-text-pretty tw-text-lg/8 tw-text-gray-600">
              We're here to assist you promptly with any inquiries or concerns.
              </p>
              <div className="tw-mt-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6 lg:tw-justify-start">
                <Link
                  to="/contact"
                  className="tw-rounded-md tw-bg-gray-900 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-gray-100 tw-shadow-sm hover:tw-bg-gray-600 focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-white"
                >
                  Contact
                </Link>
               
              </div>
            </div>
            <div className="tw-relative tw-mt-16 tw-h-80 lg:tw-mt-8">
            <img
              alt="App screenshot"
              src="/assets/images/computer.jpg"
              width={912}
              height={540}
              className="tw-absolute tw-left-0 tw-top-0 tw-w-[48rem] tw-max-w-none tw-rounded-md tw-bg-white/5 tw-ring-1 tw-ring-white/10"
            />
          </div>
          </div>
        </div>
      </div>
    )
  }
  