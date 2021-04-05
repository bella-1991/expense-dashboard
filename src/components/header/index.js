import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Nav, Container, Button, Form, FormControl, OverlayTrigger, Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { toggleSearch } from '../../actions/actions';
import './header.scss';

export const Header = () => {  
  const searchOpen = useSelector(state => state.expensesReducer.searchOpen),
        cart = useSelector(state => state.expensesReducer.cart),
        navigation = useSelector(state => state.expensesReducer.navigation),
        dispatch = useDispatch();

  const popover = (
    <Popover id="popover-basic" className="cart-popover">
      <Popover.Title as="h3">0 Items in Bag</Popover.Title>
      <Popover.Content>
        <div className="cart-popover__items">
        {
          cart.items.length > 0 ? (
            cart.items.map(item =>{
              <div>{item.name}</div>
            })
          ) : (            
            <h6 className="cart-popover__empty-text">Your Shopping Bag is empty</h6>
          )
        }
        </div>
        <div className="cart-popover__total">
          <div className="cart-popover__gross-total">
            <span>Total</span>
            <span>LKR { parseFloat(cart. total)}</span>
          </div>
          <span>Free delivery for order over LKR 5000</span>
        </div>
      </Popover.Content>
      <Popover.Title as="div" className="cart-popover__footer">
        <a href="/view-cart" className="cart-popover__button cart-popover__button--view">VIEW/EDIT BAG</a>
        <a href="/checkout" className="cart-popover__button cart-popover__button--checkout">CHECKOUT</a>
      </Popover.Title>
    </Popover>
  );

  return (
        <div className="header">
          <Navbar collapseOnSelect expand="lg" className="header__navbar">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Brand href="/">
                <img src="../assets/logo.png" alt="logo" />
              </Navbar.Brand>
              <div className="header__icons header__icons--mobile">
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                  <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faShoppingCart} /></Button>
                </OverlayTrigger>
                <Button variant="dark" className="header__btn" onClick={() => dispatch(toggleSearch())}><FontAwesomeIcon icon={faSearch} /></Button>
              </div>
              <Navbar.Collapse id="responsive-navbar-nav" className="header__nav">                
                <Nav defaultActiveKey="/home" as="ul">
                  { navigation.map(item => 
                    <Nav.Item as="li" key={item.id}>
                      <Nav.Link href={"/" + item.url}>
                        {item.text}
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Nav.Link>
                    </Nav.Item>
                  )}
                </Nav>

                <div className="header__icons header__icons--desktop">
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faShoppingCart} /></Button>
                  </OverlayTrigger>
                  <Button variant="dark" className="header__btn" onClick={() => dispatch(toggleSearch())}><FontAwesomeIcon icon={faSearch} /></Button>
                </div>          
              </Navbar.Collapse>              
                
              <Form inline className={searchOpen ? "show-search" : ""}>
                <Container>
                  <div className="header__search-container">
                    <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faSearch} /></Button>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-dark" className="header__search-btn">Search</Button>
                    <Button className="header__close-search" onClick={() => dispatch(toggleSearch())}><FontAwesomeIcon icon={faTimes} /></Button>
                  </div>
                </Container>
              </Form>      
            </Container>            
          </Navbar>
        </div>
  )
}