import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Showcard from "./components/Showcard";
import Addcard from "./components/Addcard";
import list from "./list.js";

function App() {
  const [ans, setans] = useState(0);
  const [cardnum, setcardnum] = useState(0);
  const [warning, setwarning] = useState(false);
  const [show, setShow] = useState(true);
  const [cart, setcart] = useState([]);

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

      setcardnum(cardnum + 1);
    }
  };

  const showing = () => {
    setShow(!show);
  };
  const dltcart = (item) => {
    setcart(
      cart.filter((cur) => {
        return cur.id !== item;
      }),
    );
  };

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
  useEffect(() => {
    let answ = 0;
    cart.map((cur) => {
      answ += cur.amount * cur.price;
    });

    setans(answ);
  }, [cart]);

  return (
    <>
      <Navbar
        cardnum={cardnum}
        warning={warning}
        showing={showing}
        cart={cart}
      />
      {show ? (
        <section>
          {list.map((item) => {
            return <Showcard key={item.id} item={item} addcart={addcart} />;
          })}
        </section>
      ) : (
        cart.map((cur) => {
          return <Addcard cart={cur} dltcart={dltcart} addamount={addamount} />;
        })
      )}
      <div style={{ position: "absolute", right: "345px" }}>
        total price - {ans}
      </div>
    </>
  );
}

export default App;
