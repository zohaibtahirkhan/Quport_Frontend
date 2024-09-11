// import React from "react";
// import mobile from "../assets/Imgs.png"; // Your image path
// import appstore from "../assets/App Store Badge.png";
// import googlestore from "../assets/Google Play Badge.png";
// import google from "../assets/iconfinder_Google_1298745 1.png";
// import dots from "../assets/Slider dots.png";

// const LoginPage = () => {
//   return (
//     <div className="grid grid-cols-12 min-h-screen font-poppins">
//       {/* Left Section: Mobile mockup */}
//       <div className="col-span-7 bg-blue-900 flex flex-col items-center justify-center min-h-screen hidden sm:flex">
//         <div className="text-center text-white px-10">
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6">
//             Social media shared today, tomorrow <br />
//             or by location
//           </h2>
//           <div className="relative">
//             <img
//               src={mobile}
//               alt="Mobile Mockup"
//               className="w-[300px] sm:w-[400px] h-auto mx-auto"
//             />
//           </div>
//           <img src={dots} className="mx-auto mt-4" />
//         </div>
//       </div>

//       {/* Right Section: Login Form */}
//       <div className="col-span-12 sm:col-span-5 flex flex-col items-start justify-start bg-white px-6 sm:px-10 py-10">
//         <div className="w-full max-w-full sm:max-w-md">
//           <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
//             Login
//           </h3>
//           <p className="mb-4 sm:mb-8 text-gray-500">
//             For business, band or celebrity.
//           </p>
//           <form className="space-y-4 sm:space-y-6">
//             <div>
//               <label className="block text-sm sm:text-md text-gray-600 mb-1">
//                 Email or phone number
//               </label>
//               <input
//                 type="email"
//                 className="p-2 sm:p-3 border border-gray-300 rounded-md w-full text-sm focus:border-blue-500 focus:outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm sm:text-md text-gray-600 mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="p-2 sm:p-3 border border-gray-300 rounded-md w-full text-sm focus:border-blue-500 focus:outline-none"
//               />
//             </div>

//             {/* Remember me and Forgot Password */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 sm:mt-4">
//               <div className="flex items-center space-x-2 mb-2 sm:mb-0">
//                 <input type="checkbox" className="h-4 w-4" />
//                 <label className="text-sm sm:text-md text-gray-600">
//                   Remember me
//                 </label>
//               </div>
//               <a href="#" className="text-sm sm:text-md text-blue-600">
//                 Forgot password?
//               </a>
//             </div>

//             {/* Terms and Privacy Policy */}
//             <div className="flex items-start space-x-2 mt-2">
//               <input type="checkbox" className="h-4 w-4" />
//               <label className="text-sm sm:text-md text-gray-600">
//                 I agree to all the{" "}
//                 <a href="#" className="text-blue-500 underline">
//                   Terms
//                 </a>{" "}
//                 and{" "}
//                 <a href="#" className="text-blue-600 underline">
//                   Privacy policy
//                 </a>
//               </label>
//             </div>

//             {/* Buttons */}
//             <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-4 sm:mt-6">
//               <button className="bg-blue-600 text-white py-2 sm:py-3 rounded-md font-semibold hover:bg-blue-700 w-full">
//                 Create account
//               </button>
//               <button className="bg-gray-800 text-white py-2 sm:py-3 rounded-md font-semibold hover:bg-gray-900 flex justify-center items-center w-full">
//                 <img
//                   className="h-4 sm:h-5 w-4 sm:w-5 mr-2"
//                   src={google}
//                   alt="Google Icon"
//                 />
//                 Sign-in with Google
//               </button>
//             </div>

//             {/* Already have an account */}
//             <div className="mt-4 sm:mt-6 mb-4 text-center">
//               <p className="text-sm sm:text-base text-gray-600">
//                 Don’t have an account?{" "}
//                 <a href="#" className="text-blue-600 underline">
//                   Log in
//                 </a>
//               </p>
//             </div>

//             {/* App Store and Google Play buttons */}
//             <div className="mt-4 sm:mt-6 flex space-x-4 justify-center">
//               <img
//                 className="h-8 sm:h-10 cursor-pointer"
//                 src={googlestore}
//                 alt="Google Play"
//               />
//               <img
//                 className="h-8 sm:h-10 cursor-pointer"
//                 src={appstore}
//                 alt="App Store"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
