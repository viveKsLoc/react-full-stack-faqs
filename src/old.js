// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";
// import Marquee from "./components/old/Marquee";
// import Appbar from "./components/old/Appbar";
// import Welcome from "./components/old/Welcome";
// import TagsCards from "./components/old/TagsCards";
// import TypesCards from "./components/old/TypesCards";
// import SetsCards from "./components/old/SetsCards";
// import Footer from "./components/old/Footer";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Alert } from "reactstrap";

// function App() {
//   const [faqs, setFaqs] = useState(null);
//   const [sets, setSets] = useState(null);
//   const [types, setTypes] = useState(null);
//   const [tags, setTags] = useState(null);
//   useEffect(() => {
//     fetch("https://8snib.sse.codesandbox.io/rand/50")
//       .then(res => res.json())
//       .then(data => setFaqs(data));
//     fetch("https://8snib.sse.codesandbox.io/types")
//       .then(res => res.json())
//       .then(data => setTypes(data));
//     fetch("https://8snib.sse.codesandbox.io/tags")
//       .then(res => res.json())
//       .then(data => setTags(data));
//     fetch("https://8snib.sse.codesandbox.io/sets")
//       .then(res => res.json())
//       .then(data => setSets(data));
//   }, []);

//   return (
//     <Router>
//       <Appbar />
//       <div>
//         <div
//           style={{
//             width: "80%",
//             left: "20%",
//             overflow: "hidden",
//             position: "absolute"
//           }}
//         >
//           {faqs !== null && (
//             <div style={{ marginTop: "10px" }}>
//               <Marquee content={faqs.slice(0, 10)} />
//               <Marquee content={faqs.slice(10, 20)} />
//               <Marquee content={faqs.slice(20, 30)} />
//               <Marquee content={faqs.slice(30, 40)} />
//               <Marquee content={faqs.slice(40, 50)} />
//             </div>
//           )}
//         </div>
//         <Welcome />
//         <div
//           style={{
//             marginTop: "390px",
//             position: "absolute",
//             width: "100%"
//           }}
//         >
//           <hr style={{ backgroundColor: "#E9ECEF", height: "5px" }} />
//           <div style={{ margin: "auto", width: "100%" }}>
//             {types && <TypesCards content={types} />}
//             {tags && <TagsCards content={tags} />}
//             {sets && <SetsCards content={sets} />}
//             <br />
//             {/* <Footer /> */}
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
