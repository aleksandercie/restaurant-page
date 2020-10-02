import React from 'react';
import { Route, Switch, useLocation} from "react-router-dom";
import { AnimatePresence} from 'framer-motion';
import Menu from '../menu/Menu';
import Slider from '../swiper/Swiper';
import About from '../about/About';
import Reservation from '../reservation/Reservation';
import Cart from '../cart/Cart';
import Contact from '../contact/Contact';

function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Slider}/>
            <Route path="/about" component={About}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/reservation" component={Reservation}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </AnimatePresence>
    )
}

export default Pages
