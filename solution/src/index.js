import React from "react";
import ReactDOM from "react-dom";
import Challenge from "./Challenge";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"; // Global override

var mountNode = document.getElementById("challenge");
ReactDOM.render(<Challenge />, mountNode);