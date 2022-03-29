import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className="py-3">
      {/* heading */}
      <div className="flex justify-center py-5">
        <h1 className="text-xl">Gift-A-Smile</h1>
      </div>

      {/* image */}
      <div className="flex justify-center pb-5">
        <Image src="/media/About.jpg" width="600" height="200" />
      </div>

      {/* paragraph  */}
      <div className="flex justify-center "> 
        <p className="text-center w-3/4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose injected humour and the like.
        </p>
      </div>

      {/* boxes */}
      <div className="">
        <div className="flex justify-center mt-4">
          <h1 className="">Gift-A-Smile's Role</h1>
        </div>
        <div className="lg:flex justify-center lg:mx-10">
          
          <div className="bg-white m-4 p-5 md:px-12 md:mx-20 sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-600 opacity-80 rounded-lg shadow-xl">
            <h1 className="text-white font-semibold mb-2">LOREM IPSUM</h1>
            <p className="text-white text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="bg-white m-4 p-5 md:px-12 md:mx-20 sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-600 opacity-80 rounded-lg shadow-xl">
            <h1 className="text-white font-semibold mb-2">LOREM IPSUM</h1>
            <p className="text-white text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="bg-white m-4 p-5 md:px-12 md:mx-20 sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-600 opacity-80 rounded-lg shadow-xl">
            <h1 className="text-white font-semibold mb-2">LOREM IPSUM</h1>
            <p className="text-white text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="bg-white m-4 p-5 md:px-12 md:mx-20 sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-600 opacity-80 rounded-lg shadow-xl">
            <h1 className="text-white font-semibold mb-2">LOREM IPSUM</h1>
            <p className="text-white text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
