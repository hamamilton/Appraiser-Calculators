import React from 'react';
//import logo from "./assets/DMlogo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import ModalPage from './pages/sections/ModalSection';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="https://www.datamasterusa.com" className="logo-wrapper waves-effect">
                <img alt="DataMaster Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Home
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        GLA Adjustment Tool
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Time Straight-Line Adjustment
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Paired-Sales Analysis
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="#" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <ModalPage />
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>

        </div>
    );
}

export default TopNavigation;