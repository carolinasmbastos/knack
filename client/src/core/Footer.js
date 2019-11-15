import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      
       <div class = "footer-main-dev">
         <div class = "logo">
       <img className="logo" width="100%" src="knack-logo-footer.svg" alt="Card image cap" />
      
       </div>
        <div class = "links">
          <ul>
            <li> <a href = "#">@Knack 2019</a> </li>
            <li> <a href = "#">Contact</a> </li>
            <li> <a href = "#">Term</a> </li>
            <li> <a href = "#">Privacy policy</a> </li>
            <li> <a href = "#"> Condition of rent/sale </a> </li>
          </ul>
        </div>

       </div>
    );
  }
}