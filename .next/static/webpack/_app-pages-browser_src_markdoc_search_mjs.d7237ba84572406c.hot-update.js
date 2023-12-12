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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   search: function() { return /* binding */ search; }\n/* harmony export */ });\n/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flexsearch */ \"(app-pages-browser)/./node_modules/flexsearch/dist/flexsearch.bundle.js\");\n\nlet sectionIndex = new flexsearch__WEBPACK_IMPORTED_MODULE_0__.Document({\n    tokenize: \"full\",\n    document: {\n        id: \"url\",\n        index: \"content\",\n        store: [\n            \"title\",\n            \"pageTitle\"\n        ]\n    },\n    context: {\n        resolution: 9,\n        depth: 2,\n        bidirectional: true\n    }\n});\nlet data = [\n    {\n        \"url\": \"/\",\n        \"sections\": [\n            [\n                \"Getting started\",\n                null,\n                [\n                    \"Learn how to get Publisher Analytics set up in your project in under thirty minutes or it's free.\"\n                ]\n            ],\n            [\n                \"Core Features Installation\",\n                \"core-features-installation\",\n                [\n                    \"You can customize your installation by selecting only the necessary components based on the features you wish to utilize. Refer to the guide below for detailed instructions on installing the primary features.\",\n                    \"This is what a disclaimer message looks like. You might want to include inline  in it. Or maybe you’ll want to include a link in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/ab-testing-installation/introduction\",\n        \"sections\": [\n            [\n                \"Introduction\",\n                null,\n                [\n                    \"By installing the article-tags, you can effortlessly identify the articles on your webpage and manage their elements, thereby enabling seamless execution of automated A/B testing. The main tags are:\",\n                    \"This guide provides an overview of distinct types of installation for the article-tags. The installation process varies depending on the type of website you are working with. Each type of installation has its own unique requirements and steps, which are covered in more detail in their respective sections of this documentation.\",\n                    \"In the following sections, we will provide a detailed step-by-step guide for each type of installation. Please refer to the section that corresponds to your website type for specific installation instructions.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/ab-testing-installation/standard-websites\",\n        \"sections\": [\n            [\n                \"Standard Websites\",\n                null,\n                [\n                    \"To enable the execution of A/B tests, it is necessary to identify the articles elements on the page by installing the article-tags.\"\n                ]\n            ],\n            [\n                \"Prerequisites\",\n                \"prerequisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Ensure that you have completed the Basic installation of the Publisher Analytics Plugin.\",\n                    \"Installation\",\n                    \"The mandatory tags for initiating the monitoring of an article are: , , and .\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the A/B testing component.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/ab-testing-installation/wordpress-websites\",\n        \"sections\": [\n            [\n                \"Wordpress Websites\",\n                null,\n                [\n                    \"For WordPress websites, the installation process is slightly different. You will need to install the Publisher Analytics plugin through the WordPress admin dashboard. Once installed, you can configure the plugin settings from the dashboard.\"\n                ]\n            ],\n            [\n                \"Pre-requisites\",\n                \"pre-requisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your newspaper's home page and each article:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the AB testing component.\",\n                    \"Mapping Article Elements\",\n                    \"After installing the plugin, you need to map the elements of each article with NPAW tags. Here is a simplified example:\",\n                    \"In this example, the  tag is added to the section that contains the article. The , , , and  tags are added to the corresponding elements in the article.\"\n                ]\n            ],\n            [\n                \"Troubleshooting\",\n                \"troubleshooting\",\n                [\n                    \"If you encounter any issues during the installation or configuration process, please check the JavaScript console for any error messages. These messages can provide valuable information about what might be causing the issue.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/basic-installation/introduction\",\n        \"sections\": [\n            [\n                \"Introduction\",\n                null,\n                [\n                    \"The essential setup of the Publisher Analytics plugin allows for monitoring user behavior, encompassing:\",\n                    \"This guide provides an overview of distinct types of installation for the Publisher Analytics plugin. The installation process varies depending on the type of website you are working with. Each type of installation has its own unique requirements and steps, which are covered in more detail in their respective sections of this documentation.\",\n                    \"In the following sections, we will provide a detailed step-by-step guide for each type of installation. Please refer to the section that corresponds to your website type for specific installation instructions.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/basic-installation/standard-websites\",\n        \"sections\": [\n            [\n                \"Standard Websites\",\n                null,\n                [\n                    \"For standard websites, the installation process involves adding a script to your website's HTML code. This script initializes the Publisher Analytics plugin and sets up the A/B testing component.\"\n                ]\n            ],\n            [\n                \"Prerequisites\",\n                \"prerequisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your website's home page and each article you want to monitor:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the A/B testing component.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    },\n    {\n        \"url\": \"/docs/basic-installation/wordpress-websites\",\n        \"sections\": [\n            [\n                \"Wordpress Websites\",\n                null,\n                [\n                    \"For WordPress websites, the installation process is slightly different. You will need to install the Publisher Analytics plugin through the WordPress admin dashboard. Once installed, you can configure the plugin settings from the dashboard.\"\n                ]\n            ],\n            [\n                \"Pre-requisites\",\n                \"pre-requisites\",\n                [\n                    \"Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.\",\n                    \"Installation\",\n                    \"To install the Publisher Analytics plugin, you need to add the following script to your newspaper's home page and each article:\",\n                    \"This script initializes the Publisher Analytics plugin with your account details and sets up the AB testing component.\",\n                    \"Mapping Article Elements\",\n                    \"After installing the plugin, you need to map the elements of each article with NPAW tags. Here is a simplified example:\",\n                    \"In this example, the  tag is added to the section that contains the article. The , , , and  tags are added to the corresponding elements in the article.\"\n                ]\n            ],\n            [\n                \"Troubleshooting\",\n                \"troubleshooting\",\n                [\n                    \"If you encounter any issues during the installation or configuration process, please check the JavaScript console for any error messages. These messages can provide valuable information about what might be causing the issue.\",\n                    \"Support\",\n                    \"If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.\"\n                ]\n            ]\n        ]\n    }\n];\nfor (let { url, sections } of data){\n    for (let [title, hash, content] of sections){\n        sectionIndex.add({\n            url: url + (hash ? \"#\" + hash : \"\"),\n            title,\n            content: [\n                title,\n                ...content\n            ].join(\"\\n\"),\n            pageTitle: hash ? sections[0][0] : undefined\n        });\n    }\n}\nfunction search(query) {\n    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    let result = sectionIndex.search(query, {\n        ...options,\n        enrich: true\n    });\n    if (result.length === 0) {\n        return [];\n    }\n    return result[0].result.map((item)=>({\n            url: item.id,\n            title: item.doc.title,\n            pageTitle: item.doc.pageTitle\n        }));\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9tYXJrZG9jL3NlYXJjaC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDaUQ7QUFFbkMsSUFBSUMsZUFBZSxJQUFJRCxnREFBbUIsQ0FBQztJQUN6Q0csVUFBVTtJQUNWQyxVQUFVO1FBQ1JDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1lBQUM7WUFBUztTQUFZO0lBQy9CO0lBQ0FDLFNBQVM7UUFDUEMsWUFBWTtRQUNaQyxPQUFPO1FBQ1BDLGVBQWU7SUFDakI7QUFDRjtBQUVBLElBQUlDLE9BQU87SUFBQztRQUFDLE9BQU07UUFBSSxZQUFXO1lBQUM7Z0JBQUM7Z0JBQWtCO2dCQUFLO29CQUFDO2lCQUFvRzthQUFDO1lBQUM7Z0JBQUM7Z0JBQTZCO2dCQUE2QjtvQkFBQztvQkFBbU47aUJBQXFQO2FBQUM7U0FBQztJQUFBO0lBQUU7UUFBQyxPQUFNO1FBQTZDLFlBQVc7WUFBQztnQkFBQztnQkFBZTtnQkFBSztvQkFBQztvQkFBeU07b0JBQTJVO2lCQUFvTjthQUFDO1NBQUM7SUFBQTtJQUFFO1FBQUMsT0FBTTtRQUFrRCxZQUFXO1lBQUM7Z0JBQUM7Z0JBQW9CO2dCQUFLO29CQUFDO2lCQUFzSTthQUFDO1lBQUM7Z0JBQUM7Z0JBQWdCO2dCQUFnQjtvQkFBQztvQkFBd0o7b0JBQTJGO29CQUFlO29CQUFnRjtvQkFBMEg7b0JBQVU7aUJBQThJO2FBQUM7U0FBQztJQUFBO0lBQUU7UUFBQyxPQUFNO1FBQW1ELFlBQVc7WUFBQztnQkFBQztnQkFBcUI7Z0JBQUs7b0JBQUM7aUJBQW1QO2FBQUM7WUFBQztnQkFBQztnQkFBaUI7Z0JBQWlCO29CQUFDO29CQUF3SjtvQkFBZTtvQkFBa0k7b0JBQXlIO29CQUEyQjtvQkFBMEg7aUJBQTJKO2FBQUM7WUFBQztnQkFBQztnQkFBa0I7Z0JBQWtCO29CQUFDO29CQUFtTztvQkFBVTtpQkFBOEk7YUFBQztTQUFDO0lBQUE7SUFBRTtRQUFDLE9BQU07UUFBd0MsWUFBVztZQUFDO2dCQUFDO2dCQUFlO2dCQUFLO29CQUFDO29CQUEyRztvQkFBeVY7aUJBQW9OO2FBQUM7U0FBQztJQUFBO0lBQUU7UUFBQyxPQUFNO1FBQTZDLFlBQVc7WUFBQztnQkFBQztnQkFBb0I7Z0JBQUs7b0JBQUM7aUJBQXNNO2FBQUM7WUFBQztnQkFBQztnQkFBZ0I7Z0JBQWdCO29CQUFDO29CQUF3SjtvQkFBZTtvQkFBb0o7b0JBQTBIO29CQUFVO2lCQUE4STthQUFDO1NBQUM7SUFBQTtJQUFFO1FBQUMsT0FBTTtRQUE4QyxZQUFXO1lBQUM7Z0JBQUM7Z0JBQXFCO2dCQUFLO29CQUFDO2lCQUFtUDthQUFDO1lBQUM7Z0JBQUM7Z0JBQWlCO2dCQUFpQjtvQkFBQztvQkFBd0o7b0JBQWU7b0JBQWtJO29CQUF5SDtvQkFBMkI7b0JBQTBIO2lCQUEySjthQUFDO1lBQUM7Z0JBQUM7Z0JBQWtCO2dCQUFrQjtvQkFBQztvQkFBbU87b0JBQVU7aUJBQThJO2FBQUM7U0FBQztJQUFBO0NBQUU7QUFFcDhOLEtBQUssSUFBSSxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBRSxJQUFJRixLQUFNO0lBQ2xDLEtBQUssSUFBSSxDQUFDRyxPQUFPQyxNQUFNQyxRQUFRLElBQUlILFNBQVU7UUFDM0NiLGFBQWFpQixHQUFHLENBQUM7WUFDZkwsS0FBS0EsTUFBT0csQ0FBQUEsT0FBUSxNQUFNQSxPQUFRLEVBQUM7WUFDbkNEO1lBQ0FFLFNBQVM7Z0JBQUNGO21CQUFVRTthQUFRLENBQUNFLElBQUksQ0FBQztZQUNsQ0MsV0FBV0osT0FBT0YsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUdPO1FBQ3JDO0lBQ0Y7QUFDRjtBQUVPLFNBQVNDLE9BQU9DLEtBQUs7UUFBRUMsVUFBQUEsaUVBQVUsQ0FBQztJQUN2QyxJQUFJQyxTQUFTeEIsYUFBYXFCLE1BQU0sQ0FBQ0MsT0FBTztRQUN0QyxHQUFHQyxPQUFPO1FBQ1ZFLFFBQVE7SUFDVjtJQUNBLElBQUlELE9BQU9FLE1BQU0sS0FBSyxHQUFHO1FBQ3ZCLE9BQU8sRUFBRTtJQUNYO0lBQ0EsT0FBT0YsTUFBTSxDQUFDLEVBQUUsQ0FBQ0EsTUFBTSxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsT0FBVTtZQUNyQ2hCLEtBQUtnQixLQUFLeEIsRUFBRTtZQUNaVSxPQUFPYyxLQUFLQyxHQUFHLENBQUNmLEtBQUs7WUFDckJLLFdBQVdTLEtBQUtDLEdBQUcsQ0FBQ1YsU0FBUztRQUMvQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tYXJrZG9jL3NlYXJjaC5tanM/ZWI5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgICAgaW1wb3J0IEZsZXhTZWFyY2ggZnJvbSAnZmxleHNlYXJjaCdcblxuICAgICAgICAgICAgICBsZXQgc2VjdGlvbkluZGV4ID0gbmV3IEZsZXhTZWFyY2guRG9jdW1lbnQoe1xuICAgICAgICAgICAgICAgIHRva2VuaXplOiAnZnVsbCcsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiAndXJsJyxcbiAgICAgICAgICAgICAgICAgIGluZGV4OiAnY29udGVudCcsXG4gICAgICAgICAgICAgICAgICBzdG9yZTogWyd0aXRsZScsICdwYWdlVGl0bGUnXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdXRpb246IDksXG4gICAgICAgICAgICAgICAgICBkZXB0aDogMixcbiAgICAgICAgICAgICAgICAgIGJpZGlyZWN0aW9uYWw6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBbe1widXJsXCI6XCIvXCIsXCJzZWN0aW9uc1wiOltbXCJHZXR0aW5nIHN0YXJ0ZWRcIixudWxsLFtcIkxlYXJuIGhvdyB0byBnZXQgUHVibGlzaGVyIEFuYWx5dGljcyBzZXQgdXAgaW4geW91ciBwcm9qZWN0IGluIHVuZGVyIHRoaXJ0eSBtaW51dGVzIG9yIGl0J3MgZnJlZS5cIl1dLFtcIkNvcmUgRmVhdHVyZXMgSW5zdGFsbGF0aW9uXCIsXCJjb3JlLWZlYXR1cmVzLWluc3RhbGxhdGlvblwiLFtcIllvdSBjYW4gY3VzdG9taXplIHlvdXIgaW5zdGFsbGF0aW9uIGJ5IHNlbGVjdGluZyBvbmx5IHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cyBiYXNlZCBvbiB0aGUgZmVhdHVyZXMgeW91IHdpc2ggdG8gdXRpbGl6ZS4gUmVmZXIgdG8gdGhlIGd1aWRlIGJlbG93IGZvciBkZXRhaWxlZCBpbnN0cnVjdGlvbnMgb24gaW5zdGFsbGluZyB0aGUgcHJpbWFyeSBmZWF0dXJlcy5cIixcIlRoaXMgaXMgd2hhdCBhIGRpc2NsYWltZXIgbWVzc2FnZSBsb29rcyBsaWtlLiBZb3UgbWlnaHQgd2FudCB0byBpbmNsdWRlIGlubGluZSAgaW4gaXQuIE9yIG1heWJlIHlvdeKAmWxsIHdhbnQgdG8gaW5jbHVkZSBhIGxpbmsgaW4gaXQuIEkgZG9u4oCZdCB0aGluayB3ZSBzaG91bGQgZ2V0IHRvbyBjYXJyaWVkIGF3YXkgd2l0aCBvdGhlciBzY2VuYXJpb3MgbGlrZSBsaXN0cyBvciB0YWJsZXMg4oCUIHRoYXQgd291bGQgYmUgc2lsbHkuXCJdXV19LHtcInVybFwiOlwiL2RvY3MvYWItdGVzdGluZy1pbnN0YWxsYXRpb24vaW50cm9kdWN0aW9uXCIsXCJzZWN0aW9uc1wiOltbXCJJbnRyb2R1Y3Rpb25cIixudWxsLFtcIkJ5IGluc3RhbGxpbmcgdGhlIGFydGljbGUtdGFncywgeW91IGNhbiBlZmZvcnRsZXNzbHkgaWRlbnRpZnkgdGhlIGFydGljbGVzIG9uIHlvdXIgd2VicGFnZSBhbmQgbWFuYWdlIHRoZWlyIGVsZW1lbnRzLCB0aGVyZWJ5IGVuYWJsaW5nIHNlYW1sZXNzIGV4ZWN1dGlvbiBvZiBhdXRvbWF0ZWQgQS9CIHRlc3RpbmcuIFRoZSBtYWluIHRhZ3MgYXJlOlwiLFwiVGhpcyBndWlkZSBwcm92aWRlcyBhbiBvdmVydmlldyBvZiBkaXN0aW5jdCB0eXBlcyBvZiBpbnN0YWxsYXRpb24gZm9yIHRoZSBhcnRpY2xlLXRhZ3MuIFRoZSBpbnN0YWxsYXRpb24gcHJvY2VzcyB2YXJpZXMgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHdlYnNpdGUgeW91IGFyZSB3b3JraW5nIHdpdGguIEVhY2ggdHlwZSBvZiBpbnN0YWxsYXRpb24gaGFzIGl0cyBvd24gdW5pcXVlIHJlcXVpcmVtZW50cyBhbmQgc3RlcHMsIHdoaWNoIGFyZSBjb3ZlcmVkIGluIG1vcmUgZGV0YWlsIGluIHRoZWlyIHJlc3BlY3RpdmUgc2VjdGlvbnMgb2YgdGhpcyBkb2N1bWVudGF0aW9uLlwiLFwiSW4gdGhlIGZvbGxvd2luZyBzZWN0aW9ucywgd2Ugd2lsbCBwcm92aWRlIGEgZGV0YWlsZWQgc3RlcC1ieS1zdGVwIGd1aWRlIGZvciBlYWNoIHR5cGUgb2YgaW5zdGFsbGF0aW9uLiBQbGVhc2UgcmVmZXIgdG8gdGhlIHNlY3Rpb24gdGhhdCBjb3JyZXNwb25kcyB0byB5b3VyIHdlYnNpdGUgdHlwZSBmb3Igc3BlY2lmaWMgaW5zdGFsbGF0aW9uIGluc3RydWN0aW9ucy5cIl1dXX0se1widXJsXCI6XCIvZG9jcy9hYi10ZXN0aW5nLWluc3RhbGxhdGlvbi9zdGFuZGFyZC13ZWJzaXRlc1wiLFwic2VjdGlvbnNcIjpbW1wiU3RhbmRhcmQgV2Vic2l0ZXNcIixudWxsLFtcIlRvIGVuYWJsZSB0aGUgZXhlY3V0aW9uIG9mIEEvQiB0ZXN0cywgaXQgaXMgbmVjZXNzYXJ5IHRvIGlkZW50aWZ5IHRoZSBhcnRpY2xlcyBlbGVtZW50cyBvbiB0aGUgcGFnZSBieSBpbnN0YWxsaW5nIHRoZSBhcnRpY2xlLXRhZ3MuXCJdXSxbXCJQcmVyZXF1aXNpdGVzXCIsXCJwcmVyZXF1aXNpdGVzXCIsW1wiRW5zdXJlIHRoYXQgeW91IGhhdmUgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyB0byBpbnN0YWxsIHBsdWdpbnMgb24geW91ciB3ZWJzaXRlLiBZb3Ugc2hvdWxkIGFsc28gaGF2ZSBhIGJhc2ljIHVuZGVyc3RhbmRpbmcgb2YgSFRNTCBhbmQgSmF2YVNjcmlwdC5cIixcIkVuc3VyZSB0aGF0IHlvdSBoYXZlIGNvbXBsZXRlZCB0aGUgQmFzaWMgaW5zdGFsbGF0aW9uIG9mIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIFBsdWdpbi5cIixcIkluc3RhbGxhdGlvblwiLFwiVGhlIG1hbmRhdG9yeSB0YWdzIGZvciBpbml0aWF0aW5nIHRoZSBtb25pdG9yaW5nIG9mIGFuIGFydGljbGUgYXJlOiAsICwgYW5kIC5cIixcIlRoaXMgc2NyaXB0IGluaXRpYWxpemVzIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbiB3aXRoIHlvdXIgYWNjb3VudCBkZXRhaWxzIGFuZCBzZXRzIHVwIHRoZSBBL0IgdGVzdGluZyBjb21wb25lbnQuXCIsXCJTdXBwb3J0XCIsXCJJZiB5b3UgbmVlZCBmdXJ0aGVyIGFzc2lzdGFuY2UsIHBsZWFzZSBjb250YWN0IG91ciBzdXBwb3J0IHRlYW0uIFdlJ3JlIGhlcmUgdG8gaGVscCB5b3UgZ2V0IHRoZSBtb3N0IG91dCBvZiB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4uXCJdXV19LHtcInVybFwiOlwiL2RvY3MvYWItdGVzdGluZy1pbnN0YWxsYXRpb24vd29yZHByZXNzLXdlYnNpdGVzXCIsXCJzZWN0aW9uc1wiOltbXCJXb3JkcHJlc3MgV2Vic2l0ZXNcIixudWxsLFtcIkZvciBXb3JkUHJlc3Mgd2Vic2l0ZXMsIHRoZSBpbnN0YWxsYXRpb24gcHJvY2VzcyBpcyBzbGlnaHRseSBkaWZmZXJlbnQuIFlvdSB3aWxsIG5lZWQgdG8gaW5zdGFsbCB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4gdGhyb3VnaCB0aGUgV29yZFByZXNzIGFkbWluIGRhc2hib2FyZC4gT25jZSBpbnN0YWxsZWQsIHlvdSBjYW4gY29uZmlndXJlIHRoZSBwbHVnaW4gc2V0dGluZ3MgZnJvbSB0aGUgZGFzaGJvYXJkLlwiXV0sW1wiUHJlLXJlcXVpc2l0ZXNcIixcInByZS1yZXF1aXNpdGVzXCIsW1wiRW5zdXJlIHRoYXQgeW91IGhhdmUgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyB0byBpbnN0YWxsIHBsdWdpbnMgb24geW91ciB3ZWJzaXRlLiBZb3Ugc2hvdWxkIGFsc28gaGF2ZSBhIGJhc2ljIHVuZGVyc3RhbmRpbmcgb2YgSFRNTCBhbmQgSmF2YVNjcmlwdC5cIixcIkluc3RhbGxhdGlvblwiLFwiVG8gaW5zdGFsbCB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4sIHlvdSBuZWVkIHRvIGFkZCB0aGUgZm9sbG93aW5nIHNjcmlwdCB0byB5b3VyIG5ld3NwYXBlcidzIGhvbWUgcGFnZSBhbmQgZWFjaCBhcnRpY2xlOlwiLFwiVGhpcyBzY3JpcHQgaW5pdGlhbGl6ZXMgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIHdpdGggeW91ciBhY2NvdW50IGRldGFpbHMgYW5kIHNldHMgdXAgdGhlIEFCIHRlc3RpbmcgY29tcG9uZW50LlwiLFwiTWFwcGluZyBBcnRpY2xlIEVsZW1lbnRzXCIsXCJBZnRlciBpbnN0YWxsaW5nIHRoZSBwbHVnaW4sIHlvdSBuZWVkIHRvIG1hcCB0aGUgZWxlbWVudHMgb2YgZWFjaCBhcnRpY2xlIHdpdGggTlBBVyB0YWdzLiBIZXJlIGlzIGEgc2ltcGxpZmllZCBleGFtcGxlOlwiLFwiSW4gdGhpcyBleGFtcGxlLCB0aGUgIHRhZyBpcyBhZGRlZCB0byB0aGUgc2VjdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBhcnRpY2xlLiBUaGUgLCAsICwgYW5kICB0YWdzIGFyZSBhZGRlZCB0byB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50cyBpbiB0aGUgYXJ0aWNsZS5cIl1dLFtcIlRyb3VibGVzaG9vdGluZ1wiLFwidHJvdWJsZXNob290aW5nXCIsW1wiSWYgeW91IGVuY291bnRlciBhbnkgaXNzdWVzIGR1cmluZyB0aGUgaW5zdGFsbGF0aW9uIG9yIGNvbmZpZ3VyYXRpb24gcHJvY2VzcywgcGxlYXNlIGNoZWNrIHRoZSBKYXZhU2NyaXB0IGNvbnNvbGUgZm9yIGFueSBlcnJvciBtZXNzYWdlcy4gVGhlc2UgbWVzc2FnZXMgY2FuIHByb3ZpZGUgdmFsdWFibGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBtaWdodCBiZSBjYXVzaW5nIHRoZSBpc3N1ZS5cIixcIlN1cHBvcnRcIixcIklmIHlvdSBuZWVkIGZ1cnRoZXIgYXNzaXN0YW5jZSwgcGxlYXNlIGNvbnRhY3Qgb3VyIHN1cHBvcnQgdGVhbS4gV2UncmUgaGVyZSB0byBoZWxwIHlvdSBnZXQgdGhlIG1vc3Qgb3V0IG9mIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbi5cIl1dXX0se1widXJsXCI6XCIvZG9jcy9iYXNpYy1pbnN0YWxsYXRpb24vaW50cm9kdWN0aW9uXCIsXCJzZWN0aW9uc1wiOltbXCJJbnRyb2R1Y3Rpb25cIixudWxsLFtcIlRoZSBlc3NlbnRpYWwgc2V0dXAgb2YgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIGFsbG93cyBmb3IgbW9uaXRvcmluZyB1c2VyIGJlaGF2aW9yLCBlbmNvbXBhc3Npbmc6XCIsXCJUaGlzIGd1aWRlIHByb3ZpZGVzIGFuIG92ZXJ2aWV3IG9mIGRpc3RpbmN0IHR5cGVzIG9mIGluc3RhbGxhdGlvbiBmb3IgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luLiBUaGUgaW5zdGFsbGF0aW9uIHByb2Nlc3MgdmFyaWVzIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB3ZWJzaXRlIHlvdSBhcmUgd29ya2luZyB3aXRoLiBFYWNoIHR5cGUgb2YgaW5zdGFsbGF0aW9uIGhhcyBpdHMgb3duIHVuaXF1ZSByZXF1aXJlbWVudHMgYW5kIHN0ZXBzLCB3aGljaCBhcmUgY292ZXJlZCBpbiBtb3JlIGRldGFpbCBpbiB0aGVpciByZXNwZWN0aXZlIHNlY3Rpb25zIG9mIHRoaXMgZG9jdW1lbnRhdGlvbi5cIixcIkluIHRoZSBmb2xsb3dpbmcgc2VjdGlvbnMsIHdlIHdpbGwgcHJvdmlkZSBhIGRldGFpbGVkIHN0ZXAtYnktc3RlcCBndWlkZSBmb3IgZWFjaCB0eXBlIG9mIGluc3RhbGxhdGlvbi4gUGxlYXNlIHJlZmVyIHRvIHRoZSBzZWN0aW9uIHRoYXQgY29ycmVzcG9uZHMgdG8geW91ciB3ZWJzaXRlIHR5cGUgZm9yIHNwZWNpZmljIGluc3RhbGxhdGlvbiBpbnN0cnVjdGlvbnMuXCJdXV19LHtcInVybFwiOlwiL2RvY3MvYmFzaWMtaW5zdGFsbGF0aW9uL3N0YW5kYXJkLXdlYnNpdGVzXCIsXCJzZWN0aW9uc1wiOltbXCJTdGFuZGFyZCBXZWJzaXRlc1wiLG51bGwsW1wiRm9yIHN0YW5kYXJkIHdlYnNpdGVzLCB0aGUgaW5zdGFsbGF0aW9uIHByb2Nlc3MgaW52b2x2ZXMgYWRkaW5nIGEgc2NyaXB0IHRvIHlvdXIgd2Vic2l0ZSdzIEhUTUwgY29kZS4gVGhpcyBzY3JpcHQgaW5pdGlhbGl6ZXMgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIGFuZCBzZXRzIHVwIHRoZSBBL0IgdGVzdGluZyBjb21wb25lbnQuXCJdXSxbXCJQcmVyZXF1aXNpdGVzXCIsXCJwcmVyZXF1aXNpdGVzXCIsW1wiRW5zdXJlIHRoYXQgeW91IGhhdmUgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyB0byBpbnN0YWxsIHBsdWdpbnMgb24geW91ciB3ZWJzaXRlLiBZb3Ugc2hvdWxkIGFsc28gaGF2ZSBhIGJhc2ljIHVuZGVyc3RhbmRpbmcgb2YgSFRNTCBhbmQgSmF2YVNjcmlwdC5cIixcIkluc3RhbGxhdGlvblwiLFwiVG8gaW5zdGFsbCB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4sIHlvdSBuZWVkIHRvIGFkZCB0aGUgZm9sbG93aW5nIHNjcmlwdCB0byB5b3VyIHdlYnNpdGUncyBob21lIHBhZ2UgYW5kIGVhY2ggYXJ0aWNsZSB5b3Ugd2FudCB0byBtb25pdG9yOlwiLFwiVGhpcyBzY3JpcHQgaW5pdGlhbGl6ZXMgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIHdpdGggeW91ciBhY2NvdW50IGRldGFpbHMgYW5kIHNldHMgdXAgdGhlIEEvQiB0ZXN0aW5nIGNvbXBvbmVudC5cIixcIlN1cHBvcnRcIixcIklmIHlvdSBuZWVkIGZ1cnRoZXIgYXNzaXN0YW5jZSwgcGxlYXNlIGNvbnRhY3Qgb3VyIHN1cHBvcnQgdGVhbS4gV2UncmUgaGVyZSB0byBoZWxwIHlvdSBnZXQgdGhlIG1vc3Qgb3V0IG9mIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbi5cIl1dXX0se1widXJsXCI6XCIvZG9jcy9iYXNpYy1pbnN0YWxsYXRpb24vd29yZHByZXNzLXdlYnNpdGVzXCIsXCJzZWN0aW9uc1wiOltbXCJXb3JkcHJlc3MgV2Vic2l0ZXNcIixudWxsLFtcIkZvciBXb3JkUHJlc3Mgd2Vic2l0ZXMsIHRoZSBpbnN0YWxsYXRpb24gcHJvY2VzcyBpcyBzbGlnaHRseSBkaWZmZXJlbnQuIFlvdSB3aWxsIG5lZWQgdG8gaW5zdGFsbCB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4gdGhyb3VnaCB0aGUgV29yZFByZXNzIGFkbWluIGRhc2hib2FyZC4gT25jZSBpbnN0YWxsZWQsIHlvdSBjYW4gY29uZmlndXJlIHRoZSBwbHVnaW4gc2V0dGluZ3MgZnJvbSB0aGUgZGFzaGJvYXJkLlwiXV0sW1wiUHJlLXJlcXVpc2l0ZXNcIixcInByZS1yZXF1aXNpdGVzXCIsW1wiRW5zdXJlIHRoYXQgeW91IGhhdmUgdGhlIG5lY2Vzc2FyeSBwZXJtaXNzaW9ucyB0byBpbnN0YWxsIHBsdWdpbnMgb24geW91ciB3ZWJzaXRlLiBZb3Ugc2hvdWxkIGFsc28gaGF2ZSBhIGJhc2ljIHVuZGVyc3RhbmRpbmcgb2YgSFRNTCBhbmQgSmF2YVNjcmlwdC5cIixcIkluc3RhbGxhdGlvblwiLFwiVG8gaW5zdGFsbCB0aGUgUHVibGlzaGVyIEFuYWx5dGljcyBwbHVnaW4sIHlvdSBuZWVkIHRvIGFkZCB0aGUgZm9sbG93aW5nIHNjcmlwdCB0byB5b3VyIG5ld3NwYXBlcidzIGhvbWUgcGFnZSBhbmQgZWFjaCBhcnRpY2xlOlwiLFwiVGhpcyBzY3JpcHQgaW5pdGlhbGl6ZXMgdGhlIFB1Ymxpc2hlciBBbmFseXRpY3MgcGx1Z2luIHdpdGggeW91ciBhY2NvdW50IGRldGFpbHMgYW5kIHNldHMgdXAgdGhlIEFCIHRlc3RpbmcgY29tcG9uZW50LlwiLFwiTWFwcGluZyBBcnRpY2xlIEVsZW1lbnRzXCIsXCJBZnRlciBpbnN0YWxsaW5nIHRoZSBwbHVnaW4sIHlvdSBuZWVkIHRvIG1hcCB0aGUgZWxlbWVudHMgb2YgZWFjaCBhcnRpY2xlIHdpdGggTlBBVyB0YWdzLiBIZXJlIGlzIGEgc2ltcGxpZmllZCBleGFtcGxlOlwiLFwiSW4gdGhpcyBleGFtcGxlLCB0aGUgIHRhZyBpcyBhZGRlZCB0byB0aGUgc2VjdGlvbiB0aGF0IGNvbnRhaW5zIHRoZSBhcnRpY2xlLiBUaGUgLCAsICwgYW5kICB0YWdzIGFyZSBhZGRlZCB0byB0aGUgY29ycmVzcG9uZGluZyBlbGVtZW50cyBpbiB0aGUgYXJ0aWNsZS5cIl1dLFtcIlRyb3VibGVzaG9vdGluZ1wiLFwidHJvdWJsZXNob290aW5nXCIsW1wiSWYgeW91IGVuY291bnRlciBhbnkgaXNzdWVzIGR1cmluZyB0aGUgaW5zdGFsbGF0aW9uIG9yIGNvbmZpZ3VyYXRpb24gcHJvY2VzcywgcGxlYXNlIGNoZWNrIHRoZSBKYXZhU2NyaXB0IGNvbnNvbGUgZm9yIGFueSBlcnJvciBtZXNzYWdlcy4gVGhlc2UgbWVzc2FnZXMgY2FuIHByb3ZpZGUgdmFsdWFibGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBtaWdodCBiZSBjYXVzaW5nIHRoZSBpc3N1ZS5cIixcIlN1cHBvcnRcIixcIklmIHlvdSBuZWVkIGZ1cnRoZXIgYXNzaXN0YW5jZSwgcGxlYXNlIGNvbnRhY3Qgb3VyIHN1cHBvcnQgdGVhbS4gV2UncmUgaGVyZSB0byBoZWxwIHlvdSBnZXQgdGhlIG1vc3Qgb3V0IG9mIHRoZSBQdWJsaXNoZXIgQW5hbHl0aWNzIHBsdWdpbi5cIl1dXX1dXG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgeyB1cmwsIHNlY3Rpb25zIH0gb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IFt0aXRsZSwgaGFzaCwgY29udGVudF0gb2Ygc2VjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb25JbmRleC5hZGQoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCArIChoYXNoID8gKCcjJyArIGhhc2gpIDogJycpLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogW3RpdGxlLCAuLi5jb250ZW50XS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVRpdGxlOiBoYXNoID8gc2VjdGlvbnNbMF1bMF0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGV4cG9ydCBmdW5jdGlvbiBzZWFyY2gocXVlcnksIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBzZWN0aW9uSW5kZXguc2VhcmNoKHF1ZXJ5LCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgZW5yaWNoOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0WzBdLnJlc3VsdC5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgICAgICAgICAgICB1cmw6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5kb2MudGl0bGUsXG4gICAgICAgICAgICAgICAgICBwYWdlVGl0bGU6IGl0ZW0uZG9jLnBhZ2VUaXRsZSxcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIl0sIm5hbWVzIjpbIkZsZXhTZWFyY2giLCJzZWN0aW9uSW5kZXgiLCJEb2N1bWVudCIsInRva2VuaXplIiwiZG9jdW1lbnQiLCJpZCIsImluZGV4Iiwic3RvcmUiLCJjb250ZXh0IiwicmVzb2x1dGlvbiIsImRlcHRoIiwiYmlkaXJlY3Rpb25hbCIsImRhdGEiLCJ1cmwiLCJzZWN0aW9ucyIsInRpdGxlIiwiaGFzaCIsImNvbnRlbnQiLCJhZGQiLCJqb2luIiwicGFnZVRpdGxlIiwidW5kZWZpbmVkIiwic2VhcmNoIiwicXVlcnkiLCJvcHRpb25zIiwicmVzdWx0IiwiZW5yaWNoIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImRvYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/markdoc/search.mjs\n"));

/***/ })

});