import React, { Component } from 'react';
import classNames from 'classnames';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, DropdownMenu, UncontrolledDropdown, DropdownItem, DropdownToggle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import RoutesConfig from 'configs/route.config';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    fromRouteToMenu = route => {
        if (!route.hideInMenu) {
            if (route.routes) {
                return (
                    <UncontrolledDropdown nav inNavbar className={styles.dropDown}>
                        <DropdownToggle nav caret>
                            {route.name}
                        </DropdownToggle>
                        <DropdownMenu right>
                            {route.routes.map(r => {
                                let nR = null;
                                if (r.path)
                                    nR = {
                                        ...r,
                                        path: `${route.path}${r.path}`
                                    };
                                else
                                    nR = { ...r };

                                return (
                                    <DropdownItem key={nR.key}>
                                        {this.fromRouteToMenu(nR)}
                                    </DropdownItem>
                                );
                            })}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                )
            }
            return (
                <NavItem>
                    <NavLink className="nav-link mr-1 small" to={route.path}>
                        {route.name}
                    </NavLink>
                </NavItem>
            )
        }
    }

    render() {
        return(
            <Navbar dark expand="md" className={styles.header}>
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className={classNames("mr-3", styles.homeLink)} href="/home">
                        <span>Snode-Crypto</span>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            {RoutesConfig.map(route => this.fromRouteToMenu(route))}
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;