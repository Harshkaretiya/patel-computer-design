import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const { productId } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const [categories,setCategories] = useState([]);

  const [selectedCategory,setSelectedCategory] = useState({category_name:""});
  
  const [data, setData] = useState({
    name: "",
    imageurl: "",
    description: "",
    categoryid: ""
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
  
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/categories");
        const result = response.data;

          setCategories(result);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchCategories();

    const getEditProduct = async () => {
      try {
        const response = await axios.post("http://localhost:5000/productid",{
          productId:productId
        });
        const result = response.data;
          setData(result[0]);

          fetchSelectedCategory(result[0].categoryid)

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    if (location.pathname === `/admin/editproduct/${productId}`) {
      getEditProduct();
    }

    const fetchSelectedCategory = async (categoryId) => {
      try {
        const response = await axios.post("http://localhost:5000/products", {
          categoryid: categoryId,
        });
        const result = response.data;

          setSelectedCategory(result[0]);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  }, [location.pathname, productId]);


  // Function to handle item click, receiving the id
  const handleItemClick = (item) => {
    console.log("Item clicked with id:", item.category_id);
    setData((prevValue) => ({
      ...prevValue,
      categoryid: item.category_id,
    }));
    setSelectedCategory(item)
    toggleDropdown();
    console.log(data);

    // Handle actions based on item id here
  };


  const handleChange = (e) => {
    setData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const sendData = async () => {
    if (location.pathname === `/admin/editproduct/${productId}`) {
      try {
        const response = await axios.put("http://localhost:5000/updateproduct", {
          name: data.name,
          imageurl: data.imageurl,
          description: data.description,
          categoryid:data.categoryid,
          productid:productId
        });
        const result = response.data;
        if (result) {
          alert("Data has updated");
          navigate(-1);
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }else{
      try {
        const response = await axios.post("http://localhost:5000/newproduct", {
          name: data.name,
          imageurl: data.imageurl,
          description: data.description,
          categoryid: data.categoryid
        });
        const result = response.data;
        if (result) {
          alert("Product has been added");
          setData((prevData) => ({
            ...prevData,
            name: "",
            imageurl: "",
            description: "",
            categoryid: ""
        }));
        setSelectedCategory({ category_name: "" });
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
    
  };

  const verifiyAndSetData = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z\s]+$/; // Regex to allow only letters and spaces
    const descriptionRegex = /.+/; // Ensure description is not empty

    if (!nameRegex.test(data.name)) {
        alert("Please enter a valid product name with only alphabetic characters.");
        return;
    }

    if (!descriptionRegex.test(data.imageurl)) {
        alert("Please enter a valid image URL (PNG, JPG, JPEG, GIF, BMP).");
        return;
    }

    if (!descriptionRegex.test(data.description)) {
        alert("Please enter a valid description.");
        return;
    }

    if (!data.categoryid) {
        alert("Please select a category.");
        return;
    }
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
              {location.pathname === `/admin/editproduct/${productId}`
                ? "Edit Product Detail"
                : "Add New Product"}
            </h2>
          </div>
          <div className="tw-border-b tw-border-gray-900/10 tw-pb-12">
            <div className="sm:tw-col-span-3">
              <label
                htmlFor="first-name"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
              >
                Product Name
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
                Product Image
              </label>
              <div className="tw-mt-2">
                <input
                  id="number"
                  name="imageurl"
                  type="text"
                  onChange={handleChange}
                  value={data.imageurl}
                  autoComplete="given-name"
                  className="tw-block tw-px-2 tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 tw-placeholder:text-gray-400 tw-focus:tw-ring-2 tw-focus:tw-ring-inset tw-focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                />
              </div>
            </div>

            <div className="tw-relative tw-mt-4 tw-inline-block tw-text-left">
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-inline-flex tw-items-center dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800"
                type="button"
              >
                {selectedCategory.category_name || "Select Category"}
                <svg
                  className="tw-w-2.5 tw-h-2.5 tw-ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isOpen && (
                <div
                  id="dropdown"
                  className="tw-z-10 tw-absolute tw-mt-2 tw-bg-white tw-divide-y tw-divide-gray-100 tw-rounded-lg tw-shadow tw-w-44 dark:tw-bg-gray-700"
                >
                  <ul
                    className="tw-py-2 tw-text-sm tw-text-gray-700 dark:tw-text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    {categories.map((item) => (
                      <li key={item.category_id}>
                        <button
                        type="button"
                          onClick={() => handleItemClick(item)}
                          id={item.category_id}
                          className="tw-w-full tw-text-left tw-px-4 tw-py-2 hover:tw-bg-gray-100 dark:hover:tw-bg-gray-600 dark:hover:tw-text-white"
                        >
                          {item.category_name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="tw-col-span-full tw-mt-3">
              <label
                htmlFor="query"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
              >
                Description
              </label>
              <div className="tw-mt-2">
                <textarea
                  id="query"
                  name="description"
                  rows={4}
                  onChange={handleChange}
                  value={data.description}
                  className="tw-block tw-px-2 tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 tw-placeholder:text-gray-400 tw-focus:tw-ring-2 tw-focus:tw-ring-inset tw-focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                />
              </div>
            </div>
          </div>

          <div className="tw-pt-5 tw-flex tw-justify-center">
            <button
              type="submit"
              className="tw-inline-flex tw-justify-center tw-rounded-md tw-bg-indigo-600 tw-px-3 tw-py-1.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm tw-ring-1 tw-ring-gray-900/10 hover:tw-bg-indigo-700"
            >
              {location.pathname === `/admin/editproduct/${productId}`
                ? "Submit Changes"
                : "Add Product"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
