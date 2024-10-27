import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function Query() {
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-h-screen">
      <form className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/3 tw-m-5 sm:tw-m-0 lg:tw-m-0" >
        <div className="tw-space-y-6">
          <div className="tw-border-b tw-border-gray-900/10 tw-pb-12">
            <div className="sm:tw-col-span-3">
              <label
                htmlFor="first-name"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
              >
                First name
              </label>
              <div className="tw-mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 tw-placeholder:text-gray-400 tw-focus:tw-ring-2 tw-focus:tw-ring-inset tw-focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                />
              </div>
            </div>
            <div className="sm:tw-col-span-3 tw-mt-3">
              <label
                htmlFor="number"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
              >
                Contact Number
              </label>
              <div className="tw-mt-2">
                <input
                  id="number"
                  name="number"
                  type="text"
                  autoComplete="given-name"
                  className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 tw-placeholder:text-gray-400 tw-focus:tw-ring-2 tw-focus:tw-ring-inset tw-focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                />
              </div>
            </div>
            <div className="tw-col-span-full tw-mt-3">
              <label
                htmlFor="about"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
              >
                About
              </label>
              <div className="tw-mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 tw-placeholder:text-gray-400 tw-focus:tw-ring-2 tw-focus:tw-ring-inset tw-focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>

          <div className="tw-pt-5 tw-flex tw-justify-center">
            <button
              type="submit"
              className="tw-inline-flex tw-justify-center tw-rounded-md tw-bg-indigo-600 tw-px-3 tw-py-1.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm tw-ring-1 tw-ring-gray-900/10 hover:tw-bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
