"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/home/home-v1/ReturnCalculator.js":
/*!*********************************************************!*\
  !*** ./src/components/home/home-v1/ReturnCalculator.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rangeslider */ \"(app-pages-browser)/./node_modules/react-rangeslider/lib/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ReturnCalculator = ()=>{\n    _s();\n    const [returnTypeValue, setReturnTypeValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const returnType = [\n        \"One Time\",\n        \"Monthly\",\n        \"Yearly\"\n    ];\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(50);\n    const handleChangeStart = ()=>{\n        console.log(\"Change event started\");\n    };\n    const handleChange = (value)=>{\n        setValue(value);\n    };\n    const handleChangeComplete = ()=>{\n        console.log(\"Change event completed\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-lg-6 left_part p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex gap-4 invest_selector\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex gap-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    name: \"investor-type\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                                lineNumber: 29,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: \"Investment\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"d-flex gap-3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"radio\",\n                                                    name: \"investor-type\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: \"Co-ownership\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Select Property\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"40px\",\n                                        borderRadius: \"4px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Villa Balima\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Villa Balima\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Villa Balima\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Villa Balima\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            children: \"Villa Balima\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" d-flex justify-content-center \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex mt-3\",\n                                style: {\n                                    backgroundColor: \"white\",\n                                    borderRadius: \"50px\"\n                                },\n                                children: returnType.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"px-4 py-1 mb-0\",\n                                        onClick: ()=>setReturnTypeValue(index),\n                                        style: {\n                                            backgroundColor: returnTypeValue === index ? \"#EB6753\" : \"\",\n                                            color: returnTypeValue === index ? \"white\" : \"black\",\n                                            borderRadius: \"50px\",\n                                            cursor: \"pointer\"\n                                        },\n                                        children: data\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Initial Purchase Amount\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 52\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"40px\",\n                                        borderRadius: \"4px\"\n                                    },\n                                    placeholder: \"Multiple of BDT 10.000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Period (5 year)\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 44\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_rangeslider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    min: 0,\n                                    max: 100,\n                                    value: value,\n                                    onChangeStart: handleChangeStart,\n                                    onChange: handleChange,\n                                    onChangeComplete: handleChangeComplete\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-lg-6  right_part\",\n                    children: \"Calculator right\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Rtemis\\\\investment-all\\\\client\\\\src\\\\components\\\\home\\\\home-v1\\\\ReturnCalculator.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ReturnCalculator, \"iHmg0sKoB6AZa8pZopCVFb4bNDo=\");\n_c = ReturnCalculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReturnCalculator);\nvar _c;\n$RefreshReg$(_c, \"ReturnCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvaG9tZS12MS9SZXR1cm5DYWxjdWxhdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDaUM7QUFDTTtBQUN2QyxNQUFNRSxtQkFBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0osK0NBQVFBLENBQUM7SUFFdkQsTUFBTUssYUFBYTtRQUFDO1FBQVk7UUFBVztLQUFTO0lBQ3BELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNUSxvQkFBb0I7UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEsTUFBTUMsZUFBZSxDQUFDTDtRQUNwQkMsU0FBU0Q7SUFDWDtJQUVBLE1BQU1NLHVCQUF1QjtRQUMzQkgsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0c7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7c0NBQ0MsNEVBQUNBO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDswREFDQyw0RUFBQ0U7b0RBQU1DLE1BQUs7b0RBQVFDLE1BQUs7Ozs7Ozs7Ozs7OzBEQUczQiw4REFBQ0o7MERBQ0MsNEVBQUNLOzhEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrREFHUCw4REFBQ0w7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDswREFDQyw0RUFBQ0U7b0RBQU1DLE1BQUs7b0RBQVFDLE1BQUs7Ozs7Ozs7Ozs7OzBEQUczQiw4REFBQ0o7MERBQ0MsNEVBQUNLOzhEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUtYLDhEQUFDTDs7OENBQ0MsOERBQUNNOzhDQUFNOzs7Ozs7OENBQ1AsOERBQUNDO29DQUNDQyxPQUFPO3dDQUNMQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSQyxjQUFjO29DQUNoQjs7c0RBRUEsOERBQUNDO3NEQUFPOzs7Ozs7c0RBQ1IsOERBQUNBO3NEQUFPOzs7Ozs7c0RBQ1IsOERBQUNBO3NEQUFPOzs7Ozs7c0RBQ1IsOERBQUNBO3NEQUFPOzs7Ozs7c0RBQ1IsOERBQUNBO3NEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNaOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FDQ0MsV0FBVTtnQ0FDVk8sT0FBTztvQ0FDTEssaUJBQWlCO29DQUNqQkYsY0FBYztnQ0FDaEI7MENBRUNuQixXQUFXc0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNyQiw4REFBQ1g7d0NBQ0NKLFdBQVU7d0NBRVZnQixTQUFTLElBQU0xQixtQkFBbUJ5Qjt3Q0FDbENSLE9BQU87NENBQ0xLLGlCQUFpQnZCLG9CQUFvQjBCLFFBQVEsWUFBWTs0Q0FDekRFLE9BQU81QixvQkFBb0IwQixRQUFRLFVBQVU7NENBQzdDTCxjQUFjOzRDQUNkUSxRQUFRO3dDQUNWO2tEQUVDSjt1Q0FUSUM7Ozs7Ozs7Ozs7Ozs7OztzQ0FjYiw4REFBQ2hCOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0s7OENBQU07Ozs7OztnQ0FBK0I7OENBQUMsOERBQUNjOzs7Ozs4Q0FDeEMsOERBQUNsQjtvQ0FDQ0MsTUFBSztvQ0FDTEssT0FBTzt3Q0FDTEMsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsY0FBYztvQ0FDaEI7b0NBQ0FVLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUNyQjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNLOzhDQUFNOzs7Ozs7Z0NBQXVCOzhDQUFDLDhEQUFDYzs7Ozs7OENBQ2hDLDhEQUFDaEMseURBQU1BO29DQUNMa0MsS0FBSztvQ0FDTEMsS0FBSztvQ0FDTDlCLE9BQU9BO29DQUNQK0IsZUFBZTdCO29DQUNmOEIsVUFBVTNCO29DQUNWNEIsa0JBQWtCM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJeEIsOERBQUNDO29CQUFJQyxXQUFVOzhCQUF1Qjs7Ozs7Ozs7Ozs7OztBQUk5QztHQWpITVo7S0FBQUE7QUFtSE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL2hvbWUtdjEvUmV0dXJuQ2FsY3VsYXRvci5qcz8wOTI3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1yYW5nZXNsaWRlclwiO1xyXG5jb25zdCBSZXR1cm5DYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyZXR1cm5UeXBlVmFsdWUsIHNldFJldHVyblR5cGVWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgcmV0dXJuVHlwZSA9IFtcIk9uZSBUaW1lXCIsIFwiTW9udGhseVwiLCBcIlllYXJseVwiXTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDUwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3RhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNoYW5nZSBldmVudCBzdGFydGVkXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJDaGFuZ2UgZXZlbnQgY29tcGxldGVkXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGxlZnRfcGFydCBwLTRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGdhcC00IGludmVzdF9zZWxlY3RvclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImludmVzdG9yLXR5cGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+SW52ZXN0bWVudDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImludmVzdG9yLXR5cGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHA+Q28tb3duZXJzaGlwPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWw+U2VsZWN0IFByb3BlcnR5PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8b3B0aW9uPlZpbGxhIEJhbGltYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+VmlsbGEgQmFsaW1hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5WaWxsYSBCYWxpbWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uPlZpbGxhIEJhbGltYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+VmlsbGEgQmFsaW1hPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBtdC0zXCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cmV0dXJuVHlwZS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTEgbWItMFwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJldHVyblR5cGVWYWx1ZShpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiByZXR1cm5UeXBlVmFsdWUgPT09IGluZGV4ID8gXCIjRUI2NzUzXCIgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZXR1cm5UeXBlVmFsdWUgPT09IGluZGV4ID8gXCJ3aGl0ZVwiIDogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2RhdGF9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkluaXRpYWwgUHVyY2hhc2UgQW1vdW50PC9sYWJlbD4gPGJyIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTXVsdGlwbGUgb2YgQkRUIDEwLjAwMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGVyaW9kICg1IHllYXIpPC9sYWJlbD4gPGJyIC8+XHJcbiAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgbWF4PXsxMDB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlU3RhcnQ9e2hhbmRsZUNoYW5nZVN0YXJ0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17aGFuZGxlQ2hhbmdlQ29tcGxldGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02ICByaWdodF9wYXJ0XCI+Q2FsY3VsYXRvciByaWdodDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXR1cm5DYWxjdWxhdG9yO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTbGlkZXIiLCJSZXR1cm5DYWxjdWxhdG9yIiwicmV0dXJuVHlwZVZhbHVlIiwic2V0UmV0dXJuVHlwZVZhbHVlIiwicmV0dXJuVHlwZSIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2VTdGFydCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2VDb21wbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwIiwibGFiZWwiLCJzZWxlY3QiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwib3B0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiZGF0YSIsImluZGV4Iiwib25DbGljayIsImNvbG9yIiwiY3Vyc29yIiwiYnIiLCJwbGFjZWhvbGRlciIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlU3RhcnQiLCJvbkNoYW5nZSIsIm9uQ2hhbmdlQ29tcGxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/home-v1/ReturnCalculator.js\n"));

/***/ })

});