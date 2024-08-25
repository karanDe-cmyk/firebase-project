// // src/components/DashboardOverview.js
// import React from "react";
// import '../Style.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

// function Menu() {
//   return (
//     <>
//     <div className="row">
//       <div className="logo-container col-sm-4">
//         <div className="">
//           <img src="image/logo.png" alt="logo" width={130} height={142} />
//         </div>
//       </div>
//       <div className="logo-container1 col-sm-4">
//         <h1>राष्ट्रीय महिला परिषद</h1>
//         <h1>National Women Council</h1>
//       </div>
//       <div className="logo-container col-sm-4">
//         <div className="">
//           <img src="image/beti_logo.png" alt="beti_logo" width={130} height={142} />
//         </div>
//       </div>
//     </div>
//       <nav className="navbar navbar-expand-lg  navbar-light bg-light">
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" as={NavLink} to="dashboard">Dashboard</a>
//             </li>
//             <li className="nav-item">
//               <div className="dropdown about">
//                 <a className="nav-link dropdown-toggle ml-3" as={NavLink}  data-bs-toggle="dropdown" aria-expanded="false" to="/">About Us<FontAwesomeIcon className="icon" icon={faPlus} /></a>
//                 <ul className="dropdown-menu">
//                   <li>WHO WE ARE</li>
//                   <li>OUR ACHIVEMENTS</li>
//                 </ul>
//               </div>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" to="/">Incident Reporting</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" to="/">Resources</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" to="/">Contact Us</a>
//             </li>
//           </ul>
//           </div>
//           <div className="d-flex ">
//             <form className="form-inline my-2 d-flex flex-row-reverse m-4 my-lg-0">
//               <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-success m-1 my-2 my-sm-0" type="submit">Search</button>
            
//                 <div className="dropdown ">
//                   <button className="btn btn-danger dropdown-toggle ml-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   SOS
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" to="/">Sign Up</a></li>
//                     <li><a className="dropdown-item" to="/">Sign In</a></li>
//                   </ul>
//                 </div>
//               </form>
//           </div>
//       </nav>
//     {/* <Dashboard /> */}
//     </>
//   );
// }

// export default Menu;
