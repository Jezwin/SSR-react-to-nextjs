import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App.js';

//  const data = [
//     {
//         image: "./assets/Case1.png",
//         imageAlt: "Case1",
//         link: "#",
//         title: "Adobe Experience Cloud",
//         text:"Help large financial organisation to outsource their AEM development."
//     },
//     {
//         image: "./assets/Case2.png",
//         imageAlt: "Case2",
//         link: "#",
//         title: "E-Commerce Cloud",
//         text:"Help large financial organisation to outsource their AEM development."
//     },
//     {
//         image: "./assets/Case3.png",
//         imageAlt: "Case3",
//         link: "#",
//         title: "Forntend Dev",
//         text:"Help large financial organisation to outsource their AEM development."
//     },
//     {
//         image: "./assets/Case1.png",
//         imageAlt: "Case4",
//         link: "#",
//         title: "Apps",
//         text:"Help large financial organisation to outsource their AEM development."
//     }
// ];

// const settings = {
//     slidesToShow: 3,
// }


ReactDOM.render(
    // <div>
    // <Slide settings={settings} data={data} type="hoy"/>
    // </div>
    // <div>
    //  <Navbar/> 
    //     <ServiceTab/>
    // {/* // <CaseStudyExpand />  */}
    //    <CaseSlide/> 
    //  <SayHello /> 
    // </div>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));