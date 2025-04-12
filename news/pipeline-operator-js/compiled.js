"use strict";

var _ref, _ref2, _ref3, _ref4, _ref5;
_ref = (_ref2 = (_ref3 = (_ref4 = (_ref5 = ['USA', 'Mada', 'Suise', 'Russie'], _ref5.map(function (name) {
  return name.toLowerCase();
})), capitalize(_ref4)), _ref3.join('-')), "Names: ".concat(_ref2)), console.log(_ref);
function capitalize(strArray) {
  if (!strArray) return;
  var array = [];
  strArray.forEach(function (element) {
    var c = element.charAt(0).toUpperCase() + element.slice(1);
    array.push(c);
  });
  return array;
}
