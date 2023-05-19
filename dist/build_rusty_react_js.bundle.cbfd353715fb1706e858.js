"use strict";
(self["webpackChunkrusty_react"] = self["webpackChunkrusty_react"] || []).push([["build_rusty_react_js"],{

/***/ "./build/rusty_react.js":
/*!******************************!*\
  !*** ./build/rusty_react.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __wbg_alert_ae1a19ad00099e86: () => (/* reexport safe */ _rusty_react_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_alert_ae1a19ad00099e86),
/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _rusty_react_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_wasm),
/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _rusty_react_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_throw),
/* harmony export */   big_computation: () => (/* reexport safe */ _rusty_react_bg_js__WEBPACK_IMPORTED_MODULE_1__.big_computation),
/* harmony export */   welcome: () => (/* reexport safe */ _rusty_react_bg_js__WEBPACK_IMPORTED_MODULE_1__.welcome)
/* harmony export */ });
/* harmony import */ var _rusty_react_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rusty_react_bg.wasm */ "./build/rusty_react_bg.wasm");
/* harmony import */ var _rusty_react_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rusty_react_bg.js */ "./build/rusty_react_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rusty_react_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_rusty_react_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


(0,_rusty_react_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_wasm)(_rusty_react_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./build/rusty_react_bg.js":
/*!*********************************!*\
  !*** ./build/rusty_react_bg.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __wbg_alert_ae1a19ad00099e86: () => (/* binding */ __wbg_alert_ae1a19ad00099e86),
/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw),
/* harmony export */   big_computation: () => (/* binding */ big_computation),
/* harmony export */   welcome: () => (/* binding */ welcome)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var wasm;
function __wbg_set_wasm(val) {
  wasm = val;
}
var lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
var cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
function big_computation() {
  wasm.big_computation();
}
var WASM_VECTOR_LEN = 0;
var lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;
var cachedTextEncoder = new lTextEncoder('utf-8');
var encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  var buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === undefined) {
    var buf = cachedTextEncoder.encode(arg);
    var _ptr = malloc(buf.length) >>> 0;
    getUint8Memory0().subarray(_ptr, _ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return _ptr;
  }
  var len = arg.length;
  var ptr = malloc(len) >>> 0;
  var mem = getUint8Memory0();
  var offset = 0;
  for (; offset < len; offset++) {
    var code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3) >>> 0;
    var view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    var ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
/**
* @param {string} name
*/
function welcome(name) {
  var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  wasm.welcome(ptr0, len0);
}
function __wbg_alert_ae1a19ad00099e86(arg0, arg1) {
  alert(getStringFromWasm0(arg0, arg1));
}
;
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
;

/***/ }),

/***/ "./build/rusty_react_bg.wasm":
/*!***********************************!*\
  !*** ./build/rusty_react_bg.wasm ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./rusty_react_bg.js */ "./build/rusty_react_bg.js");
