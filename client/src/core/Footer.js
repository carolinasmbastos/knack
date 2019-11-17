import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div class="footer-main-div">
        <div class="footer-item logo">
          <img
            width="100%"
            src="knack-logo-footer.svg"
            alt="Knack Footer Logo"
          />
        </div>
        {/* <div className="footer-item copyright">&copy; 2019 Knack</div> */}
        <div class="footer-item footer-links">
          <ul>
            <li className="copyright">&copy; 2019 Knack</li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="desktop-footer-links">
              <a href="#">Team</a>
            </li>
            <li className="desktop-footer-links">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="desktop-footer-links">
              <a href="#">Condition of Rent/Sale </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
