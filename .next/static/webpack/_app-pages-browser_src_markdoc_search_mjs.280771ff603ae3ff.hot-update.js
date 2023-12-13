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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   search: function() { return /* binding */ search; }\n/* harmony export */ });\n/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flexsearch */ \"(app-pages-browser)/./node_modules/flexsearch/dist/flexsearch.bundle.js\");\n\nlet sectionIndex = new flexsearch__WEBPACK_IMPORTED_MODULE_0__.Document({\n    tokenize: \"full\",\n    document: {\n        id: \"url\",\n        index: \"content\",\n        store: [\n            \"title\",\n            \"pageTitle\"\n        ]\n    },\n    context: {\n        resolution: 9,\n        depth: 2,\n        bidirectional: true\n    }\n});\nlet data = [\n    {\n        \"url\": \"/\",\n        \"sections\": [\n            [\n                \"Getting started\",\n                null,\n                [\n                    \"Learn how to get Publisher Analytics set up in your project in under thirty minutes or it's free.\"\n                ]\n            ],\n            [\n                \"Core Features Installation\",\n                \"core-features-installation\",\n                [\n                    \"You can customize your installation by selecting only the necessary components based on the features you wish to utilize. Refer to the guide below for detailed instructions on installing the primary features.\",\n                    \"This is what a disclaimer message looks like. You might want to include inline  in it. Or maybe you’ll want to include a link in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/ab-testing-installation/introduction\",\n        \"sections\": [\n            [\n                \"Introduction\",\n                null,\n                [\n                    \"By installing the article-tags, you can effortlessly identify the articles on your webpage and manage their elements, thereby enabling seamless execution of automated A/B testing. The main tags are:\",\n                    \"This guide provides an overview of distinct types of installation for the article-tags. The installation process varies depending on the type of website you are working with. Each type of installation has its own unique requirements and steps, which are covered in more detail in their respective sections of this documentation.\",\n                    \"In the following sections, we will provide a detailed step-by-step guide for each type of installation. Please refer to the section that corresponds to your website type for specific installation instructions.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/ab-testing-installation/standard-websites\",\n        \"sections\": [\n            [\n                \"Standard Websites\",\n                null,\n                [\n                    \"To enable the execution of A/B tests, it is necessary to identify the articles elements on the page by installing the article-tags.\"\n                ]\n            ],\n            [\n                \"Prerequisites\",\n                \"prerequisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Ensure that you have completed the Basic Installation of the Publisher Analytics Plugin.\",\n                    \"Installation\",\n                    \"Mandatory tags:npaw-article-urlnpaw-article-title`.\",\n                    \"The tags  and  are not mandatory, considering that not all articles have these elements.\",\n                    \"Here is an example showcasing an article with all its elements accurately identified using the appropriate tags:\",\n                    \"Incorporating these identification tags enables the manipulation of these elements, thereby facilitating automated A/B testing.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/ab-testing-installation/wordpress-websites\",\n        \"sections\": [\n            [\n                \"Wordpress Websites\",\n                null,\n                [\n                    \"For WordPress websites, the installation process is slightly different. You will need to install the Publisher Analytics plugin through the WordPress admin dashboard. Once installed, you can configure the plugin settings from the dashboard.\"\n                ]\n            ],\n            [\n                \"Pre-requisites\",\n                \"pre-requisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your newspaper's home page and each article:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the AB testing component.\",\n                    \"Mapping Article Elements\",\n                    \"After installing the plugin, you need to map the elements of each article with NPAW tags. Here is a simplified example:\",\n                    \"In this example, the  tag is added to the section that contains the article. The , , , and  tags are added to the corresponding elements in the article.\"\n                ]\n            ],\n            [\n                \"Troubleshooting\",\n                \"troubleshooting\",\n                [\n                    \"If you encounter any issues during the installation or configuration process, please check the JavaScript console for any error messages. These messages can provide valuable information about what might be causing the issue.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/basic-installation/introduction\",\n        \"sections\": [\n            [\n                \"Introduction\",\n                null,\n                [\n                    \"The essential setup of the Publisher Analytics plugin allows for monitoring user behavior, encompassing:\",\n                    \"This guide provides an overview of distinct types of installation for the Publisher Analytics plugin. The installation process varies depending on the type of website you are working with. Each type of installation has its own unique requirements and steps, which are covered in more detail in their respective sections of this documentation.\",\n                    \"In the following sections, we will provide a detailed step-by-step guide for each type of installation. Please refer to the section that corresponds to your website type for specific installation instructions.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/basic-installation/standard-websites\",\n        \"sections\": [\n            [\n                \"Standard Websites\",\n                null,\n                [\n                    \"For standard websites, the installation process involves adding a script to your website's HTML code. This script initializes the Publisher Analytics plugin and sets up the A/B testing component.\"\n                ]\n            ],\n            [\n                \"Prerequisites\",\n                \"prerequisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your website's home page and each article you want to monitor:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the A/B testing component.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/basic-installation/wordpress-websites\",\n        \"sections\": [\n            [\n                \"Wordpress Websites\",\n                null,\n                [\n                    \"For WordPress websites, the installation process is slightly different. You will need to install the Publisher Analytics plugin through the WordPress admin dashboard. Once installed, you can configure the plugin settings from the dashboard.\"\n                ]\n            ],\n            [\n                \"Pre-requisites\",\n                \"pre-requisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your newspaper's home page and each article:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the AB testing component.\",\n                    \"Mapping Article Elements\",\n                    \"After installing the plugin, you need to map the elements of each article with NPAW tags. Here is a simplified example:\",\n                    \"In this example, the  tag is added to the section that contains the article. The , , , and  tags are added to the corresponding elements in the article.\"\n                ]\n            ],\n            [\n                \"Troubleshooting\",\n                \"troubleshooting\",\n                [\n                    \"If you encounter any issues during the installation or configuration process, please check the JavaScript console for any error messages. These messages can provide valuable information about what might be causing the issue.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    }\n];\nfor (let { url, sections } of data){\n    for (let [title, hash, content] of sections){\n        sectionIndex.add({\n            url: url + (hash ? \"#\" + hash : \"\"),\n            title,\n            content: [\n                title,\n                ...content\n            ].join(\"\\n\"),\n            pageTitle: hash ? sections[0][0] : undefined\n        });\n    }\n}\nfunction search(query) {\n    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    let result = sectionIndex.search(query, {\n        ...options,\n        enrich: true\n    });\n    if (result.length === 0) {\n        return [];\n    }\n    return result[0].result.map((item)=>({\n            url: item.id,\n            title: item.doc.title,\n            pageTitle: item.doc.pageTitle\n        }));\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9tYXJrZG9jL3NlYXJjaC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDaUQ7QUFFbkMsSUFBSUMsZUFBZSxJQUFJRCxnREFBbUIsQ0FBQztJQUN6Q0csVUFBVTtJQUNWQyxVQUFVO1FBQ1JDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1lBQUM7WUFBUztTQUFZO0lBQy9CO0lBQ0FDLFNBQVM7UUFDUEMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BDLGVBQWU7SUFDakI7QUFDRjtBQUVBLElBQUlDLE9BQU87SUFBQztRQUFDLE9BQU07UUFBSSxZQUFXO1lBQUM7Z0JBQUM7Z0JBQWtCO2dCQUFLO29CQUFDO2lCQUFvRzthQUFDO1lBQUM7Z0JBQUM7Z0JBQTZCO2dCQUE2QjtvQkFBQztvQkFBbU47aUJBQXFQO2FBQUM7U0FBQztJQUFBO0lBQUU7UUFBQyxPQUFNO1FBQTZDLFlBQVc7WUFBQztnQkFBQztnQkFBZTtnQkFBSztvQkFBQztvQkFBeU07b0JBQTJVO2lCQUFvTjthQUFDO1NBQUM7SUFBQTtJQUFFO1FBQUMsT0FBTTtRQUFrRCxZQUFXO1lBQUM7Z0JBQUM7Z0JBQW9CO2dCQUFLO29CQUFDO2lCQUFzSTthQUFDO1lBQUM7Z0JBQUM7Z0JBQWdCO2dCQUFnQjtvQkFBQztvQkFBd0o7b0JBQTJGO29CQUFlO29CQUFzRDtvQkFBMkY7b0JBQW1IO29CQUFrSTtvQkFBVTtpQkFBOEk7YUFBQztTQUFDO0lBQUE7SUFBRTtRQUFDLE9BQU07UUFBbUQsWUFBVztZQUFDO2dCQUFDO2dCQUFxQjtnQkFBSztvQkFBQztpQkFBbVA7YUFBQztZQUFDO2dCQUFDO2dCQUFpQjtnQkFBaUI7b0JBQUM7b0JBQXdKO29CQUFlO29CQUFrSTtvQkFBeUg7b0JBQTJCO29CQUEwSDtpQkFBMko7YUFBQztZQUFDO2dCQUFDO2dCQUFrQjtnQkFBa0I7b0JBQUM7b0JBQW1PO29CQUFVO2lCQUE4STthQUFDO1NBQUM7SUFBQTtJQUFFO1FBQUMsT0FBTTtRQUF3QyxZQUFXO1lBQUM7Z0JBQUM7Z0JBQWU7Z0JBQUs7b0JBQUM7b0JBQTJHO29CQUF5VjtpQkFBb047YUFBQztTQUFDO0lBQUE7SUFBRTtRQUFDLE9BQU07UUFBNkMsWUFBVztZQUFDO2dCQUFDO2dCQUFvQjtnQkFBSztvQkFBQztpQkFBc007YUFBQztZQUFDO2dCQUFDO2dCQUFnQjtnQkFBZ0I7b0JBQUM7b0JBQXdKO29CQUFlO29CQUFvSjtvQkFBMEg7b0JBQVU7aUJBQThJO2FBQUM7U0FBQztJQUFBO0lBQUU7UUFBQyxPQUFNO1FBQThDLFlBQVc7WUFBQztnQkFBQztnQkFBcUI7Z0JBQUs7b0JBQUM7aUJBQW1QO2FBQUM7WUFBQztnQkFBQztnQkFBaUI7Z0JBQWlCO29CQUFDO29CQUF3SjtvQkFBZTtvQkFBa0k7b0JBQXlIO29CQUEyQjtvQkFBMEg7aUJBQTJKO2FBQUM7WUFBQztnQkFBQztnQkFBa0I7Z0JBQWtCO29CQUFDO29CQUFtTztvQkFBVTtpQkFBOEk7YUFBQztTQUFDO0lBQUE7Q0FBRTtBQUVob08sS0FBSyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsUUFBUSxFQUFFLElBQUlGLEtBQU07SUFDbEMsS0FBSyxJQUFJLENBQUNHLE9BQU9DLE1BQU1DLFFBQVEsSUFBSUgsU0FBVTtRQUMzQ2IsYUFBYWlCLEdBQUcsQ0FBQztZQUNmTCxLQUFLQSxNQUFPRyxDQUFBQSxPQUFRLE1BQU1BLE9BQVEsRUFBQztZQUNuQ0Q7WUFDQUUsU0FBUztnQkFBQ0Y7bUJBQVVFO2FBQVEsQ0FBQ0UsSUFBSSxDQUFDO1lBQ2xDQyxXQUFXSixPQUFPRixRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBR087UUFDckM7SUFDRjtBQUNGO0FBRU8sU0FBU0MsT0FBT0MsS0FBSztRQUFFQyxVQUFBQSxpRUFBVSxDQUFDO0lBQ3ZDLElBQUlDLFNBQVN4QixhQUFhcUIsTUFBTSxDQUFDQyxPQUFPO1FBQ3RDLEdBQUdDLE9BQU87UUFDVkUsUUFBUTtJQUNWO0lBQ0EsSUFBSUQsT0FBT0UsTUFBTSxLQUFLLEdBQUc7UUFDdkIsT0FBTyxFQUFFO0lBQ1g7SUFDQSxPQUFPRixNQUFNLENBQUMsRUFBRSxDQUFDQSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQ3JDaEIsS0FBS2dCLEtBQUt4QixFQUFFO1lBQ1pVLE9BQU9jLEtBQUtDLEdBQUcsQ0FBQ2YsS0FBSztZQUNyQkssV0FBV1MsS0FBS0MsR0FBRyxDQUFDVixTQUFTO1FBQy9CO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21hcmtkb2Mvc2VhcmNoLm1qcz9lYjk3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgICBpbXBvcnQgRmxleFNlYXJjaCBmcm9tICdmbGV4c2VhcmNoJ1xuXG4gICAgICAgICAgICAgIGxldCBzZWN0aW9uSW5kZXggPSBuZXcgRmxleFNlYXJjaC5Eb2N1bWVudCh7XG4gICAgICAgICAgICAgICAgdG9rZW5pemU6ICdmdWxsJyxcbiAgICAgICAgICAgICAgICBkb2N1bWVudDoge1xuICAgICAgICAgICAgICAgICAgaWQ6ICd1cmwnLFxuICAgICAgICAgICAgICAgICAgaW5kZXg6ICdjb250ZW50JyxcbiAgICAgICAgICAgICAgICAgIHN0b3JlOiBbJ3RpdGxlJywgJ3BhZ2VUaXRsZSddLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgcmVzb2x1dGlvbjogOSxcbiAgICAgICAgICAgICAgICAgIGRlcHRoOiAyLFxuICAgICAgICAgICAgICAgICAgYmlkaXJlY3Rpb25hbDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBsZXQgZGF0YSA9IFt7XCJ1cmxcIjpcIi9cIixcInNlY3Rpb25zXCI6W1tcIkdldHRpbmcgc3RhcnRlZFwiLG51bGwsW1wiTGVhcm4gaG93IHRvIGdldCBQdWJsaXNoZXIgQW5hbHl0aWNzIHNldCB1cCBpbiB5b3VyIHByb2plY3QgaW4gdW5kZXIgdGhpcnR5IG1pbnV0ZXMgb3IgaXQncyBmcmVlLlwiXV0sW1wiQ29yZSBGZWF0dXJlcyBJbnN0YWxsYXRpb25cIixcImNvcmUtZmVhdHVyZXMtaW5zdGFsbGF0aW9uXCIsW1wiWW91IGNhbiBjdXN0b21pemUgeW91ciBpbnN0YWxsYXRpb24gYnkgc2VsZWN0aW5nIG9ubHkgdGhlIG5lY2Vzc2FyeSBjb21wb25lbnRzIGJhc2VkIG9uIHRoZSBmZWF0dXJlcyB5b3Ugd2lzaCB0byB1dGlsaXplLiBSZWZlciB0byB0aGUgZ3VpZGUgYmVsb3cgZm9yIGRldGFpbGVkIGluc3RydWN0aW9ucyBvbiBpbnN0YWxsaW5nIHRoZSBwcmltYXJ5IGZlYXR1cmVzLlwiLFwiVGhpcyBpcyB3aGF0IGEgZGlzY2xhaW1lciBtZXNzYWdlIGxvb2tzIGxpa2UuIFlvdSBtaWdodCB3YW50IHRvIGluY2x1ZGUgaW5saW5lICBpbiBpdC4gT3IgbWF5YmUgeW914oCZbGwgd2FudCB0byBpbmNsdWRlIGEgbGluayBpbiBpdC4gSSBkb27igJl0IHRoaW5rIHdlIHNob3VsZCBnZXQgdG9vIGNhcnJpZWQgYXdheSB3aXRoIG90aGVyIHNjZW5hcmlvcyBsaWtlIGxpc3RzIG9yIHRhYmxlcyDigJQgdGhhdCB3b3VsZCBiZSBzaWxseS5cIl1dXX0se1widXJsXCI6XCIvZG9jcy9hYi10ZXN0aW5nLWluc3RhbGxhdGlvbi9pbnRyb2R1Y3Rpb25cIixcInNlY3Rpb25zXCI6W1tcIkludHJvZHVjdGlvblwiLG51bGwsW1wiQnkgaW5zdGFsbGluZyB0aGUgYXJ0aWNsZS10YWdzLCB5b3UgY2FuIGVmZm9ydGxlc3NseSBpZGVudGlmeSB0aGUgYXJ0aWNsZXMgb24geW91ciB3ZWJwYWdlIGFuZCBtYW5hZ2UgdGhlaXIgZWxlbWVudHMsIHRoZXJlYnkgZW5hYmxpbmcgc2VhbWxlc3MgZXhlY3V0aW9uIG9mIGF1dG9tYXRlZCBBL0IgdGVzdGluZy4gVGhlIG1haW4gdGFncyBhcmU6XCIsXCJUaGlzIGd1aWRlIHByb3ZpZGVzIGFuIG92ZXJ2aWV3IG9mIGRpc3RpbmN0IHR5cGVzIG9mIGluc3RhbGxhdGlvbiBmb3IgdGhlIGFydGljbGUtdGFncy4gVGhlIGluc3RhbGxhdGlvbiBwcm9jZXNzIHZhcmllcyBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2Ygd2Vic2l0ZSB5b3UgYXJlIHdvcmtpbmcgd2l0aC4gRWFjaCB0eXBlIG9mIGluc3RhbGxhdGlvbiBoYXMgaXRzIG93biB1bmlxdWUgcmVxdWlyZW1lbnRzIGFuZCBzdGVwcywgd2hpY2ggYXJlIGNvdmVyZWQgaW4gbW9yZSBkZXRhaWwgaW4gdGhlaXIgcmVzcGVjdGl2ZSBzZWN0aW9ucyBvZiB0aGlzIGRvY3VtZW50YXRpb24uXCIsXCJJbiB0aGUgZm9sbG93aW5nIHNlY3Rpb25zLCB3ZSB3aWxsIHByb3ZpZGUgYSBkZXRhaWxlZCBzdGVwLWJ5LXN0ZXAgZ3VpZGUgZm9yIGVhY2ggdHlwZSBvZiBpbnN0YWxsYXRpb24uIFBsZWFzZSByZWZlciB0byB0aGUgc2VjdGlvbiB0aGF0IGNvcnJlc3BvbmRzIHRvIHlvdXIgd2Vic2l0ZSB0eXBlIGZvciBzcGVjaWZpYyBpbnN0YWxsYXRpb24gaW5zdHJ1Y3Rpb25zLlwiXV1dfSx7XCJ1cmxcIjpcIi9kb2NzL2FiLXRlc3RpbmctaW5zdGFsbGF0aW9uL3N0YW5kYXJkLXdlYnNpdGVzXCIsXCJzZWN0aW9uc1wiOltbXCJTdGFuZGFyZCBXZWJzaXRlc1wiLG51bGwsW1wiVG8gZW5hYmxlIHRoZSBleGVjdXRpb24gb2YgQS9CIHRlc3RzLCBpdCBpcyBuZWNlc3NhcnkgdG8gaWRlbnRpZnkgdGhlIGFydGljbGVzIGVsZW1lbnRzIG9uIHRoZSBwYWdlIGJ5IGluc3RhbGxpbmcgdGhlIGFydGljbGUtdGFncy5cIl1dLFtcIlByZXJlcXVpc2l0ZXNcIixcInByZXJlcXVpc2l0ZXNcIixbXCJFbnN1cmUgdGhhdCB5b3UgaGF2ZSB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIGluc3RhbGwgcGx1Z2lucyBvbiB5b3VyIHdlYnNpdGUuIFlvdSBzaG91bGQgYWxzbyBoYXZlIGEgYmFzaWMgdW5kZXJzdGFuZGluZyBvZiBIVE1MIGFuZCBKYXZhU2NyaXB0LlwiLFwiRW5zdXJlIHRoYXQgeW91IGhhdmUgY29tcGxldGVkIHRoZSBCYXNpYyBJbnN0YWxsYXRpb24gb2YgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgUGx1Z2luLlwiLFwiSW5zdGFsbGF0aW9uXCIsXCJNYW5kYXRvcnkgdGFnczpucGF3LWFydGljbGUtdXJsbnBhdy1hcnRpY2xlLXRpdGxlYC5cIixcIlRoZSB0YWdzICBhbmQgIGFyZSBub3QgbWFuZGF0b3J5LCBjb25zaWRlcmluZyB0aGF0IG5vdCBhbGwgYXJ0aWNsZXMgaGF2ZSB0aGVzZSBlbGVtZW50cy5cIixcIkhlcmUgaXMgYW4gZXhhbXBsZSBzaG93Y2FzaW5nIGFuIGFydGljbGUgd2l0aCBhbGwgaXRzIGVsZW1lbnRzIGFjY3VyYXRlbHkgaWRlbnRpZmllZCB1c2luZyB0aGUgYXBwcm9wcmlhdGUgdGFnczpcIixcIkluY29ycG9yYXRpbmcgdGhlc2UgaWRlbnRpZmljYXRpb24gdGFncyBlbmFibGVzIHRoZSBtYW5pcHVsYXRpb24gb2YgdGhlc2UgZWxlbWVudHMsIHRoZXJlYnkgZmFjaWxpdGF0aW5nIGF1dG9tYXRlZCBBL0IgdGVzdGluZy5cIixcIlN1cHBvcnRcIixcIklmIHlvdSBuZWVkIGZ1cnRoZXIgYXNzaXN0YW5jZSwgcGxlYXNlIGNvbnRhY3Qgb3VyIHN1cHBvcnQgdGVhbS4gV2UncmUgaGVyZSB0byBoZWxwIHlvdSBnZXQgdGhlIG1vc3Qgb3V0IG9mIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbi5cIl1dXX0se1widXJsXCI6XCIvZG9jcy9hYi10ZXN0aW5nLWluc3RhbGxhdGlvbi93b3JkcHJlc3Mtd2Vic2l0ZXNcIixcInNlY3Rpb25zXCI6W1tcIldvcmRwcmVzcyBXZWJzaXRlc1wiLG51bGwsW1wiRm9yIFdvcmRQcmVzcyB3ZWJzaXRlcywgdGhlIGluc3RhbGxhdGlvbiBwcm9jZXNzIGlzIHNsaWdodGx5IGRpZmZlcmVudC4gWW91IHdpbGwgbmVlZCB0byBpbnN0YWxsIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbiB0aHJvdWdoIHRoZSBXb3JkUHJlc3MgYWRtaW4gZGFzaGJvYXJkLiBPbmNlIGluc3RhbGxlZCwgeW91IGNhbiBjb25maWd1cmUgdGhlIHBsdWdpbiBzZXR0aW5ncyBmcm9tIHRoZSBkYXNoYm9hcmQuXCJdXSxbXCJQcmUtcmVxdWlzaXRlc1wiLFwicHJlLXJlcXVpc2l0ZXNcIixbXCJFbnN1cmUgdGhhdCB5b3UgaGF2ZSB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIGluc3RhbGwgcGx1Z2lucyBvbiB5b3VyIHdlYnNpdGUuIFlvdSBzaG91bGQgYWxzbyBoYXZlIGEgYmFzaWMgdW5kZXJzdGFuZGluZyBvZiBIVE1MIGFuZCBKYXZhU2NyaXB0LlwiLFwiSW5zdGFsbGF0aW9uXCIsXCJUbyBpbnN0YWxsIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbiwgeW91IG5lZWQgdG8gYWRkIHRoZSBmb2xsb3dpbmcgc2NyaXB0IHRvIHlvdXIgbmV3c3BhcGVyJ3MgaG9tZSBwYWdlIGFuZCBlYWNoIGFydGljbGU6XCIsXCJUaGlzIHNjcmlwdCBpbml0aWFsaXplcyB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4gd2l0aCB5b3VyIGFjY291bnQgZGV0YWlscyBhbmQgc2V0cyB1cCB0aGUgQUIgdGVzdGluZyBjb21wb25lbnQuXCIsXCJNYXBwaW5nIEFydGljbGUgRWxlbWVudHNcIixcIkFmdGVyIGluc3RhbGxpbmcgdGhlIHBsdWdpbiwgeW91IG5lZWQgdG8gbWFwIHRoZSBlbGVtZW50cyBvZiBlYWNoIGFydGljbGUgd2l0aCBOUEFXIHRhZ3MuIEhlcmUgaXMgYSBzaW1wbGlmaWVkIGV4YW1wbGU6XCIsXCJJbiB0aGlzIGV4YW1wbGUsIHRoZSAgdGFnIGlzIGFkZGVkIHRvIHRoZSBzZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGFydGljbGUuIFRoZSAsICwgLCBhbmQgIHRhZ3MgYXJlIGFkZGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnRzIGluIHRoZSBhcnRpY2xlLlwiXV0sW1wiVHJvdWJsZXNob290aW5nXCIsXCJ0cm91Ymxlc2hvb3RpbmdcIixbXCJJZiB5b3UgZW5jb3VudGVyIGFueSBpc3N1ZXMgZHVyaW5nIHRoZSBpbnN0YWxsYXRpb24gb3IgY29uZmlndXJhdGlvbiBwcm9jZXNzLCBwbGVhc2UgY2hlY2sgdGhlIEphdmFTY3JpcHQgY29uc29sZSBmb3IgYW55IGVycm9yIG1lc3NhZ2VzLiBUaGVzZSBtZXNzYWdlcyBjYW4gcHJvdmlkZSB2YWx1YWJsZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IG1pZ2h0IGJlIGNhdXNpbmcgdGhlIGlzc3VlLlwiLFwiU3VwcG9ydFwiLFwiSWYgeW91IG5lZWQgZnVydGhlciBhc3Npc3RhbmNlLCBwbGVhc2UgY29udGFjdCBvdXIgc3VwcG9ydCB0ZWFtLiBXZSdyZSBoZXJlIHRvIGhlbHAgeW91IGdldCB0aGUgbW9zdCBvdXQgb2YgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luLlwiXV1dfSx7XCJ1cmxcIjpcIi9kb2NzL2Jhc2ljLWluc3RhbGxhdGlvbi9pbnRyb2R1Y3Rpb25cIixcInNlY3Rpb25zXCI6W1tcIkludHJvZHVjdGlvblwiLG51bGwsW1wiVGhlIGVzc2VudGlhbCBzZXR1cCBvZiB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4gYWxsb3dzIGZvciBtb25pdG9yaW5nIHVzZXIgYmVoYXZpb3IsIGVuY29tcGFzc2luZzpcIixcIlRoaXMgZ3VpZGUgcHJvdmlkZXMgYW4gb3ZlcnZpZXcgb2YgZGlzdGluY3QgdHlwZXMgb2YgaW5zdGFsbGF0aW9uIGZvciB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4uIFRoZSBpbnN0YWxsYXRpb24gcHJvY2VzcyB2YXJpZXMgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHdlYnNpdGUgeW91IGFyZSB3b3JraW5nIHdpdGguIEVhY2ggdHlwZSBvZiBpbnN0YWxsYXRpb24gaGFzIGl0cyBvd24gdW5pcXVlIHJlcXVpcmVtZW50cyBhbmQgc3RlcHMsIHdoaWNoIGFyZSBjb3ZlcmVkIGluIG1vcmUgZGV0YWlsIGluIHRoZWlyIHJlc3BlY3RpdmUgc2VjdGlvbnMgb2YgdGhpcyBkb2N1bWVudGF0aW9uLlwiLFwiSW4gdGhlIGZvbGxvd2luZyBzZWN0aW9ucywgd2Ugd2lsbCBwcm92aWRlIGEgZGV0YWlsZWQgc3RlcC1ieS1zdGVwIGd1aWRlIGZvciBlYWNoIHR5cGUgb2YgaW5zdGFsbGF0aW9uLiBQbGVhc2UgcmVmZXIgdG8gdGhlIHNlY3Rpb24gdGhhdCBjb3JyZXNwb25kcyB0byB5b3VyIHdlYnNpdGUgdHlwZSBmb3Igc3BlY2lmaWMgaW5zdGFsbGF0aW9uIGluc3RydWN0aW9ucy5cIl1dXX0se1widXJsXCI6XCIvZG9jcy9iYXNpYy1pbnN0YWxsYXRpb24vc3RhbmRhcmQtd2Vic2l0ZXNcIixcInNlY3Rpb25zXCI6W1tcIlN0YW5kYXJkIFdlYnNpdGVzXCIsbnVsbCxbXCJGb3Igc3RhbmRhcmQgd2Vic2l0ZXMsIHRoZSBpbnN0YWxsYXRpb24gcHJvY2VzcyBpbnZvbHZlcyBhZGRpbmcgYSBzY3JpcHQgdG8geW91ciB3ZWJzaXRlJ3MgSFRNTCBjb2RlLiBUaGlzIHNjcmlwdCBpbml0aWFsaXplcyB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4gYW5kIHNldHMgdXAgdGhlIEEvQiB0ZXN0aW5nIGNvbXBvbmVudC5cIl1dLFtcIlByZXJlcXVpc2l0ZXNcIixcInByZXJlcXVpc2l0ZXNcIixbXCJFbnN1cmUgdGhhdCB5b3UgaGF2ZSB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIGluc3RhbGwgcGx1Z2lucyBvbiB5b3VyIHdlYnNpdGUuIFlvdSBzaG91bGQgYWxzbyBoYXZlIGEgYmFzaWMgdW5kZXJzdGFuZGluZyBvZiBIVE1MIGFuZCBKYXZhU2NyaXB0LlwiLFwiSW5zdGFsbGF0aW9uXCIsXCJUbyBpbnN0YWxsIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbiwgeW91IG5lZWQgdG8gYWRkIHRoZSBmb2xsb3dpbmcgc2NyaXB0IHRvIHlvdXIgd2Vic2l0ZSdzIGhvbWUgcGFnZSBhbmQgZWFjaCBhcnRpY2xlIHlvdSB3YW50IHRvIG1vbml0b3I6XCIsXCJUaGlzIHNjcmlwdCBpbml0aWFsaXplcyB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4gd2l0aCB5b3VyIGFjY291bnQgZGV0YWlscyBhbmQgc2V0cyB1cCB0aGUgQS9CIHRlc3RpbmcgY29tcG9uZW50LlwiLFwiU3VwcG9ydFwiLFwiSWYgeW91IG5lZWQgZnVydGhlciBhc3Npc3RhbmNlLCBwbGVhc2UgY29udGFjdCBvdXIgc3VwcG9ydCB0ZWFtLiBXZSdyZSBoZXJlIHRvIGhlbHAgeW91IGdldCB0aGUgbW9zdCBvdXQgb2YgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luLlwiXV1dfSx7XCJ1cmxcIjpcIi9kb2NzL2Jhc2ljLWluc3RhbGxhdGlvbi93b3JkcHJlc3Mtd2Vic2l0ZXNcIixcInNlY3Rpb25zXCI6W1tcIldvcmRwcmVzcyBXZWJzaXRlc1wiLG51bGwsW1wiRm9yIFdvcmRQcmVzcyB3ZWJzaXRlcywgdGhlIGluc3RhbGxhdGlvbiBwcm9jZXNzIGlzIHNsaWdodGx5IGRpZmZlcmVudC4gWW91IHdpbGwgbmVlZCB0byBpbnN0YWxsIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbiB0aHJvdWdoIHRoZSBXb3JkUHJlc3MgYWRtaW4gZGFzaGJvYXJkLiBPbmNlIGluc3RhbGxlZCwgeW91IGNhbiBjb25maWd1cmUgdGhlIHBsdWdpbiBzZXR0aW5ncyBmcm9tIHRoZSBkYXNoYm9hcmQuXCJdXSxbXCJQcmUtcmVxdWlzaXRlc1wiLFwicHJlLXJlcXVpc2l0ZXNcIixbXCJFbnN1cmUgdGhhdCB5b3UgaGF2ZSB0aGUgbmVjZXNzYXJ5IHBlcm1pc3Npb25zIHRvIGluc3RhbGwgcGx1Z2lucyBvbiB5b3VyIHdlYnNpdGUuIFlvdSBzaG91bGQgYWxzbyBoYXZlIGEgYmFzaWMgdW5kZXJzdGFuZGluZyBvZiBIVE1MIGFuZCBKYXZhU2NyaXB0LlwiLFwiSW5zdGFsbGF0aW9uXCIsXCJUbyBpbnN0YWxsIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbiwgeW91IG5lZWQgdG8gYWRkIHRoZSBmb2xsb3dpbmcgc2NyaXB0IHRvIHlvdXIgbmV3c3BhcGVyJ3MgaG9tZSBwYWdlIGFuZCBlYWNoIGFydGljbGU6XCIsXCJUaGlzIHNjcmlwdCBpbml0aWFsaXplcyB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4gd2l0aCB5b3VyIGFjY291bnQgZGV0YWlscyBhbmQgc2V0cyB1cCB0aGUgQUIgdGVzdGluZyBjb21wb25lbnQuXCIsXCJNYXBwaW5nIEFydGljbGUgRWxlbWVudHNcIixcIkFmdGVyIGluc3RhbGxpbmcgdGhlIHBsdWdpbiwgeW91IG5lZWQgdG8gbWFwIHRoZSBlbGVtZW50cyBvZiBlYWNoIGFydGljbGUgd2l0aCBOUEFXIHRhZ3MuIEhlcmUgaXMgYSBzaW1wbGlmaWVkIGV4YW1wbGU6XCIsXCJJbiB0aGlzIGV4YW1wbGUsIHRoZSAgdGFnIGlzIGFkZGVkIHRvIHRoZSBzZWN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGFydGljbGUuIFRoZSAsICwgLCBhbmQgIHRhZ3MgYXJlIGFkZGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnRzIGluIHRoZSBhcnRpY2xlLlwiXV0sW1wiVHJvdWJsZXNob290aW5nXCIsXCJ0cm91Ymxlc2hvb3RpbmdcIixbXCJJZiB5b3UgZW5jb3VudGVyIGFueSBpc3N1ZXMgZHVyaW5nIHRoZSBpbnN0YWxsYXRpb24gb3IgY29uZmlndXJhdGlvbiBwcm9jZXNzLCBwbGVhc2UgY2hlY2sgdGhlIEphdmFTY3JpcHQgY29uc29sZSBmb3IgYW55IGVycm9yIG1lc3NhZ2VzLiBUaGVzZSBtZXNzYWdlcyBjYW4gcHJvdmlkZSB2YWx1YWJsZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IG1pZ2h0IGJlIGNhdXNpbmcgdGhlIGlzc3VlLlwiLFwiU3VwcG9ydFwiLFwiSWYgeW91IG5lZWQgZnVydGhlciBhc3Npc3RhbmNlLCBwbGVhc2UgY29udGFjdCBvdXIgc3VwcG9ydCB0ZWFtLiBXZSdyZSBoZXJlIHRvIGhlbHAgeW91IGdldCB0aGUgbW9zdCBvdXQgb2YgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luLlwiXV1dfV1cblxuICAgICAgICAgICAgICBmb3IgKGxldCB7IHVybCwgc2VjdGlvbnMgfSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW3RpdGxlLCBoYXNoLCBjb250ZW50XSBvZiBzZWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgc2VjdGlvbkluZGV4LmFkZCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsICsgKGhhc2ggPyAoJyMnICsgaGFzaCkgOiAnJyksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbdGl0bGUsIC4uLmNvbnRlbnRdLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBwYWdlVGl0bGU6IGhhc2ggPyBzZWN0aW9uc1swXVswXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaChxdWVyeSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHNlY3Rpb25JbmRleC5zZWFyY2gocXVlcnksIHtcbiAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICBlbnJpY2g6IHRydWUsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRbMF0ucmVzdWx0Lm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIHVybDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmRvYy50aXRsZSxcbiAgICAgICAgICAgICAgICAgIHBhZ2VUaXRsZTogaXRlbS5kb2MucGFnZVRpdGxlLFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAiXSwibmFtZXMiOlsiRmxleFNlYXJjaCIsInNlY3Rpb25JbmRleCIsIkRvY3VtZW50IiwidG9rZW5pemUiLCJkb2N1bWVudCIsImlkIiwiaW5kZXgiLCJzdG9yZSIsImNvbnRleHQiLCJyZXNvbHV0aW9uIiwiZGVwdGgiLCJiaWRpcmVjdGlvbmFsIiwiZGF0YSIsInVybCIsInNlY3Rpb25zIiwidGl0bGUiLCJoYXNoIiwiY29udGVudCIsImFkZCIsImpvaW4iLCJwYWdlVGl0bGUiLCJ1bmRlZmluZWQiLCJzZWFyY2giLCJxdWVyeSIsIm9wdGlvbnMiLCJyZXN1bHQiLCJlbnJpY2giLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiZG9jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/markdoc/search.mjs\n"));

/***/ })

});