import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className="pb-8">
      
      {/* image */}
      <div className="flex justify-center pb-5">
        <Image src="/media/smiling_kids.jpg" width="1920" height="1080" />
      </div>

      {/* paragraph  */}
      <div className="flex justify-center "> 
        <p className="text-center text-sm w-3/4 md:text-base md:w-2/3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ipsum, inventore aspernatur natus similique eum, harum, cumque facilis distinctio deserunt temporibus laborum earum excepturi asperiores!
        </p>
      </div>

      {/* boxes */}
      <div className="">
        <div className="flex justify-center mt-4">
          <h1 className="font-medium animate-pulse md:text-xl">Gift-A-Smile's Role</h1>
        </div>
        <div className="lg:flex justify-center lg:mx-10">
          
          <div className="bg-white m-4 p-5 md:px-8 md:w-2/3 md:mx-auto sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-900 opacity-80 rounded-lg shadow-xl hover:scale-105 transition-all ease-in-out">
            <h1 className="text-white animate-pulse font-semibold mb-2">Giving Platform</h1>
            <p className="text-white text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="bg-white m-4 p-5 md:px-8 md:w-2/3 md:mx-auto sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-900 opacity-80 rounded-lg shadow-xl hover:scale-105 transition-all ease-in-out">
            <h1 className="text-white animate-pulse font-semibold mb-2">Helping NGOs</h1>
            <p className="text-white text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="bg-white m-4 p-5 md:px-8 md:w-2/3 md:mx-auto sm:px-20 sm:mx-20 lg:mx-5 bg-gradient-to-tr from-black to-gray-900 opacity-80 rounded-lg shadow-xl hover:scale-105 transition-all ease-in-out">
            <h1 className="text-white animate-pulse font-semibold mb-2">Spreading Smiles :)</h1>
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
