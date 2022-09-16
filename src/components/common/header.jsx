import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { navigation, products } from "./data"
import { Link } from "gatsby"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttonRef = useRef(null)
  const timeoutDuration = 200
  let timeout

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true
      })
    )
  }

  const onMouseEnter = (open) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef.current?.click()
  }

  const onMouseLeave = (open) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }
  return (
    <header className={` ${scrollPosition > 30 ? "header-scroll" : ""} transition duration-450 ease-in-out fixed w-full top-0 z-50 menu`}>
      <Popover className="relative bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="flex justify-between items-center
           border-gray-100 py-6 md:justify-start md:space-x-10"
          >
            {" "}
            <div className="flex justify-start lg:w-0 lg:flex-1  hidden md:block">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto sm:h-10"
                  src="/header/logo.svg"
                  alt="last9 logo"
                />
              </Link>
            </div>
            <div className="flex -mr-2 -my-2 md:hidden items-baseline">
              <Popover.Button
                className="bg-white rounded-md p-2 inline-flex items-center
              justify-center text-gray-400 hover:text-black hover:bg-gray-100
               focus:outline-none focus:ring-2 focus:ring-inset
                focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-8 w-8" aria-hidden="true" />
              </Popover.Button>
              <div className="flex justify-start lg:w-0 lg:flex-1 pt-2 pl-2">
                <Link to="/">
                  <span className="sr-only">Last9</span>
                  <img
                    className="h-10 w-auto sm:h-10"
                    src="/header/logo.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center justify-end md:flex-1 lg:w-0">
              <a href="/schedule-demo"
                className="inline-flex items-center px-4 py-2 border-2 border-black
                  shadow-sm text-base font-medium rounded-md text-gray-700 bg-white
                  focus:outline-none get-a-demo"
              >
                Get a demo
              </a>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <div onMouseLeave={onMouseLeave.bind(null, open)}>
                      <Popover.Button
                        onMouseEnter={onMouseEnter.bind(null, open)}
                        ref={buttonRef}
                        className={classNames(
                          open ? "text-gray-900" : "text-black",
                          `group bg-white rounded-md inline-flex
                         items-center text-base font-medium hover:text-gray-900
                          focus:outline-none
                           focus:ring-indigo-500`
                        )}
                      ><Link to="/products">
                          <span className="manrope-semibold">Products</span></Link>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-black"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          onMouseEnter={onMouseEnter.bind(null, open)}
                          onMouseLeave={onMouseLeave.bind(null, open)}
                          ref={buttonRef}
                          className="absolute z-10 -ml-4 mt-3
                       transform px-2 w-screen max-w-md sm:px-0 lg:ml-0
                        lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div
                            className="rounded-lg shadow-lg
                         ring-1 ring-black ring-opacity-5 overflow-hidden"
                          >
                            <div
                              className="relative grid gap-6 bg-white px-5
                           py-6 sm:gap-8 sm:p-8"
                            >
                              {products.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="-m-3 p-3 flex
                                 justify-between item-center rounded-lg active-hover hover:!text-black"
                                >
                                  <div className="flex">
                                    <img src={item.icon} className="h-20" />
                                    <div className="ml-4 my-auto">
                                      <p
                                        className="text-sm
                                   manrope-semibold pb-1 "
                                      >
                                        {item.name}
                                      </p>
                                      <p
                                        className="text-xs w-32
                                   manrope-regular text-gray-400"
                                      >
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center"><ChevronRightIcon className="h-5" /></div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </div>
                  </>
                )}
              </Popover>
              {navigation.map((data) => (
                <Link
                  to={data.href}
                  key={data.name}
                  className="text-base manrope-semibold text-black hover:text-gray-900"
                >
                  {data.name}
                </Link>
              ))}
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="/schedule-demo" className="inline-flex items-center px-4 py-2 border-2 border-black
               shadow-sm text-base manrope-semibold rounded-md text-gray-700 bg-white
                focus:outline-none get-a-demo">
                Get a demo
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-50 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 h-screen">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <Popover.Button
                      className="bg-white rounded-md p-2 inline-flex
                     items-center justify-center text-gray-400 hover:text-black
                      hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset
                       focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? "text-gray-900" : "text-black",
                              `group bg-white rounded-md inline-flex
                         items-center text-base w-full flex justify-between font-medium hover:text-gray-900
                          focus:outline-none
                           focus:ring-indigo-500`
                            )}
                          >
                            <span className="ml-3 manrope-semibold">Products</span>
                            <ChevronDownIcon
                              className={classNames(
                                open ? "text-gray-600" : "text-gray-400",
                                "ml-2 h-5 w-5 group-hover:text-black"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              className="z-10 mt-3
                       transform px-2 sm:px-0 lg:ml-0
                        lg:left-1/2 lg:-translate-x-1/2"
                            >
                              <div
                                className="rounded-lg shadow-lg
                         ring-1 ring-black ring-opacity-5 overflow-hidden"
                              >
                                <div
                                  className="relative grid gap-6 bg-white px-5
                           py-6 sm:gap-8 sm:p-8"
                                >
                                  {products.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      className="-m-3 p-3 flex
                                 justify-between item-center rounded-lg active-hover hover:!text-black"
                                    >
                                      <div className="flex">
                                        <img src={item.icon} className="h-20" />
                                        <div className="ml-4 my-auto">
                                          <p
                                            className="text-sm
                                   font-medium pb-1 manrope-semibold"
                                          >
                                            {item.name}
                                          </p>
                                          <p
                                            className="text-xs w-32
                                   font-medium text-gray-400 manrope-regular"
                                          >
                                            {item.description}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex items-center"><ChevronRightIcon className="h-5" /></div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900 manrope-semibold">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

Header.propTypes = { siteTitle: PropTypes.string }

Header.defaultProps = { siteTitle: `` }

export default Header
