import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className="pb-8">

      {/* image */}
      <div className="flex justify-center pb-5">
        <Image 
        src="/media/smiling_kids2.jpg"
        width="1920"
        height="900"
        alt="Banner image"
        />
      </div>

      {/* paragraph  */}
      <div className="flex justify-center py-8">
        <p className="text-center text-sm w-3/4 md:text-base md:w-2/3">
          Gift-a-smile is a non-profit company that connects NGOs with
          individuals who wish to make a social impact by contributing to the
          welfare of the poor through a technologically based platform.
        </p>
      </div>

      {/* boxes */}
      <div className="py-8">
        <div className="flex justify-center mt-4">
          <h1 className="font-medium animate-pulse md:text-xl pb-8 lg:text-2xl xl:text-3xl">Gift-A-Smile Role</h1>
        </div>
        <div className="lg:flex justify-center lg:mx-10">

          <div className="bg-white m-4 p-5 md:px-8 md:w-2/3 md:mx-auto sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-900 opacity-80 rounded-lg shadow-xl hover:scale-105 transition-all ease-in-out">
            <h1 className="text-white animate-pulse font-semibold mb-2">Giving Platform</h1>
            <p className="text-white text-sm">
              Our website connects the people who want to make donations to the people who are in need of the donations by making all the NGOs available at our one-stop website.
            </p>
          </div>
          <div className="bg-white m-4 p-5 md:px-8 md:w-2/3 md:mx-auto sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-900 opacity-80 rounded-lg shadow-xl hover:scale-105 transition-all ease-in-out">
            <h1 className="text-white animate-pulse font-semibold mb-2">Helping NGOs</h1>
            <p className="text-white text-sm">
            Now, you do not have to scroll through the internet to find the right site for making the right donations. This will also help the NGOs to keep their workflow streamlined.
            </p>
          </div>

          <div className="bg-white m-4 p-5 md:px-8 md:w-2/3 md:mx-auto sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-900 opacity-80 rounded-lg shadow-xl hover:scale-105 transition-all ease-in-out">
            <h1 className="text-white animate-pulse font-semibold mb-2">Spreading Smiles :)</h1>
            <p className="text-white text-sm">
              After receiving the donations from donors, the respected NGO will be informed about the donation and it will then collect it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
