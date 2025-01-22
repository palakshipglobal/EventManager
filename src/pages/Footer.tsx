import React from "react";
import { Instagram, Facebook, Navigation, Copyright } from "lucide-react";
import logo from "/logo.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-gray-100 mt-16 py-10 px-6 md:px-12 lg:px-16">
        <div className="flex justify-between gap-4 sm:gap-2 cursor-pointer">
          <div className="flex gap-2">
            <img src={logo} className="h-7 w-7" />
            <p className="text-md md:text-xl font-medium">
              EveMana<span className="text-blue-700">ge</span>
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <div className="bg-gray-300 rounded-full p-1.5 md:p-2 cursor-pointer">
              <Instagram className="size-4 md:w-5 md:h-5 text-black" />
            </div>
            <div className="bg-gray-300 rounded-full p-1.5 md:p-2 cursor-pointer">
              <Facebook className="size-4 md:w-5 md:h-5 text-black" />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <p className="text-md font-medium">STAY CONNECTED</p>
              <p className="text-xs mt-4">Sign up for our latest updates and helpful resources.</p>
              <div className="flex mt-2">
                <input
                  type="email"
                  className="w-full sm:w-72 h-10 rounded-full bg-gray-200 px-5 py-2 placeholder:text-xs placeholder:text-gray-800"
                  placeholder="Email address..."
                />
                <div className="bg-white/50 w-7 h-7 rounded-full p-2 -ml-9 my-auto">
                  <Navigation className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 md:gap-44 lg:gap-28">
              <div>
                <p className="uppercase text-md font-medium mb-2">Product</p>
                <p className="text-sm mt-1">Home</p>
                <p className="text-sm mt-1">Events</p>
                <p className="text-sm mt-1">Features</p>
                <p className="text-sm mt-1">Benefits</p>
              </div>

              <div>
                <p className="uppercase text-md font-medium mb-2">Resources</p>
                <p className="text-sm mt-1">Technical support</p>
                <p className="text-sm mt-1">Knowledge base</p>
                <p className="text-sm mt-1">My account</p>
              </div>

              <div>
                <p className="uppercase text-md font-medium mb-2">Community</p>
                <p className="text-sm mt-1">Blog</p>
                <p className="text-sm mt-1">Knowledgebase</p>
                <p className="text-sm mt-1">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 text-gray-700 px-6 md:px-12 lg:px-16 flex justify-between">
        <div className="flex gap-1">
          <Copyright className="w-4 h-4 md:mt-1" />
          <span className="text-xs md:text-sm">2025 All rights Reserved</span>
        </div>

        <div className="md:text-sm text-xs flex md:gap-5 gap-2">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     <div className="bg-black text-white mt-16 py-10 px-10 sticky">
//       <div className="flex justify-between gap-2 cursor-pointer">
//         <div className="flex gap-2">
//           <img src={logo} className="h-7 w-7" />
//           <p className="md:text-xl text-md font-medium">
//             EveMana<span className="text-blue-700">ge</span>
//           </p>
//         </div>
//         <div className="flex gap-2 justify-end">
//           <div className="bg-gray-50 rounded-full md:p-2 p-1 cursor-pointer">
//             <Instagram className="md:size-5 size-3 text-black" />
//           </div>

//           <div className="bg-gray-50 rounded-full p-1 md:p-2 cursor-pointer ">
//             <Facebook className="md:size-5 size-3 text-black" />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center"></div>
//       <div className="mt-10 px-5">
//         <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
//           <div>
//             <p className="text-md">STAY CONNECTED</p>
//             <p className="text-xs mt-4">Sign up for our latest updates and helpful resources.</p>
//             <div className="flex">
//               <input
//                 type="email"
//                 className="w-72 h-10 mt-2 rounded-full bg-white/5 px-5 py-2 placeholder:text-xs"
//                 placeholder="Email address..."
//               ></input>
//               <div className="bg-white/10 w-7 h-7 rounded-full p-2 my-3.5 -ml-9">
//                 <Navigation className="size-3" />
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
//             <div>
//               <p className="uppercase text-md mb-2">product</p>
//               <p className="text-sm mt-1">Home</p>
//               <p className="text-sm mt-1">Events</p>
//               <p className="text-sm mt-1">Benefits</p>
//             </div>

//             <div>
//               <p className="uppercase text-md mb-2">legal</p>
//               <p className="text-sm mt-1">Privacy Policy</p>
//               <p className="text-sm mt-1">Terms & Conditions</p>
//               <p className="text-sm mt-1">Services Agreement</p>
//             </div>
//             <div>
//               <p className="uppercase text-md mb-2">community</p>
//               <p className="text-sm mt-1">Blog</p>
//               <p className="text-sm mt-1">Knowledgebase</p>
//               <p className="text-sm mt-1">Support</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-10 flex justify-end gap-1">
//         <Copyright className="size-3 mt-1" />
//         <span className="text-xs md:text-sm">2025 All rights Reserved</span>
//       </div>
//     </div>
//   );
// };
