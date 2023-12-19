import React, { createElement, useEffect } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/ship.webp";
import Footer from "./components/footer/Footer";
import axios from "axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [user, setUser] = useState({
    gender: "",
    name: "",
    location: "",
    email: "",
    dob: "",
    phone: "",
    login: "",
    picture: "",
  });

  const [item, setItem] = useState("name");
  const [info, setInfo] = useState("");
  const [sign, setSign] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [phonex, setPhonex] = useState("");
  const [agex, setAgex] = useState("");
  const [list, setList] = useState([]);

  const getUser = () => {
    const url = "https://randomuser.me/api/";
    const res = axios(url)
      .then((res) => setUser(res.data.results[0]))
      .catch((error) => console.log(console.error()));
    setFirstName(name.first);
    setPhonex(phone);
    setMail(email);
    setAgex(age);
   
    
  };
console.log(user);
  useEffect(() => {
    getUser();

  }, []);

  const {
    gender,
    name,
    location: { city },
    email,
    dob: { age },
    phone,
    login: { password },
    picture: { medium },
  } = user;

  const handleName = () => {
    setItem("name");
    setInfo(name);
    setSign(true);
  };

  const handleMail = () => {
    setItem("email");
    setInfo(email);
    setSign(false);
  };
  const handleAge = () => {
    setItem("Age");
    setInfo(age);
    setSign(false);
  };

  const handleLocation = () => {
    setItem("Location");
    setInfo(city);
    setSign(false);
  };
  const handlePhone = () => {
    setItem("Location");
    setInfo(phone);
    setSign(false);
  };
  const handlePassWord = () => {
    setItem("Location");
    setInfo(password);
    setSign(false);
  };

  const handleAddUser = () => {
    const newList = [firstName, phonex, mail, agex];

    setList([...list, newList]);
  };

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={medium} alt="random user" className="user-img" />
          <p className="user-title">My {item} is</p>
          <p className="user-value">
            {sign ? (
              <span>
                {name?.first} {name?.last}
              </span>
            ) : (
              <span>{info}</span>
            )}
          </p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              type="button"
              onClick={handleName}
            >
              {gender === "female" ? (
                <img src={womanSvg} alt="user" id="iconImg" />
              ) : (
                <img src={manSvg} alt="user" id="iconImg" />
              )}
            </button>
            <button
              className="icon"
              data-label="email"
              type="button"
              onClick={handleMail}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="age"
              type="button"
              onClick={handleAge}
            >
              {gender === "female" ? (
                <img src={womanAgeSvg} alt="user" id="iconImg" />
              ) : (
                <img src={manAgeSvg} alt="user" id="iconImg" />
              )}
            </button>
            <button
              className="icon"
              data-label="street"
              type="button"
              onClick={handleLocation}
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="phone"
              type="button"
              onClick={handlePhone}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="password"
              type="button"
              onClick={handlePassWord}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={getUser}>
              new user
            </button>
            <button className="btn" type="button" onClick={handleAddUser}>
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={uuidv4()} className="body-tr">
                  {item.map((td) => (
                    <td key={uuidv4()}> {td} </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
