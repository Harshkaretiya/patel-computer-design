'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '' },
  { name: 'Product', href: 'product' },
  { name: 'About', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="tw-bg-white fixed-top">
      <header className="tw-absolute tw-inset-x-0 tw-top-0 tw-z-50 bg-white">
        <nav aria-label="Global" className="tw-flex tw-items-center tw-justify-between tw-p-6 lg:tw-px-8">
          <div className="tw-flex lg:tw-flex-1">
            <Link to="/" className="tw--m-1.5 tw-p-1.5">
              <h5>Patel <br/>Computer</h5>
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
              <Link key={item.name} to={item.href} className="tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-justify-end">
            <Link to="#" className="tw-text-sm  tw-font-semibold tw-leading-6 tw-text-gray-900">
              Raise a Query <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:tw-hidden">
          <div className="tw-fixed tw-inset-0 tw-z-50" />
          <DialogPanel className="tw-fixed tw-inset-y-0 tw-right-0 tw-z-50 tw-w-full tw-overflow-y-auto tw-bg-white tw-px-6 tw-py-6 sm:tw-max-w-sm sm:tw-ring-1 sm:tw-ring-gray-900/10">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Link to="#" className="tw--m-1.5 tw-p-1.5">
                <span className="tw-sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="tw-h-8 tw-w-auto"
                />
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
                <div className="tw-py-6">
                  <a
                    to="#"
                    className="tw--mx-3 tw-block tw-rounded-lg tw-px-3 tw-py-2.5 tw-text-base tw-font-semibold tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

    </div>
  )
}
