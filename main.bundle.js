webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"abc\"></app-header>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"abc\"></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.abc = false;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_in_log_in_component__ = __webpack_require__("../../../../../src/app/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workshop_workshop_component__ = __webpack_require__("../../../../../src/app/workshop/workshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_5__events_events_component__["a" /* EventsComponent */] },
    { path: 'workshops', component: __WEBPACK_IMPORTED_MODULE_6__workshop_workshop_component__["a" /* WorkshopComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__log_in_log_in_component__["a" /* LogInComponent */],
                __WEBPACK_IMPORTED_MODULE_5__events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__workshop_workshop_component__["a" /* WorkshopComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  events works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  header works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:2890){\n\t.threeImg{\n\t\tmargin-left: -50px;\n\t}\n\t#c{\n\t\tmargin-top: -25%;\n\t}\n\t.title{\n\t\tpadding-top: 350px;\n\t\tmargin-left: 110px;\n\t\twidth:220px;\n\t\theight:48px;\n\t}\n\t\n}\n\n@media screen and (max-width:1920px){\n\t#closepop{\n\tborder-radius: 50%;\n\tcolor: white;\n\tbackground-color: #C62828;\n\tposition: absolute;\n\tz-index: +4;\n\tmargin-left: 67.5%;\n\tmargin-top: -0.6%;\n\t\ttop: -40%;\n\n}\n#closepop0{\n\tborder-radius: 50%;\n\tcolor: white;\n\tbackground-color: #C62828;\n\tposition: absolute;\n\tz-index: +4;\n\tmargin-left: 67.5%;\n\tmargin-top: -0.6%;\n\t\ttop: -145%;\n}\n.christ{\n\tposition: absolute;\n\tmargin-left: 80%;\n\tmargin-top: -11.5%;\n\tz-index: 2;\n\tdisplay: block;\n\twidth: 15%;\n}\n.pop1,.pop2,.pop3,.pop4,.pop5,.pop6,.pop7,.pop8,.pop9{\n\tposition: absolute;\n\tz-index: +4;\n\tmargin-left: 35%;\n\tmargin-top: 0.8%;\n\tborder-radius: 5px;\n\ttop: -60%;\n}\n.pop2{\n\tmargin-left: 46%;\n\tmargin-top: 2%;\n\tz-index: -10;\n}\n.pop3{\n\tmargin-left: 37%;\n\tmargin-top: 6%;\n\tz-index: -10;\n}\n.pop4{\n\tmargin-left: 37%;\n\tmargin-top: 9%;\n\tz-index: -10;\n}\n.pop5{\n\tmargin-left: 37%;\n\tmargin-top: 12%;\n\tz-index: -10;\n}\n.pop6{\n\tmargin-left: 37%;\n\tmargin-top: 15%;\n\tz-index: -10;\n}\n.pop7{\n\tmargin-left: 55%;\n\tmargin-top: 6%;\n\tz-index: -10;\n}\n.pop8{\n\tmargin-left: 55%;\n\tmargin-top: 9%;\n\tz-index: -10;\n}\n.pop9{\n\tmargin-left: 55%;\n\tmargin-top: 12%;\n\tz-index: -10;\n}\n\t.threeImg{\n\t\tmargin-left: -50px;\n\t}\n\t#c{\n\t\tmargin-top: -25%;\n\t}\n\t.title{\n\tposition:absolute;\n\tmargin-left: 0%;\n\tmargin-top: 23%;\n\twidth: 304.8px;\n\theight: 69.9px;\n\n\t}\n\t.title2{\n\tposition:absolute;\n\tmargin-left: 69%;\n\tmargin-top: 23.8%;\n\tz-index: 2;\n\t}\n\t.footer{\n\t\tmargin-left:40px;\n\t}\n\tcanvas {\n\t  display: block;\n\t  width: 110%;\n\t  height: 110%;\n\t  cursor: pointer;\n\t  margin-top: -340px;\n\t  margin-left: -5%;\n\t  overflow: hidden;\n\t }\n\t.pop{\n\t\tposition: absolute;\n\t\tz-index: +3;\n\t\tmargin-left: 35%;\n\t\tmargin-top: -60%;\n\t\tborder-radius: 5px;\n\t}\n\t.one{\n\t\tmargin-top:13% ;\n\t\tmargin-left:55%;\n\t\tuser-drag: none; \n\t\tuser-select: none;\n\t\t-moz-user-select: none;\n\t\t-webkit-user-drag: none;\n\t\t-webkit-user-select: none;\n\t\t-ms-user-select: none;\n\t}\n\t.christ{\n\t\tfloat:right;\n\t}\n\t.two{\n\t\tmargin-top:0%;\n\t\tmargin-left:42%;\n\t}\n\t.three{\n\t\tmargin-top:-4% ;\n\t\tmargin-left:34%;\n\n\t}\n\t.media{\n\t\tposition: absolute;\n\t\tz-index: 2;\n\t\tmargin-left: 80%;\n\t\tmargin-top: 23%;\n\t}\n\t\t.socialImg{\n\t\t\n\t\tposition: absolute;\n\t\twidth: 35px;\n\t\tmargin-left: 95%;\n\t\tmargin-top: -45px;\n\t}\n\t.socialImg1{\n\t\tposition: absolute;\n\t\twidth: 35px;\n\t\tmargin-top: -45px;\n\t\tmargin-left: 120%;\n\t}\n\t.four{\n\t\tmargin-top:10% ;\n\t\tmargin-left:60%;\n\t}\n\t.five{\t\n\t\tmargin-top:11% ;\n\t\tmargin-left:27%;\n\t}\n\t.fourImg{\n\t\tmargin-top: 20px;\n\t}\n\t.fiveImg{\n\t\t\n\t\t\n\t}\n\t.popup{\n\t\twidth:650px;\n\t\theight:350px;\n\t\tbackground: #FFF;\n\t\tborder-radius: 2px;\n\t\tborder: 1px solid black;\n\t}\n\t.five:active{\n\t\t-webkit-filter:drop-shadow(2px 2px 6px #424242);\n\t\t        filter:drop-shadow(2px 2px 6px #424242);\n\t}\n\t.four:active{\n\t\t-webkit-filter:drop-shadow(2px 2px 6px #424242);\n\t\t        filter:drop-shadow(2px 2px 6px #424242);\n\t}\n\t.three:active{\n\t\t-webkit-filter:drop-shadow(1px 1px 4px #424242);\n\t\t        filter:drop-shadow(1px 1px 4px #424242);\n\t}\n}\n\n@media screen and (max-width:1400px){\n\t#closepop{\n\tborder-radius: 50%;\n\tcolor: white;\n\tbackground-color: #C62828;\n\tposition: absolute;\n\tz-index: +4;\n\tmargin-left: 81%;\n\tmargin-top: -7%;\n\t\ttop: -40%;\n\n}\n.pop{\n\t\tposition: absolute;\n\t\tz-index: +3;\n\t\tmargin-left: 35%;\n\t\tmargin-top: -68%;\n\t\tborder-radius: 5px;\n\t}\n#closepop0{\n\tborder-radius: 50%;\n\tcolor: white;\n\tbackground-color: #C62828;\n\tposition: absolute;\n\tz-index: +4;\n\tmargin-left: 81%;\n\tmargin-top: -3%;\n\t\ttop: -145%;\n}\n.christ{\n\tposition: absolute;\n\tmargin-left: 80%;\n\tmargin-top: -11.5%;\n\tz-index: 2;\n\tdisplay: block;\n\twidth: 15%;\n}\n.pop1,.pop2,.pop3,.pop4,.pop5,.pop6,.pop7,.pop8,.pop9{\n\tposition: absolute;\n\tz-index: +4;\n\tmargin-left: 35%;\n\tmargin-top: -5%;\n\tborder-radius: 5px;\n\ttop: -60%;\n}\n.pop2{\n\tmargin-left: 50%;\n\tmargin-top: -3%;\n\tz-index: -10;\n}\n.pop3{\n\tmargin-left: 37%;\n\tmargin-top: 3%;\n\tz-index: -10;\n}\n.pop4{\n\tmargin-left: 37%;\n\tmargin-top: 7%;\n\tz-index: -10;\n}\n.pop5{\n\tmargin-left: 37%;\n\tmargin-top: 11%;\n\tz-index: -10;\n}\n.pop6{\n\tmargin-left: 37%;\n\tmargin-top: 15%;\n\tz-index: -10;\n}\n.pop7{\n\tmargin-left: 65%;\n\tmargin-top: 3%;\n\tz-index: -10;\n}\n.pop8{\n\tmargin-left: 65%;\n\tmargin-top: 7%;\n\tz-index: -10;\n}\n.pop9{\n\tmargin-left: 65%;\n\tmargin-top: 11%;\n\tz-index: -10;\n}\n\tbody{\n\n\t}\n\t.christ{\n\t\t\n\t\tpadding-top: 30px;\n\t}\n\t.one{\n\t\tmargin-top: 180px;\n\t\tpadding-left: 120px;\n\t}\n\t.footer{\n\t\tmargin-left:40px;\n\t}\n\n\t.oneImg{\n\t\twidth:120px;\n\t}\n\t.two{\n\n\t}\n\t.twoImg{\n\t\twidth: 280px;\n\t}\n\t.three{\n\t\twidth: 150px;\n\t\theight: 170px;\n\t}\n\t.five{\t\n\t\twidth:180px;\n\t\theight:180px;\n\n\t}\n\t.fiveImg{\n\t\twidth:100%;\n\t\theight: 100%;\n\t\tmargin-left: -25px;\n\t}\n\t.two{\n\t}\n\t.threeImg{\n\t\twidth: 150px;\n\t\tmargin-left: -130px;\n\t}\n\t.four{\n\t\tmargin-top: 290px;\n\t}\n\t.fourImg{\n\t\twidth: 165px;\n\t}\n\t.container{\n\t\tmargin-left: -120px;\n\t\tmargin-top: -20px;\n\t}\n\t.scene{\n\t\tmargin-left: -15px;\n\t}\n\t.media{\n\t\t\n\t\tmargin-top: 250px;\n\t}\n\t.contactImg{\n\t\tposition: absolute;\n\t\twidth:120px;\n\t\tmargin-top: 11px;\n\t}\n\t.socialImg{\n\t\t\n\t\tposition: absolute;\n\t\twidth: 35px;\n\t\tmargin-left: 80%;\n\t\tmargin-top: 11px;\n\t}\n\t.socialImg1{\n\t\tposition: absolute;\n\t\twidth: 35px;\n\t\tmargin-top: 11px;\n\t\tmargin-left: 100px;\n\t}\n\t.title{\n\t\tposition:absolute;\n\t\tmargin-top: 265px;\n\t\tmargin-left: 110px;\n\t\twidth:220px;\n\t\theight:48px;\n\t}\n\t.title2{\n\t\tposition:absolute;\n\t\tmargin-left: 70%;\n\t\tmargin-top: 275px;\n\t\tz-index: 2;\n\t\twidth: 120px;\n\t}\n\t.christ{\n\t\tposition: absolute;\n\t\tmargin-top:-180px;\n\t\twidth: 14%;\n\t}\n\t.paddingX{\n\t\tmargin-left: 100px;\n\t}\n\t.socIcn{\n\t\tmargin-left: 80px;\n\t\tmargin-top: 5px;\n\t}\n}\n\n@media screen and (max-width:1000px){\n\tbody{\n\t}\n\t.socIcn{\n\t\tmargin-left: 2%;\n\t\tpadding-top: 30%;\n\t}\n.media{\n\t\tposition: absolute;\n\t\tz-index: 2;\n\t\tmargin-left: 40%;\n\t\tmargin-top: 40%;\n\t}\n.contactImg{\n\t\tposition: absolute;\n\t\twidth:500px; \n\t\tpadding-top:70px;\n\t\tvisibility: hidden;\n\t}\n\t.socialImg{\n\t\t\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\tmargin-left: -15px;\n\t\tmargin-top: 60px;\n\t}\n\t.socialImg1{\n\t\tposition: absolute;\n\t\twidth: 40px;\n\t\tmargin-top: 56px;\n\t\tmargin-left: 30px;\n\t}\n.title{\n\t\tposition:absolute;\n\t\t\tmargin-top: 250px;\n\t\t\tmargin-left: 45%;\n\t\twidth:200px;\n\t\theight:auto;\n\n\t}\n\t\t.title2{\n\t\tvisibility: hidden;\n\t}\n\t#c{\n\t\tmargin-top: -400px;\n\t\theight:150%;\n\t\twidth: 150%;\n\t}\n\t.loginPopup{\n\t\tmargin-top: -185%;\n\t\tmargin-left: 31.5%;\n\t}\n\t.pop{\n\t\tvisibility: hidden;\n\t}\n\t.vignette{\n\t\tz-index:-50;\n\t}\n\t.one{\n\t\tmargin-top: 180px;\n\t\tpadding-left: 120px;\n\t}\n\t.oneImg{\n\t\twidth:80px;\n\t}\n\t.two{\n\n\t}\n\t.twoImg{\n\t\twidth: 200px;\n\t}\n\t.three{\n\t\tmargin-top: -80px;\n\t\twidth: 50px;\n\t\tpadding-left: 90px;\n\t}\n\t.threeImg{\n\t\twidth: 120px;\n\t}\n\t.four{\n\t\tmargin-top: 220px;\n\t}\n\t.fourImg{\n\t\twidth: 125px;\n\t}\n\t.five{\n\t\tmargin-top: 190px;\n\t}\n\t.fiveImg{\n\t\twidth: 125px;\n\t\theight:125px;\n\t\tmargin-left: 0px;\n\t}\n\t.container{\n\t\tmargin-left: -120px;\n\t\tmargin-top: 50px;\n\t}\n\t.scene{\n\t\tmargin-left: -15px;\n\t}\n\t.contactImg{\n\t\twidth:70px;\n\t\tfloat: left;\n\t}\n\t.socialImg{\n\t\twidth: 30px;\n\t}\n\t.media{\n\t\tmargin-top: 250px;\n\t}\n\t.five:active{\n\t\t-webkit-filter:drop-shadow(0px 0px 0px #424242);\n\t\t        filter:drop-shadow(0px 0px 0px #424242);\n\t}\n\t.four:active{\n\t\t-webkit-filter:drop-shadow(0px 0px 0px #424242);\n\t\t        filter:drop-shadow(0px 0px 0px #424242);\n\t}\n\t.three:active{\n\t\t-webkit-filter:drop-shadow(0px 0px 0px #424242);\n\t\t        filter:drop-shadow(0px 0px 0px #424242);\n\t}\n\t.christ{\n\tposition: absolute;\n\tmargin-left: 37%;\n\tmargin-top: -200px;\n\tz-index: 2;\n\tdisplay: block;\n\twidth: 200px;\n}\n\n\n}\nbody{\n\toverflow-x: hidden;\n\toverflow: hidden;\n}\n\n#scene{\n\t\n}\n.canvas{\n\t\n}\n\n\n.animation-target {\n  -webkit-animation: animation 1000ms linear both;\n  animation: animation 1000ms linear both;\n\n}\n\n/* Generated with Bounce.js. Edit at http://bouncejs.com#%7Bs%3A%5B%7BT%3A%22c%22%2Ce%3A%22b%22%2Cd%3A1000%2CD%3A0%2Cf%3A%7Bx%3A0%2Cy%3A1%7D%2Ct%3A%7Bx%3A1%2Cy%3A1%7D%2Cs%3A1%2Cb%3A4%7D%2C%7BT%3A%22c%22%2Ce%3A%22b%22%2Cd%3A1000%2CD%3A0%2Cf%3A%7Bx%3A1%2Cy%3A0%7D%2Ct%3A%7Bx%3A1%2Cy%3A1%7D%2Cs%3A1%2Cb%3A6%7D%5D%7D */\n\n@-webkit-keyframes animation { \n  0% { -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  3.4% { -webkit-transform: matrix3d(0.316, 0, 0, 0, 0, 0.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.316, 0, 0, 0, 0, 0.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  4.7% { -webkit-transform: matrix3d(0.45, 0, 0, 0, 0, 0.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.45, 0, 0, 0, 0, 0.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  6.81% { -webkit-transform: matrix3d(0.659, 0, 0, 0, 0, 0.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.659, 0, 0, 0, 0, 0.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  9.41% { -webkit-transform: matrix3d(0.883, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.883, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  10.21% { -webkit-transform: matrix3d(0.942, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.942, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  13.61% { -webkit-transform: matrix3d(1.123, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.123, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  14.11% { -webkit-transform: matrix3d(1.141, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.141, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  17.52% { -webkit-transform: matrix3d(1.208, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.208, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  18.72% { -webkit-transform: matrix3d(1.212, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.212, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  21.32% { -webkit-transform: matrix3d(1.196, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.196, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  24.32% { -webkit-transform: matrix3d(1.151, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.151, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  25.23% { -webkit-transform: matrix3d(1.134, 0, 0, 0, 0, 0.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.134, 0, 0, 0, 0, 0.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  29.03% { -webkit-transform: matrix3d(1.063, 0, 0, 0, 0, 0.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.063, 0, 0, 0, 0, 0.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  29.93% { -webkit-transform: matrix3d(1.048, 0, 0, 0, 0, 0.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.048, 0, 0, 0, 0, 0.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  35.54% { -webkit-transform: matrix3d(0.979, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.979, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  36.74% { -webkit-transform: matrix3d(0.972, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.972, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  41.04% { -webkit-transform: matrix3d(0.961, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.961, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  44.44% { -webkit-transform: matrix3d(0.966, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.966, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  52.15% { -webkit-transform: matrix3d(0.991, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.991, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  59.86% { -webkit-transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  63.26% { -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.007, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  75.28% { -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.001, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  85.49% { -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  90.69% { -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } \n}\n\n@keyframes animation { \n  0% { -webkit-transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  3.4% { -webkit-transform: matrix3d(0.316, 0, 0, 0, 0, 0.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.316, 0, 0, 0, 0, 0.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  4.7% { -webkit-transform: matrix3d(0.45, 0, 0, 0, 0, 0.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.45, 0, 0, 0, 0, 0.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  6.81% { -webkit-transform: matrix3d(0.659, 0, 0, 0, 0, 0.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.659, 0, 0, 0, 0, 0.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  9.41% { -webkit-transform: matrix3d(0.883, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.883, 0, 0, 0, 0, 1.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  10.21% { -webkit-transform: matrix3d(0.942, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.942, 0, 0, 0, 0, 1.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  13.61% { -webkit-transform: matrix3d(1.123, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.123, 0, 0, 0, 0, 1.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  14.11% { -webkit-transform: matrix3d(1.141, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.141, 0, 0, 0, 0, 1.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  17.52% { -webkit-transform: matrix3d(1.208, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.208, 0, 0, 0, 0, 1.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  18.72% { -webkit-transform: matrix3d(1.212, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.212, 0, 0, 0, 0, 1.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  21.32% { -webkit-transform: matrix3d(1.196, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.196, 0, 0, 0, 0, 1.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  24.32% { -webkit-transform: matrix3d(1.151, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.151, 0, 0, 0, 0, 0.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  25.23% { -webkit-transform: matrix3d(1.134, 0, 0, 0, 0, 0.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.134, 0, 0, 0, 0, 0.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  29.03% { -webkit-transform: matrix3d(1.063, 0, 0, 0, 0, 0.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.063, 0, 0, 0, 0, 0.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  29.93% { -webkit-transform: matrix3d(1.048, 0, 0, 0, 0, 0.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.048, 0, 0, 0, 0, 0.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  35.54% { -webkit-transform: matrix3d(0.979, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.979, 0, 0, 0, 0, 0.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  36.74% { -webkit-transform: matrix3d(0.972, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.972, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  41.04% { -webkit-transform: matrix3d(0.961, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.961, 0, 0, 0, 0, 1.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  44.44% { -webkit-transform: matrix3d(0.966, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.966, 0, 0, 0, 0, 1.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  52.15% { -webkit-transform: matrix3d(0.991, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.991, 0, 0, 0, 0, 1.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  59.86% { -webkit-transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.006, 0, 0, 0, 0, 0.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  63.26% { -webkit-transform: matrix3d(1.007, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.007, 0, 0, 0, 0, 0.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  75.28% { -webkit-transform: matrix3d(1.001, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.001, 0, 0, 0, 0, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  85.49% { -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  90.69% { -webkit-transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }\n  100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } \n}\n\n.loginPopup{\n\twidth:400px;\n\theight:400px;\n\tbackground: #ededed;\n\tposition: absolute;\n\tz-index: 10;\n\tmargin-left: 45%;\n\tborder-radius: 50%;\n\tmargin-top: -60%;\n}\n.loginInp{\n\twidth: 95%;\n\theight: 40px;\n\tpadding: 5px;\n\tborder: 0px;\n}\n.loginTitle{\n\tmargin-top: 35px;\n\tfont-size: 1.3em;\n}\n.loginClose{\n\tmargin-left: 500px;\n}\n\n.vignette {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 3;\n}\n\n\n\nbody {\n    opacity: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n  body.ready {\n    opacity: 1;\n  }\n  .logo-animation {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 100%;\n    margin-top: -40px;\n  }\n  .letters {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 682px;\n    height: 162px;\n  }\n  .letter {\n    position: relative;\n    width: 162px;\n    height: 162px;\n  }\n  .letter:not(:first-child) {\n    margin-left: -42px;\n  }\n  .letter-i {\n    z-index: 1;\n    width: 82px;\n    -webkit-transform-origin: 100% 50%;\n            transform-origin: 100% 50%;\n  }\n  .dot {\n    position: absolute;\n    width: 42px;\n    height: 42px;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  .dot-i {\n    top: 0;\n    left: 240px;\n  }\n  .dot-e {\n    bottom: 0;\n    right: 0;\n  }\n  .logo-icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    left: 230px;\n    top: -10px;\n    width: 222px;\n    height: 62px;\n  }\n  .icon {\n    width: 62px;\n    height: 62px;\n    opacity: 0;\n  }\n  .icon-text {\n    position: absolute;\n    top: 60px;\n    left: 60px;\n    width: 160px;\n    height: 62px;\n  }\n  .icon-text path,\n  .icon-text polygon {\n    opacity: 0;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    <div id=\"container\" class=\"container\">\n        <div class=\"vignette\"></div>\n        <!--POPUP Tutorial window starts here -->\n        <!--POPUP Tutorial window starts here-->\n        <!-- Textfield with Floating Label \n        <div class='loginPopup'>\n            <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored\" onClick=\"hideLogin()\" style='margin-left:300px;margin-top:15px;background:#C62828;color:#fff;'>\n                <i class=\"material-icons\">close</i>\n            </button>\n            <div>\n                <div class='loginTitle'>Login</div>\n                <br />\n                <br />\n                <form action=\"login.php\" method='post'>\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" type=\"email\" id=\"email\">\n                        <label class=\"mdl-textfield__label\" for=\"sample3\">Email</label>\n                    </div>\n                    <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n                        <input class=\"mdl-textfield__input\" type=\"password\" id=\"password\">\n                        <label class=\"mdl-textfield__label\" for=\"sample3\">Password</label>\n                    </div>\n                    <br />\n                    <BR />\n                    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent\" style='background:#009688;color:#fff;border-radius:25px;width:100px;height:40px;'>\n                        Login\n                    </button>\n                </form>\n            </div>\n        </div> \n        -->\n        <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\" id=\"closepop0\">\n            <i class=\"material-icons\">close</i>\n        </button>\n        <img src=\"assets/tut.gif\" class=\"pop\">\n\n\n        <div class='names'>\n            <img src=\"assets/bg.png\" class=\"pop1\">\n            <img src=\"assets/Developers.png\" class=\"pop2 animation-target\" id=\"pop12\">\n            <img src=\"assets/ron.png\" class=\"pop3 animation-target\">\n            <img src=\"assets/ronald.png\" class=\"pop4 animation-target\">\n            <img src=\"assets/arjun.png\" class=\"pop5 animation-target\">\n            <img src=\"assets/venkat.png\" class=\"pop6 animation-target\">\n            <img src=\"assets/lib.png\" class=\"pop7 animation-target\">\n            <img src=\"assets/nik.png\" class=\"pop8 animation-target\">\n            <img src=\"assets/yash.png\" class=\"pop9 animation-target\">\n        </div>\n        <!-- FAB button -->\n        <button class=\"mdl-button mdl-js-button mdl-button--fab mdl-button--colored\" id=\"closepop\">\n            <i class=\"material-icons\">close</i>\n        </button>\n        <!--POPUP Tutorial window ends here-->\n        <ul id=\"scene\">\n            <a href=\"http://www.christuniversity.in\">\n                <img src=\"assets/logo.png\" class=\"christ\">\n            </a>\n            <div class=\"layer one\" data-depth=\"0.15\">\n                <img src=\"assets/about.png\" class='oneImg' onClick='window.location.href = \"about.html\";'>\n            </div>\n            <br />\n            <a href='index.html'>\n                <div id=\"droppable\" class=\"layer two\" data-depth=\"0.25\">\n                    <img src=\"assets/mag.png\" class='twoImg'>\n                </div>\n            </a>\n            <br />\n            <a href='events.html'>\n                <div id=\"draggable1\" class=\"layer three\" data-depth=\"0.35\">\n                    <img src=\"assets/events.png\" class='threeImg'>\n                </div>\n            </a>\n            <br />\n            <a href='workshops.html'>\n                <div id=\"draggable3\" class=\"layer five\" data-depth=\"0.75\">\n                    <img src=\"assets/workshops.png\" class='fiveImg'>\n                </div>\n            </a>\n\n            <a href='#'>\n                <div id=\"draggable2\" class=\"layer four\" data-depth=\"0.55\">\n                    <img onClick='showLog();' src=\"assets/login.png\" class='fourImg'>\n                </div>\n            </a>\n            \n        </ul>\n        <div class=\"footer\">\n        <img src=\"assets/magno.png\" class=\"title\">\n            <div class='paddingX'>\n                <img src=\"assets/developers2.png\" class=\"title2 animation-target\" id=\"tle2\">\n                <div class=\"media\">\n                    <a href='contact.html'>\n                        <img src=\"assets/contactus.png\" class='contactImg'>\n                    </a>\n                    <div class='socIcn'>\n                        <a href='https://www.facebook.com'>\n                            <img src=\"assets/facebookico.png\" class='socialImg'>\n                        </a>\n                        <a href='https://www.youtube.com'>\n                            <img src=\"assets/youtuico.png\" class='socialImg1'>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n            <canvas id=\"c\" style=\"z-index:-10;\" class='theCanvas'></canvas>\n\n\n    </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/log-in/log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/log-in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  log-in works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/log-in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogInComponent = (function () {
    function LogInComponent() {
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-log-in',
            template: __webpack_require__("../../../../../src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/log-in/log-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/workshop/workshop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/workshop/workshop.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  workshop works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/workshop/workshop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkshopComponent = (function () {
    function WorkshopComponent() {
    }
    WorkshopComponent.prototype.ngOnInit = function () {
    };
    WorkshopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workshop',
            template: __webpack_require__("../../../../../src/app/workshop/workshop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/workshop/workshop.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkshopComponent);
    return WorkshopComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map