module.exports = __webpack_require__.v(exports, module.id, "983875cdd4f8631788cb", {
	"./rusty_react_bg.js": {
		"__wbg_alert_ae1a19ad00099e86": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_ae1a19ad00099e86,
		"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
	}
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRfcnVzdHlfcmVhY3RfanMuYnVuZGxlLmNiZmQzNTM3MTVmYjE3MDZlODU4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDTztBQUNyREMsa0VBQWMsQ0FBQ0QsaURBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZwQixJQUFJQSxJQUFJO0FBQ0QsU0FBU0MsY0FBY0EsQ0FBQ0MsR0FBRyxFQUFFO0VBQ2hDRixJQUFJLEdBQUdFLEdBQUc7QUFDZDtBQUdBLElBQU1DLFlBQVksR0FBRyxPQUFPQyxXQUFXLEtBQUssV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFQyxNQUFNLENBQUNDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQ0YsV0FBVyxHQUFHQSxXQUFXO0FBRS9HLElBQUlHLGlCQUFpQixHQUFHLElBQUlKLFlBQVksQ0FBQyxPQUFPLEVBQUU7RUFBRUssU0FBUyxFQUFFLElBQUk7RUFBRUMsS0FBSyxFQUFFO0FBQUssQ0FBQyxDQUFDO0FBRW5GRixpQkFBaUIsQ0FBQ0csTUFBTSxDQUFDLENBQUM7QUFFMUIsSUFBSUMsa0JBQWtCLEdBQUcsSUFBSTtBQUU3QixTQUFTQyxlQUFlQSxDQUFBLEVBQUc7RUFDdkIsSUFBSUQsa0JBQWtCLEtBQUssSUFBSSxJQUFJQSxrQkFBa0IsQ0FBQ0UsVUFBVSxLQUFLLENBQUMsRUFBRTtJQUNwRUYsa0JBQWtCLEdBQUcsSUFBSUcsVUFBVSxDQUFDZCxJQUFJLENBQUNlLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO0VBQzNEO0VBQ0EsT0FBT0wsa0JBQWtCO0FBQzdCO0FBRUEsU0FBU00sa0JBQWtCQSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUNsQ0QsR0FBRyxHQUFHQSxHQUFHLEtBQUssQ0FBQztFQUNmLE9BQU9YLGlCQUFpQixDQUFDRyxNQUFNLENBQUNFLGVBQWUsQ0FBQyxDQUFDLENBQUNRLFFBQVEsQ0FBQ0YsR0FBRyxFQUFFQSxHQUFHLEdBQUdDLEdBQUcsQ0FB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QUVuQ1ksTUFBTSxJQUFJSSxHQUFHLENBQUNWLE9BQU87RUFDekI7RUFFQWIsZUFBZSxHQUFHbUIsTUFBTTtFQUN4QixPQUFPdkIsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUzRCLE9BQU9BLENBQUNDLElBQUksRUFBRTtFQUMxQixJQUFNQyxJQUFJLEdBQUdaLGlCQUFpQixDQUFDVyxJQUFJLEVBQUUvQyxJQUFJLENBQUNpRCxpQkFBaUIsRUFBRWpELElBQUksQ0FBQ2tELGtCQUFrQixDQUFDO0VBQ3JGLElBQU1DLElBQUksR0FBRzdCLGVBQWU7RUFDNUJ0QixJQUFJLENBQUM4QyxPQUFPLENBQUNFLElBQUksRUFBRUcsSUFBSSxDQUFDO0FBQzVCO0FBRU8sU0FBU0MsNEJBQTRCQSxDQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBRTtFQUNyREMsS0FBSyxDQUFDdEMsa0JBQWtCLENBQUNvQyxJQUFJLEVBQUVDLElBQUksQ0FBQyxDQUFDO0FBQ3pDO0FBQUM7QUFFTSxTQUFTRSxnQkFBZ0JBLENBQUNILElBQUksRUFBRUMsSUFBSSxFQUFFO0VBQ3pDLE1BQU0sSUFBSUcsS0FBSyxDQUFDeEMsa0JBQWtCLENBQUNvQyxJQUFJLEVBQUVDLElBQUksQ0FBQyxDQUFDO0FBQ25EO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydXN0eS1yZWFjdC8uL2J1aWxkL3J1c3R5X3JlYWN0LmpzIiwid2VicGFjazovL3J1c3R5LXJlYWN0Ly4vYnVpbGQvcnVzdHlfcmVhY3RfYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9ydXN0eV9yZWFjdF9iZy53YXNtXCI7XG5pbXBvcnQgeyBfX3diZ19zZXRfd2FzbSB9IGZyb20gXCIuL3J1c3R5X3JlYWN0X2JnLmpzXCI7XG5fX3diZ19zZXRfd2FzbSh3YXNtKTtcbmV4cG9ydCAqIGZyb20gXCIuL3J1c3R5X3JlYWN0X2JnLmpzXCI7XG4iLCJsZXQgd2FzbTtcbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfd2FzbSh2YWwpIHtcbiAgICB3YXNtID0gdmFsO1xufVxuXG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVkVWludDhNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRVaW50OE1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkVWludDhNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFVpbnQ4TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBiaWdfY29tcHV0YXRpb24oKSB7XG4gICAgd2FzbS5iaWdfY29tcHV0YXRpb24oKTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCkgPj4+IDA7XG4gICAgICAgIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4pID4+PiAwO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzKSA+Pj4gMDtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuLyoqXG4qIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHdlbGNvbWUobmFtZSkge1xuICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChuYW1lLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICB3YXNtLndlbGNvbWUocHRyMCwgbGVuMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19hbGVydF9hZTFhMTlhZDAwMDk5ZTg2KGFyZzAsIGFyZzEpIHtcbiAgICBhbGVydChnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fdGhyb3coYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxuIl0sIm5hbWVzIjpbIndhc20iLCJfX3diZ19zZXRfd2FzbSIsInZhbCIsImxUZXh0RGVjb2RlciIsIlRleHREZWNvZGVyIiwibW9kdWxlIiwicmVxdWlyZSIsImNhY2hlZFRleHREZWNvZGVyIiwiaWdub3JlQk9NIiwiZmF0YWwiLCJkZWNvZGUiLCJjYWNoZWRVaW50OE1lbW9yeTAiLCJnZXRVaW50OE1lbW9yeTAiLCJieXRlTGVuZ3RoIiwiVWludDhBcnJheSIsIm1lbW9yeSIsImJ1ZmZlciIsImdldFN0cmluZ0Zyb21XYXNtMCIsInB0ciIsImxlbiIsInN1YmFycmF5IiwiYmlnX2NvbXB1dGF0aW9uIiwiV0FTTV9WRUNUT1JfTEVOIiwibFRleHRFbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJjYWNoZWRUZXh0RW5jb2RlciIsImVuY29kZVN0cmluZyIsImVuY29kZUludG8iLCJhcmciLCJ2aWV3IiwiYnVmIiwiZW5jb2RlIiwic2V0IiwicmVhZCIsImxlbmd0aCIsIndyaXR0ZW4iLCJwYXNzU3RyaW5nVG9XYXNtMCIsIm1hbGxvYyIsInJlYWxsb2MiLCJ1bmRlZmluZWQiLCJtZW0iLCJvZmZzZXQiLCJjb2RlIiwiY2hhckNvZGVBdCIsInNsaWNlIiwicmV0Iiwid2VsY29tZSIsIm5hbWUiLCJwdHIwIiwiX193YmluZGdlbl9tYWxsb2MiLCJfX3diaW5kZ2VuX3JlYWxsb2MiLCJsZW4wIiwiX193YmdfYWxlcnRfYWUxYTE5YWQwMDA5OWU4NiIsImFyZzAiLCJhcmcxIiwiYWxlcnQiLCJfX3diaW5kZ2VuX3Rocm93IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9