import React, { Component } from 'react'
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';

export default class AppNav extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark  expand="md">
          <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/categories">Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/expenses">Expenses</NavLink>
              </NavItem>
            
            </Nav>
      
        </Navbar>
      </div>
    );
  }}
