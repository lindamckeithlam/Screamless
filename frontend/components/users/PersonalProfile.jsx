import React from "react";
import NavBar from "../NavBar";
import AddressForm from "./AddressForm";
import PreviousOrders from "./PreviousOrders";
import PaymentDetails from "./PaymentDetails";
import AccountDetails from "./AccountDetails";
import { Switch, Route } from "react-router-dom";

class PersonalProfile extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="user-profile-container">
          <ul className="user-profile-left">
            <h6 className="your-account">Your Account</h6>
            <li>
              <a href="#/account/profile">Profile</a>
            </li>
            <li>
              <a href="/#/account/address">Address and phone</a>
            </li>
            <li>
              <a href="/#/account/payment">Payments</a>
            </li>
            <li>
              <a href="/#/account/history">Past orders</a>
            </li>
          </ul>
          <div />
          <div className="user-profile-right">
            <Switch>
              <Route exact path="/account/profile" component={AccountDetails} />
              <Route exact path="/account/address" component={AddressForm} />
              <Route path="/account/history" component={PreviousOrders} />
              <Route path="/account/payment" component={PaymentDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;
