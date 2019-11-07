import React, { Component } from "react";
import loadingSpinner from "../img/loading.gif";

export default class Modal extends Component {
        
  render() {
    
    return (
      <div>
        <div
          className="modal fade "
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body text-center">
                <h4 className="my-3"> Processing Text...</h4>
                <img src={loadingSpinner} alt="spinner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
