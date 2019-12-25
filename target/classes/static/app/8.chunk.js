(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/main/webapp/app/admin/admin-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AdminRoutingModule\", function() { return AdminRoutingModule; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm2015/core.js\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm2015/router.js\");\n\n\n\n/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */\nlet AdminRoutingModule = class AdminRoutingModule {\n};\nAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"NgModule\"])({\n        imports: [\n            /* jhipster-needle-add-admin-module - JHipster will add admin modules here */\n            _angular_router__WEBPACK_IMPORTED_MODULE_2__[\"RouterModule\"].forChild([\n                {\n                    path: 'user-management',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./user-management/user-management.module */ \"./src/main/webapp/app/admin/user-management/user-management.module.ts\")).then(m => m.UserManagementModule)\n                },\n                {\n                    path: 'audits',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./audits/audits.module */ \"./src/main/webapp/app/admin/audits/audits.module.ts\")).then(m => m.AuditsModule)\n                },\n                {\n                    path: 'configuration',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./configuration/configuration.module */ \"./src/main/webapp/app/admin/configuration/configuration.module.ts\")).then(m => m.ConfigurationModule)\n                },\n                {\n                    path: 'docs',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./docs/docs.module */ \"./src/main/webapp/app/admin/docs/docs.module.ts\")).then(m => m.DocsModule)\n                },\n                {\n                    path: 'health',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./health/health.module */ \"./src/main/webapp/app/admin/health/health.module.ts\")).then(m => m.HealthModule)\n                },\n                {\n                    path: 'logs',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./logs/logs.module */ \"./src/main/webapp/app/admin/logs/logs.module.ts\")).then(m => m.LogsModule)\n                },\n                {\n                    path: 'metrics',\n                    loadChildren: () => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./metrics/metrics.module */ \"./src/main/webapp/app/admin/metrics/metrics.module.ts\")).then(m => m.MetricsModule)\n                }\n                /* jhipster-needle-add-admin-route - JHipster will add admin routes here */\n            ])\n        ]\n    })\n], AdminRoutingModule);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2FkbWluLXJvdXRpbmcubW9kdWxlLnRzPzhiNjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBQ007QUFDL0MsNEZBQTRGO0FBc0M1RixJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQUFHO0FBQXJCLGtCQUFrQjtJQXBDOUIsOERBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDZFQUE2RTtZQUM3RSw0REFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEI7b0JBQ0UsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLHNNQUFrRCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDekc7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLGtLQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7aUJBQy9FO2dCQUNEO29CQUNFLElBQUksRUFBRSxlQUFlO29CQUNyQixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsOExBQThDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO2lCQUNwRztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsMEpBQTRCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztpQkFDekU7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLGtLQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7aUJBQy9FO2dCQUNEO29CQUNFLElBQUksRUFBRSxNQUFNO29CQUNaLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQywwSkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO2lCQUN6RTtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsU0FBUztvQkFDZixZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsc0tBQWtDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztpQkFDbEY7Z0JBQ0QsMkVBQTJFO2FBQzVFLENBQUM7U0FDSDtLQUNGLENBQUM7R0FDVyxrQkFBa0IsQ0FBRztBQUFIIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hZG1pbi1yb3V0aW5nLm1vZHVsZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLyogamhpcHN0ZXItbmVlZGxlLWFkZC1hZG1pbi1tb2R1bGUtaW1wb3J0IC0gSkhpcHN0ZXIgd2lsbCBhZGQgYWRtaW4gbW9kdWxlcyBpbXBvcnRzIGhlcmUgKi9cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIC8qIGpoaXBzdGVyLW5lZWRsZS1hZGQtYWRtaW4tbW9kdWxlIC0gSkhpcHN0ZXIgd2lsbCBhZGQgYWRtaW4gbW9kdWxlcyBoZXJlICovXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudCcsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQubW9kdWxlJykudGhlbihtID0+IG0uVXNlck1hbmFnZW1lbnRNb2R1bGUpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnYXVkaXRzJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vYXVkaXRzL2F1ZGl0cy5tb2R1bGUnKS50aGVuKG0gPT4gbS5BdWRpdHNNb2R1bGUpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnY29uZmlndXJhdGlvbicsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5tb2R1bGUnKS50aGVuKG0gPT4gbS5Db25maWd1cmF0aW9uTW9kdWxlKVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ2RvY3MnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9kb2NzL2RvY3MubW9kdWxlJykudGhlbihtID0+IG0uRG9jc01vZHVsZSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdoZWFsdGgnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9oZWFsdGgvaGVhbHRoLm1vZHVsZScpLnRoZW4obSA9PiBtLkhlYWx0aE1vZHVsZSlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdsb2dzJyxcbiAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vbG9ncy9sb2dzLm1vZHVsZScpLnRoZW4obSA9PiBtLkxvZ3NNb2R1bGUpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnbWV0cmljcycsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL21ldHJpY3MvbWV0cmljcy5tb2R1bGUnKS50aGVuKG0gPT4gbS5NZXRyaWNzTW9kdWxlKVxuICAgICAgfVxuICAgICAgLyogamhpcHN0ZXItbmVlZGxlLWFkZC1hZG1pbi1yb3V0ZSAtIEpIaXBzdGVyIHdpbGwgYWRkIGFkbWluIHJvdXRlcyBoZXJlICovXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pblJvdXRpbmdNb2R1bGUge31cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/admin/admin-routing.module.ts\n");

/***/ })

}]);