import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import FormOne from "../containers/FormOne.jsx";
import FormTwo from "../containers/FormTwo.jsx";
import FormThree from "../containers/FormThree.jsx";
import { Provider } from "react-redux";
import store from "../store.js";



render(
  <Provider store={store}> 
    <div>
      <FormThree />
    </div>
  </Provider>, 
  document.getElementById('root'));




// render(
//   <Provider store={store}> 
//     <BrowserRouter>
//       <div>
//         <ul>
//           <Link to="/"> Home </Link>
//           <Link to="/Test"> Test </Link>
//           <Link to="/Test2"> Test2 </Link>
//         </ul>

//         <Route exact path="/" component={Test}/>
//         <Route path="/Test" component={Test2}/>
//         <Route path="/Test2" component={Test}/>
//       </div>
//     </BrowserRouter>
//   </Provider>, 
//   document.getElementById('root'));
