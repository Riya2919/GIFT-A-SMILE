import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-300 md:flex md:justify-between p-5">
        {/* logo */}
        <div className="w-32 mx-auto sm:w-36 md:mx-10">
          <Image
            src = "/media/logo.png"
            height="100"
            width="100"
            />
        </div>

        {/* address */}
        <div>
          <div className="justify-center text-md font-bold mt-2 hidden sm:block">
            <p className="text-center">Office</p>
          </div>
          <div className="mt-1 hidden sm:block">
            <p className="text-center text-md">VIT Bhopal</p>
            <p className="text-center text-md">New Boys Hostel</p>
          </div>
        </div>

        {/* contact */}
        <div>
          <div className="flex justify-center text-md font-bold mt-2">
            Contact
          </div>
          <p className="text-center">Email: ananya.agrawal2020@vitbhopal.ac.in</p>
          <p className="text-center">Phone: +91 7453888262</p>
          <div className="flex justify-center mt-3">
          <div className="mr-1">
            <Image
              src="/media/insta_icon-removebg-preview.png"
              width="30"
              height="20"
              alt="Landing page display image"
            />
          </div>
          <div>
            <Image
              src="/media/59439-removebg-preview.png"
              width="30"
              height="20"
              alt="Landing page display image"
            />
          </div>
        </div>
        </div>

        {/* social icons */}
        
      </div>
    </>
  );
};

export default Footer;
