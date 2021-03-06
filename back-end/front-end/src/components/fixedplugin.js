import React, { Component } from 'react';

class Fixedplugin extends Component{
  render(){
    return (
      <div className="fixed-plugin">
        <div className="dropdown show-dropdown">
        <a href="#" data-toggle="dropdown">
          <i className="fa fa-cog fa-2x"> </i>
        </a>
        <div>
          <ul className="dropdown-menu">
            <li className="header-title"> Sidebar Filters</li>
            <li className="adjustments-line">
              <a
                href="javascript:void(0)"
                className="switch-trigger active-color"
              >
                <div className="badge-colors ml-auto mr-auto">
                  <span
                    className="badge filter badge-purple"
                    data-color="purple"
                  ></span>
                  <span
                    className="badge filter badge-azure"
                    data-color="azure"
                  ></span>
                  <span
                    className="badge filter badge-green"
                    data-color="green"
                  ></span>
                  <span
                    className="badge filter badge-warning"
                    data-color="orange"
                  ></span>
                  <span
                    className="badge filter badge-danger"
                    data-color="danger"
                  ></span>
                  <span
                    className="badge filter badge-rose active"
                    data-color="rose"
                  ></span>
                </div>
                <div className="clearfix"></div>
              </a>
            </li>
            <li className="header-title">Images</li>
            <li className="active">
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img src="../assets/img/sidebar-1.jpg" alt="" />
              </a>
            </li>
            <li>
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img src="../assets/img/sidebar-2.jpg" alt="" />
              </a>
            </li>
            <li>
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img src="../assets/img/sidebar-3.jpg" alt="" />
              </a>
            </li>
            <li>
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img src="../assets/img/sidebar-4.jpg" alt="" />
              </a>
            </li>
            <li className="header-title">Thank you for 95 shares!</li>
            <li className="button-container text-center">
              <button id="twitter" className="btn btn-round btn-twitter">
                <i className="fa fa-twitter"></i> &middot; 45
              </button>
              <button id="facebook" className="btn btn-round btn-facebook">
                <i className="fa fa-facebook-f"></i> &middot; 50
              </button>
              <br />
              <br />
            </li>
          </ul>
        </div>
      </div>
      </div>
      );
    }
  }
  
  export default Fixedplugin ;