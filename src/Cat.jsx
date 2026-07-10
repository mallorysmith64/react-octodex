import React, { Component } from "react";

class Cat extends Component {
  render() {
    return (
      <>
      <li>
        <img
          className="img-style"
          src={this.props.imageUrl}
          alt={this.props.imageAlt}
        />
        <section className="cat-info">
          <h2 className="number">{this.props.number}</h2>
          <h2 className="name">{this.props.name}</h2>
        </section>
      </li>
      </>
    );
  }
}

export default Cat;
