/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@markdoc";
exports.ids = ["vendor-chunks/@markdoc"];
exports.modules = {

/***/ "(rsc)/./node_modules/@markdoc/markdoc/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@markdoc/markdoc/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


/***/ }),

/***/ "(rsc)/./node_modules/@markdoc/next.js/src/runtime.js":
/*!******************************************************!*\
  !*** ./node_modules/@markdoc/next.js/src/runtime.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// IDEA: explore better displayName functions\nfunction displayName(name) {\n    // Pascal case\n    return name.match(/[a-z]+/gi).map((word)=>word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(\"\");\n}\nfunction transformRecord(config) {\n    const output = {};\n    const components = {};\n    if (config) {\n        Object.entries(config).forEach(([name, registration])=>{\n            if (output[name]) {\n                throw new Error(`\"${name}\" has already been declared`);\n            }\n            const componentName = registration.render ? displayName(name) : undefined;\n            output[name] = {\n                ...registration,\n                render: componentName\n            };\n            if (componentName) {\n                components[componentName] = registration.render;\n            }\n        });\n    }\n    return {\n        output,\n        components\n    };\n}\nexports.getSchema = function getSchema(schema) {\n    const { output: tags, components: tagComponents } = transformRecord(schema.tags);\n    const { output: nodes, components: nodeComponents } = transformRecord(schema.nodes);\n    return {\n        ...schema,\n        tags,\n        nodes,\n        components: {\n            ...tagComponents,\n            ...nodeComponents\n        }\n    };\n};\nexports.defaultObject = function defaultObject(o) {\n    if (Object.prototype.hasOwnProperty.call(o, \"default\")) return o.default;\n    return o || {};\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQG1hcmtkb2MvbmV4dC5qcy9zcmMvcnVudGltZS5qcyIsIm1hcHBpbmdzIjoiQUFBQSw2Q0FBNkM7QUFDN0MsU0FBU0EsWUFBWUMsSUFBSTtJQUN2QixjQUFjO0lBQ2QsT0FBT0EsS0FDSkMsS0FBSyxDQUFDLFlBQ05DLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLRixLQUFLRyxNQUFNLENBQUMsR0FBR0MsV0FBVyxJQUN2RUMsSUFBSSxDQUFDO0FBQ1Y7QUFFQSxTQUFTQyxnQkFBZ0JDLE1BQU07SUFDN0IsTUFBTUMsU0FBUyxDQUFDO0lBQ2hCLE1BQU1DLGFBQWEsQ0FBQztJQUVwQixJQUFJRixRQUFRO1FBQ1ZHLE9BQU9DLE9BQU8sQ0FBQ0osUUFBUUssT0FBTyxDQUFDLENBQUMsQ0FBQ2YsTUFBTWdCLGFBQWE7WUFDbEQsSUFBSUwsTUFBTSxDQUFDWCxLQUFLLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSWlCLE1BQU0sQ0FBQyxDQUFDLEVBQUVqQixLQUFLLDJCQUEyQixDQUFDO1lBQ3ZEO1lBRUEsTUFBTWtCLGdCQUFnQkYsYUFBYUcsTUFBTSxHQUFHcEIsWUFBWUMsUUFBUW9CO1lBRWhFVCxNQUFNLENBQUNYLEtBQUssR0FBRztnQkFDYixHQUFHZ0IsWUFBWTtnQkFDZkcsUUFBUUQ7WUFDVjtZQUVBLElBQUlBLGVBQWU7Z0JBQ2pCTixVQUFVLENBQUNNLGNBQWMsR0FBR0YsYUFBYUcsTUFBTTtZQUNqRDtRQUNGO0lBQ0Y7SUFFQSxPQUFPO1FBQUNSO1FBQVFDO0lBQVU7QUFDNUI7QUFFQVMsaUJBQWlCLEdBQUcsU0FBU0MsVUFBVUMsTUFBTTtJQUMzQyxNQUFNLEVBQUNaLFFBQVFhLElBQUksRUFBRVosWUFBWWEsYUFBYSxFQUFDLEdBQUdoQixnQkFDaERjLE9BQU9DLElBQUk7SUFHYixNQUFNLEVBQUNiLFFBQVFlLEtBQUssRUFBRWQsWUFBWWUsY0FBYyxFQUFDLEdBQUdsQixnQkFDbERjLE9BQU9HLEtBQUs7SUFHZCxPQUFPO1FBQ0wsR0FBR0gsTUFBTTtRQUNUQztRQUNBRTtRQUNBZCxZQUFZO1lBQ1YsR0FBR2EsYUFBYTtZQUNoQixHQUFHRSxjQUFjO1FBQ25CO0lBQ0Y7QUFDRjtBQUVBTixxQkFBcUIsR0FBRyxTQUFTTyxjQUFjQyxDQUFDO0lBQzlDLElBQUloQixPQUFPaUIsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxZQUFZLE9BQU9BLEVBQUVJLE9BQU87SUFDeEUsT0FBT0osS0FBSyxDQUFDO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZHVpLXN5bnRheC8uL25vZGVfbW9kdWxlcy9AbWFya2RvYy9uZXh0LmpzL3NyYy9ydW50aW1lLmpzPzJkNTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSURFQTogZXhwbG9yZSBiZXR0ZXIgZGlzcGxheU5hbWUgZnVuY3Rpb25zXG5mdW5jdGlvbiBkaXNwbGF5TmFtZShuYW1lKSB7XG4gIC8vIFBhc2NhbCBjYXNlXG4gIHJldHVybiBuYW1lXG4gICAgLm1hdGNoKC9bYS16XSsvZ2kpXG4gICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpXG4gICAgLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1SZWNvcmQoY29uZmlnKSB7XG4gIGNvbnN0IG91dHB1dCA9IHt9O1xuICBjb25zdCBjb21wb25lbnRzID0ge307XG5cbiAgaWYgKGNvbmZpZykge1xuICAgIE9iamVjdC5lbnRyaWVzKGNvbmZpZykuZm9yRWFjaCgoW25hbWUsIHJlZ2lzdHJhdGlvbl0pID0+IHtcbiAgICAgIGlmIChvdXRwdXRbbmFtZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7bmFtZX1cIiBoYXMgYWxyZWFkeSBiZWVuIGRlY2xhcmVkYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSByZWdpc3RyYXRpb24ucmVuZGVyID8gZGlzcGxheU5hbWUobmFtZSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIG91dHB1dFtuYW1lXSA9IHtcbiAgICAgICAgLi4ucmVnaXN0cmF0aW9uLFxuICAgICAgICByZW5kZXI6IGNvbXBvbmVudE5hbWUsXG4gICAgICB9O1xuXG4gICAgICBpZiAoY29tcG9uZW50TmFtZSkge1xuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudE5hbWVdID0gcmVnaXN0cmF0aW9uLnJlbmRlcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7b3V0cHV0LCBjb21wb25lbnRzfTtcbn1cblxuZXhwb3J0cy5nZXRTY2hlbWEgPSBmdW5jdGlvbiBnZXRTY2hlbWEoc2NoZW1hKSB7XG4gIGNvbnN0IHtvdXRwdXQ6IHRhZ3MsIGNvbXBvbmVudHM6IHRhZ0NvbXBvbmVudHN9ID0gdHJhbnNmb3JtUmVjb3JkKFxuICAgIHNjaGVtYS50YWdzXG4gICk7XG5cbiAgY29uc3Qge291dHB1dDogbm9kZXMsIGNvbXBvbmVudHM6IG5vZGVDb21wb25lbnRzfSA9IHRyYW5zZm9ybVJlY29yZChcbiAgICBzY2hlbWEubm9kZXNcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnNjaGVtYSxcbiAgICB0YWdzLFxuICAgIG5vZGVzLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIC4uLnRhZ0NvbXBvbmVudHMsXG4gICAgICAuLi5ub2RlQ29tcG9uZW50cyxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0T2JqZWN0ID0gZnVuY3Rpb24gZGVmYXVsdE9iamVjdChvKSB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgJ2RlZmF1bHQnKSkgcmV0dXJuIG8uZGVmYXVsdDtcbiAgcmV0dXJuIG8gfHwge307XG59O1xuIl0sIm5hbWVzIjpbImRpc3BsYXlOYW1lIiwibmFtZSIsIm1hdGNoIiwibWFwIiwid29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJqb2luIiwidHJhbnNmb3JtUmVjb3JkIiwiY29uZmlnIiwib3V0cHV0IiwiY29tcG9uZW50cyIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwicmVnaXN0cmF0aW9uIiwiRXJyb3IiLCJjb21wb25lbnROYW1lIiwicmVuZGVyIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsImdldFNjaGVtYSIsInNjaGVtYSIsInRhZ3MiLCJ0YWdDb21wb25lbnRzIiwibm9kZXMiLCJub2RlQ29tcG9uZW50cyIsImRlZmF1bHRPYmplY3QiLCJvIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@markdoc/next.js/src/runtime.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@markdoc/markdoc/dist/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@markdoc/markdoc/dist/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ })

};
;