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

/***/ "../../../../../src/app/about-section/about-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description-box {\r\n  max-width: 640px;\r\n  margin: auto;\r\n  font-size: 14pt;\r\n}\r\n\r\n.screen-shots-box {\r\n  margin: 20px auto 0 auto;\r\n}\r\n\r\n.screen-shots-box img {\r\n  max-height: 500px;\r\n  max-width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-section/about-section.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"about-anchor\" class=\"anchor\"></a>\n<div id=\"about-section\" class=\"content-section\">\n  <h1 class=\"mat-title\">What is Popup Games?</h1>\n  <div class=\"content-section-content\">\n    <span class=\"description-box mat-body-1\">\n      <p>\n        Students often find it difficult not only to find pickup games, but also to find participants for their own\n        pickup games. It can be difficult as well, for students to find players for games outside of their regular\n        social group.\n      </p>\n      <p>\n        The solution to this problem is Popup Games, an Android and mobile application that allows users to create and\n        join pickup games on the campus of Georgia Tech.\n      </p>\n    </span>\n    <span class=\"screen-shots-box\">\n      <img src=\"assets/screenshot.png\" />\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about-section/about-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutSectionComponent; });
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

var AboutSectionComponent = (function () {
    function AboutSectionComponent() {
    }
    AboutSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about-section',
            template: __webpack_require__("../../../../../src/app/about-section/about-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-section/about-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutSectionComponent);
    return AboutSectionComponent;
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

module.exports = "<app-title-bar></app-title-bar>\n<app-video-section></app-video-section>\n<app-about-section></app-about-section>\n<app-features-section></app-features-section>\n<app-information-section></app-information-section>\n"

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
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_section_video_section_component__ = __webpack_require__("../../../../../src/app/video-section/video-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__title_bar_title_bar_component__ = __webpack_require__("../../../../../src/app/title-bar/title-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_section_about_section_component__ = __webpack_require__("../../../../../src/app/about-section/about-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__information_section_information_section_component__ = __webpack_require__("../../../../../src/app/information-section/information-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__team_member_info_team_member_info_component__ = __webpack_require__("../../../../../src/app/team-member-info/team-member-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__features_section_features_section_component__ = __webpack_require__("../../../../../src/app/features-section/features-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ui_carousel__ = __webpack_require__("../../../../ui-carousel/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ui_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ui_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feature_info_feature_info_component__ = __webpack_require__("../../../../../src/app/feature-info/feature-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_video_directive__ = __webpack_require__("../../../../../src/directives/video.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__video_section_video_section_component__["a" /* VideoSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__title_bar_title_bar_component__["a" /* TitleBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_section_about_section_component__["a" /* AboutSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_7__information_section_information_section_component__["a" /* InformationSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_8__team_member_info_team_member_info_component__["a" /* TeamMemberInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__features_section_features_section_component__["a" /* FeaturesSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__feature_info_feature_info_component__["a" /* FeatureInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__directives_video_directive__["a" /* VideoDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_ui_carousel__["UICarouselModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatIconModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/feature-info/feature-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".feature-card {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.feature-card-text {\r\n  margin: auto;\r\n  padding: 12px;\r\n  text-align: center;\r\n}\r\n\r\n.feature-card-title {\r\n  width: auto;\r\n  margin: 0;\r\n}\r\n\r\n.feature-card img {\r\n  display: inline-block;\r\n  height: 400px;\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-info/feature-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"feature-card\">\n  <div class=\"feature-card-text\">\n    <h1 class=\"mat-title feature-card-title\">{{title}}</h1>\n    <p class=\"mat-body-1\" *ngFor=\"let line of information\">{{line}}</p>\n  </div>\n  <img src=\"{{imageUrl}}\" />\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/feature-info/feature-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureInfoComponent; });
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

var FeatureInfoComponent = (function () {
    function FeatureInfoComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FeatureInfoComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FeatureInfoComponent.prototype, "imageUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FeatureInfoComponent.prototype, "information", void 0);
    FeatureInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feature-info',
            template: __webpack_require__("../../../../../src/app/feature-info/feature-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-info/feature-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureInfoComponent);
    return FeatureInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features-section/features-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/deep/ #features-carousel .arrow:before,\r\n/deep/ #features-carousel .arrow:after,\r\n/deep/ #features-carousel .dot {\r\n  background-color: black;\r\n}\r\n\r\n#features-carousel {\r\n  max-width: 1000px;\r\n  margin: auto;\r\n}\r\n\r\n/deep/ #features-carousel .arrow,\r\n/deep/ #features-carousel dots {\r\n  z-index: 1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features-section/features-section.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"features-anchor\" class=\"anchor\"></a>\n<mat-divider></mat-divider>\n<div id=\"features-section\" class=\"content-section\">\n  <h1 class=\"mat-title\">Features</h1>\n  <div class=\"content-section-content\">\n    <ui-carousel #uiCarousel id=\"features-carousel\" [infinite]=\"true\" [fade]=\"false\" [speed]=\"400\" [autoPlay]='true'\n                 [autoPlaySpeed]=\"8000\" height=\"400px\" width=\"100%\">\n      <ui-carousel-item *ngFor=\"let feature of FEATURES\">\n        <app-feature-info [title]=\"feature.title\" [information]=\"feature.information\" [imageUrl]=\"feature.imageUrl\">\n        </app-feature-info>\n      </ui-carousel-item>\n    </ui-carousel>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features-section/features-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesSectionComponent; });
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

var FeaturesSectionComponent = (function () {
    function FeaturesSectionComponent() {
        this.FEATURES = [
            {
                title: 'Create Your Own Events',
                information: ['Create your own custom events at any given time and place within the Georgia Tech campus.'],
                imageUrl: 'assets/feature0.png'
            }, {
                title: 'Discover New Events',
                information: ['Discover events hosted by other students, and filter them by location.'],
                imageUrl: 'assets/feature1.png'
            }, {
                title: 'Manage Events',
                information: ['View event and event attendee details, RSVP to events, and delete your own events as you please.'],
                imageUrl: 'assets/feature2.png'
            }, {
                title: 'See Event Locations on Map',
                information: ['View the location of any event on Google Maps.'],
                imageUrl: 'assets/feature3.png'
            }
        ];
    }
    FeaturesSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-features-section',
            template: __webpack_require__("../../../../../src/app/features-section/features-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features-section/features-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesSectionComponent);
    return FeaturesSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/information-section/information-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".member-card-container {\r\n  margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/information-section/information-section.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"team-information-anchor\" class=\"anchor\"></a>\n<mat-divider></mat-divider>\n<div id=\"team-information-section\" class=\"content-section\">\n  <h1 class=\"mat-title\">Team Information</h1>\n  <div class=\"content-section-content\">\n    <div class=\"member-card-container\" *ngFor=\"let member of MEMBERS\">\n      <app-team-member-info [name]=\"member.name\" [imageUrl]=\"member.imageUrl\"\n                            [information]=\"member.information\" [email]=\"member.email\">\n      </app-team-member-info>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/information-section/information-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationSectionComponent; });
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

var InformationSectionComponent = (function () {
    function InformationSectionComponent() {
        this.MEMBERS = [
            {
                name: 'Hung Do',
                information: [
                    'Fifth-year student at Georgia Institute of Technology pursing a BS in Computer Science',
                    'Will graduate May 2018',
                    'Full stack developer at ADP'
                ],
                email: 'hdo33@gatech.edu',
                imageUrl: 'assets/hd.jpg'
            }, {
                name: 'Kavir Jones',
                information: [
                    'Fifth-year student at Georgia Institute of Technology pursing a BS in Computer Science',
                    'Will graduate December 2018',
                ],
                email: 'kjones319@gatech.edu',
                imageUrl: 'assets/kj.jpg'
            }, {
                name: 'Matthew Kohlhaas',
                information: [
                    'Fifth-year student at Georgia Institute of Technology pursing a BS in Computer Science',
                    'Will graduate May 2018',
                    'Full stack software engineer with Angular, Spring, and Node Express experience'
                ],
                email: 'mkohlhaas3@gatech.edu',
                imageUrl: 'assets/mk.jpg'
            }, {
                name: 'Matt McCoy',
                information: [
                    'Fifth-year student at Georgia Institute of Technology pursing a BS in Computer Science',
                    'Will graduate May 2018',
                    'Has a passion for Android development'
                ],
                email: 'mmccoy37@gatech.edu',
                imageUrl: 'assets/mm.jpg'
            }
        ];
    }
    InformationSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-information-section',
            template: __webpack_require__("../../../../../src/app/information-section/information-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/information-section/information-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InformationSectionComponent);
    return InformationSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team-member-info/team-member-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".member-card {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  max-width: 240px;\r\n  margin: 0 16px 16px 16px;\r\n}\r\n\r\n.member-card .mat-card-header {\r\n  margin-top: 12px;\r\n}\r\n\r\n/deep/ .member-card .mat-card-header-text {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.member-card .mat-card-title {\r\n  font-size: 14pt;\r\n  font-weight: bold;\r\n}\r\n\r\n.member-card img {\r\n  display: block;\r\n  max-width: 240px;\r\n  border-radius: 240px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team-member-info/team-member-info.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"member-card\">\n  <img src=\"{{imageUrl}}\" />\n  <mat-card-header>\n    <mat-card-title>{{name}}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p *ngFor=\"let line of information\">{{line}}</p>\n    <p><b>Email:</b> <a href=\"mailto:{{email}}\">{{email}}</a></p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/team-member-info/team-member-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamMemberInfoComponent; });
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

var TeamMemberInfoComponent = (function () {
    function TeamMemberInfoComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TeamMemberInfoComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TeamMemberInfoComponent.prototype, "imageUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TeamMemberInfoComponent.prototype, "information", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TeamMemberInfoComponent.prototype, "email", void 0);
    TeamMemberInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team-member-info',
            template: __webpack_require__("../../../../../src/app/team-member-info/team-member-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team-member-info/team-member-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamMemberInfoComponent);
    return TeamMemberInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/title-bar/title-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-toolbar {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),\r\n  0 6px 10px 0 rgba(0,0,0,.14),\r\n  0 1px 18px 0 rgba(0,0,0,.12)\r\n}\r\n\r\n#main-toolbar .mat-toolbar-row {\r\n  min-height: 64px;\r\n  height: auto;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n#main-toolbar-title {\r\n  margin-right: auto;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n#main-toolbar-buttons .mat-button {\r\n  min-width: 76px;\r\n  padding: 0 6px;\r\n}\r\n\r\n#main-toolbar-spacer {\r\n  min-height: 64px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/title-bar/title-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"main-toolbar\" color=\"primary\">\n  <mat-toolbar-row>\n    <a id=\"main-toolbar-title\" href=\"#video-anchor\">Popup Games</a>\n    <span id=\"main-toolbar-buttons\">\n      <a mat-button id=\"main-toolbar-about-button\" href=\"#about-anchor\">About</a>\n      <a mat-button id=\"main-toolbar-features-button\" href=\"#features-anchor\">Features</a>\n      <a mat-button id=\"main-toolbar-team-button\" href=\"#team-information-anchor\">Team</a>\n    </span>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div id=\"main-toolbar-spacer\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/title-bar/title-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleBarComponent; });
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

var TitleBarComponent = (function () {
    function TitleBarComponent() {
    }
    TitleBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-title-bar',
            template: __webpack_require__("../../../../../src/app/title-bar/title-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/title-bar/title-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleBarComponent);
    return TitleBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/video-section/video-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#video-section .mat-toolbar-row {\r\n  height: auto;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  padding: 20px;\r\n}\r\n\r\n#video-section-video {\r\n  margin: auto;\r\n}\r\n\r\n#video-section-welcome-content {\r\n  max-width: 640px;\r\n  margin: 0 auto 0 auto;\r\n  padding: auto;\r\n  text-align: center;\r\n}\r\n\r\n#video-section-welcome-sentences {\r\n  margin: 12px;\r\n  white-space: normal;\r\n}\r\n\r\n#video-section-welcome-content .mat-raised-button {\r\n  margin: 6px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-section/video-section.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"video-anchor\" class=\"anchor\"></a>\r\n<mat-toolbar id=\"video-section\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span id=\"video-section-video\">\r\n      <iframe appVideo src=\"https://www.youtube.com/embed/vv-P8ctHUoI\" frameborder=\"0\" allow=\"encrypted-media\"\r\n              allowfullscreen>\r\n      </iframe>\r\n    </span>\r\n    <div id=\"video-section-welcome-content\">\r\n      <div id=\"video-section-welcome-sentences\">\r\n        Welcome to Popup Games, the app that let's you host and join games, sports, and events anywhere on the Georgia\r\n        Tech campus!\r\n      </div>\r\n      <div>\r\n        <a mat-raised-button id=\"video-section-download-button\" color=\"accent\"\r\n           href=\"https://play.google.com/store/apps/details?id=edu.gatech.mmccoy37.popupsports\">\r\n          Download Android App\r\n        </a>\r\n        <a mat-raised-button id=\"video-section-web-app-button\" href=\"http://popupgames.me\"\r\n           color=\"accent\">\r\n          Use Web Version\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/video-section/video-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSectionComponent; });
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

var VideoSectionComponent = (function () {
    function VideoSectionComponent() {
    }
    VideoSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video-section',
            template: __webpack_require__("../../../../../src/app/video-section/video-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-section/video-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoSectionComponent);
    return VideoSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/directives/video.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDirective; });
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

var DEFAULT_WIDTH = 800;
var VideoDirective = (function () {
    function VideoDirective(elementRef) {
        this.elementRef = elementRef;
        this.width = DEFAULT_WIDTH;
        this.maxWidth = '100%';
    }
    VideoDirective.prototype.onLoad = function () {
        this.setHeight();
    };
    VideoDirective.prototype.onResize = function () {
        this.setHeight();
    };
    VideoDirective.prototype.setHeight = function () {
        this.height = this.elementRef.nativeElement.clientWidth * 9 / 16;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.width.px'),
        __metadata("design:type", Number)
    ], VideoDirective.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.maxWidth'),
        __metadata("design:type", Object)
    ], VideoDirective.prototype, "maxWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('style.height.px'),
        __metadata("design:type", Number)
    ], VideoDirective.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('load', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VideoDirective.prototype, "onLoad", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VideoDirective.prototype, "onResize", null);
    VideoDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appVideo]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], VideoDirective);
    return VideoDirective;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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