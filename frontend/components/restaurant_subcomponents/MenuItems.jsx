import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

class MenuItems extends React.Component {
  render() {
    let menu_items = Object.values(this.props.menu_items).map(item => (
      <div className="menu-item">
        <div className="list-group-item" key={item.id}>
          {item.name} ${item.price}
          <p>{item.description}</p>
        </div>
      </div>
    ));

    return <div className="menu-item-container">{menu_items}</div>;
  }
}

export default MenuItems;
