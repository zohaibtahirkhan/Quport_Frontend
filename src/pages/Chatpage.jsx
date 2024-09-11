// import React from "react";
// import chaticon from "../assets/auto_awesome_FILL1_wght400_GRAD0_opsz48 1.png";
// import quporticon from "../assets/Frame 1437252868 (2).png";
// import padelAiicon from "../assets/Frame 1437252868.png";
// import soccericon from "../assets/Frame 1437252868 (1).png";
// import realicon from "../assets/Vector.png";
// import logouticon from "../assets/Logout.png";
// import profileicon from "../assets/Avatar Style 6.png";
// import responseicon from "../assets/response.png";
// import notificationicon from "../assets/notifications_none.png";
// import darkicon from "../assets/moon-solid 1.png";
// import infoicon from "../assets/info_outline.png";
// import searchicon from "../assets/Search Icon.png";
// import trashicon from "../assets/Trash.png";
// import editicon from "../assets/edit.png";
// import usericon from "../assets/User Avatar.png";


// const ChatPage = () => {
//   return (
//     <div className="h-screen flex font-poppin">
//       {/* Sidebar */}
//       <div className="w-1/5 bg-white p-6 flex flex-col justify-between h-full rounded-2xl m-4 shadow-lg">
//         <div>
//           <h2 className="text-xl font-bold mb-10 text-center mt-6">QU-Chat</h2>
//           <div className="border-t border-gray-200 my-4 mb-12"></div>
//           <div className="space-y-6">
//             <a
//               href="#"
//               className="flex items-center space-x-3 text-lg text-black font-medium"
//             >
//               <img src={chaticon} />
//               <span>Chat</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-3 text-lg text-gray-500 hover:text-black"
//             >
//               <img src={quporticon} />

//               <span>QUPORT</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-3 text-lg text-blue-600 font-medium"
//             >
//               <img src={padelAiicon} />
//               <span>Padel AI</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-3 text-lg text-gray-500 hover:text-black"
//             >
//               <img src={soccericon} />
//               <span>Soccer AI</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center space-x-3 text-lg text-gray-500 hover:text-black"
//             >
//               <img src={realicon} />
//               <span>Real Token</span>
//             </a>
//           </div>
//         </div>

//         {/* User Profile */}
//         <div className="flex items-center justify-between space-x-3 p-4 bg-white rounded-full shadow-lg mb-4 w-full">
//           <div className="flex items-center space-x-3">
//             <img
//               src={profileicon}
//               alt="Profile"
//               className="w-10 h-10 rounded-full"
//             />
//             <p className="text-md font-medium">Adela Parkson</p>
//           </div>
//           <button className="flex items-center justify-center bg-white rounded-full shadow-md">
//             <img src={logouticon} alt="Logout Icon" />
//           </button>
//         </div>
//       </div>

//       {/* Main Content - Navbar and Chat Area */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <div className="p-4 flex justify-between items-center">
//           <div className="flex space-x-6">
//             <a
//               href="#"
//               className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 shadow-md"
//             >
//               QUPORT
//             </a>
//             <a
//               href="#"
//               className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md"
//             >
//               PADEL AI
//             </a>
//             <a
//               href="#"
//               className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 shadow-md"
//             >
//               SOCCER AI
//             </a>
//             <a
//               href="#"
//               className="bg-white text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 shadow-md"
//             >
//               Real Token
//             </a>
//           </div>

//           <div className="flex items-center space-x-6 shadow-lg p-3 rounded-full">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="pl-11 pr-3 py-2 rounded-full h-12 w-52 bg-gray-100"
//               />
//               <span className="absolute left-3 ml-2 top-1/2 transform -translate-y-1/2 text-gray-400">
//                 <img src={searchicon} />
//               </span>
//             </div>

//             <span className="text-gray-600 text-xl">
//               <img src={notificationicon} />
//             </span>
//             <span className="text-gray-600 text-xl">
//               <img src={darkicon} />
//             </span>
//             <span className="text-gray-600 text-xl">
//               <img src={infoicon} />
//             </span>
//             <img
//               src={profileicon}
//               alt="Profile"
//               className="rounded-full w-10 h-10"
//             />
//           </div>
//         </div>

//         {/* Main Chat Area */}
//         <div className="flex justify-between items-center p-4">
//           <p className="text-4xl font-semibold ">Chat</p>
//           <div className="flex-1 flex justify-end mr-44">
//             <button className="flex items-center text-white bg-red-600 font-semibold px-4 py-2 rounded-lg w-auto space-x-2">
//               <span className="text-xl">
//                 <img src={trashicon} alt="Trash Icon" className="w-5 h-5" />
//               </span>
//               <span>Remove Chat</span>
//             </button>
//           </div>
//         </div>

//         <div className="flex-1 p-6 shadow-sm">
//           <div className="flex">
//             <div>
//               <img src={usericon} className="w-36 h-36" alt="User Icon" />
//             </div>

//             <div className="w-full max-w-6xl mx-auto -ml-3">
//               {/* Chat Header */}
//               <div className="flex items-center space-x-4 ">
//                 <div className="flex justify-between items-center p-4 rounded-lg border border-gray-200 shadow-sm w-full">
//                   <h2 className="text-xl font-bold">
//                     The advantages of Artificial Intelligence
//                   </h2>
//                   <div>
//                     <img src={editicon} className="w-6 h-6" alt="Edit Icon" />
//                   </div>
//                 </div>
//               </div>

//               {/* Chat Content */}
//               <div className=" rounded-lg">
//                 <div className="rounded-lg shadow-md p-4">
//                   <p className="text-gray-600  space-y-2 text-lg pb-2">
//                     Artificial Intelligence (AI) offers numerous advantages and
//                     has the potential to revolutionize various aspects of our
//                     lives. Here are some key advantages of AI:
//                   </p>
//                   <ol className="list-decimal ml-6 space-y-2 text-gray-600 text-lg">
//                     <li>
//                       Automation: AI can automate repetitive tasks, saving time
//                       and effort for humans.
//                     </li>
//                     <li>
//                       Decision-making: AI systems can analyze vast amounts of
//                       data and make informed decisions.
//                     </li>
//                     <li>
//                       Improved accuracy: AI algorithms can achieve high levels
//                       of accuracy in tasks such as image recognition.
//                     </li>
//                     <li>
//                       Continuous operation: AI systems can work without breaks,
//                       ensuring uninterrupted performance.
//                     </li>
//                   </ol>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Regenerate Response */}
//           <div className="flex justify-center mt-6">
//             <button className="flex justify-center items-center border border-gray-300 px-6 py-4 rounded-full space-x-2">
//               <img src={responseicon} alt="Response Icon" />
//               <span>Regenerate Response</span>
//             </button>
//           </div>
//         </div>
//         {/* Chat Input */}
//         <div className="flex items-center justify-between bg-white p-4 rounded-lg mb-16">
//           <p className="text-3xl font-bold mr-4">QU-Chat</p>
//           <input
//             type="text"
//             placeholder="Send a message"
//             className="flex-1 border border-gray-300 rounded-full px-4 py-6 shadow-sm focus:outline-none focus:border-blue-500"
//           />
//           <button className="ml-4 bg-blue-700 text-white px-20 py-6 rounded-full shadow-lg">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;
