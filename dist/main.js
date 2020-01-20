/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cards =
/*#__PURE__*/
function () {
  function Cards() {
    _classCallCheck(this, Cards);

    this.deck = [];
    this.dealt_cards = [];
  }

  _createClass(Cards, [{
    key: "generate_deck",
    value: function generate_deck() {
      var _this = this;

      var card = function card(suit, value) {
        _this.name = value + ' of ' + suit;
        _this.suit = suit;
        _this.value = value;
        return {
          name: _this.name,
          suit: _this.suit,
          value: _this.value
        };
      };

      var values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      var suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];

      for (var i = 0; i < suits.length; i++) {
        for (var j = 0; j < values.length; j++) {
          this.deck.push(card(suits[i], values[j]));
        }
      }
    }
  }, {
    key: "shuffle",
    value: function shuffle() {
      var current_idx = this.deck.length;
      var temp_val;
      var rand_idx;

      while (current_idx !== 0) {
        rand_idx = Math.floor(Math.random() * current_idx);
        current_idx -= 1;
        temp_val = this.deck[current_idx];
        this.deck[current_idx] = this.deck[rand_idx];
        this.deck[rand_idx] = temp_val;
      }
    }
  }, {
    key: "deal",
    value: function deal() {
      var dealt_card = this.deck.shift();
      this.dealt_cards.push(dealt_card);
      return dealt_card;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.deck = [];
    }
  }, {
    key: "print_deck",
    value: function print_deck() {
      if (this.deck.length === 0) {
        console.log("the deck length is 0");
      } else {
        for (var i = 0; i < this.deck.length; i++) {
          console.log(this.deck[i]);
        }
      }
    }
  }]);

  return Cards;
}();



/***/ }),

/***/ "./src/clearTimeout.js":
/*!*****************************!*\
  !*** ./src/clearTimeout.js ***!
  \*****************************/
/*! exports provided: clearTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTimeout", function() { return clearTimeout; });
function clearTimeout() {
  var id = window.setTimeout(function () {}, 0);

  while (id--) {
    window.clearTimeout(id);
  }
}

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Computer; });
/* harmony import */ var _clearTimeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearTimeout */ "./src/clearTimeout.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Computer =
/*#__PURE__*/
function () {
  function Computer() {
    _classCallCheck(this, Computer);

    this.comp1 = [];
    this.comp2 = [];
    this.comp3 = [];
    this.comp1.push({
      name: "Computer 1"
    }, {
      pile: []
    }, {
      turn: false
    });
    this.comp2.push({
      name: "Computer 2"
    }, {
      pile: []
    }, {
      turn: false
    });
    this.comp3.push({
      name: "Computer 3"
    }, {
      pile: []
    }, {
      turn: false
    });
  }

  _createClass(Computer, [{
    key: "delayedFunctionPush",
    value: function delayedFunctionPush(currentComp, mainPile) {
      var minTime = 2000;
      var maxTime = 2000;
      var rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);

      if (currentComp === "comp1") {
        setTimeout(function () {
          var topCard = this.computer.comp1[1].pile.pop();
          this.PushAnimation("comp1", mainPile);
          this.mainPile.push(topCard);
          this.computer.comp1[2].turn = false;
          this.computer.comp2[2].turn = true;
          loadTopCards(this.players, [1]);
          clearTimeout();
          this.computerTurn();
          var comp1Container = document.getElementsByClassName("comp1-container");
          comp1Container[0].style.boxShadow = "none";
          this.cardCount();
        }.bind(this), rand_time);
      } else if (currentComp === "comp2") {
        setTimeout(function () {
          var topCard = this.computer.comp2[1].pile.pop();
          this.PushAnimation("comp2", mainPile);
          this.mainPile.push(topCard);
          this.computer.comp2[2].turn = false;
          this.computer.comp3[2].turn = true;
          loadTopCards(this.players, [2]);
          clearTimeout();
          this.computerTurn();
          var comp2Container = document.getElementsByClassName("comp2-container");
          comp2Container[0].style.boxShadow = "none";
          var comp2Pile = document.getElementById("comp2Pile");
          comp2Pile.innerHTML = this.players[2][1].pile.length + " cards";
        }.bind(this), rand_time);
      } else if (currentComp === "comp3") {
        setTimeout(function () {
          var topCard = this.computer.comp3[1].pile.pop();
          this.PushAnimation("comp3", mainPile);
          this.mainPile.push(topCard);
          this.computer.comp3[2].turn = false;
          this.player.player1[2].turn = true;
          loadTopCards(this.players, [3]);
          clearTimeout();
          this.computerTurn();
          var comp3Container = document.getElementsByClassName("comp3-container");
          comp3Container[0].style.boxShadow = "none";
          var comp3Pile = document.getElementById("comp3Pile");
          comp3Pile.innerHTML = this.players[3][1].pile.length + " cards";
        }.bind(this), rand_time);
      }
    }
  }, {
    key: "comp1Func",
    value: function comp1Func(mainPile) {
      if (this.computer.comp1[1].pile.length === 0) {
        this.computer.comp1[2].turn = false;
        this.computer.comp2[2].turn = true;
        var comp1Container = document.getElementsByClassName("comp1-container");
        comp1Container[0].style.boxShadow = "none";
        this.computerTurn();
      } else {
        this.delayedFunctionPush("comp1", mainPile);
      }
    }
  }, {
    key: "computerTurn",
    value: function computerTurn(mainPile) {
      if (this.computer.comp1[2].turn) {
        var comp1Container = document.getElementsByClassName("comp1-container");
        comp1Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
        this.comp1Func(mainPile);
        this.allCompTake();
      } else if (this.computer.comp2[2].turn) {
        var comp2Container = document.getElementsByClassName("comp2-container");
        comp2Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
        this.comp2Func();
        this.allCompTake();
      } else if (this.computer.comp3[2].turn) {
        var comp3Container = document.getElementsByClassName("comp3-container");
        comp3Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
        this.comp3Func();
        this.allCompTake();
      } else {
        var playerContainer = document.getElementsByClassName("player-container");
        playerContainer[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
        this.allCompTake();
      }
    }
  }]);

  return Computer;
}();



