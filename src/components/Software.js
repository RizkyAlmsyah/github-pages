import React, { Component } from "react";
import NavbarOther from "./NavbarOther";

export default class Software extends Component {
  render() {
    return (
      <div>
        <NavbarOther />
        <div className="container-fluid">
          <div className="container soft-repo">
            <h3>Software Repository</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Languange</th>
                  <th scope="col">Created at</th>
                  <th scope="col">Size</th>
                  <th scope="col">Stars</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
