"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logos */ \"./components/logos.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href, path, children } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n            lineNumber: 26,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst NavBar = (props)=>{\n    _s1();\n    const { path } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px\"\n        },\n        zIndex: 1,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logos__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n                            lineNumber: 59,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n                        lineNumber: 58,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n                    lineNumber: 57,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        nmd: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/works\",\n                            path: path,\n                            children: \"Works\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n                            lineNumber: 70,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/Posts\",\n                            path: path,\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n                            lineNumber: 74,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n                    lineNumber: 62,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n            lineNumber: 50,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bumjin/Documents/Personal Git/website/components/navbar.js\",\n        lineNumber: 41,\n        columnNumber: 3\n    }, undefined);\n};\n_s1(NavBar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDTTtBQWVQO0FBQ3VCO0FBRWhELE1BQU1lLFdBQVc7UUFBQyxFQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFDOztJQUN2QyxNQUFNQyxTQUFTRixTQUFTRDtJQUN4QixNQUFNSSxnQkFBZ0JQLG1FQUFpQkEsQ0FBQyxXQUFXO0lBRW5ELHFCQUNDLDhEQUFDWixrREFBUUE7UUFBQ2UsTUFBTUE7a0JBQ2YsNEVBQUNaLGtEQUFJQTtZQUNKaUIsR0FBRztZQUNIQyxJQUFJSCxTQUFTLGNBQWNJO1lBQzNCQyxPQUFPTCxTQUFTLFlBQVdDO3NCQUUxQkY7Ozs7Ozs7Ozs7O0FBSUw7R0FmTUg7O1FBRWlCRiwrREFBaUJBOzs7S0FGbENFO0FBaUJOLE1BQU1VLFNBQVNDLENBQUFBOztJQUNkLE1BQU0sRUFBQ1QsSUFBSSxFQUFDLEdBQUdTO0lBRWYscUJBQ0MsOERBQUN2QixpREFBR0E7UUFDSHdCLFVBQVM7UUFDVEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZQLElBQUlULG1FQUFpQkEsQ0FBQyxhQUFhO1FBQ25DaUIsT0FBTztZQUFDQyxnQkFBZTtRQUFXO1FBQ2xDQyxRQUFRO1FBQ1AsR0FBR04sS0FBSztrQkFFVCw0RUFBQ3hCLHVEQUFTQTtZQUNUK0IsU0FBUTtZQUNSWixHQUFHO1lBQUdhLE1BQUs7WUFDWEMsTUFBSztZQUNMQyxPQUFNO1lBQ05DLFNBQVE7OzhCQUVSLDhEQUFDOUIsa0RBQUlBO29CQUFDNkIsT0FBTTtvQkFBU0UsSUFBSTs4QkFDeEIsNEVBQUNoQyxxREFBT0E7d0JBQUNzQixJQUFHO3dCQUFLVyxNQUFLO3dCQUFLQyxlQUFlO2tDQUN6Qyw0RUFBQ3hDLDhDQUFJQTs7Ozs7Ozs7Ozs7Ozs7OzhCQUdQLDhEQUFDSyxtREFBS0E7b0JBQ0xvQyxXQUFXO3dCQUFDQyxNQUFLO3dCQUFVQyxJQUFJO29CQUFLO29CQUNwQ1YsU0FBUzt3QkFBQ1MsTUFBSzt3QkFBUUMsSUFBSTtvQkFBTTtvQkFDakNDLE9BQU87d0JBQUNGLE1BQUs7d0JBQVFDLElBQUk7b0JBQU07b0JBQy9CRSxZQUFXO29CQUNYQyxVQUFZO29CQUNaQyxJQUFJO3dCQUFFTCxNQUFNO3dCQUFHTSxLQUFLO29CQUFDOztzQ0FFckIsOERBQUNqQzs0QkFBU0MsTUFBSzs0QkFBU0MsTUFBTUE7c0NBQU07Ozs7OztzQ0FJcEMsOERBQUNGOzRCQUFTQyxNQUFLOzRCQUFTQyxNQUFNQTtzQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVekM7SUEvQ01ROztRQVFDWiwrREFBaUJBOzs7TUFSbEJZO0FBaUROLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvcydcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7XG5cdENvbnRhaW5lcixcblx0Qm94LFxuXHRMaW5rLFxuXHRTdGFjayxcblx0SGVhZGluZyxcblx0RmxleCxcblx0TWVudSxcblx0TWVudUl0ZW0sXG5cdE1lbnVMaXN0LFxuXHRNZW51QnV0dG9uLFxuXHRJY29uQnV0dG9uLFxuXHR1c2VDb2xvck1vZGVWYWx1ZVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnXG5cbmNvbnN0IExpbmtJdGVtID0gKHtocmVmLCBwYXRoLCBjaGlsZHJlbn0pID0+IHtcblx0Y29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuXHRjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKVxuXG5cdHJldHVybiAoXG5cdFx0PE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxuXHRcdFx0PExpbmsgXG5cdFx0XHRcdHA9ezJ9IFxuXHRcdFx0XHRiZz17YWN0aXZlID8gJ2dsYXNzVGVhbCcgOiB1bmRlZmluZWR9IFxuXHRcdFx0XHRjb2xvcj17YWN0aXZlID8gJyMyMDIwMjMnOiBpbmFjdGl2ZUNvbG9yfSBcblx0XHRcdD5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9MaW5rPlxuXHRcdDwvTmV4dExpbms+XG5cdClcbn1cblxuY29uc3QgTmF2QmFyID0gcHJvcHMgPT4ge1xuXHRjb25zdCB7cGF0aH0gPSBwcm9wc1xuXG5cdHJldHVybiAoXG5cdFx0PEJveCBcblx0XHRcdHBvc2l0aW9uPVwiZml4ZWRcIiBcblx0XHRcdGFzPVwibmF2XCIgXG5cdFx0XHR3PVwiMTAwJVwiIFxuXHRcdFx0Ymc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnIzIwMjAyMzgwJyl9XG5cdFx0XHRzdHlsZT17e2JhY2tkcm9wRmlsdGVyOidibHVyKDEwcHgnfX1cblx0XHRcdHpJbmRleD17MX1cblx0XHRcdHsuLi5wcm9wc31cblx0XHQ+XG5cdFx0XHQ8Q29udGFpbmVyIFxuXHRcdFx0XHRkaXNwbGF5PVwiZmxleFwiIFxuXHRcdFx0XHRwPXsyfSBtYXhXPVwiY29udGFpbmVyLm1kXCIgXG5cdFx0XHRcdHdyYXA9XCJ3cmFwXCIgXG5cdFx0XHRcdGFsaWduPVwiY2VudGVyXCIgXG5cdFx0XHRcdGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcblx0XHRcdD5cblx0XHRcdFx0PEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XG5cdFx0XHRcdFx0PEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XG5cdFx0XHRcdFx0XHQ8TG9nbyAvPlxuXHRcdFx0XHRcdDwvSGVhZGluZz5cblx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHQ8U3RhY2tcblx0XHRcdFx0XHRkaXJlY3Rpb249e3tiYXNlOidjb2x1bW4nLCBtZDogJ3Jvdyd9fVxuXHRcdFx0XHRcdGRpc3BsYXk9e3tiYXNlOidub25lJywgbWQ6ICdmbGV4J319XG5cdFx0XHRcdFx0d2lkdGg9e3tiYXNlOidmdWxsJywgbWQ6ICdhdXRvJ319XG5cdFx0XHRcdFx0YWxpZ25JdGVtcz1cImNlbnRlclwiXG5cdFx0XHRcdFx0ZmxleEdyb3cgPSB7MX1cblx0XHRcdFx0XHRtdD17eyBiYXNlOiA0LCBubWQ6IDB9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExpbmtJdGVtIGhyZWY9XCIvd29ya3NcIiBwYXRoPXtwYXRofT5cblx0XHRcdFx0XHRcdFdvcmtzXG5cdFx0XHRcdFx0PC9MaW5rSXRlbT5cblxuXHRcdFx0XHRcdDxMaW5rSXRlbSBocmVmPVwiL1Bvc3RzXCIgcGF0aD17cGF0aH0+XG5cdFx0XHRcdFx0XHRQb3N0c1xuXHRcdFx0XHRcdDwvTGlua0l0ZW0+XG5cblx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0PC9Db250YWluZXI+XG5cdFx0PC9Cb3g+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSGFtYnVyZ2VySWNvbiIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJwIiwiYmciLCJ1bmRlZmluZWQiLCJjb2xvciIsIk5hdkJhciIsInByb3BzIiwicG9zaXRpb24iLCJhcyIsInciLCJzdHlsZSIsImJhY2tkcm9wRmlsdGVyIiwiekluZGV4IiwiZGlzcGxheSIsIm1heFciLCJ3cmFwIiwiYWxpZ24iLCJqdXN0aWZ5IiwibXIiLCJzaXplIiwibGV0dGVyU3BhY2luZyIsImRpcmVjdGlvbiIsImJhc2UiLCJtZCIsIndpZHRoIiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwibXQiLCJubWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});