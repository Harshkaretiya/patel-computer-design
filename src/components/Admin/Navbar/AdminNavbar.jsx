import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


const navigation = [
  { name: "Queries", href: "/admin" },
  { name: "Manage Products", href: "/admin/manageproduct" },
  { name: "Archived", href: "/admin/archived" },
];

const AdminNavbar = () => {
  const location = useLocation();
  useEffect(()=>{
    console.log(location.pathname)
  },[location])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="tw-bg-white fixed-top">
      <header className="tw-absolute tw-inset-x-0 tw-top-0 tw-z-50 bg-white">
        <nav
          aria-label="Global"
          className="tw-flex tw-items-center tw-justify-between tw-p-6 lg:tw-px-8"
        >
          <div className="tw-flex lg:tw-flex-1">
            <Link to="/" className="tw--m-1.5 tw-p-1.5">
              <h5>
                Patel <br />
                Computer
              </h5>
            </Link>
          </div>
          <div className="tw-flex lg:tw-hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="tw--m-2.5 tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2.5 tw-text-gray-700"
            >
              <span className="tw-sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="tw-h-6 tw-w-6" />
            </button>
          </div>
          <div className="tw-hidden lg:tw-flex lg:tw-gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`tw-text-sm tw-font-semibold tw-leading-6 ${location.pathname===item.href ? "tw-text-gray-900" : "tw-text-gray-500"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end">
            <Link
              to="/admin/addnewproduct"
              className={`tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900 ${
                location.pathname === "/admin/addnewproduct" ? "tw-invisible" : ""
              }`}
            >
             Add New Product <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:tw-hidden"
        >
          <div className="tw-fixed tw-inset-0 tw-z-50" />
          <DialogPanel className="tw-fixed tw-inset-y-0 tw-right-0 tw-z-50 tw-w-full tw-overflow-y-auto tw-bg-white tw-px-6 tw-py-6 sm:tw-max-w-sm sm:tw-ring-1 sm:tw-ring-gray-900/10">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Link to="/" className="tw--m-1.5 tw-p-1.5">
                <h5>
                  Patel <br />
                  Computer
                </h5>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="tw--m-2.5 tw-rounded-md tw-p-2.5 tw-text-gray-700"
              >
                <span className="tw-sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="tw-h-6 tw-w-6" />
              </button>
            </div>
            <div className="tw-mt-6 tw-flow-root">
              <div className="tw--my-6 tw-divide-y tw-divide-gray-500/10">
                <div className="tw-space-y-2 tw-py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="tw--mx-3 tw-block tw-rounded-lg tw-px-3 tw-py-2 tw-text-base tw-font-semibold tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div
                  className={`tw-py-6 ${
                    location.pathname === "/query" ? "tw-hidden" : ""
                  } `}
                >
                  <Link
                    to="/newquery"
                    className="tw--mx-3 tw-block tw-rounded-lg tw-px-3 tw-py-2.5 tw-text-base tw-font-semibold tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50"
                  >
                    Raise a Query
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
    </div>
  )
}

export default AdminNavbar