/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! exports provided: cardCount, removehands, createElements, appendElements, PushAnimation, loadTopCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardCount", function() { return cardCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removehands", function() { return removehands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElements", function() { return createElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendElements", function() { return appendElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushAnimation", function() { return PushAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTopCards", function() { return loadTopCards; });
function cardCount(players) {
  var playerInfo = document.getElementById("playerInfoContainer");
  playerInfo.innerHTML = "You have " + players[0][1].pile.length + " cards";
  var comp1Pile = document.getElementById("comp1Pile");
  comp1Pile.innerHTML = players[1][1].pile.length + " cards";
  var comp2Pile = document.getElementById("comp2Pile");
  comp2Pile.innerHTML = players[2][1].pile.length + " cards";
  var comp3Pile = document.getElementById("comp3Pile");
  comp3Pile.innerHTML = players[3][1].pile.length + " cards";
}
function removehands() {
  var hand0 = document.getElementById("playerhand");
  var hand1 = document.getElementById("comphand1");
  var hand2 = document.getElementById("comphand2");
  var hand3 = document.getElementById("comphand3");
  hand0.style.visibility = "hidden";
  hand1.style.visibility = "hidden";
  hand2.style.visibility = "hidden";
  hand3.style.visibility = "hidden";
  var playerContainer = document.getElementsByClassName("player-container");
  var comp1Container = document.getElementsByClassName("comp1-container");
  var comp2Container = document.getElementsByClassName("comp2-container");
  var comp3Container = document.getElementsByClassName("comp3-container");
  playerContainer[0].style.boxShadow = "none";
  comp1Container[0].style.boxShadow = "none";
  comp2Container[0].style.boxShadow = "none";
  comp3Container[0].style.boxShadow = "none";
}
function createElements(num, card, suit) {
  var orientation;

  if (num === 0 || num === 2) {
    orientation = "vertical";
  } else {
    orientation = "horizontal";
  }

  var div1 = document.createElement("div");
  div1.className = "".concat(orientation, " flip-container").concat(num);
  var div2 = document.createElement("div");
  div2.className = "flipper".concat(num);
  var div3 = document.createElement("div");
  div3.className = "front".concat(num);
  var div4 = document.createElement("div");
  div4.className = "back".concat(num);
  var valueDiv = document.createElement("div");
  valueDiv.className = "value";
  var suitDiv = document.createElement("div");
  suitDiv.className = "suit";
  var ValueContent = card.value;
  var SuitContent = suit;
  valueDiv.innerHTML = ValueContent;
  suitDiv.innerHTML = SuitContent;
  return {
    div1: div1,
    div2: div2,
    div3: div3,
    div4: div4,
    valueDiv: valueDiv,
    suitDiv: suitDiv
  };
}
function appendElements(cardTable, div1, div2, div3, div4, valueDiv, suitDiv, imgContainer, img1) {
  cardTable.appendChild(div1);
  div1.appendChild(div2);
  div2.appendChild(div3);
  div2.appendChild(div4);
  div4.appendChild(valueDiv);
  div4.appendChild(suitDiv);
  div3.appendChild(imgContainer);
  imgContainer.appendChild(img1);
}
function PushAnimation(current, mainPile) {
  if (current === "comp1") {
    var backCollection = document.getElementsByClassName("back1");
    var flipperCollection = document.getElementsByClassName("flipper1");
    var container = document.getElementsByClassName("flip-container1");
    var zIndex = mainPile.length;
    container[container.length - 1].style.zIndex = zIndex;

    for (var i = 0; i < flipperCollection.length; i++) {
      flipperCollection[i].style.transform = 'rotateX(-180deg)';
    }

    for (var _i = 0; _i < backCollection.length; _i++) {
      backCollection[_i].style.animationDelay = '0.3s';
      backCollection[_i].style.animation = 'toBack 0.3s linear normal forwards';
    }
  } else if (current === "comp2") {
    var _backCollection = document.getElementsByClassName("back2");

    var _flipperCollection = document.getElementsByClassName("flipper2");

    var _container = document.getElementsByClassName("flip-container2");

    var _zIndex = mainPile.length;
    _container[_container.length - 1].style.zIndex = _zIndex;

    for (var _i2 = 0; _i2 < _flipperCollection.length; _i2++) {
      _flipperCollection[_i2].style.transform = 'rotateX(180deg)';
    }

    for (var _i3 = 0; _i3 < _backCollection.length; _i3++) {
      _backCollection[_i3].style.animationDelay = '0.3s';
      _backCollection[_i3].style.animation = 'toBack 0.3s linear normal forwards';
    }
  } else if (current === "comp3") {
    var _backCollection2 = document.getElementsByClassName("back3");

    var _flipperCollection2 = document.getElementsByClassName("flipper3");

    var _container2 = document.getElementsByClassName("flip-container3");

    var _zIndex2 = mainPile.length;
    _container2[_container2.length - 1].style.zIndex = _zIndex2;

    for (var _i4 = 0; _i4 < _flipperCollection2.length; _i4++) {
      _flipperCollection2[_i4].style.transform = 'rotateX(-180deg)';
    }

    for (var _i5 = 0; _i5 < _backCollection2.length; _i5++) {
      _backCollection2[_i5].style.animationDelay = '0.3s';
      _backCollection2[_i5].style.animation = 'toBack 0.3s linear normal forwards';
    }
  } else if (current === "player") {
    var _backCollection3 = document.getElementsByClassName("back0");

    var _flipperCollection3 = document.getElementsByClassName("flipper0");

    var _container3 = document.getElementsByClassName("flip-container0");

    var _zIndex3 = mainPile.length;
    _container3[_container3.length - 1].style.zIndex = _zIndex3;

    for (var _i6 = 0; _i6 < _flipperCollection3.length; _i6++) {
      _flipperCollection3[_i6].style.transform = 'rotateX(180deg)';
    }

    for (var _i7 = 0; _i7 < _backCollection3.length; _i7++) {
      _backCollection3[_i7].style.animationDelay = '0.3s';
      _backCollection3[_i7].style.animation = 'toBack 0.3s linear normal forwards';
    }
  }
}
function loadTopCards(players) {
  var playerIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 1, 2, 3];
  var topCards = [];
  playerIdx.forEach(function (i) {
    var pile = players[i][1].pile;
    var topCard = pile[pile.length - 1] || "blank";
    topCards[i] = topCard;
  });
  topCards.forEach(function (card, idx) {
    var cardTable = document.getElementById("cardTable");
    var suit;
    var color;

    if (card.suit === "Hearts") {
      suit = '\&#9829';
      color = "red";
    } else if (card.suit === "Diamonds") {
      suit = "&#9830";
      color = "red";
    } else if (card.suit === "Clubs") {
      suit = "&#9827";
      color = "black";
    } else if (card.suit === "Spades") {
      suit = "&#9824";
      color = "black";
    }

    if (idx === 0) {
      var divArray = createElements(idx, card, suit);
      var div1 = divArray.div1;
      var div2 = divArray.div2;
      var div3 = divArray.div3;
      var div4 = divArray.div4;
      var valueDiv = divArray.valueDiv;
      var suitDiv = divArray.suitDiv;
      valueDiv.style.textAlign = "left";
      valueDiv.style.fontSize = "35px";
      valueDiv.style.color = color;
      valueDiv.style.fontWeight = "900";
      valueDiv.style.marginTop = "5px";
      valueDiv.style.marginLeft = "10px";
      suitDiv.style.marginTop = "14px";
      suitDiv.style.fontSize = "70px";
      suitDiv.style.color = color;
      var imgContainer = document.createElement("div");
      imgContainer.className = "img-container";
      var img1 = document.createElement("img");
      img1.className = "backCardV";
      img1.src = "src/images//cardBack.jpg";
      appendElements(cardTable, div1, div2, div3, div4, valueDiv, suitDiv, imgContainer, img1);
    } else if (idx === 1) {
      var _divArray = createElements(idx, card, suit);

      var _div = _divArray.div1;
      var _div2 = _divArray.div2;
      var _div3 = _divArray.div3;
      var _div4 = _divArray.div4;
      var _valueDiv = _divArray.valueDiv;
      var _suitDiv = _divArray.suitDiv;
      _valueDiv.style.textAlign = "left";
      _valueDiv.style.fontSize = "35px";
      _valueDiv.style.color = color;
      _valueDiv.style.fontWeight = "900";
      _valueDiv.style.marginTop = "5px";
      _valueDiv.style.marginLeft = "10px";
      _suitDiv.style.marginTop = "14px";
      _suitDiv.style.fontSize = "70px";
      _suitDiv.style.color = color;

      var _imgContainer = document.createElement("div");

      _imgContainer.className = "img-container";

      var _img = document.createElement("img");

      _img.className = "backCardH";
      _img.src = "src/images//cardBack.jpg";
      appendElements(cardTable, _div, _div2, _div3, _div4, _valueDiv, _suitDiv, _imgContainer, _img);
    } else if (idx === 2) {
      var _divArray2 = createElements(idx, card, suit);

      var _div5 = _divArray2.div1;
      var _div6 = _divArray2.div2;
      var _div7 = _divArray2.div3;
      var _div8 = _divArray2.div4;
      var _valueDiv2 = _divArray2.valueDiv;
      var _suitDiv2 = _divArray2.suitDiv;
      _valueDiv2.style.textAlign = "left";
      _valueDiv2.style.fontSize = "35px";
      _valueDiv2.style.color = color;
      _valueDiv2.style.fontWeight = "900";
      _valueDiv2.style.marginTop = "5px";
      _valueDiv2.style.marginLeft = "10px";
      _suitDiv2.style.marginTop = "14px";
      _suitDiv2.style.fontSize = "70px";
      _suitDiv2.style.color = color;

      var _imgContainer2 = document.createElement("div");

      _imgContainer2.className = "img-container";

      var _img2 = document.createElement("img");

      _img2.className = "backCardV";
      _img2.src = "src/images//cardBack.jpg";
      appendElements(cardTable, _div5, _div6, _div7, _div8, _valueDiv2, _suitDiv2, _imgContainer2, _img2);
    } else if (idx === 3) {
      var _divArray3 = createElements(idx, card, suit);

      var _div9 = _divArray3.div1;
      var _div10 = _divArray3.div2;
      var _div11 = _divArray3.div3;
      var _div12 = _divArray3.div4;
      var _valueDiv3 = _divArray3.valueDiv;
      var _suitDiv3 = _divArray3.suitDiv;
      _valueDiv3.style.textAlign = "left";
      _valueDiv3.style.fontSize = "35px";
      _valueDiv3.style.color = color;
      _valueDiv3.style.fontWeight = "900";
      _valueDiv3.style.marginTop = "5px";
      _valueDiv3.style.marginLeft = "10px";
      _suitDiv3.style.marginTop = "14px";
      _suitDiv3.style.fontSize = "70px";
      _suitDiv3.style.color = color;

      var _imgContainer3 = document.createElement("div");

      _imgContainer3.className = "img-container";

      var _img3 = document.createElement("img");

      _img3.className = "backCardH";
      _img3.src = "src/images//cardBack.jpg";
      appendElements(cardTable, _div9, _div10, _div11, _div12, _valueDiv3, _suitDiv3, _imgContainer3, _img3);
    }
  });
}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer */ "./src/computer.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules */ "./src/rules.js");
/* harmony import */ var _clearTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearTimeout */ "./src/clearTimeout.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.cards = new _cards__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.computer = new _computer__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.players = [this.player.player1, this.computer.comp1, this.computer.comp2, this.computer.comp3];
    this.mainPile = [];
    this.tapMainPile = this.tapMainPile.bind(this);
    this.tapOwnPile = this.tapOwnPile.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.startGame = this.startGame.bind(this);
    this.comp1Func = this.comp1Func.bind(this);
    this.comp2Func = this.comp2Func.bind(this);
    this.comp3Func = this.comp3Func.bind(this);
    this.computerTurn = this.computerTurn.bind(this);
  }

  _createClass(Game, [{
    key: "resetGame",
    value: function resetGame() {
      this.cards = new _cards__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.computer = new _computer__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.players = [this.player.player1, this.computer.comp1, this.computer.comp2, this.computer.comp3];
      this.mainPile = [];
    }
  }, {
    key: "chooseStartPlayer",
    value: function chooseStartPlayer() {
      var rand_idx = Math.floor(Math.random() * this.players.length);
      this.players[rand_idx][2].turn = true;
    }
  }, {
    key: "startGame",
    value: function startGame() {
      this.resetGame();
      this.cards.clear();
      this.cards.generate_deck();
      this.cards.shuffle();
      this.chooseStartPlayer();

      while (this.cards.deck.length > 0) {
        for (var i = 0; i < this.players.length; i++) {
          this.players[i][1].pile.push(this.cards.deal());
        }
      }

      this.removeMainPile();
      Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
      Object(_display__WEBPACK_IMPORTED_MODULE_3__["loadTopCards"])(this.players);
      Object(_display__WEBPACK_IMPORTED_MODULE_3__["removehands"])();
      Object(_display__WEBPACK_IMPORTED_MODULE_3__["cardCount"])(this.players);
      this.computerTurn();
    }
  }, {
    key: "tapOwnPile",
    value: function tapOwnPile() {
      if (this.player.player1[2].turn) {
        var topCard = this.player.player1[1].pile.pop();

        if (topCard === undefined) {
          this.gameOver();
        } else {
          this.PushAnimation("player");
          Object(_display__WEBPACK_IMPORTED_MODULE_3__["loadTopCards"])(this.players, [0]);
          Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
          this.mainPile.push(topCard);
          this.computer.comp1[2].turn = true;
          Object(_display__WEBPACK_IMPORTED_MODULE_3__["cardCount"])(this.players);
          var playerContainer = document.getElementsByClassName("player-container");
          playerContainer[0].style.boxShadow = "none";
        }

        this.player.player1[2].turn = false;
        this.computer.comp1[2].turn = true;
        this.computerTurn();
      } else {
        return null;
      }
    }
  }, {
    key: "goodSlap",
    value: function goodSlap() {
      if (Object(_rules__WEBPACK_IMPORTED_MODULE_4__["double"])(this.mainPile) || Object(_rules__WEBPACK_IMPORTED_MODULE_4__["sandwich"])(this.mainPile)) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      alert("You ran out of cards, would you like to start another game?");
      this.startGame();
    }
  }, {
    key: "tapMainPile",
    value: function tapMainPile() {
      if (this.goodSlap()) {
        var hand = document.getElementById("playerhand");
        hand.style.visibility = "visible";
        setTimeout(function () {
          var _this$player$player1$;

          (_this$player$player1$ = this.player.player1[1].pile).unshift.apply(_this$player$player1$, _toConsumableArray(this.mainPile));

          this.mainPile = [];
          this.computer.comp1[2].turn = false;
          this.computer.comp2[2].turn = false;
          this.computer.comp3[2].turn = false;
          this.player.player1[2].turn = true;
          this.removeMainPile();
          Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
          Object(_display__WEBPACK_IMPORTED_MODULE_3__["removehands"])();
          this.computerTurn();
          Object(_display__WEBPACK_IMPORTED_MODULE_3__["cardCount"])(this.players);
        }.bind(this), 2000);
      } else if (!this.goodSlap() && this.player.player1[1].pile.length === 0) {
        this.gameOver();
      } else {
        this.mainPile.unshift(this.player.player1[1].pile.pop());
        Object(_display__WEBPACK_IMPORTED_MODULE_3__["cardCount"])(this.players);
      }
    }
  }, {
    key: "delayedFunctionPush",
    value: function delayedFunctionPush(currentComp) {
      var minTime = 2000;
      var maxTime = 2000;
      var rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);

      if (currentComp === "comp1") {
        setTimeout(function () {
          var topCard = this.computer.comp1[1].pile.pop();
          this.PushAnimation("comp1");
          this.mainPile.push(topCard);
          this.computer.comp1[2].turn = false;
          this.computer.comp2[2].turn = true;
          Object(_display__WEBPACK_IMPORTED_MODULE_3__["loadTopCards"])(this.players, [1]);
          Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
          this.computerTurn();
          var comp1Container = document.getElementsByClassName("comp1-container");
          comp1Container[0].style.boxShadow = "none";
          Object(_display__WEBPACK_IMPORTED_MODULE_3__["cardCount"])(this.players);
        }.bind(this), rand_time);
      } else if (currentComp === "comp2") {
        setTimeout(function () {
          var topCard = this.computer.comp2[1].pile.pop();
          this.PushAnimation("comp2");
          this.mainPile.push(topCard);
          this.computer.comp2[2].turn = false;
          this.computer.comp3[2].turn = true;
          Object(_display__WEBPACK_IMPORTED_MODULE_3__["loadTopCards"])(this.players, [2]);
          Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
          this.computerTurn();
          var comp2Container = document.getElementsByClassName("comp2-container");
          comp2Container[0].style.boxShadow = "none";
          var comp2Pile = document.getElementById("comp2Pile");
          comp2Pile.innerHTML = this.players[2][1].pile.length + " cards";
        }.bind(this), rand_time);
      } else if (currentComp === "comp3") {
        setTimeout(function () {
          var topCard = this.computer.comp3[1].pile.pop();
          this.PushAnimation("comp3");
          this.mainPile.push(topCard);
          this.computer.comp3[2].turn = false;
          this.player.player1[2].turn = true;
          Object(_display__WEBPACK_IMPORTED_MODULE_3__["loadTopCards"])(this.players, [3]);
          Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
          this.computerTurn();
          var comp3Container = document.getElementsByClassName("comp3-container");
          comp3Container[0].style.boxShadow = "none";
          var comp3Pile = document.getElementById("comp3Pile");
          comp3Pile.innerHTML = this.players[3][1].pile.length + " cards";
        }.bind(this), rand_time);
      }
    }
  }, {
    key: "PushAnimation",
    value: function PushAnimation(current) {
      if (current === "comp1") {
        var backCollection = document.getElementsByClassName("back1");
        var flipperCollection = document.getElementsByClassName("flipper1");
        var container = document.getElementsByClassName("flip-container1");
        var zIndex = this.mainPile.length;
        container[container.length - 1].style.zIndex = zIndex;

        for (var i = 0; i < flipperCollection.length; i++) {
          flipperCollection[i].style.transform = 'rotateX(-180deg)';
        }

        for (var _i = 0; _i < backCollection.length; _i++) {
          backCollection[_i].style.animationDelay = '0.3s';
          backCollection[_i].style.animation = 'toBack 0.3s linear normal forwards';
        }
      } else if (current === "comp2") {
        var _backCollection = document.getElementsByClassName("back2");

        var _flipperCollection = document.getElementsByClassName("flipper2");

        var _container = document.getElementsByClassName("flip-container2");

        var _zIndex = this.mainPile.length;
        _container[_container.length - 1].style.zIndex = _zIndex;

        for (var _i2 = 0; _i2 < _flipperCollection.length; _i2++) {
          _flipperCollection[_i2].style.transform = 'rotateX(180deg)';
        }

        for (var _i3 = 0; _i3 < _backCollection.length; _i3++) {
          _backCollection[_i3].style.animationDelay = '0.3s';
          _backCollection[_i3].style.animation = 'toBack 0.3s linear normal forwards';
        }
      } else if (current === "comp3") {
        var _backCollection2 = document.getElementsByClassName("back3");

        var _flipperCollection2 = document.getElementsByClassName("flipper3");

        var _container2 = document.getElementsByClassName("flip-container3");

        var _zIndex2 = this.mainPile.length;
        _container2[_container2.length - 1].style.zIndex = _zIndex2;

        for (var _i4 = 0; _i4 < _flipperCollection2.length; _i4++) {
          _flipperCollection2[_i4].style.transform = 'rotateX(-180deg)';
        }

        for (var _i5 = 0; _i5 < _backCollection2.length; _i5++) {
          _backCollection2[_i5].style.animationDelay = '0.3s';
          _backCollection2[_i5].style.animation = 'toBack 0.3s linear normal forwards';
        }
      } else if (current === "player") {
        var _backCollection3 = document.getElementsByClassName("back0");

        var _flipperCollection3 = document.getElementsByClassName("flipper0");

        var _container3 = document.getElementsByClassName("flip-container0");

        var _zIndex3 = this.mainPile.length;
        _container3[_container3.length - 1].style.zIndex = _zIndex3;

        for (var _i6 = 0; _i6 < _flipperCollection3.length; _i6++) {
          _flipperCollection3[_i6].style.transform = 'rotateX(180deg)';
        }

        for (var _i7 = 0; _i7 < _backCollection3.length; _i7++) {
          _backCollection3[_i7].style.animationDelay = '0.3s';
          _backCollection3[_i7].style.animation = 'toBack 0.3s linear normal forwards';
        }
      }
    }
  }, {
    key: "removeMainPile",
    value: function removeMainPile() {
      var div1 = document.getElementsByClassName("flip-container0");
      var div2 = document.getElementsByClassName("flip-container1");
      var div3 = document.getElementsByClassName("flip-container2");
      var div4 = document.getElementsByClassName("flip-container3");

      while (div1.length > 0) {
        div1[0].parentNode.removeChild(div1[0]);
      }

      while (div2.length > 0) {
        div2[0].parentNode.removeChild(div2[0]);
      }

      while (div3.length > 0) {
        div3[0].parentNode.removeChild(div3[0]);
      }

      while (div4.length > 0) {
        div4[0].parentNode.removeChild(div4[0]);
      }

      Object(_display__WEBPACK_IMPORTED_MODULE_3__["loadTopCards"])(this.players);
    }
  }, {
    key: "comp1Func",
    value: function comp1Func() {
      if (this.computer.comp1[1].pile.length === 0) {
        this.computer.comp1[2].turn = false;
        this.computer.comp2[2].turn = true;
        var comp1Container = document.getElementsByClassName("comp1-container");
        comp1Container[0].style.boxShadow = "none";
        this.computerTurn();
      } else {
        this.delayedFunctionPush("comp1");
      }
    }
  }, {
    key: "comp2Func",
    value: function comp2Func() {
      if (this.computer.comp2[1].pile.length === 0) {
        this.computer.comp2[2].turn = false;
        this.computer.comp3[2].turn = true;
        var comp2Container = document.getElementsByClassName("comp2-container");
        comp2Container[0].style.boxShadow = "none";
        this.computerTurn();
      } else {
        this.delayedFunctionPush("comp2");
      }
    }
  }, {
    key: "comp3Func",
    value: function comp3Func() {
      if (this.computer.comp3[1].pile.length === 0) {
        this.computer.comp3[2].turn = false;
        this.player.player1[2].turn = true;
        var comp3Container = document.getElementsByClassName("comp3-container");
        comp3Container[0].style.boxShadow = "none";
        this.computerTurn();
      } else {
        this.delayedFunctionPush("comp3");
      }
    }
  }, {
    key: "allCompTake",
    value: function allCompTake() {
      if (this.goodSlap()) {
        Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
      }

      var minTime = 1000;
      var maxTime = 2000;
      var rand_time;
      rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
      setTimeout(function () {
        if (this.goodSlap()) {
          this.player.player1[2].turn = false;
          var hand = document.getElementById("comphand1");
          hand.style.visibility = "visible";
          setTimeout(function () {
            var _this$computer$comp1$;

            (_this$computer$comp1$ = this.computer.comp1[1].pile).unshift.apply(_this$computer$comp1$, _toConsumableArray(this.mainPile));

            this.mainPile = [];
            this.removeMainPile();
            this.computer.comp1[2].turn = true;
            this.computer.comp2[2].turn = false;
            this.computer.comp3[2].turn = false;
            this.player.player1[2].turn = false;
            Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
            Object(_display__WEBPACK_IMPORTED_MODULE_3__["removehands"])();
            this.computerTurn();
            var comp1Pile = document.getElementById("comp1Pile");
            comp1Pile.innerHTML = this.players[1][1].pile.length + " cards";
          }.bind(this), 2000);
        }
      }.bind(this), rand_time);
      rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
      setTimeout(function () {
        if (this.goodSlap()) {
          this.player.player1[2].turn = false;
          var hand = document.getElementById("comphand2");
          hand.style.visibility = "visible";
          setTimeout(function () {
            var _this$computer$comp2$;

            (_this$computer$comp2$ = this.computer.comp2[1].pile).unshift.apply(_this$computer$comp2$, _toConsumableArray(this.mainPile));

            this.mainPile = [];
            this.removeMainPile();
            this.computer.comp1[2].turn = false;
            this.computer.comp2[2].turn = true;
            this.computer.comp3[2].turn = false;
            this.player.player1[2].turn = false;
            Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
            Object(_display__WEBPACK_IMPORTED_MODULE_3__["removehands"])();
            this.computerTurn();
            Object(_display__WEBPACK_IMPORTED_MODULE_3__["cardCount"])(this.players);
          }.bind(this), 2000);
        }
      }.bind(this), rand_time);
      rand_time = Math.floor(Math.random() * (maxTime - minTime) + minTime);
      setTimeout(function () {
        if (this.goodSlap()) {
          this.player.player1[2].turn = false;
          var hand = document.getElementById("comphand3");
          hand.style.visibility = "visible";
          setTimeout(function () {
            var _this$computer$comp3$;

            (_this$computer$comp3$ = this.computer.comp3[1].pile).unshift.apply(_this$computer$comp3$, _toConsumableArray(this.mainPile));

            this.mainPile = [];
            this.removeMainPile();
            this.computer.comp1[2].turn = false;
            this.computer.comp2[2].turn = false;
            this.computer.comp3[2].turn = true;
            this.player.player1[2].turn = false;
            Object(_clearTimeout__WEBPACK_IMPORTED_MODULE_5__["clearTimeout"])();
            Object(_display__WEBPACK_IMPORTED_MODULE_3__["removehands"])();
            this.computerTurn();
            Object(_display__WEBPACK_IMPORTED_MODULE_3__["cardCount"])(this.players);
          }.bind(this), 2000);
        }
      }.bind(this), rand_time);
    }
  }, {
    key: "computerTurn",
    value: function computerTurn() {
      if (this.computer.comp1[2].turn) {
        var comp1Container = document.getElementsByClassName("comp1-container");
        comp1Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
        this.comp1Func();
        this.allCompTake();
      } else if (this.computer.comp2[2].turn) {
        var comp2Container = document.getElementsByClassName("comp2-container");
        comp2Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
        this.comp2Func();
        this.allCompTake();
      } else if (this.computer.comp3[2].turn) {
        var comp3Container = document.getElementsByClassName("comp3-container");
        comp3Container[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
        this.comp3Func();
        this.allCompTake();
      } else {
        var playerContainer = document.getElementsByClassName("player-container");
        playerContainer[0].style.boxShadow = "0px 0px 31px 20px rgba(143,215,210,1)";
        this.allCompTake();
      }
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");


document.addEventListener("DOMContentLoaded", function () {
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]();
  game.startGame();
  var tapOwnPile = document.getElementById("playerPile");
  tapOwnPile.addEventListener("click", function () {
    return game.tapOwnPile();
  });
  var tapMainPile = document.getElementById("mainPile");
  tapMainPile.addEventListener("click", function () {
    return game.tapMainPile();
  });
  var restartButton = document.getElementById("restartButton");
  restartButton.addEventListener("click", function () {
    return game.startGame();
  });
  var playerInfo = document.getElementById("playerInfoContainer");
  playerInfo.innerHTML = "You have " + game.players[0][1].pile.length + " cards";
  var comp1Pile = document.getElementById("comp1Pile");
  comp1Pile.innerHTML = game.players[1][1].pile.length + " cards";
  var comp2Pile = document.getElementById("comp2Pile");
  comp2Pile.innerHTML = game.players[2][1].pile.length + " cards";
  var comp3Pile = document.getElementById("comp3Pile");
  comp3Pile.innerHTML = game.players[3][1].pile.length + " cards";
});

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player() {
  _classCallCheck(this, Player);

  this.player1 = [];
  this.player1.push({
    name: "You"
  }, {
    pile: []
  }, {
    turn: false
  });
};



/***/ }),

/***/ "./src/rules.js":
/*!**********************!*\
  !*** ./src/rules.js ***!
  \**********************/
/*! exports provided: double, sandwich */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "double", function() { return double; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sandwich", function() { return sandwich; });
function double(mainPile) {
  if (mainPile.slice(-2)[1] === undefined) {
    return false;
  } else if (mainPile.slice(-2)[0].value === mainPile.slice(-2)[1].value) {
    return true;
  } else {
    return false;
  }
}
function sandwich(mainPile) {
  if (mainPile.slice(-3)[2] === undefined) {
    return false;
  } else if (mainPile.slice(-3)[0].value === mainPile.slice(-3)[2].value) {
    return true;
  } else {
    return false;
  }
}

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGVhclRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXB1dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ydWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZGMyYSJdLCJuYW1lcyI6WyJDYXJkcyIsImRlY2siLCJkZWFsdF9jYXJkcyIsImNhcmQiLCJzdWl0IiwidmFsdWUiLCJuYW1lIiwidmFsdWVzIiwic3VpdHMiLCJpIiwibGVuZ3RoIiwiaiIsInB1c2giLCJjdXJyZW50X2lkeCIsInRlbXBfdmFsIiwicmFuZF9pZHgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkZWFsdF9jYXJkIiwic2hpZnQiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJUaW1lb3V0IiwiaWQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiQ29tcHV0ZXIiLCJjb21wMSIsImNvbXAyIiwiY29tcDMiLCJwaWxlIiwidHVybiIsImN1cnJlbnRDb21wIiwibWFpblBpbGUiLCJtaW5UaW1lIiwibWF4VGltZSIsInJhbmRfdGltZSIsInRvcENhcmQiLCJjb21wdXRlciIsInBvcCIsIlB1c2hBbmltYXRpb24iLCJsb2FkVG9wQ2FyZHMiLCJwbGF5ZXJzIiwiY29tcHV0ZXJUdXJuIiwiY29tcDFDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzdHlsZSIsImJveFNoYWRvdyIsImNhcmRDb3VudCIsImJpbmQiLCJjb21wMkNvbnRhaW5lciIsImNvbXAyUGlsZSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwicGxheWVyIiwicGxheWVyMSIsImNvbXAzQ29udGFpbmVyIiwiY29tcDNQaWxlIiwiZGVsYXllZEZ1bmN0aW9uUHVzaCIsImNvbXAxRnVuYyIsImFsbENvbXBUYWtlIiwiY29tcDJGdW5jIiwiY29tcDNGdW5jIiwicGxheWVyQ29udGFpbmVyIiwicGxheWVySW5mbyIsImNvbXAxUGlsZSIsInJlbW92ZWhhbmRzIiwiaGFuZDAiLCJoYW5kMSIsImhhbmQyIiwiaGFuZDMiLCJ2aXNpYmlsaXR5IiwiY3JlYXRlRWxlbWVudHMiLCJudW0iLCJvcmllbnRhdGlvbiIsImRpdjEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZGl2MiIsImRpdjMiLCJkaXY0IiwidmFsdWVEaXYiLCJzdWl0RGl2IiwiVmFsdWVDb250ZW50IiwiU3VpdENvbnRlbnQiLCJhcHBlbmRFbGVtZW50cyIsImNhcmRUYWJsZSIsImltZ0NvbnRhaW5lciIsImltZzEiLCJhcHBlbmRDaGlsZCIsImN1cnJlbnQiLCJiYWNrQ29sbGVjdGlvbiIsImZsaXBwZXJDb2xsZWN0aW9uIiwiY29udGFpbmVyIiwiekluZGV4IiwidHJhbnNmb3JtIiwiYW5pbWF0aW9uRGVsYXkiLCJhbmltYXRpb24iLCJwbGF5ZXJJZHgiLCJ0b3BDYXJkcyIsImZvckVhY2giLCJpZHgiLCJjb2xvciIsImRpdkFycmF5IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInNyYyIsIkdhbWUiLCJjYXJkcyIsIlBsYXllciIsInRhcE1haW5QaWxlIiwidGFwT3duUGlsZSIsInJlc2V0R2FtZSIsInN0YXJ0R2FtZSIsImNsZWFyIiwiZ2VuZXJhdGVfZGVjayIsInNodWZmbGUiLCJjaG9vc2VTdGFydFBsYXllciIsImRlYWwiLCJyZW1vdmVNYWluUGlsZSIsInVuZGVmaW5lZCIsImdhbWVPdmVyIiwiZG91YmxlIiwic2FuZHdpY2giLCJhbGVydCIsImdvb2RTbGFwIiwiaGFuZCIsInVuc2hpZnQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZSIsInJlc3RhcnRCdXR0b24iLCJzbGljZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDakZxQkEsSzs7O0FBQ2pCLG1CQUFjO0FBQUE7O0FBQ1YsU0FBS0MsSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0g7Ozs7b0NBR2U7QUFBQTs7QUFDWixVQUFJQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDeEIsYUFBSSxDQUFDQyxJQUFMLEdBQVlELEtBQUssR0FBRyxNQUFSLEdBQWlCRCxJQUE3QjtBQUNBLGFBQUksQ0FBQ0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBSSxDQUFDQyxLQUFMLEdBQWFBLEtBQWI7QUFFQSxlQUFPO0FB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TyxLQUFQO0FBQ0g7QUFDSjtBQUVNLFNBQVMySCxRQUFULENBQWtCOUYsUUFBbEIsRUFBNEI7QUFDL0IsTUFDSUEsUUFBUSxDQUFDd0csS0FBVCxDQUFlLENBQUMsQ0FBaEIsRUFBbUIsQ0FBbkIsTUFBMEJiLFNBRDlCLEVBRUU7QUFDRSxXQUFPLEtBQVA7QUFDSCxHQUpELE1BSU8sSUFDSDNGLFFBQVEsQ0FBQ3dHLEtBQVQsQ0FBZSxDQUFDLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCckksS0FBdEIsS0FBZ0M2QixRQUFRLENBQUN3RyxLQUFULENBQWUsQ0FBQyxDQUFoQixFQUFtQixDQUFuQixFQUFzQnJJLEtBRG5ELEVBRUw7QUFDRSxXQUFPLElBQVA7QUFDSCxHQUpNLE1BSUE7QUFDSCxXQUFPLEtBQVA7QUFDSDtBQUVKLEM7Ozs7Ozs7Ozs7O0FDNUJMLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZHMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlY2sgPSBbXTtcbiAgICAgICAgdGhpcy5kZWFsdF9jYXJkcyA9IFtdO1xuICAgIH1cblxuXG4gICAgZ2VuZXJhdGVfZGVjaygpIHtcbiAgICAgICAgbGV0IGNhcmQgPSAoc3VpdCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHZhbHVlICsgJyBvZiAnICsgc3VpdDtcbiAgICAgICAgICAgIHRoaXMuc3VpdCA9IHN1aXQ7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgICAgIHJldHVybiB7bmFtZTogdGhpcy5uYW1lLCBzdWl0OiB0aGlzLnN1aXQsIHZhbHVlOiB0aGlzLnZhbHVlfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdmFsdWVzID0gWycyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnSicsICdRJywgJ0snLCAnQSddO1xuICAgICAgICBsZXQgc3VpdHMgPSBbJ0NsdWJzJywgJ0RpYW1vbmRzJywgJ1NwYWRlcycsICdIZWFydHMnXTtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWl0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlY2sucHVzaChjYXJkKHN1aXRzW2ldLCB2YWx1ZXNbal0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgc2h1ZmZsZSgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRfaWR4ID0gdGhpcy5kZWNrLmxlbmd0aDtcbiAgICAgICAgbGV0IHRlbXBfdmFsO1xuICAgICAgICBsZXQgIHJhbmRfaWR4O1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50X2lkeCAhPT0gMCkge1xuICAgICAgICAgICAgcmFuZF9pZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50X2lkeCk7XG4gICAgICAgICAgICBjdXJyZW50X2lkeCAtPSAxO1xuICAgICAgICAgICAgdGVtcF92YWwgPSB0aGlzLmRlY2tbY3VycmVudF9pZHhdO1xuICAgICAgICAgICAgdGhpcy5kZWNrW2N1cnJlbnRfaWR4XSA9IHRoaXMuZGVja1tyYW5kX2lkeF07XG4gICAgICAgICAgICB0aGlzLmRlY2tbcmFuZF9pZHhdID0gdGVtcF92YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWFsKCkge1xuICAgICAgICBsZXQgZGVhbHRfY2FyZCA9IHRoaXMuZGVjay5zaGlmdCgpO1xuICAgICAgICB0aGlzLmRlYWx0X2NhcmRzLnB1c2goZGVhbHRfY2FyZCk7XG4gICAgICAgIHJldHVybiBkZWFsdF9jYXJkO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmRlY2sgPSBbXTtcbiAgICB9XG5cbiAgICBwcmludF9kZWNrKCkge1xuICAgICAgICBpZiAodGhpcy5kZWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgZGVjayBsZW5ndGggaXMgMFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNrLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRlY2tbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGltZW91dCgpIHtcbiAgICBsZXQgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IH0sIDApO1xuXG4gICAgd2hpbGUgKGlkLS0pIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChpZCk7XG4gICAgfVxufSIsImltcG9ydCB7fSBmcm9tICcuL2NsZWFyVGltZW91dCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbXAxID0gW107XG4gICAgICAgIHRoaXMuY29tcDIgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wMyA9IFtdO1xuICAgICAgICB0aGlzLmNvbXAxLnB1c2goeyBuYW1lOiBcIkNvbXB1dGVyIDFcIiB9LCB7IHBpbGU6IFtdIH0sIHsgdHVybjogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuY29tcDIucHVzaCh7IG5hbWU6IFwiQ29tcHV0ZXIgMlwiIH0sIHsgcGlsZTogW10gfSwgeyB0dXJuOiBmYWxzZSB9KTtcbiAgICAgICAgdGhpcy5jb21wMy5wdXNoKHsgbmFtZTogXCJDb21wdXRlciAzXCIgfSwgeyBwaWxlOiBbXSB9LCB7IHR1cm46IGZhbHNlIH0pO1xuXG4gICAgfVxuXG4gICAgZGVsYXllZEZ1bmN0aW9uUHVzaChjdXJyZW50Q29tcCwgbWFpblBpbGUpIHtcbiAgICAgICAgbGV0IG1pblRpbWUgPSAyMDAwO1xuICAgICAgICBsZXQgbWF4VGltZSA9IDIwMDA7XG4gICAgICAgIGxldCByYW5kX3RpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4VGltZSAtIG1pblRpbWUpICsgbWluVGltZSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRDb21wID09PSBcImNvbXAxXCIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IHRvcENhcmQgPSB0aGlzLmNvbXB1dGVyLmNvbXAxWzFdLnBpbGUucG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5QdXNoQW5pbWF0aW9uKFwiY29tcDFcIiwgbWFpblBpbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpblBpbGUucHVzaCh0b3BDYXJkKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuY29tcDFbMl0udHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuY29tcDJbMl0udHVybiA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBsb2FkVG9wQ2FyZHModGhpcy5wbGF5ZXJzLCBbMV0pO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcDFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcDEtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgIGNvbXAxQ29udGFpbmVyWzBdLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkQ291bnQoKTtcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCByYW5kX3RpbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDb21wID09PSBcImNvbXAyXCIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IHRvcENhcmQgPSB0aGlzLmNvbXB1dGVyLmNvbXAyWzFdLnBpbGUucG9wKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hBbmltYXRpb24oXCJjb21wMlwiLCBtYWluUGlsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluUGlsZS5wdXNoKHRvcENhcmQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wMlsyXS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wM1syXS50dXJuID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGxvYWRUb3BDYXJkcyh0aGlzLnBsYXllcnMsIFsyXSk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlclR1cm4oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wMkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wMi1jb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgY29tcDJDb250YWluZXJbMF0uc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wMlBpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXAyUGlsZVwiKTtcbiAgICAgICAgICAgICAgICBjb21wMlBpbGUuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJzWzJdWzFdLnBpbGUubGVuZ3RoICsgXCIgY2FyZHNcIjtcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCByYW5kX3RpbWUpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENvbXAgPT09IFwiY29tcDNcIikge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdG9wQ2FyZCA9IHRoaXMuY29tcHV0ZXIuY29tcDNbMV0ucGlsZS5wb3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hBbmltYXRpb24oXCJjb21wM1wiLCBtYWluUGlsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluUGlsZS5wdXNoKHRvcENhcmQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wM1syXS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyMVsyXS50dXJuID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICAgICAgbG9hZFRvcENhcmRzKHRoaXMucGxheWVycywgWzNdKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyVHVybigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcDNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcDMtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgIGNvbXAzQ29udGFpbmVyWzBdLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcDNQaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wM1BpbGVcIik7XG4gICAgICAgICAgICAgICAgY29tcDNQaWxlLmlubmVySFRNTCA9IHRoaXMucGxheWVyc1szXVsxXS5waWxlLmxlbmd0aCArIFwiIGNhcmRzXCI7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgcmFuZF90aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXAxRnVuYyhtYWluUGlsZSkge1xuICAgICAgICBpZiAodGhpcy5jb21wdXRlci5jb21wMVsxXS5waWxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wMVsyXS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAyWzJdLnR1cm4gPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wMUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wMS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBjb21wMUNvbnRhaW5lclswXS5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIjtcblxuICAgICAgICAgICAgdGhpcy5jb21wdXRlclR1cm4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVsYXllZEZ1bmN0aW9uUHVzaChcImNvbXAxXCIsIG1haW5QaWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29tcHV0ZXJUdXJuKG1haW5QaWxlKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXB1dGVyLmNvbXAxWzJdLnR1cm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAxQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXAxLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGNvbXAxQ29udGFpbmVyWzBdLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAzMXB4IDIwcHggcmdiYSgxNDMsMjE1LDIxMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jb21wMUZ1bmMobWFpblBpbGUpO1xuICAgICAgICAgICAgdGhpcy5hbGxDb21wVGFrZSgpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb21wdXRlci5jb21wMlsyXS50dXJuKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wMkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wMi1jb250YWluZXJcIik7XG4gICAgICAgICAgICBjb21wMkNvbnRhaW5lclswXS5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggMzFweCAyMHB4IHJnYmEoMTQzLDIxNSwyMTAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMuY29tcDJGdW5jKCk7XG4gICAgICAgICAgICB0aGlzLmFsbENvbXBUYWtlKCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbXB1dGVyLmNvbXAzWzJdLnR1cm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXAzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGNvbXAzQ29udGFpbmVyWzBdLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAzMXB4IDIwcHggcmdiYSgxNDMsMjE1LDIxMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jb21wM0Z1bmMoKTtcbiAgICAgICAgICAgIHRoaXMuYWxsQ29tcFRha2UoKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXllci1jb250YWluZXJcIik7XG4gICAgICAgICAgICBwbGF5ZXJDb250YWluZXJbMF0uc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDMxcHggMjBweCByZ2JhKDE0MywyMTUsMjEwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLmFsbENvbXBUYWtlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSIsIlxuICAgIGV4cG9ydCBmdW5jdGlvbiBjYXJkQ291bnQocGxheWVycykge1xuICAgICAgICBjb25zdCBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJJbmZvQ29udGFpbmVyXCIpO1xuICAgICAgICBwbGF5ZXJJbmZvLmlubmVySFRNTCA9IFwiWW91IGhhdmUgXCIgKyBwbGF5ZXJzWzBdWzFdLnBpbGUubGVuZ3RoICsgXCIgY2FyZHNcIjtcblxuICAgICAgICBjb25zdCBjb21wMVBpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXAxUGlsZVwiKTtcbiAgICAgICAgY29tcDFQaWxlLmlubmVySFRNTCA9IHBsYXllcnNbMV1bMV0ucGlsZS5sZW5ndGggKyBcIiBjYXJkc1wiO1xuXG4gICAgICAgIGNvbnN0IGNvbXAyUGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcDJQaWxlXCIpO1xuICAgICAgICBjb21wMlBpbGUuaW5uZXJIVE1MID0gcGxheWVyc1syXVsxXS5waWxlLmxlbmd0aCArIFwiIGNhcmRzXCI7XG5cbiAgICAgICAgY29uc3QgY29tcDNQaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wM1BpbGVcIik7XG4gICAgICAgIGNvbXAzUGlsZS5pbm5lckhUTUwgPSBwbGF5ZXJzWzNdWzFdLnBpbGUubGVuZ3RoICsgXCIgY2FyZHNcIjtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZWhhbmRzKCkge1xuICAgICAgICBjb25zdCBoYW5kMCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyaGFuZFwiKTtcbiAgICAgICAgY29uc3QgaGFuZDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBoYW5kMVwiKTtcbiAgICAgICAgY29uc3QgaGFuZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBoYW5kMlwiKTtcbiAgICAgICAgY29uc3QgaGFuZDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBoYW5kM1wiKTtcblxuICAgICAgICBoYW5kMC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgaGFuZDEuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIGhhbmQyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBoYW5kMy5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICAgICAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGxheWVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgY29tcDFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcDEtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBjb21wMkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wMi1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGNvbXAzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXAzLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBwbGF5ZXJDb250YWluZXJbMF0uc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7XG4gICAgICAgIGNvbXAxQ29udGFpbmVyWzBdLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuICAgICAgICBjb21wMkNvbnRhaW5lclswXS5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIjtcbiAgICAgICAgY29tcDNDb250YWluZXJbMF0uc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRzKG51bSwgY2FyZCwgc3VpdCkge1xuXG4gICAgICAgIGxldCBvcmllbnRhdGlvbjtcbiAgICAgICAgaWYgKG51bSA9PT0gMCB8fCBudW0gPT09IDIpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3JpZW50YXRpb24gPSBcImhvcml6b250YWxcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2MS5jbGFzc05hbWUgPSBgJHtvcmllbnRhdGlvbn0gZmxpcC1jb250YWluZXIke251bX1gO1xuXG4gICAgICAgIGxldCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2Mi5jbGFzc05hbWUgPSBgZmxpcHBlciR7bnVtfWA7XG5cbiAgICAgICAgbGV0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYzLmNsYXNzTmFtZSA9IGBmcm9udCR7bnVtfWA7XG5cbiAgICAgICAgbGV0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXY0LmNsYXNzTmFtZSA9IGBiYWNrJHtudW19YDtcblxuICAgICAgICBsZXQgdmFsdWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YWx1ZURpdi5jbGFzc05hbWUgPSBcInZhbHVlXCI7XG5cbiAgICAgICAgbGV0IHN1aXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdWl0RGl2LmNsYXNzTmFtZSA9IFwic3VpdFwiO1xuXG4gICAgICAgIGxldCBWYWx1ZUNvbnRlbnQgPSBjYXJkLnZhbHVlO1xuICAgICAgICBsZXQgU3VpdENvbnRlbnQgPSBzdWl0O1xuXG5cbiAgICAgICAgdmFsdWVEaXYuaW5uZXJIVE1MID0gVmFsdWVDb250ZW50O1xuICAgICAgICBzdWl0RGl2LmlubmVySFRNTCA9IFN1aXRDb250ZW50O1xuXG4gICAgICAgIHJldHVybiAoe2RpdjEsIGRpdjIsIGRpdjMsIGRpdjQsIHZhbHVlRGl2LCBzdWl0RGl2fSk7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEVsZW1lbnRzKGNhcmRUYWJsZSwgZGl2MSwgZGl2MiwgZGl2MywgZGl2NCwgdmFsdWVEaXYsIHN1aXREaXYsIGltZ0NvbnRhaW5lciwgaW1nMSkge1xuICAgICAgICBjYXJkVGFibGUuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgICAgIGRpdjIuYXBwZW5kQ2hpbGQoZGl2Myk7XG4gICAgICAgIGRpdjIuYXBwZW5kQ2hpbGQoZGl2NCk7XG4gICAgICAgIGRpdjQuYXBwZW5kQ2hpbGQodmFsdWVEaXYpO1xuICAgICAgICBkaXY0LmFwcGVuZENoaWxkKHN1aXREaXYpO1xuICAgICAgICBkaXYzLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG4gICAgICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcxKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gUHVzaEFuaW1hdGlvbihjdXJyZW50LCBtYWluUGlsZSkge1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gXCJjb21wMVwiKSB7XG5cbiAgICAgICAgICAgIGxldCBiYWNrQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiYWNrMVwiKTtcbiAgICAgICAgICAgIGxldCBmbGlwcGVyQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGlwcGVyMVwiKTtcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmxpcC1jb250YWluZXIxXCIpO1xuICAgICAgICAgICAgbGV0IHpJbmRleCA9IG1haW5QaWxlLmxlbmd0aDtcblxuICAgICAgICAgICAgY29udGFpbmVyW2NvbnRhaW5lci5sZW5ndGggLSAxXS5zdHlsZS56SW5kZXggPSB6SW5kZXg7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmxpcHBlckNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmbGlwcGVyQ29sbGVjdGlvbltpXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgtMTgwZGVnKSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFja0NvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBiYWNrQ29sbGVjdGlvbltpXS5zdHlsZS5hbmltYXRpb25EZWxheSA9ICcwLjNzJztcbiAgICAgICAgICAgICAgICBiYWNrQ29sbGVjdGlvbltpXS5zdHlsZS5hbmltYXRpb24gPSAndG9CYWNrIDAuM3MgbGluZWFyIG5vcm1hbCBmb3J3YXJkcyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID09PSBcImNvbXAyXCIpIHtcbiAgICAgICAgICAgIGxldCBiYWNrQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiYWNrMlwiKTtcbiAgICAgICAgICAgIGxldCBmbGlwcGVyQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGlwcGVyMlwiKTtcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmxpcC1jb250YWluZXIyXCIpO1xuICAgICAgICAgICAgbGV0IHpJbmRleCA9IG1haW5QaWxlLmxlbmd0aDtcblxuICAgICAgICAgICAgY29udGFpbmVyW2NvbnRhaW5lci5sZW5ndGggLSAxXS5zdHlsZS56SW5kZXggPSB6SW5kZXg7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmxpcHBlckNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmbGlwcGVyQ29sbGVjdGlvbltpXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgxODBkZWcpJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYWNrQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJhY2tDb2xsZWN0aW9uW2ldLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gJzAuM3MnO1xuICAgICAgICAgICAgICAgIGJhY2tDb2xsZWN0aW9uW2ldLnN0eWxlLmFuaW1hdGlvbiA9ICd0b0JhY2sgMC4zcyBsaW5lYXIgbm9ybWFsIGZvcndhcmRzJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IFwiY29tcDNcIikge1xuICAgICAgICAgICAgbGV0IGJhY2tDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJhY2szXCIpO1xuICAgICAgICAgICAgbGV0IGZsaXBwZXJDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZsaXBwZXIzXCIpO1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGlwLWNvbnRhaW5lcjNcIik7XG4gICAgICAgICAgICBsZXQgekluZGV4ID0gbWFpblBpbGUubGVuZ3RoO1xuXG4gICAgICAgICAgICBjb250YWluZXJbY29udGFpbmVyLmxlbmd0aCAtIDFdLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbGlwcGVyQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZsaXBwZXJDb2xsZWN0aW9uW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKC0xODBkZWcpJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYWNrQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJhY2tDb2xsZWN0aW9uW2ldLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gJzAuM3MnO1xuICAgICAgICAgICAgICAgIGJhY2tDb2xsZWN0aW9uW2ldLnN0eWxlLmFuaW1hdGlvbiA9ICd0b0JhY2sgMC4zcyBsaW5lYXIgbm9ybWFsIGZvcndhcmRzJztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgbGV0IGJhY2tDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJhY2swXCIpO1xuICAgICAgICAgICAgbGV0IGZsaXBwZXJDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZsaXBwZXIwXCIpO1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGlwLWNvbnRhaW5lcjBcIik7XG4gICAgICAgICAgICBsZXQgekluZGV4ID0gbWFpblBpbGUubGVuZ3RoO1xuXG4gICAgICAgICAgICBjb250YWluZXJbY29udGFpbmVyLmxlbmd0aCAtIDFdLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbGlwcGVyQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZsaXBwZXJDb2xsZWN0aW9uW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDE4MGRlZyknO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFja0NvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBiYWNrQ29sbGVjdGlvbltpXS5zdHlsZS5hbmltYXRpb25EZWxheSA9ICcwLjNzJztcbiAgICAgICAgICAgICAgICBiYWNrQ29sbGVjdGlvbltpXS5zdHlsZS5hbmltYXRpb24gPSAndG9CYWNrIDAuM3MgbGluZWFyIG5vcm1hbCBmb3J3YXJkcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBsb2FkVG9wQ2FyZHMocGxheWVycywgcGxheWVySWR4ID0gWzAsIDEsIDIsIDNdKSB7XG4gICAgICAgIGxldCB0b3BDYXJkcyA9IFtdO1xuICAgICAgICBwbGF5ZXJJZHguZm9yRWFjaChpID0+IHtcbiAgICAgICAgICAgIGxldCBwaWxlID0gcGxheWVyc1tpXVsxXS5waWxlO1xuICAgICAgICAgICAgbGV0IHRvcENhcmQgPSBwaWxlW3BpbGUubGVuZ3RoIC0gMV0gfHwgXCJibGFua1wiO1xuICAgICAgICAgICAgdG9wQ2FyZHNbaV0gPSB0b3BDYXJkO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b3BDYXJkcy5mb3JFYWNoKChjYXJkLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZFRhYmxlXCIpO1xuXG4gICAgICAgICAgICBsZXQgc3VpdDtcbiAgICAgICAgICAgIGxldCBjb2xvcjtcblxuICAgICAgICAgICAgaWYgKGNhcmQuc3VpdCA9PT0gXCJIZWFydHNcIikge1xuICAgICAgICAgICAgICAgIHN1aXQgPSAnXFwmIzk4MjknO1xuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FyZC5zdWl0ID09PSBcIkRpYW1vbmRzXCIpIHtcbiAgICAgICAgICAgICAgICBzdWl0ID0gYFxcJiM5ODMwYDtcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhcmQuc3VpdCA9PT0gXCJDbHVic1wiKSB7XG4gICAgICAgICAgICAgICAgc3VpdCA9IGBcXCYjOTgyN2A7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhcmQuc3VpdCA9PT0gXCJTcGFkZXNcIikge1xuICAgICAgICAgICAgICAgIHN1aXQgPSBgXFwmIzk4MjRgO1xuICAgICAgICAgICAgICAgIGNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaWR4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGl2QXJyYXkgPSBjcmVhdGVFbGVtZW50cyhpZHgsIGNhcmQsIHN1aXQpO1xuIFxuICAgICAgICAgICAgICAgIGxldCBkaXYxID0gZGl2QXJyYXkuZGl2MTtcbiAgICAgICAgICAgICAgICBsZXQgZGl2MiA9IGRpdkFycmF5LmRpdjI7XG4gICAgICAgICAgICAgICAgbGV0IGRpdjMgPSBkaXZBcnJheS5kaXYzO1xuICAgICAgICAgICAgICAgIGxldCBkaXY0ID0gZGl2QXJyYXkuZGl2NDtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVEaXYgPSBkaXZBcnJheS52YWx1ZURpdjtcbiAgICAgICAgICAgICAgICBsZXQgc3VpdERpdiA9IGRpdkFycmF5LnN1aXREaXY7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZURpdi5zdHlsZS50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICB2YWx1ZURpdi5zdHlsZS5mb250U2l6ZSA9IFwiMzVweFwiO1xuICAgICAgICAgICAgICAgIHZhbHVlRGl2LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuc3R5bGUuZm9udFdlaWdodCA9IFwiOTAwXCI7XG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuc3R5bGUubWFyZ2luVG9wID0gXCI1cHhcIjtcbiAgICAgICAgICAgICAgICB2YWx1ZURpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxMHB4XCI7XG5cbiAgICAgICAgICAgICAgICBzdWl0RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMTRweFwiO1xuICAgICAgICAgICAgICAgIHN1aXREaXYuc3R5bGUuZm9udFNpemUgPSBcIjcwcHhcIjtcbiAgICAgICAgICAgICAgICBzdWl0RGl2LnN0eWxlLmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbWctY29udGFpbmVyXCI7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgaW1nMS5jbGFzc05hbWUgPSBcImJhY2tDYXJkVlwiO1xuICAgICAgICAgICAgICAgIGltZzEuc3JjID0gXCJzcmMvaW1hZ2VzLy9jYXJkQmFjay5qcGdcIjtcblxuICAgICAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKGNhcmRUYWJsZSwgZGl2MSwgZGl2MiwgZGl2MywgZGl2NCwgdmFsdWVEaXYsIHN1aXREaXYsIGltZ0NvbnRhaW5lciwgaW1nMSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWR4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpdkFycmF5ID0gY3JlYXRlRWxlbWVudHMoaWR4LCBjYXJkLCBzdWl0KTtcblxuICAgICAgICAgICAgICAgIGxldCBkaXYxID0gZGl2QXJyYXkuZGl2MTtcbiAgICAgICAgICAgICAgICBsZXQgZGl2MiA9IGRpdkFycmF5LmRpdjI7XG4gICAgICAgICAgICAgICAgbGV0IGRpdjMgPSBkaXZBcnJheS5kaXYzO1xuICAgICAgICAgICAgICAgIGxldCBkaXY0ID0gZGl2QXJyYXkuZGl2NDtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVEaXYgPSBkaXZBcnJheS52YWx1ZURpdjtcbiAgICAgICAgICAgICAgICBsZXQgc3VpdERpdiA9IGRpdkFycmF5LnN1aXREaXY7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZURpdi5zdHlsZS50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgICAgICB2YWx1ZURpdi5zdHlsZS5mb250U2l6ZSA9IFwiMzVweFwiO1xuICAgICAgICAgICAgICAgIHZhbHVlRGl2LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuc3R5bGUuZm9udFdlaWdodCA9IFwiOTAwXCI7XG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuc3R5bGUubWFyZ2luVG9wID0gXCI1cHhcIjtcbiAgICAgICAgICAgICAgICB2YWx1ZURpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxMHB4XCI7XG5cbiAgICAgICAgICAgICAgICBzdWl0RGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiMTRweFwiO1xuICAgICAgICAgICAgICAgIHN1aXREaXYuc3R5bGUuZm9udFNpemUgPSBcIjcwcHhcIjtcbiAgICAgICAgICAgICAgICBzdWl0RGl2LnN0eWxlLmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBpbWdDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbWctY29udGFpbmVyXCI7XG5cbiAgICAgICAgICAgICAgICBsZXQgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgaW1nMS5jbGFzc05hbWUgPSBcImJhY2tDYXJkSFwiO1xuICAgICAgICAgICAgICAgIGltZzEuc3JjID0gXCJzcmMvaW1hZ2VzLy9jYXJkQmFjay5qcGdcIjtcblxuICAgICAgICAgICAgICAgIGFwcGVuZEVsZW1lbnRzKGNhcmRUYWJsZSwgZGl2MSwgZGl2MiwgZGl2MywgZGl2NCwgdmFsdWVEaXYsIHN1aXREaXYsIGltZ0NvbnRhaW5lciwgaW1nMSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpZHggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGl2QXJyYXkgPSBjcmVhdGVFbGVtZW50cyhpZHgsIGNhcmQsIHN1aXQpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRpdjEgPSBkaXZBcnJheS5kaXYxO1xuICAgICAgICAgICAgICAgIGxldCBkaXYyID0gZGl2QXJyYXkuZGl2MjtcbiAgICAgICAgICAgICAgICBsZXQgZGl2MyA9IGRpdkFycmF5LmRpdjM7XG4gICAgICAgICAgICAgICAgbGV0IGRpdjQgPSBkaXZBcnJheS5kaXY0O1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZURpdiA9IGRpdkFycmF5LnZhbHVlRGl2O1xuICAgICAgICAgICAgICAgIGxldCBzdWl0RGl2ID0gZGl2QXJyYXkuc3VpdERpdjtcblxuICAgICAgICAgICAgICAgIHZhbHVlRGl2LnN0eWxlLnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgICAgIHZhbHVlRGl2LnN0eWxlLmZvbnRTaXplID0gXCIzNXB4XCI7XG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgICAgICAgICB2YWx1ZURpdi5zdHlsZS5mb250V2VpZ2h0ID0gXCI5MDBcIjtcbiAgICAgICAgICAgICAgICB2YWx1ZURpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjVweFwiO1xuICAgICAgICAgICAgICAgIHZhbHVlRGl2LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjEwcHhcIjtcblxuICAgICAgICAgICAgICAgIHN1aXREaXYuc3R5bGUubWFyZ2luVG9wID0gXCIxNHB4XCI7XG4gICAgICAgICAgICAgICAgc3VpdERpdi5zdHlsZS5mb250U2l6ZSA9IFwiNzBweFwiO1xuICAgICAgICAgICAgICAgIHN1aXREaXYuc3R5bGUuY29sb3IgPSBjb2xvcjtcblxuXG4gICAgICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW1nLWNvbnRhaW5lclwiO1xuXG4gICAgICAgICAgICAgICAgbGV0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGltZzEuY2xhc3NOYW1lID0gXCJiYWNrQ2FyZFZcIjtcbiAgICAgICAgICAgICAgICBpbWcxLnNyYyA9IFwic3JjL2ltYWdlcy8vY2FyZEJhY2suanBnXCI7XG5cbiAgICAgICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhjYXJkVGFibGUsIGRpdjEsIGRpdjIsIGRpdjMsIGRpdjQsIHZhbHVlRGl2LCBzdWl0RGl2LCBpbWdDb250YWluZXIsIGltZzEpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlkeCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGxldCBkaXZBcnJheSA9IGNyZWF0ZUVsZW1lbnRzKGlkeCwgY2FyZCwgc3VpdCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGl2MSA9IGRpdkFycmF5LmRpdjE7XG4gICAgICAgICAgICAgICAgbGV0IGRpdjIgPSBkaXZBcnJheS5kaXYyO1xuICAgICAgICAgICAgICAgIGxldCBkaXYzID0gZGl2QXJyYXkuZGl2MztcbiAgICAgICAgICAgICAgICBsZXQgZGl2NCA9IGRpdkFycmF5LmRpdjQ7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlRGl2ID0gZGl2QXJyYXkudmFsdWVEaXY7XG4gICAgICAgICAgICAgICAgbGV0IHN1aXREaXYgPSBkaXZBcnJheS5zdWl0RGl2O1xuXG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuc3R5bGUudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuc3R5bGUuZm9udFNpemUgPSBcIjM1cHhcIjtcbiAgICAgICAgICAgICAgICB2YWx1ZURpdi5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgICAgIHZhbHVlRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBcIjkwMFwiO1xuICAgICAgICAgICAgICAgIHZhbHVlRGl2LnN0eWxlLm1hcmdpblRvcCA9IFwiNXB4XCI7XG4gICAgICAgICAgICAgICAgdmFsdWVEaXYuc3R5bGUubWFyZ2luTGVmdCA9IFwiMTBweFwiO1xuXG4gICAgICAgICAgICAgICAgc3VpdERpdi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjE0cHhcIjtcbiAgICAgICAgICAgICAgICBzdWl0RGl2LnN0eWxlLmZvbnRTaXplID0gXCI3MHB4XCI7XG4gICAgICAgICAgICAgICAgc3VpdERpdi5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXG4gICAgICAgICAgICAgICAgbGV0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgaW1nQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW1nLWNvbnRhaW5lclwiO1xuXG4gICAgICAgICAgICAgICAgbGV0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgIGltZzEuY2xhc3NOYW1lID0gXCJiYWNrQ2FyZEhcIjtcbiAgICAgICAgICAgICAgICBpbWcxLnNyYyA9IFwic3JjL2ltYWdlcy8vY2FyZEJhY2suanBnXCI7XG5cbiAgICAgICAgICAgICAgICBhcHBlbmRFbGVtZW50cyhjYXJkVGFibGUsIGRpdjEsIGRpdjIsIGRpdjMsIGRpdjQsIHZhbHVlRGl2LCBzdWl0RGl2LCBpbWdDb250YWluZXIsIGltZzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4iLCJpbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9jb21wdXRlcic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBDYXJkcyBmcm9tICcuL2NhcmRzJztcbmltcG9ydCB7IHJlbW92ZWhhbmRzLCBsb2FkVG9wQ2FyZHMsIGNhcmRDb3VudCB9IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgeyBkb3VibGUsIHNhbmR3aWNoIH0gZnJvbSAnLi9ydWxlcyc7XG5pbXBvcnQgeyBjbGVhclRpbWVvdXQgfSBmcm9tICcuL2NsZWFyVGltZW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuY2FyZHMgPSBuZXcgQ2FyZHMoKTtcbiAgICAgICAgdGhpcy5jb21wdXRlciA9IG5ldyBDb21wdXRlcigpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW3RoaXMucGxheWVyLnBsYXllcjEsIHRoaXMuY29tcHV0ZXIuY29tcDEsIHRoaXMuY29tcHV0ZXIuY29tcDIsIHRoaXMuY29tcHV0ZXIuY29tcDNdO1xuICAgICAgICB0aGlzLm1haW5QaWxlID0gW107XG4gICAgICAgIHRoaXMudGFwTWFpblBpbGUgPSB0aGlzLnRhcE1haW5QaWxlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudGFwT3duUGlsZSA9IHRoaXMudGFwT3duUGlsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlc2V0R2FtZSA9IHRoaXMucmVzZXRHYW1lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lID0gdGhpcy5zdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29tcDFGdW5jID0gdGhpcy5jb21wMUZ1bmMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wMkZ1bmMgPSB0aGlzLmNvbXAyRnVuYy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXAzRnVuYyA9IHRoaXMuY29tcDNGdW5jLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5jb21wdXRlclR1cm4gPSB0aGlzLmNvbXB1dGVyVHVybi5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgICB0aGlzLmNhcmRzID0gbmV3IENhcmRzKCk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHRoaXMucGxheWVycyA9IFt0aGlzLnBsYXllci5wbGF5ZXIxLCB0aGlzLmNvbXB1dGVyLmNvbXAxLCB0aGlzLmNvbXB1dGVyLmNvbXAyLCB0aGlzLmNvbXB1dGVyLmNvbXAzXTtcbiAgICAgICAgdGhpcy5tYWluUGlsZSA9IFtdO1xuICAgIH1cblxuICAgIGNob29zZVN0YXJ0UGxheWVyKCkge1xuICAgICAgICBsZXQgcmFuZF9pZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllcnMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW3JhbmRfaWR4XVsyXS50dXJuID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLnJlc2V0R2FtZSgpO1xuICAgICAgICB0aGlzLmNhcmRzLmNsZWFyKCk7IFxuICAgICAgICB0aGlzLmNhcmRzLmdlbmVyYXRlX2RlY2soKTtcbiAgICAgICAgdGhpcy5jYXJkcy5zaHVmZmxlKCk7XG4gICAgICAgIHRoaXMuY2hvb3NlU3RhcnRQbGF5ZXIoKTsgXG4gICAgICAgIHdoaWxlICh0aGlzLmNhcmRzLmRlY2subGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2ldWzFdLnBpbGUucHVzaCh0aGlzLmNhcmRzLmRlYWwoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVNYWluUGlsZSgpO1xuICAgICAgICBjbGVhclRpbWVvdXQoKTtcbiAgICAgICAgbG9hZFRvcENhcmRzKHRoaXMucGxheWVycyk7XG4gICAgICAgIHJlbW92ZWhhbmRzKCk7XG4gICAgICAgIGNhcmRDb3VudCh0aGlzLnBsYXllcnMpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyVHVybigpO1xuICAgIH1cblxuICAgIHRhcE93blBpbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5wbGF5ZXIxWzJdLnR1cm4pIHtcbiAgICAgICAgICAgIGxldCB0b3BDYXJkID0gdGhpcy5wbGF5ZXIucGxheWVyMVsxXS5waWxlLnBvcCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodG9wQ2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hBbmltYXRpb24oXCJwbGF5ZXJcIik7XG4gICAgICAgICAgICAgICAgbG9hZFRvcENhcmRzKHRoaXMucGxheWVycyxbMF0pO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpblBpbGUucHVzaCh0b3BDYXJkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAxWzJdLnR1cm4gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgY2FyZENvdW50KHRoaXMucGxheWVycyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGxheWVyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJDb250YWluZXJbMF0uc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgXG5cbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllcjFbMl0udHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wMVsyXS50dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZ29vZFNsYXAoKSB7XG4gICAgICAgIGlmIChkb3VibGUodGhpcy5tYWluUGlsZSkgfHwgc2FuZHdpY2godGhpcy5tYWluUGlsZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IHJhbiBvdXQgb2YgY2FyZHMsIHdvdWxkIHlvdSBsaWtlIHRvIHN0YXJ0IGFub3RoZXIgZ2FtZT9cIik7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgfVxuXG4gICAgdGFwTWFpblBpbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmdvb2RTbGFwKCkpIHtcblxuICAgICAgICAgICAgY29uc3QgaGFuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyaGFuZFwiKTtcbiAgICAgICAgICAgIGhhbmQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllcjFbMV0ucGlsZS51bnNoaWZ0KC4uLnRoaXMubWFpblBpbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpblBpbGUgPSBbXTtcbiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAxWzJdLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAyWzJdLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAzWzJdLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXIxWzJdLnR1cm4gPSB0cnVlO1xuICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTWFpblBpbGUoKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoKTtcbiAgICAgICAgICAgICAgICByZW1vdmVoYW5kcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FyZENvdW50KHRoaXMucGxheWVycyk7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwyMDAwKTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuZ29vZFNsYXAoKSAmJiB0aGlzLnBsYXllci5wbGF5ZXIxWzFdLnBpbGUubGVuZ3RoID09PSAwICl7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1haW5QaWxlLnVuc2hpZnQodGhpcy5wbGF5ZXIucGxheWVyMVsxXS5waWxlLnBvcCgpKTtcbiAgICAgICAgICAgIGNhcmRDb3VudCh0aGlzLnBsYXllcnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVsYXllZEZ1bmN0aW9uUHVzaChjdXJyZW50Q29tcCkge1xuICAgICAgICBsZXQgbWluVGltZSA9IDIwMDA7XG4gICAgICAgIGxldCBtYXhUaW1lID0gMjAwMDtcbiAgICAgICAgbGV0IHJhbmRfdGltZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXhUaW1lIC0gbWluVGltZSkgKyBtaW5UaW1lKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJyZW50Q29tcCA9PT0gXCJjb21wMVwiKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGxldCB0b3BDYXJkID0gdGhpcy5jb21wdXRlci5jb21wMVsxXS5waWxlLnBvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuUHVzaEFuaW1hdGlvbihcImNvbXAxXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpblBpbGUucHVzaCh0b3BDYXJkKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuY29tcDFbMl0udHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuY29tcDJbMl0udHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbG9hZFRvcENhcmRzKHRoaXMucGxheWVycyxbMV0pO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcDFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcDEtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgIGNvbXAxQ29udGFpbmVyWzBdLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgY2FyZENvdW50KHRoaXMucGxheWVycyk7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgcmFuZF90aW1lKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50Q29tcCA9PT0gXCJjb21wMlwiKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGxldCB0b3BDYXJkID0gdGhpcy5jb21wdXRlci5jb21wMlsxXS5waWxlLnBvcCgpO1xuICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5QdXNoQW5pbWF0aW9uKFwiY29tcDJcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWluUGlsZS5wdXNoKHRvcENhcmQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wMlsyXS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wM1syXS50dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsb2FkVG9wQ2FyZHModGhpcy5wbGF5ZXJzLFsyXSk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlclR1cm4oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wMkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wMi1jb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgY29tcDJDb250YWluZXJbMF0uc3R5bGUuYm94U2hhZG93ID0gXCJub25lXCI7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wMlBpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXAyUGlsZVwiKTtcbiAgICAgICAgICAgICAgICBjb21wMlBpbGUuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJzWzJdWzFdLnBpbGUubGVuZ3RoICsgXCIgY2FyZHNcIjtcblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCByYW5kX3RpbWUpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudENvbXAgPT09IFwiY29tcDNcIikge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdG9wQ2FyZCA9IHRoaXMuY29tcHV0ZXIuY29tcDNbMV0ucGlsZS5wb3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hBbmltYXRpb24oXCJjb21wM1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW5QaWxlLnB1c2godG9wQ2FyZCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAzWzJdLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXIxWzJdLnR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgbG9hZFRvcENhcmRzKHRoaXMucGxheWVycywgWzNdKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyVHVybigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcDNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcDMtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgIGNvbXAzQ29udGFpbmVyWzBdLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcDNQaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wM1BpbGVcIik7XG4gICAgICAgICAgICAgICAgY29tcDNQaWxlLmlubmVySFRNTCA9IHRoaXMucGxheWVyc1szXVsxXS5waWxlLmxlbmd0aCArIFwiIGNhcmRzXCI7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgcmFuZF90aW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFB1c2hBbmltYXRpb24oY3VycmVudCkge1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gXCJjb21wMVwiKSB7XG5cbiAgICAgICAgICAgIGxldCBiYWNrQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiYWNrMVwiKTtcbiAgICAgICAgICAgIGxldCBmbGlwcGVyQ29sbGVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGlwcGVyMVwiKTtcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmxpcC1jb250YWluZXIxXCIpO1xuICAgICAgICAgICAgbGV0IHpJbmRleCA9IHRoaXMubWFpblBpbGUubGVuZ3RoO1xuICAgICAgIFxuICAgICAgICAgICAgY29udGFpbmVyW2NvbnRhaW5lci5sZW5ndGggLSAxXS5zdHlsZS56SW5kZXggPSB6SW5kZXg7XG4gICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbGlwcGVyQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZsaXBwZXJDb2xsZWN0aW9uW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKC0xODBkZWcpJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYWNrQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJhY2tDb2xsZWN0aW9uW2ldLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gJzAuM3MnO1xuICAgICAgICAgICAgICAgIGJhY2tDb2xsZWN0aW9uW2ldLnN0eWxlLmFuaW1hdGlvbiA9ICd0b0JhY2sgMC4zcyBsaW5lYXIgbm9ybWFsIGZvcndhcmRzJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT09IFwiY29tcDJcIikge1xuICAgICAgICAgICAgbGV0IGJhY2tDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJhY2syXCIpO1xuICAgICAgICAgICAgbGV0IGZsaXBwZXJDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZsaXBwZXIyXCIpO1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGlwLWNvbnRhaW5lcjJcIik7XG4gICAgICAgICAgICBsZXQgekluZGV4ID0gdGhpcy5tYWluUGlsZS5sZW5ndGg7XG5cbiAgXG4gICAgICAgICAgICBjb250YWluZXJbY29udGFpbmVyLmxlbmd0aCAtIDFdLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbGlwcGVyQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZsaXBwZXJDb2xsZWN0aW9uW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDE4MGRlZyknO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhY2tDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYmFja0NvbGxlY3Rpb25baV0uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSAnMC4zcyc7XG4gICAgICAgICAgICAgICAgYmFja0NvbGxlY3Rpb25baV0uc3R5bGUuYW5pbWF0aW9uID0gJ3RvQmFjayAwLjNzIGxpbmVhciBub3JtYWwgZm9yd2FyZHMnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJjb21wM1wiKSB7XG4gICAgICAgICAgICBsZXQgYmFja0NvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmFjazNcIik7XG4gICAgICAgICAgICBsZXQgZmxpcHBlckNvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmxpcHBlcjNcIik7XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZsaXAtY29udGFpbmVyM1wiKTtcbiAgICAgICAgICAgIGxldCB6SW5kZXggPSB0aGlzLm1haW5QaWxlLmxlbmd0aDtcbiAgXG4gICAgICAgICAgICBjb250YWluZXJbY29udGFpbmVyLmxlbmd0aCAtIDFdLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmbGlwcGVyQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZsaXBwZXJDb2xsZWN0aW9uW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKC0xODBkZWcpJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYWNrQ29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJhY2tDb2xsZWN0aW9uW2ldLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gJzAuM3MnO1xuICAgICAgICAgICAgICAgIGJhY2tDb2xsZWN0aW9uW2ldLnN0eWxlLmFuaW1hdGlvbiA9ICd0b0JhY2sgMC4zcyBsaW5lYXIgbm9ybWFsIGZvcndhcmRzJztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgICAgbGV0IGJhY2tDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJhY2swXCIpO1xuICAgICAgICAgICAgbGV0IGZsaXBwZXJDb2xsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZsaXBwZXIwXCIpO1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGlwLWNvbnRhaW5lcjBcIik7XG4gICAgICAgICAgICBsZXQgekluZGV4ID0gdGhpcy5tYWluUGlsZS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lcltjb250YWluZXIubGVuZ3RoIC0gMV0uc3R5bGUuekluZGV4ID0gekluZGV4O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZsaXBwZXJDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZmxpcHBlckNvbGxlY3Rpb25baV0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMTgwZGVnKSc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFja0NvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBiYWNrQ29sbGVjdGlvbltpXS5zdHlsZS5hbmltYXRpb25EZWxheSA9ICcwLjNzJztcbiAgICAgICAgICAgICAgICBiYWNrQ29sbGVjdGlvbltpXS5zdHlsZS5hbmltYXRpb24gPSAndG9CYWNrIDAuM3MgbGluZWFyIG5vcm1hbCBmb3J3YXJkcyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbW92ZU1haW5QaWxlKCkge1xuICAgICAgICBsZXQgZGl2MSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGlwLWNvbnRhaW5lcjBcIik7XG4gICAgICAgIGxldCBkaXYyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZsaXAtY29udGFpbmVyMVwiKTtcbiAgICAgICAgbGV0IGRpdjMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZmxpcC1jb250YWluZXIyXCIpO1xuICAgICAgICBsZXQgZGl2NCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmbGlwLWNvbnRhaW5lcjNcIik7XG5cbiAgICAgICAgd2hpbGUgKGRpdjEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGl2MVswXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdjFbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChkaXYyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRpdjJbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXYyWzBdKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoZGl2My5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkaXYzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2M1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGRpdjQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGl2NFswXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdjRbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9hZFRvcENhcmRzKHRoaXMucGxheWVycyk7XG4gICAgfVxuXG4gICAgY29tcDFGdW5jKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wdXRlci5jb21wMVsxXS5waWxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wMVsyXS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAyWzJdLnR1cm4gPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wMUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wMS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBjb21wMUNvbnRhaW5lclswXS5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIjtcblxuICAgICAgICAgICAgdGhpcy5jb21wdXRlclR1cm4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlbGF5ZWRGdW5jdGlvblB1c2goXCJjb21wMVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wMkZ1bmMoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbXB1dGVyLmNvbXAyWzFdLnBpbGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAyWzJdLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuY29tcDNbMl0udHVybiA9IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXAyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXAyLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGNvbXAyQ29udGFpbmVyWzBdLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5jb21wdXRlclR1cm4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVsYXllZEZ1bmN0aW9uUHVzaChcImNvbXAyXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcDNGdW5jKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wdXRlci5jb21wM1sxXS5waWxlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wM1syXS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXIxWzJdLnR1cm4gPSB0cnVlO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wM0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wMy1jb250YWluZXJcIik7XG4gICAgICAgICAgICBjb21wM0NvbnRhaW5lclswXS5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIjtcblxuICAgICAgICAgICAgdGhpcy5jb21wdXRlclR1cm4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVsYXllZEZ1bmN0aW9uUHVzaChcImNvbXAzXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxsQ29tcFRha2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdvb2RTbGFwKCkpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCgpO1xuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbWluVGltZSA9IDEwMDA7XG4gICAgICAgIGxldCBtYXhUaW1lID0gMjAwMDtcbiAgICAgICAgbGV0IHJhbmRfdGltZTtcblxuICAgICAgICByYW5kX3RpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4VGltZSAtIG1pblRpbWUpICsgbWluVGltZSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ29vZFNsYXAoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllcjFbMl0udHVybiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGhhbmQxXCIpO1xuICAgICAgICAgICAgICAgIGhhbmQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuY29tcDFbMV0ucGlsZS51bnNoaWZ0KC4uLnRoaXMubWFpblBpbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5QaWxlID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTWFpblBpbGUoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wMVsyXS50dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wMlsyXS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuY29tcDNbMl0udHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXIxWzJdLnR1cm4gPSBmYWxzZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWhhbmRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJUdXJuKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXAxUGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcDFQaWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb21wMVBpbGUuaW5uZXJIVE1MID0gdGhpcy5wbGF5ZXJzWzFdWzFdLnBpbGUubGVuZ3RoICsgXCIgY2FyZHNcIjtcbiAgICBcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksMjAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSwgcmFuZF90aW1lKTtcblxuICAgICAgICByYW5kX3RpbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4VGltZSAtIG1pblRpbWUpICsgbWluVGltZSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ29vZFNsYXAoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllcjFbMl0udHVybiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGhhbmQyXCIpO1xuICAgICAgICAgICAgICAgIGhhbmQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wMlsxXS5waWxlLnVuc2hpZnQoLi4udGhpcy5tYWluUGlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFpblBpbGUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVNYWluUGlsZSgpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAxWzJdLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wMlsyXS50dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wM1syXS50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXllcjFbMl0udHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWhhbmRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJUdXJuKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNhcmRDb3VudCh0aGlzLnBsYXllcnMpO1xuXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLDIwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyksIHJhbmRfdGltZSk7XG5cbiAgICAgICAgcmFuZF90aW1lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heFRpbWUgLSBtaW5UaW1lKSArIG1pblRpbWUpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdvb2RTbGFwKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5ZXIxWzJdLnR1cm4gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXBoYW5kM1wiKTtcbiAgICAgICAgICAgICAgICBoYW5kLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuY29tcDNbMV0ucGlsZS51bnNoaWZ0KC4uLnRoaXMubWFpblBpbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW5QaWxlID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTWFpblBpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuY29tcDFbMl0udHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXB1dGVyLmNvbXAyWzJdLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wdXRlci5jb21wM1syXS50dXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGxheWVyMVsyXS50dXJuID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWhhbmRzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXJUdXJuKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FyZENvdW50KHRoaXMucGxheWVycyk7XG5cbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksIDIwMDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKSwgcmFuZF90aW1lKTtcbiAgICB9XG5cblxuICAgIGNvbXB1dGVyVHVybigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcHV0ZXIuY29tcDFbMl0udHVybikge1xuICAgICAgICAgICAgY29uc3QgY29tcDFDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcDEtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgY29tcDFDb250YWluZXJbMF0uc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDMxcHggMjBweCByZ2JhKDE0MywyMTUsMjEwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLmNvbXAxRnVuYygpO1xuICAgICAgICAgICAgdGhpcy5hbGxDb21wVGFrZSgpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb21wdXRlci5jb21wMlsyXS50dXJuKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wMkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wMi1jb250YWluZXJcIik7XG4gICAgICAgICAgICBjb21wMkNvbnRhaW5lclswXS5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggMzFweCAyMHB4IHJnYmEoMTQzLDIxNSwyMTAsMSlcIjtcbiAgICAgICAgICAgIHRoaXMuY29tcDJGdW5jKCk7XG4gICAgICAgICAgICB0aGlzLmFsbENvbXBUYWtlKCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbXB1dGVyLmNvbXAzWzJdLnR1cm4pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXAzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXAzLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGNvbXAzQ29udGFpbmVyWzBdLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAzMXB4IDIwcHggcmdiYSgxNDMsMjE1LDIxMCwxKVwiO1xuICAgICAgICAgICAgdGhpcy5jb21wM0Z1bmMoKTtcbiAgICAgICAgICAgIHRoaXMuYWxsQ29tcFRha2UoKTtcbiAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBsYXllci1jb250YWluZXJcIik7XG4gICAgICAgICAgICBwbGF5ZXJDb250YWluZXJbMF0uc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDMxcHggMjBweCByZ2JhKDE0MywyMTUsMjEwLDEpXCI7XG4gICAgICAgICAgICB0aGlzLmFsbENvbXBUYWtlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBnYW1lLnN0YXJ0R2FtZSgpO1xuXG4gICAgXG4gICAgY29uc3QgdGFwT3duUGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyUGlsZVwiKTtcbiAgICB0YXBPd25QaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBnYW1lLnRhcE93blBpbGUoKSk7XG4gICAgXG4gICAgXG4gICAgY29uc3QgdGFwTWFpblBpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5QaWxlXCIpO1xuICAgIHRhcE1haW5QaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBnYW1lLnRhcE1haW5QaWxlKCkpO1xuICAgIFxuICAgIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhcnRCdXR0b25cIik7XG4gICAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZ2FtZS5zdGFydEdhbWUoKSk7XG5cbiAgICBjb25zdCBwbGF5ZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXJJbmZvQ29udGFpbmVyXCIpO1xuICAgIHBsYXllckluZm8uaW5uZXJIVE1MID0gXCJZb3UgaGF2ZSBcIiArIGdhbWUucGxheWVyc1swXVsxXS5waWxlLmxlbmd0aCArIFwiIGNhcmRzXCI7XG5cbiAgICBjb25zdCBjb21wMVBpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbXAxUGlsZVwiKTtcbiAgICBjb21wMVBpbGUuaW5uZXJIVE1MID0gZ2FtZS5wbGF5ZXJzWzFdWzFdLnBpbGUubGVuZ3RoICsgXCIgY2FyZHNcIjtcbiAgIFxuICAgIGNvbnN0IGNvbXAyUGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcDJQaWxlXCIpO1xuICAgIGNvbXAyUGlsZS5pbm5lckhUTUwgPSBnYW1lLnBsYXllcnNbMl1bMV0ucGlsZS5sZW5ndGggKyBcIiBjYXJkc1wiO1xuICAgXG4gICAgY29uc3QgY29tcDNQaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wM1BpbGVcIik7XG4gICAgY29tcDNQaWxlLmlubmVySFRNTCA9IGdhbWUucGxheWVyc1szXVsxXS5waWxlLmxlbmd0aCArIFwiIGNhcmRzXCI7XG5cblxufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBbXTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnB1c2goeyBuYW1lOiBcIllvdVwiIH0sIHsgcGlsZTogW10gfSwgeyB0dXJuOiBmYWxzZSB9KTtcbiAgICB9XG5cbn0iLCJcbiAgICBleHBvcnQgZnVuY3Rpb24gZG91YmxlKG1haW5QaWxlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIG1haW5QaWxlLnNsaWNlKC0yKVsxXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgbWFpblBpbGUuc2xpY2UoLTIpWzBdLnZhbHVlID09PSBtYWluUGlsZS5zbGljZSgtMilbMV0udmFsdWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBzYW5kd2ljaChtYWluUGlsZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBtYWluUGlsZS5zbGljZSgtMylbMl0gPT09IHVuZGVmaW5lZFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIG1haW5QaWxlLnNsaWNlKC0zKVswXS52YWx1ZSA9PT0gbWFpblBpbGUuc2xpY2UoLTMpWzJdLnZhbHVlXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=