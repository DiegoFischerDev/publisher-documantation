"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_markdoc_search_mjs",{

/***/ "(app-pages-browser)/./src/markdoc/search.mjs":
/*!********************************!*\
  !*** ./src/markdoc/search.mjs ***!
  \********************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   search: function() { return /* binding */ search; }\n/* harmony export */ });\n/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flexsearch */ \"(app-pages-browser)/./node_modules/flexsearch/dist/flexsearch.bundle.js\");\n\nlet sectionIndex = new flexsearch__WEBPACK_IMPORTED_MODULE_0__.Document({\n    tokenize: \"full\",\n    document: {\n        id: \"url\",\n        index: \"content\",\n        store: [\n            \"title\",\n            \"pageTitle\"\n        ]\n    },\n    context: {\n        resolution: 9,\n        depth: 2,\n        bidirectional: true\n    }\n});\nlet data = [\n    {\n        \"url\": \"/\",\n        \"sections\": [\n            [\n                \"Getting started\",\n                null,\n                [\n                    \"Learn how to get Publisher Analytics set up in your project in under thirty minutes or it's free.\"\n                ]\n            ],\n            [\n                \"Core Features Installation\",\n                \"core-features-installation\",\n                [\n                    \"You can customize your installation by selecting only the necessary components based on the features you wish to utilize. Refer to the guide below for detailed instructions on installing the primary features.\",\n                    \"This is what a disclaimer message looks like. You might want to include inline  in it. Or maybe you’ll want to include a link in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/ab-testing-installation/introduction\",\n        \"sections\": [\n            [\n                \"Introduction\",\n                null,\n                [\n                    \"By installing the article-tags, you can effortlessly identify the articles on your webpage and manage their elements, thereby enabling seamless execution of automated A/B testing.\",\n                    \"This guide provides an overview of distinct types of installation for the Publisher Analytics plugin. The installation process varies depending on the type of website you are working with. Each type of installation has its own unique requirements and steps, which are covered in more detail in their respective sections of this documentation.\",\n                    \"In the following sections, we will provide a detailed step-by-step guide for each type of installation. Please refer to the section that corresponds to your website type for specific installation instructions.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/ab-testing-installation/standard-websites\",\n        \"sections\": [\n            [\n                \"Standard Websites\",\n                null,\n                [\n                    \"For basic HTML sites, the installation involves adding a script to your website's HTML code. This script initializes the Publisher Analytics plugin and sets up the AB testing component.\"\n                ]\n            ],\n            [\n                \"Pre-requisites\",\n                \"pre-requisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your newspaper's home page and each article:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the AB testing component.\",\n                    \"Mapping Article Elements\",\n                    \"After installing the plugin, you need to map the elements of each article with NPAW tags. Here is a simplified example:\",\n                    \"In this example, the  tag is added to the section that contains the article. The , , , and  tags are added to the corresponding elements in the article.\"\n                ]\n            ],\n            [\n                \"Troubleshooting\",\n                \"troubleshooting\",\n                [\n                    \"If you encounter any issues during the installation or configuration process, please check the JavaScript console for any error messages. These messages can provide valuable information about what might be causing the issue.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/ab-testing-installation/wordpress-websites\",\n        \"sections\": [\n            [\n                \"Wordpress Websites\",\n                null,\n                [\n                    \"For WordPress websites, the installation process is slightly different. You will need to install the Publisher Analytics plugin through the WordPress admin dashboard. Once installed, you can configure the plugin settings from the dashboard.\"\n                ]\n            ],\n            [\n                \"Pre-requisites\",\n                \"pre-requisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your newspaper's home page and each article:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the AB testing component.\",\n                    \"Mapping Article Elements\",\n                    \"After installing the plugin, you need to map the elements of each article with NPAW tags. Here is a simplified example:\",\n                    \"In this example, the  tag is added to the section that contains the article. The , , , and  tags are added to the corresponding elements in the article.\"\n                ]\n            ],\n            [\n                \"Troubleshooting\",\n                \"troubleshooting\",\n                [\n                    \"If you encounter any issues during the installation or configuration process, please check the JavaScript console for any error messages. These messages can provide valuable information about what might be causing the issue.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/basic-installation/introduction\",\n        \"sections\": [\n            [\n                \"Introduction\",\n                null,\n                [\n                    \"The essential setup of the Publisher Analytics plugin allows for monitoring user behavior, encompassing:\",\n                    \"This guide provides an overview of distinct types of installation for the Publisher Analytics plugin. The installation process varies depending on the type of website you are working with. Each type of installation has its own unique requirements and steps, which are covered in more detail in their respective sections of this documentation.\",\n                    \"In the following sections, we will provide a detailed step-by-step guide for each type of installation. Please refer to the section that corresponds to your website type for specific installation instructions.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/basic-installation/standard-websites\",\n        \"sections\": [\n            [\n                \"Standard Websites\",\n                null,\n                [\n                    \"For basic HTML sites, the installation involves adding a script to your website's HTML code. This script initializes the Publisher Analytics plugin and sets up the AB testing component.\"\n                ]\n            ],\n            [\n                \"Pre-requisites\",\n                \"pre-requisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your newspaper's home page and each article:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the AB testing component.\",\n                    \"Mapping Article Elements\",\n                    \"After installing the plugin, you need to map the elements of each article with NPAW tags. Here is a simplified example:\",\n                    \"In this example, the  tag is added to the section that contains the article. The , , , and  tags are added to the corresponding elements in the article.\"\n                ]\n            ],\n            [\n                \"Troubleshooting\",\n                \"troubleshooting\",\n                [\n                    \"If you encounter any issues during the installation or configuration process, please check the JavaScript console for any error messages. These messages can provide valuable information about what might be causing the issue.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/basic-installation/wordpress-websites\",\n        \"sections\": [\n            [\n                \"Wordpress Websites\",\n                null,\n                [\n                    \"For WordPress websites, the installation process is slightly different. You will need to install the Publisher Analytics plugin through the WordPress admin dashboard. Once installed, you can configure the plugin settings from the dashboard.\"\n                ]\n            ],\n            [\n                \"Pre-requisites\",\n                \"pre-requisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your newspaper's home page and each article:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the AB testing component.\",\n                    \"Mapping Article Elements\",\n                    \"After installing the plugin, you need to map the elements of each article with NPAW tags. Here is a simplified example:\",\n                    \"In this example, the  tag is added to the section that contains the article. The , , , and  tags are added to the corresponding elements in the article.\"\n                ]\n            ],\n            [\n                \"Troubleshooting\",\n                \"troubleshooting\",\n                [\n                    \"If you encounter any issues during the installation or configuration process, please check the JavaScript console for any error messages. These messages can provide valuable information about what might be causing the issue.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    }\n];\nfor (let { url, sections } of data){\n    for (let [title, hash, content] of sections){\n        sectionIndex.add({\n            url: url + (hash ? \"#\" + hash : \"\"),\n            title,\n            content: [\n                title,\n                ...content\n            ].join(\"\\n\"),\n            pageTitle: hash ? sections[0][0] : undefined\n        });\n    }\n}\nfunction search(query) {\n    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    let result = sectionIndex.search(query, {\n        ...options,\n        enrich: true\n    });\n    if (result.length === 0) {\n        return [];\n    }\n    return result[0].result.map((item)=>({\n            url: item.id,\n            title: item.doc.title,\n            pageTitle: item.doc.pageTitle\n        }));\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9tYXJrZG9jL3NlYXJjaC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDaUQ7QUFFbkMsSUFBSUMsZUFBZSxJQUFJRCxnREFBbUIsQ0FBQztJQUN6Q0csVUFBVTtJQUNWQyxVQUFVO1FBQ1JDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1lBQUM7WUFBUztTQUFZO0lBQy9CO0lBQ0FDLFNBQVM7UUFDUEMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BDLGVBQWU7SUFDakI7QUFDRjtBQUVBLElBQUlDLE9BQU87SUFBQztRQUFDLE9BQU07UUFBSSxZQUFXO1lBQUM7Z0JBQUM7Z0JBQWtCO2dCQUFLO29CQUFDO2lCQUFvRzthQUFDO1lBQUM7Z0JBQUM7Z0JBQTZCO2dCQUE2QjtvQkFBQztvQkFBbU47aUJBQXFQO2FBQUM7U0FBQztJQUFBO0lBQUU7UUFBQyxPQUFNO1FBQTZDLFlBQVc7WUFBQztnQkFBQztnQkFBZTtnQkFBSztvQkFBQztvQkFBc0w7b0JBQXlWO2lCQUFvTjthQUFDO1NBQUM7SUFBQTtJQUFFO1FBQUMsT0FBTTtRQUFrRCxZQUFXO1lBQUM7Z0JBQUM7Z0JBQW9CO2dCQUFLO29CQUFDO2lCQUE0TDthQUFDO1lBQUM7Z0JBQUM7Z0JBQWlCO2dCQUFpQjtvQkFBQztvQkFBd0o7b0JBQWU7b0JBQWtJO29CQUF5SDtvQkFBMkI7b0JBQTBIO2lCQUEySjthQUFDO1lBQUM7Z0JBQUM7Z0JBQWtCO2dCQUFrQjtvQkFBQztvQkFBbU87b0JBQVU7aUJBQThJO2FBQUM7U0FBQztJQUFBO0lBQUU7UUFBQyxPQUFNO1FBQW1ELFlBQVc7WUFBQztnQkFBQztnQkFBcUI7Z0JBQUs7b0JBQUM7aUJBQW1QO2FBQUM7WUFBQztnQkFBQztnQkFBaUI7Z0JBQWlCO29CQUFDO29CQUF3SjtvQkFBZTtvQkFBa0k7b0JBQXlIO29CQUEyQjtvQkFBMEg7aUJBQTJKO2FBQUM7WUFBQztnQkFBQztnQkFBa0I7Z0JBQWtCO29CQUFDO29CQUFtTztvQkFBVTtpQkFBOEk7YUFBQztTQUFDO0lBQUE7SUFBRTtRQUFDLE9BQU07UUFBd0MsWUFBVztZQUFDO2dCQUFDO2dCQUFlO2dCQUFLO29CQUFDO29CQUEyRztvQkFBeVY7aUJBQW9OO2FBQUM7U0FBQztJQUFBO0lBQUU7UUFBQyxPQUFNO1FBQTZDLFlBQVc7WUFBQztnQkFBQztnQkFBb0I7Z0JBQUs7b0JBQUM7aUJBQTRMO2FBQUM7WUFBQztnQkFBQztnQkFBaUI7Z0JBQWlCO29CQUFDO29CQUF3SjtvQkFBZTtvQkFBa0k7b0JBQXlIO29CQUEyQjtvQkFBMEg7aUJBQTJKO2FBQUM7WUFBQztnQkFBQztnQkFBa0I7Z0JBQWtCO29CQUFDO29CQUFtTztvQkFBVTtpQkFBOEk7YUFBQztTQUFDO0lBQUE7SUFBRTtRQUFDLE9BQU07UUFBOEMsWUFBVztZQUFDO2dCQUFDO2dCQUFxQjtnQkFBSztvQkFBQztpQkFBbVA7YUFBQztZQUFDO2dCQUFDO2dCQUFpQjtnQkFBaUI7b0JBQUM7b0JBQXdKO29CQUFlO29CQUFrSTtvQkFBeUg7b0JBQTJCO29CQUEwSDtpQkFBMko7YUFBQztZQUFDO2dCQUFDO2dCQUFrQjtnQkFBa0I7b0JBQUM7b0JBQW1PO29CQUFVO2lCQUE4STthQUFDO1NBQUM7SUFBQTtDQUFFO0FBRXhpUSxLQUFLLElBQUksRUFBRUMsR0FBRyxFQUFFQyxRQUFRLEVBQUUsSUFBSUYsS0FBTTtJQUNsQyxLQUFLLElBQUksQ0FBQ0csT0FBT0MsTUFBTUMsUUFBUSxJQUFJSCxTQUFVO1FBQzNDYixhQUFhaUIsR0FBRyxDQUFDO1lBQ2ZMLEtBQUtBLE1BQU9HLENBQUFBLE9BQVEsTUFBTUEsT0FBUSxFQUFDO1lBQ25DRDtZQUNBRSxTQUFTO2dCQUFDRjttQkFBVUU7YUFBUSxDQUFDRSxJQUFJLENBQUM7WUFDbENDLFdBQVdKLE9BQU9GLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHTztRQUNyQztJQUNGO0FBQ0Y7QUFFTyxTQUFTQyxPQUFPQyxLQUFLO1FBQUVDLFVBQUFBLGlFQUFVLENBQUM7SUFDdkMsSUFBSUMsU0FBU3hCLGFBQWFxQixNQUFNLENBQUNDLE9BQU87UUFDdEMsR0FBR0MsT0FBTztRQUNWRSxRQUFRO0lBQ1Y7SUFDQSxJQUFJRCxPQUFPRSxNQUFNLEtBQUssR0FBRztRQUN2QixPQUFPLEVBQUU7SUFDWDtJQUNBLE9BQU9GLE1BQU0sQ0FBQyxFQUFFLENBQUNBLE1BQU0sQ0FBQ0csR0FBRyxDQUFDLENBQUNDLE9BQVU7WUFDckNoQixLQUFLZ0IsS0FBS3hCLEVBQUU7WUFDWlUsT0FBT2MsS0FBS0MsR0FBRyxDQUFDZixLQUFLO1lBQ3JCSyxXQUFXUyxLQUFLQyxHQUFHLENBQUNWLFNBQVM7UUFDL0I7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWFya2RvYy9zZWFyY2gubWpzP2ViOTciXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgICAgIGltcG9ydCBGbGV4U2VhcmNoIGZyb20gJ2ZsZXhzZWFyY2gnXG5cbiAgICAgICAgICAgICAgbGV0IHNlY3Rpb25JbmRleCA9IG5ldyBGbGV4U2VhcmNoLkRvY3VtZW50KHtcbiAgICAgICAgICAgICAgICB0b2tlbml6ZTogJ2Z1bGwnLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50OiB7XG4gICAgICAgICAgICAgICAgICBpZDogJ3VybCcsXG4gICAgICAgICAgICAgICAgICBpbmRleDogJ2NvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgc3RvcmU6IFsndGl0bGUnLCAncGFnZVRpdGxlJ10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICByZXNvbHV0aW9uOiA5LFxuICAgICAgICAgICAgICAgICAgZGVwdGg6IDIsXG4gICAgICAgICAgICAgICAgICBiaWRpcmVjdGlvbmFsOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIGxldCBkYXRhID0gW3tcInVybFwiOlwiL1wiLFwic2VjdGlvbnNcIjpbW1wiR2V0dGluZyBzdGFydGVkXCIsbnVsbCxbXCJMZWFybiBob3cgdG8gZ2V0IFB1Ymxpc2hlciBBbmFseXRpY3Mgc2V0IHVwIGluIHlvdXIgcHJvamVjdCBpbiB1bmRlciB0aGlydHkgbWludXRlcyBvciBpdCdzIGZyZWUuXCJdXSxbXCJDb3JlIEZlYXR1cmVzIEluc3RhbGxhdGlvblwiLFwiY29yZS1mZWF0dXJlcy1pbnN0YWxsYXRpb25cIixbXCJZb3UgY2FuIGN1c3RvbWl6ZSB5b3VyIGluc3RhbGxhdGlvbiBieSBzZWxlY3Rpbmcgb25seSB0aGUgbmVjZXNzYXJ5IGNvbXBvbmVudHMgYmFzZWQgb24gdGhlIGZlYXR1cmVzIHlvdSB3aXNoIHRvIHV0aWxpemUuIFJlZmVyIHRvIHRoZSBndWlkZSBiZWxvdyBmb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zIG9uIGluc3RhbGxpbmcgdGhlIHByaW1hcnkgZmVhdHVyZXMuXCIsXCJUaGlzIGlzIHdoYXQgYSBkaXNjbGFpbWVyIG1lc3NhZ2UgbG9va3MgbGlrZS4gWW91IG1pZ2h0IHdhbnQgdG8gaW5jbHVkZSBpbmxpbmUgIGluIGl0LiBPciBtYXliZSB5b3XigJlsbCB3YW50IHRvIGluY2x1ZGUgYSBsaW5rIGluIGl0LiBJIGRvbuKAmXQgdGhpbmsgd2Ugc2hvdWxkIGdldCB0b28gY2FycmllZCBhd2F5IHdpdGggb3RoZXIgc2NlbmFyaW9zIGxpa2UgbGlzdHMgb3IgdGFibGVzIOKAlCB0aGF0IHdvdWxkIGJlIHNpbGx5LlwiXV1dfSx7XCJ1cmxcIjpcIi9kb2NzL2FiLXRlc3RpbmctaW5zdGFsbGF0aW9uL2ludHJvZHVjdGlvblwiLFwic2VjdGlvbnNcIjpbW1wiSW50cm9kdWN0aW9uXCIsbnVsbCxbXCJCeSBpbnN0YWxsaW5nIHRoZSBhcnRpY2xlLXRhZ3MsIHlvdSBjYW4gZWZmb3J0bGVzc2x5IGlkZW50aWZ5IHRoZSBhcnRpY2xlcyBvbiB5b3VyIHdlYnBhZ2UgYW5kIG1hbmFnZSB0aGVpciBlbGVtZW50cywgdGhlcmVieSBlbmFibGluZyBzZWFtbGVzcyBleGVjdXRpb24gb2YgYXV0b21hdGVkIEEvQiB0ZXN0aW5nLlwiLFwiVGhpcyBndWlkZSBwcm92aWRlcyBhbiBvdmVydmlldyBvZiBkaXN0aW5jdCB0eXBlcyBvZiBpbnN0YWxsYXRpb24gZm9yIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbi4gVGhlIGluc3RhbGxhdGlvbiBwcm9jZXNzIHZhcmllcyBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2Ygd2Vic2l0ZSB5b3UgYXJlIHdvcmtpbmcgd2l0aC4gRWFjaCB0eXBlIG9mIGluc3RhbGxhdGlvbiBoYXMgaXRzIG93biB1bmlxdWUgcmVxdWlyZW1lbnRzIGFuZCBzdGVwcywgd2hpY2ggYXJlIGNvdmVyZWQgaW4gbW9yZSBkZXRhaWwgaW4gdGhlaXIgcmVzcGVjdGl2ZSBzZWN0aW9ucyBvZiB0aGlzIGRvY3VtZW50YXRpb24uXCIsXCJJbiB0aGUgZm9sbG93aW5nIHNlY3Rpb25zLCB3ZSB3aWxsIHByb3ZpZGUgYSBkZXRhaWxlZCBzdGVwLWJ5LXN0ZXAgZ3VpZGUgZm9yIGVhY2ggdHlwZSBvZiBpbnN0YWxsYXRpb24uIFBsZWFzZSByZWZlciB0byB0aGUgc2VjdGlvbiB0aGF0IGNvcnJlc3BvbmRzIHRvIHlvdXIgd2Vic2l0ZSB0eXBlIGZvciBzcGVjaWZpYyBpbnN0YWxsYXRpb24gaW5zdHJ1Y3Rpb25zLlwiXV1dfSx7XCJ1cmxcIjpcIi9kb2NzL2FiLXRlc3RpbmctaW5zdGFsbGF0aW9uL3N0YW5kYXJkLXdlYnNpdGVzXCIsXCJzZWN0aW9uc1wiOltbXCJTdGFuZGFyZCBXZWJzaXRlc1wiLG51bGwsW1wiRm9yIGJhc2ljIEhUTUwgc2l0ZXMsIHRoZSBpbnN0YWxsYXRpb24gaW52b2x2ZXMgYWRkaW5nIGEgc2NyaXB0IHRvIHlvdXIgd2Vic2l0ZSdzIEhUTUwgY29kZS4gVGhpcyBzY3JpcHQgaW5pdGlhbGl6ZXMgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIGFuZCBzZXRzIHVwIHRoZSBBQiB0ZXN0aW5nIGNvbXBvbmVudC5cIl1dLFtcIlByZS1yZXF1aXNpdGVzXCIsXCJwcmUtcmVxdWlzaXRlc1wiLFtcIkVuc3VyZSB0aGF0IHlvdSBoYXZlIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gaW5zdGFsbCBwbHVnaW5zIG9uIHlvdXIgd2Vic2l0ZS4gWW91IHNob3VsZCBhbHNvIGhhdmUgYSBiYXNpYyB1bmRlcnN0YW5kaW5nIG9mIEhUTUwgYW5kIEphdmFTY3JpcHQuXCIsXCJJbnN0YWxsYXRpb25cIixcIlRvIGluc3RhbGwgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luLCB5b3UgbmVlZCB0byBhZGQgdGhlIGZvbGxvd2luZyBzY3JpcHQgdG8geW91ciBuZXdzcGFwZXIncyBob21lIHBhZ2UgYW5kIGVhY2ggYXJ0aWNsZTpcIixcIlRoaXMgc2NyaXB0IGluaXRpYWxpemVzIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbiB3aXRoIHlvdXIgYWNjb3VudCBkZXRhaWxzIGFuZCBzZXRzIHVwIHRoZSBBQiB0ZXN0aW5nIGNvbXBvbmVudC5cIixcIk1hcHBpbmcgQXJ0aWNsZSBFbGVtZW50c1wiLFwiQWZ0ZXIgaW5zdGFsbGluZyB0aGUgcGx1Z2luLCB5b3UgbmVlZCB0byBtYXAgdGhlIGVsZW1lbnRzIG9mIGVhY2ggYXJ0aWNsZSB3aXRoIE5QQVcgdGFncy4gSGVyZSBpcyBhIHNpbXBsaWZpZWQgZXhhbXBsZTpcIixcIkluIHRoaXMgZXhhbXBsZSwgdGhlICB0YWcgaXMgYWRkZWQgdG8gdGhlIHNlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgYXJ0aWNsZS4gVGhlICwgLCAsIGFuZCAgdGFncyBhcmUgYWRkZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudHMgaW4gdGhlIGFydGljbGUuXCJdXSxbXCJUcm91Ymxlc2hvb3RpbmdcIixcInRyb3VibGVzaG9vdGluZ1wiLFtcIklmIHlvdSBlbmNvdW50ZXIgYW55IGlzc3VlcyBkdXJpbmcgdGhlIGluc3RhbGxhdGlvbiBvciBjb25maWd1cmF0aW9uIHByb2Nlc3MsIHBsZWFzZSBjaGVjayB0aGUgSmF2YVNjcmlwdCBjb25zb2xlIGZvciBhbnkgZXJyb3IgbWVzc2FnZXMuIFRoZXNlIG1lc3NhZ2VzIGNhbiBwcm92aWRlIHZhbHVhYmxlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgbWlnaHQgYmUgY2F1c2luZyB0aGUgaXNzdWUuXCIsXCJTdXBwb3J0XCIsXCJJZiB5b3UgbmVlZCBmdXJ0aGVyIGFzc2lzdGFuY2UsIHBsZWFzZSBjb250YWN0IG91ciBzdXBwb3J0IHRlYW0uIFdlJ3JlIGhlcmUgdG8gaGVscCB5b3UgZ2V0IHRoZSBtb3N0IG91dCBvZiB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4uXCJdXV19LHtcInVybFwiOlwiL2RvY3MvYWItdGVzdGluZy1pbnN0YWxsYXRpb24vd29yZHByZXNzLXdlYnNpdGVzXCIsXCJzZWN0aW9uc1wiOltbXCJXb3JkcHJlc3MgV2Vic2l0ZXNcIixudWxsLFtcIkZvciBXb3JkUHJlc3Mgd2Vic2l0ZXMsIHRoZSBpbnN0YWxsYXRpb24gcHJvY2VzcyBpcyBzbGlnaHRseSBkaWZmZXJlbnQuIFlvdSB3aWxsIG5lZWQgdG8gaW5zdGFsbCB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4gdGhyb3VnaCB0aGUgV29yZFByZXNzIGFkbWluIGRhc2hib2FyZC4gT25jZSBpbnN0YWxsZWQsIHlvdSBjYW4gY29uZmlndXJlIHRoZSBwbHVnaW4gc2V0dGluZ3MgZnJvbSB0aGUgZGFzaGJvYXJkLlwiXV0sW1wiUHJlLXJlcXVpc2l0ZXNcIixcInByZS1yZXF1aXNpdGVzXCIsW1wiRW5zdXJlIHRoYXQgeW91IGhhdmUgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyB0byBpbnN0YWxsIHBsdWdpbnMgb24geW91ciB3ZWJzaXRlLiBZb3Ugc2hvdWxkIGFsc28gaGF2ZSBhIGJhc2ljIHVuZGVyc3RhbmRpbmcgb2YgSFRNTCBhbmQgSmF2YVNjcmlwdC5cIixcIkluc3RhbGxhdGlvblwiLFwiVG8gaW5zdGFsbCB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4sIHlvdSBuZWVkIHRvIGFkZCB0aGUgZm9sbG93aW5nIHNjcmlwdCB0byB5b3VyIG5ld3NwYXBlcidzIGhvbWUgcGFnZSBhbmQgZWFjaCBhcnRpY2xlOlwiLFwiVGhpcyBzY3JpcHQgaW5pdGlhbGl6ZXMgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIHdpdGggeW91ciBhY2NvdW50IGRldGFpbHMgYW5kIHNldHMgdXAgdGhlIEFCIHRlc3RpbmcgY29tcG9uZW50LlwiLFwiTWFwcGluZyBBcnRpY2xlIEVsZW1lbnRzXCIsXCJBZnRlciBpbnN0YWxsaW5nIHRoZSBwbHVnaW4sIHlvdSBuZWVkIHRvIG1hcCB0aGUgZWxlbWVudHMgb2YgZWFjaCBhcnRpY2xlIHdpdGggTlBBVyB0YWdzLiBIZXJlIGlzIGEgc2ltcGxpZmllZCBleGFtcGxlOlwiLFwiSW4gdGhpcyBleGFtcGxlLCB0aGUgIHRhZyBpcyBhZGRlZCB0byB0aGUgc2VjdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBhcnRpY2xlLiBUaGUgLCAsICwgYW5kICB0YWdzIGFyZSBhZGRlZCB0byB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50cyBpbiB0aGUgYXJ0aWNsZS5cIl1dLFtcIlRyb3VibGVzaG9vdGluZ1wiLFwidHJvdWJsZXNob290aW5nXCIsW1wiSWYgeW91IGVuY291bnRlciBhbnkgaXNzdWVzIGR1cmluZyB0aGUgaW5zdGFsbGF0aW9uIG9yIGNvbmZpZ3VyYXRpb24gcHJvY2VzcywgcGxlYXNlIGNoZWNrIHRoZSBKYXZhU2NyaXB0IGNvbnNvbGUgZm9yIGFueSBlcnJvciBtZXNzYWdlcy4gVGhlc2UgbWVzc2FnZXMgY2FuIHByb3ZpZGUgdmFsdWFibGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBtaWdodCBiZSBjYXVzaW5nIHRoZSBpc3N1ZS5cIixcIlN1cHBvcnRcIixcIklmIHlvdSBuZWVkIGZ1cnRoZXIgYXNzaXN0YW5jZSwgcGxlYXNlIGNvbnRhY3Qgb3VyIHN1cHBvcnQgdGVhbS4gV2UncmUgaGVyZSB0byBoZWxwIHlvdSBnZXQgdGhlIG1vc3Qgb3V0IG9mIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbi5cIl1dXX0se1widXJsXCI6XCIvZG9jcy9iYXNpYy1pbnN0YWxsYXRpb24vaW50cm9kdWN0aW9uXCIsXCJzZWN0aW9uc1wiOltbXCJJbnRyb2R1Y3Rpb25cIixudWxsLFtcIlRoZSBlc3NlbnRpYWwgc2V0dXAgb2YgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIGFsbG93cyBmb3IgbW9uaXRvcmluZyB1c2VyIGJlaGF2aW9yLCBlbmNvbXBhc3Npbmc6XCIsXCJUaGlzIGd1aWRlIHByb3ZpZGVzIGFuIG92ZXJ2aWV3IG9mIGRpc3RpbmN0IHR5cGVzIG9mIGluc3RhbGxhdGlvbiBmb3IgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luLiBUaGUgaW5zdGFsbGF0aW9uIHByb2Nlc3MgdmFyaWVzIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB3ZWJzaXRlIHlvdSBhcmUgd29ya2luZyB3aXRoLiBFYWNoIHR5cGUgb2YgaW5zdGFsbGF0aW9uIGhhcyBpdHMgb3duIHVuaXF1ZSByZXF1aXJlbWVudHMgYW5kIHN0ZXBzLCB3aGljaCBhcmUgY292ZXJlZCBpbiBtb3JlIGRldGFpbCBpbiB0aGVpciByZXNwZWN0aXZlIHNlY3Rpb25zIG9mIHRoaXMgZG9jdW1lbnRhdGlvbi5cIixcIkluIHRoZSBmb2xsb3dpbmcgc2VjdGlvbnMsIHdlIHdpbGwgcHJvdmlkZSBhIGRldGFpbGVkIHN0ZXAtYnktc3RlcCBndWlkZSBmb3IgZWFjaCB0eXBlIG9mIGluc3RhbGxhdGlvbi4gUGxlYXNlIHJlZmVyIHRvIHRoZSBzZWN0aW9uIHRoYXQgY29ycmVzcG9uZHMgdG8geW91ciB3ZWJzaXRlIHR5cGUgZm9yIHNwZWNpZmljIGluc3RhbGxhdGlvbiBpbnN0cnVjdGlvbnMuXCJdXV19LHtcInVybFwiOlwiL2RvY3MvYmFzaWMtaW5zdGFsbGF0aW9uL3N0YW5kYXJkLXdlYnNpdGVzXCIsXCJzZWN0aW9uc1wiOltbXCJTdGFuZGFyZCBXZWJzaXRlc1wiLG51bGwsW1wiRm9yIGJhc2ljIEhUTUwgc2l0ZXMsIHRoZSBpbnN0YWxsYXRpb24gaW52b2x2ZXMgYWRkaW5nIGEgc2NyaXB0IHRvIHlvdXIgd2Vic2l0ZSdzIEhUTUwgY29kZS4gVGhpcyBzY3JpcHQgaW5pdGlhbGl6ZXMgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIGFuZCBzZXRzIHVwIHRoZSBBQiB0ZXN0aW5nIGNvbXBvbmVudC5cIl1dLFtcIlByZS1yZXF1aXNpdGVzXCIsXCJwcmUtcmVxdWlzaXRlc1wiLFtcIkVuc3VyZSB0aGF0IHlvdSBoYXZlIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gaW5zdGFsbCBwbHVnaW5zIG9uIHlvdXIgd2Vic2l0ZS4gWW91IHNob3VsZCBhbHNvIGhhdmUgYSBiYXNpYyB1bmRlcnN0YW5kaW5nIG9mIEhUTUwgYW5kIEphdmFTY3JpcHQuXCIsXCJJbnN0YWxsYXRpb25cIixcIlRvIGluc3RhbGwgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luLCB5b3UgbmVlZCB0byBhZGQgdGhlIGZvbGxvd2luZyBzY3JpcHQgdG8geW91ciBuZXdzcGFwZXIncyBob21lIHBhZ2UgYW5kIGVhY2ggYXJ0aWNsZTpcIixcIlRoaXMgc2NyaXB0IGluaXRpYWxpemVzIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbiB3aXRoIHlvdXIgYWNjb3VudCBkZXRhaWxzIGFuZCBzZXRzIHVwIHRoZSBBQiB0ZXN0aW5nIGNvbXBvbmVudC5cIixcIk1hcHBpbmcgQXJ0aWNsZSBFbGVtZW50c1wiLFwiQWZ0ZXIgaW5zdGFsbGluZyB0aGUgcGx1Z2luLCB5b3UgbmVlZCB0byBtYXAgdGhlIGVsZW1lbnRzIG9mIGVhY2ggYXJ0aWNsZSB3aXRoIE5QQVcgdGFncy4gSGVyZSBpcyBhIHNpbXBsaWZpZWQgZXhhbXBsZTpcIixcIkluIHRoaXMgZXhhbXBsZSwgdGhlICB0YWcgaXMgYWRkZWQgdG8gdGhlIHNlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgYXJ0aWNsZS4gVGhlICwgLCAsIGFuZCAgdGFncyBhcmUgYWRkZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudHMgaW4gdGhlIGFydGljbGUuXCJdXSxbXCJUcm91Ymxlc2hvb3RpbmdcIixcInRyb3VibGVzaG9vdGluZ1wiLFtcIklmIHlvdSBlbmNvdW50ZXIgYW55IGlzc3VlcyBkdXJpbmcgdGhlIGluc3RhbGxhdGlvbiBvciBjb25maWd1cmF0aW9uIHByb2Nlc3MsIHBsZWFzZSBjaGVjayB0aGUgSmF2YVNjcmlwdCBjb25zb2xlIGZvciBhbnkgZXJyb3IgbWVzc2FnZXMuIFRoZXNlIG1lc3NhZ2VzIGNhbiBwcm92aWRlIHZhbHVhYmxlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgbWlnaHQgYmUgY2F1c2luZyB0aGUgaXNzdWUuXCIsXCJTdXBwb3J0XCIsXCJJZiB5b3UgbmVlZCBmdXJ0aGVyIGFzc2lzdGFuY2UsIHBsZWFzZSBjb250YWN0IG91ciBzdXBwb3J0IHRlYW0uIFdlJ3JlIGhlcmUgdG8gaGVscCB5b3UgZ2V0IHRoZSBtb3N0IG91dCBvZiB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4uXCJdXV19LHtcInVybFwiOlwiL2RvY3MvYmFzaWMtaW5zdGFsbGF0aW9uL3dvcmRwcmVzcy13ZWJzaXRlc1wiLFwic2VjdGlvbnNcIjpbW1wiV29yZHByZXNzIFdlYnNpdGVzXCIsbnVsbCxbXCJGb3IgV29yZFByZXNzIHdlYnNpdGVzLCB0aGUgaW5zdGFsbGF0aW9uIHByb2Nlc3MgaXMgc2xpZ2h0bHkgZGlmZmVyZW50LiBZb3Ugd2lsbCBuZWVkIHRvIGluc3RhbGwgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIHRocm91Z2ggdGhlIFdvcmRQcmVzcyBhZG1pbiBkYXNoYm9hcmQuIE9uY2UgaW5zdGFsbGVkLCB5b3UgY2FuIGNvbmZpZ3VyZSB0aGUgcGx1Z2luIHNldHRpbmdzIGZyb20gdGhlIGRhc2hib2FyZC5cIl1dLFtcIlByZS1yZXF1aXNpdGVzXCIsXCJwcmUtcmVxdWlzaXRlc1wiLFtcIkVuc3VyZSB0aGF0IHlvdSBoYXZlIHRoZSBuZWNlc3NhcnkgcGVybWlzc2lvbnMgdG8gaW5zdGFsbCBwbHVnaW5zIG9uIHlvdXIgd2Vic2l0ZS4gWW91IHNob3VsZCBhbHNvIGhhdmUgYSBiYXNpYyB1bmRlcnN0YW5kaW5nIG9mIEhUTUwgYW5kIEphdmFTY3JpcHQuXCIsXCJJbnN0YWxsYXRpb25cIixcIlRvIGluc3RhbGwgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luLCB5b3UgbmVlZCB0byBhZGQgdGhlIGZvbGxvd2luZyBzY3JpcHQgdG8geW91ciBuZXdzcGFwZXIncyBob21lIHBhZ2UgYW5kIGVhY2ggYXJ0aWNsZTpcIixcIlRoaXMgc2NyaXB0IGluaXRpYWxpemVzIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbiB3aXRoIHlvdXIgYWNjb3VudCBkZXRhaWxzIGFuZCBzZXRzIHVwIHRoZSBBQiB0ZXN0aW5nIGNvbXBvbmVudC5cIixcIk1hcHBpbmcgQXJ0aWNsZSBFbGVtZW50c1wiLFwiQWZ0ZXIgaW5zdGFsbGluZyB0aGUgcGx1Z2luLCB5b3UgbmVlZCB0byBtYXAgdGhlIGVsZW1lbnRzIG9mIGVhY2ggYXJ0aWNsZSB3aXRoIE5QQVcgdGFncy4gSGVyZSBpcyBhIHNpbXBsaWZpZWQgZXhhbXBsZTpcIixcIkluIHRoaXMgZXhhbXBsZSwgdGhlICB0YWcgaXMgYWRkZWQgdG8gdGhlIHNlY3Rpb24gdGhhdCBjb250YWlucyB0aGUgYXJ0aWNsZS4gVGhlICwgLCAsIGFuZCAgdGFncyBhcmUgYWRkZWQgdG8gdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudHMgaW4gdGhlIGFydGljbGUuXCJdXSxbXCJUcm91Ymxlc2hvb3RpbmdcIixcInRyb3VibGVzaG9vdGluZ1wiLFtcIklmIHlvdSBlbmNvdW50ZXIgYW55IGlzc3VlcyBkdXJpbmcgdGhlIGluc3RhbGxhdGlvbiBvciBjb25maWd1cmF0aW9uIHByb2Nlc3MsIHBsZWFzZSBjaGVjayB0aGUgSmF2YVNjcmlwdCBjb25zb2xlIGZvciBhbnkgZXJyb3IgbWVzc2FnZXMuIFRoZXNlIG1lc3NhZ2VzIGNhbiBwcm92aWRlIHZhbHVhYmxlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgbWlnaHQgYmUgY2F1c2luZyB0aGUgaXNzdWUuXCIsXCJTdXBwb3J0XCIsXCJJZiB5b3UgbmVlZCBmdXJ0aGVyIGFzc2lzdGFuY2UsIHBsZWFzZSBjb250YWN0IG91ciBzdXBwb3J0IHRlYW0uIFdlJ3JlIGhlcmUgdG8gaGVscCB5b3UgZ2V0IHRoZSBtb3N0IG91dCBvZiB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4uXCJdXV19XVxuXG4gICAgICAgICAgICAgIGZvciAobGV0IHsgdXJsLCBzZWN0aW9ucyB9IG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBbdGl0bGUsIGhhc2gsIGNvbnRlbnRdIG9mIHNlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICBzZWN0aW9uSW5kZXguYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwgKyAoaGFzaCA/ICgnIycgKyBoYXNoKSA6ICcnKSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFt0aXRsZSwgLi4uY29udGVudF0uam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogaGFzaCA/IHNlY3Rpb25zWzBdWzBdIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBleHBvcnQgZnVuY3Rpb24gc2VhcmNoKHF1ZXJ5LCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gc2VjdGlvbkluZGV4LnNlYXJjaChxdWVyeSwge1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIGVucmljaDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFswXS5yZXN1bHQubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZG9jLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgcGFnZVRpdGxlOiBpdGVtLmRvYy5wYWdlVGl0bGUsXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICJdLCJuYW1lcyI6WyJGbGV4U2VhcmNoIiwic2VjdGlvbkluZGV4IiwiRG9jdW1lbnQiLCJ0b2tlbml6ZSIsImRvY3VtZW50IiwiaWQiLCJpbmRleCIsInN0b3JlIiwiY29udGV4dCIsInJlc29sdXRpb24iLCJkZXB0aCIsImJpZGlyZWN0aW9uYWwiLCJkYXRhIiwidXJsIiwic2VjdGlvbnMiLCJ0aXRsZSIsImhhc2giLCJjb250ZW50IiwiYWRkIiwiam9pbiIsInBhZ2VUaXRsZSIsInVuZGVmaW5lZCIsInNlYXJjaCIsInF1ZXJ5Iiwib3B0aW9ucyIsInJlc3VsdCIsImVucmljaCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJkb2MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/markdoc/search.mjs\n"));

/***/ })

});