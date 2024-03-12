import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';


function Header() {
  return (
    <>

      <div className=' w-[91%] 3xl:max-w-[1836px] mx-auto  mt-[27px] relative' >
        <nav className={`  top-[27px] fixed  nav-bg-top w-[91%] 3xl:max-w-[1836px] z-[99] rounded-[60px] px-[16px] sm:px-2 md:px-8 mx-auto`}  >
          <div className="   flex flex-wrap items-center justify-between mx-auto py-3">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
             <Image src="/LAMBDA_black.svg" width={25} height={25} alt="Flowbite Logo"  />
             <Image src="/LAMBDA_label.svg" width={75} height={50} alt="Flowbite Logo"  />
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row space-x-8 lg:space-x-11 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
                <li>
                  <a href="https://twitter.com/LAMBDA_Protocol" className="block py-2 px-3 text-white f-f-m text-tiny  rounded md:bg-transparent  md:p-0" aria-current="page">Twitter</a>
                </li>

                <li>
                  <a href="https://discord.com/invite/TM62WjbbCd" className="block py-2 px-3 text-white f-f-m text-tiny rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">Discord</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Header
