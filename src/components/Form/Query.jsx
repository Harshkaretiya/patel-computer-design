import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../config";

export default function Query() {
  const [data, setData] = useState({
    name: "",
    number: "",
    query: "",
  });

  const handleChange = (e) => {
    setData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const sendData = async () => {
    try {
      const response = await axios.post(`${apiUrl}/newquery`, {
        fullname: data.name,
        number: data.number,
        description: data.query,
      });
      const result = response.data;
      if (result) {
        setData({ name: "", number: "", query: "" });
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const verifiyAndSetData = (e) => {
    e.preventDefault();

    // Validation checks
    const nameRegex = /^[A-Za-z\s]+$/;
    const numberRegex = /^[0-9]{10}$/;

    if (!nameRegex.test(data.name)) {
      alert("Please enter a valid name with only alphabetic characters.");
      return;
    }

    if (!numberRegex.test(data.number)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    if (data.query.trim() === "") {
      alert("Please enter your query.");
      return;
    }

    // If all fields are valid, send data
    sendData();
  };

  return (
    <div
      className="tw-flex tw-justify-center tw-items-start tw-mt-40"
      style={{ height: "90vh" }}
    >
      <form
        className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/3 tw-m-5 sm:tw-m-0 lg:tw-m-0"
        onSubmit={verifiyAndSetData}
      >
        <div className="tw-space-y-6">
          <div className="tw-flex tw-justify-center tw-items-center">
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900">
              Fill Details and Your Query
            </h2>
          </div>
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
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={data.name}
                  autoComplete="given-name"
                  className="tw-block tw-px-2 tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 tw-placeholder:text-gray-400 tw-focus:tw-ring-2 tw-focus:tw-ring-inset tw-focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
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
                  onChange={handleChange}
                  value={data.number}
                  autoComplete="given-name"
                  className="tw-block tw-px-2 tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 tw-placeholder:text-gray-400 tw-focus:tw-ring-2 tw-focus:tw-ring-inset tw-focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                />
              </div>
            </div>
            <div className="tw-col-span-full tw-mt-3">
              <label
                htmlFor="query"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
              >
                Query
              </label>
              <div className="tw-mt-2">
                <textarea
                  id="query"
                  name="query"
                  rows={4}
                  onChange={handleChange}
                  value={data.query}
                  className="tw-block tw-px-2 tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 tw-placeholder:text-gray-400 tw-focus:tw-ring-2 tw-focus:tw-ring-inset tw-focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                  defaultValue={""}
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
