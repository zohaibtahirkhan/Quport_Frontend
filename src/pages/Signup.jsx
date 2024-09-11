// import React from "react";
// import mobile from "../assets/Imgs.png"; // Your image path
// import appstore from "../assets/App Store Badge.png";
// import googlestore from "../assets/Google Play Badge.png";
// import google from "../assets/iconfinder_Google_1298745 1.png";
// import dots from "../assets/Slider dots.png";

// const SignupPage = () => {
//   return (
//     <div className="grid grid-cols-12 min-h-screen font-poppins">
//       <div className="col-span-5 bg-blue-900 flex flex-col items-center justify-center min-h-screen hidden sm:flex">
//         <div className="text-center text-white px-10">
//           <h2 className="text-3xl font-semibold mb-6">
//             Social media shared today, tomorrow <br />
//             or by location
//           </h2>
//           <div className="relative">
//             <img
//               src={mobile}
//               alt="Mobile Mockup"
//               className="w-[400px] h-auto mx-auto"
//             />
//           </div>
//           <img src={dots} className="mx-auto mt-4" />
//         </div>
//       </div>

//       <div className="col-span-12 sm:col-span-7 flex flex-col items-center justify-center bg-white">
//         <div className="w-full max-w-2xl p-10">
//           <h3 className="text-3xl font-bold mb-6">Sign up</h3>
//           <p className="mb-8 text-gray-500">For business, band or celebrity.</p>
//           <form className="space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-md text-gray-600 mb-1">
//                   First name
//                 </label>
//                 <input
//                   type="text"
//                   className="p-3 border border-gray-300 rounded-md w-full text-sm focus:border-blue-500 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-md text-gray-600 mb-1">
//                   Last name
//                 </label>
//                 <input
//                   type="text"
//                   className="p-3 border border-gray-300 rounded-md w-full text-sm focus:border-blue-500 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-md text-gray-600 mb-1">
//                   Email or phone number
//                 </label>
//                 <input
//                   type="email"
//                   className="p-3 border border-gray-300 rounded-md w-full text-sm focus:border-blue-500 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-md text-gray-600 mb-1">
//                   Date of birth (mm/dd/yyyy)
//                 </label>
//                 <input
//                   type="date"
//                   className="p-3 border border-gray-300 rounded-md w-full text-sm focus:border-blue-500 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-md text-gray-600 mb-1">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="p-3 border border-gray-300 rounded-md w-full text-sm focus:border-blue-500 focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <label className="block text-md text-gray-600 mb-1">
//                   Confirm password
//                 </label>
//                 <input
//                   type="password"
//                   className="p-3 border border-gray-300 rounded-md w-full text-sm focus:border-blue-500 focus:outline-none"
//                 />
//               </div>
//             </div>

//             <div className="flex justify-between items-center mt-4">
//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" className="h-4 w-4" />
//                 <label className="text-md text-gray-600">Remember me</label>
//               </div>
//               <a href="#" className="text-md text-blue-600">
//                 Forgot password?
//               </a>
//             </div>

//             <div className="flex items-center space-x-2 mt-2">
//               <input type="checkbox" className="h-4 w-4" />
//               <label className="text-md text-gray-600">
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

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
//               <button className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 w-full">
//                 Create account
//               </button>
//               <button className="bg-gray-800 text-white py-3 rounded-md font-semibold hover:bg-gray-900 flex justify-center items-center w-full">
//                 <img className="h-5 w-5 mr-2" src={google} alt="Google Icon" />
//                 Sign-in with Google
//               </button>
//             </div>

//             <div className="mt-6 mb-4 text-center">
//               <p className="text-base text-gray-600">
//                 Don’t have an account?{" "}
//                 <a href="#" className="text-blue-600 underline">
//                   Log in
//                 </a>
//               </p>
//             </div>

//             <div className="mt-6 flex space-x-4 px-4">
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

// export default SignupPage;
