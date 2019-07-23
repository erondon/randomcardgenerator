/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let symbol = ["\u2666", "\u2665", "\u2663", "\u2660"];
  let randomSym = Math.floor(Math.random() * symbol.length);
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomNum = Math.floor(Math.random() * num.length);
  let color = "";

  if (symbol[randomSym] == "\u2666" || symbol[randomSym] == "\u2665") {
    color = "red";
  } else {
    color = "black";
  }

  document.getElementsByClassName("card-body")[0].style.color = color;
  document.getElementsByClassName("card-footer")[0].style.color = color;
  document.getElementsByClassName("card-header")[0].style.color = color;
  document.getElementsByClassName("card-header")[0].innerHTML =
    "<h1>" + symbol[randomSym] + "</h1>";
  document.getElementsByClassName("card-body")[0].innerHTML =
    "<h1>" + num[randomNum] + "</h1>";
  document.getElementsByClassName("card-footer")[0].innerHTML =
    "<h1>" + symbol[randomSym] + "</h1>";
};
