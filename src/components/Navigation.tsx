import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const Navigation: React.FC = () => {
    function isUsersActive(match: any, location: any): boolean {
        return location.pathname.indexOf('/users/') !== -1;
    }
    
    return (
        <Navbar bg='light' expand='sm' className='p-0 mb-4'>
            <Navbar.Brand className='text-primary'>Wallester</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <NavLink exact to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/users/1' className='nav-link' isActive={isUsersActive}>Users</NavLink>
                    <NavLink to='/user/add' className='nav-link'>Add user</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;