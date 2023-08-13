import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcard from "./components/Showcard";
import Addcard from "./components/Addcard";
import list from "./list.js";
import Contentwrapper from "./components/contentwrapper/Contentwrapper.jsx";
import { motion, AnimatePresence } from "framer-motion";
function App() {
  const [ans, setans] = useState(0);
  const [warning, setwarning] = useState(false);
  const [show, setShow] = useState(true);
  const [cart, setcart] = useState([]);
  const [jark, setJark] = useState(false);

  // add item in the cart

  const addcart = (item) => {
    let ispresent = false;

    cart.forEach((cur) => {
      if (cur.id === item.id) {
        console.log("present");
        ispresent = true;
        setwarning(true);
        setTimeout(() => {
          setwarning(false);
        }, 2000);
      }
    });

    if (!ispresent) {
      console.log("add");
      setcart([...cart, item]);
      setJark(true);
    }
  };

  const showing = () => {
    setShow(false);
  };

  // delete item from the card
  const dltcart = (item) => {
    setcart(
      cart.filter((cur) => {
        return cur.id !== item;
      }),
    );
  };

  // quantity calculation
  const addamount = (item, d) => {
    if ((item.amount > 1 && d == -1) || (item.amount > 0 && d == 1)) {
      const newcart = cart.map((cur) => {
        if (cur.id === item.id) {
          return { ...cur, amount: cur.amount + d };
        }
        return cur;
      });
      setcart(newcart);
    }
  };

  // total result calculation
  useEffect(() => {
    let answ = 0;
    cart.map((cur) => {
      answ += cur.amount * cur.price;
    });

    setans(answ);
  }, [cart]);

  useEffect(() => {
    setJark(false);
  }, [show]);

  return (
    <>
      <Navbar
        warning={warning}
        show={show}
        cart={cart}
        showing={showing}
        jark={jark}
      />
      {show ? (
        <Contentwrapper>
          <section>
            {list.map((item) => {
              return <Showcard key={item.id} item={item} addcart={addcart} />;
            })}
          </section>
        </Contentwrapper>
      ) : (
        <div className="Container">
          {cart.length > 0 ? (
            <h1>Shopping cart</h1>
          ) : (
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Nothing to Show
            </motion.h1>
          )}
          <AnimatePresence>
            {cart.map((cur) => {
              return (
                <Addcard
                  key={cur.id}
                  cart={cur}
                  dltcart={dltcart}
                  addamount={addamount}
                />
              );
            })}
          </AnimatePresence>
          <div className="total">
            <button onClick={() => setShow(true)}>back to shopping</button>
            <div className="price">
              <h2>Total Price</h2>
              <h3>{ans}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
