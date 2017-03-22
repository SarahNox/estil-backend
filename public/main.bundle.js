webpackJsonp([1,4],{

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(619);


/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.mainService.url = this.router.url;
        this.mainService.checkHome();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(879),
            styles: [__webpack_require__(795)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(mainService, session, router, toastr) {
        this.mainService = mainService;
        this.session = session;
        this.router = router;
        this.toastr = toastr;
        this.user = {
            username: '',
            password: '',
            role: "user"
        };
        this.stylist = {
            username: '',
            password: '',
            role: "stylist"
        };
        this.webUser = {};
        this.stylistCheck = false;
        this.userCheck = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.mainService.url = this.router.url;
        this.mainService.checkHome();
    };
    LoginComponent.prototype.logIn = function (webUser) {
        var _this = this;
        if (webUser.role == "user") {
            this.webUser = this.user;
        }
        else if (webUser.role == "stylist") {
            this.webUser = this.stylist;
        }
        this.session.login(this.webUser)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/profile']);
                _this.toastr.success('You logged in successfully');
            }
            else {
                _this.toastr.error('Username or password is incorrect');
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(880),
            styles: [__webpack_require__(796)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfileComponent = (function () {
    function ProfileComponent(route, router, session, mainService, toastr, http, el, zone) {
        this.route = route;
        this.router = router;
        this.session = session;
        this.mainService = mainService;
        this.toastr = toastr;
        this.http = http;
        this.el = el;
        this.zone = zone;
        this.editCheck = false;
        this.days = {};
        this.langs = {};
        this.servs = {};
        this.BASE_URL = 'https://estil-backend.herokuapp.com';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getUserDetails(params['id']);
        });
        this.mainService.url = this.router.url;
        this.mainService.checkHome();
        this.id = localStorage.getItem('id');
        this.role = localStorage.getItem('role');
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: this.BASE_URL + "/profile/" + this.role + "/" + this.id
        });
        this.uploader.onSuccessItem = function (item, response) {
            _this.session.get()
                .subscribe(function (response) {
                _this.user = response.user;
                _this.appointments = response.app;
            });
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            console.log('Error', response);
        };
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        if (this.role == 'stylist') {
            this.updateLocationEventListener();
        }
    };
    ProfileComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        this.session.get()
            .subscribe(function (response) {
            _this.user = response.user;
            _this.appointments = response.app;
            _this.board = _this.user.board;
            _this.mainService.runPinterest();
        });
    };
    ProfileComponent.prototype.profileToggle = function () {
        var _this = this;
        if (this.editCheck != true) {
            this.editCheck = true;
        }
        else {
            this.user.availability = [];
            for (var day in this.days) {
                this.user.availability.push(day);
            }
            this.user.languages = [];
            for (var lang in this.langs) {
                this.user.languages.push(lang);
            }
            this.user.services = [];
            for (var serv in this.servs) {
                this.user.services.push(serv);
            }
            this.editCheck = false;
            this.session.edit(this.user)
                .subscribe(function (result) {
                console.log(result);
                if (result) {
                    _this.toastr.success('User updated');
                }
                else {
                    _this.toastr.error('Something went wrong');
                }
            });
        }
    };
    ProfileComponent.prototype.addAvatar = function () {
        this.uploader.uploadAll();
    };
    ProfileComponent.prototype.updateLocationEventListener = function () {
        var stylistLocation = document.getElementById('location');
        var stylistPlace = new google["maps"].places.Autocomplete(stylistLocation);
        console.log("stylistLocation", stylistLocation);
        console.log("stylistPlace", stylistPlace);
        google["maps"].event.addListener(stylistPlace, 'place_changed', function () {
            var _this = this;
            this.zone.run(function () {
                var place = stylistPlace.getPlace();
                _this.user.lng = place.geometry.location.lng();
                _this.user.lat = place.geometry.location.lat();
                _this.user.location = place.formatted_address;
            });
            this.session.edit(this.user)
                .subscribe(function (result) {
                if (result) {
                    _this.toastr.success('Location updated');
                }
                else {
                    _this.toastr.error('Something went wrong');
                }
            });
        }.bind(this));
    };
    ProfileComponent.prototype.here = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showMapWithMyLocation.bind(this));
        }
        else {
            alert('Oops, no geolocation support');
        }
    };
    ProfileComponent.prototype.showMapWithMyLocation = function (position) {
        var _this = this;
        this.zone.run(function () {
            _this.user.lng = position.coords.longitude;
            _this.user.lat = position.coords.latitude;
            var myLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var geocoder = new google.maps.Geocoder;
            var that = _this;
            geocoder.geocode({ 'location': { "lat": position.coords.latitude, "lng": position.coords.longitude } }, function (results, status) {
                that.user.location = results[0]["formatted_address"];
                that.session.edit(that.user)
                    .subscribe(function (result) {
                    if (result) {
                        that.toastr.success('Location updated');
                    }
                    else {
                        that.toastr.error('Something went wrong');
                    }
                });
            });
        });
    };
    ProfileComponent.prototype.updateBoard = function () {
        var _this = this;
        this.board = undefined;
        this.zone.run(function () {
            _this.session.edit(_this.user)
                .subscribe(function (result) {
                if (result) {
                    // this.router.navigate(['/profile']);
                    _this.board = _this.user.board;
                    _this.mainService.runPinterest();
                    _this.toastr.success('Board updated');
                }
                else {
                    _this.toastr.error('Something went wrong');
                }
            });
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(882),
            styles: [__webpack_require__(798)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__main_service__["a" /* MainService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _h) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(mainService, session, router, zone) {
        this.mainService = mainService;
        this.session = session;
        this.router = router;
        this.zone = zone;
        this.list = false;
        this.distance = 10;
        this.BASE_URL = 'https://estil-backend.herokuapp.com';
    }
    SearchComponent.prototype.shrinkMap = function (stylist) {
        var _this = this;
        document.getElementById("col-map").style.display = "none";
        this.list = true;
        var tableRows = document.getElementsByTagName("tr");
        for (var i = 0; i < tableRows.length; i++) {
            if (i % 2 == 0) {
                tableRows[i].style.backgroundColor = "white";
            }
            else {
                tableRows[i].style.backgroundColor = "#f8f8f8";
            }
        }
        event.srcElement.parentElement.parentElement.style.backgroundColor = "#b2e7ff";
        this.zone.run(function () {
            _this.stylist = stylist;
        });
    };
    SearchComponent.prototype.growMap = function () {
        document.getElementById("col-map").style.display = "block";
        this.list = false;
        var tableRows = document.getElementsByTagName("tr");
        for (var i = 0; i < tableRows.length; i++) {
            if (i % 2 == 0) {
                tableRows[i].style.backgroundColor = "white";
            }
            else {
                tableRows[i].style.backgroundColor = "#f8f8f8";
            }
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showMapWithMyLocation.bind(this));
        }
        else {
            alert('Oops, no geolocation support');
        }
        this.mainService.url = this.router.url;
        this.mainService.checkHome();
    };
    SearchComponent.prototype.showMapWithMyLocation = function (position) {
        var _this = this;
        //The latitude and longitude values obtained from HTML 5 API.
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var myPosition = {
            lat: latitude,
            lng: longitude
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: myPosition
        });
        //SET CURRENT LOCATION MARKER
        this.myLocationMarker = new google.maps.Marker({
            position: myPosition,
            map: map
        });
        this.myLocationMarker.setIcon('https://maps.google.com/mapfiles/ms/icons/green-dot.png');
        this.myLocationInfoWindow = new google.maps.InfoWindow({
            content: "You are here"
        });
        this.myLocationInfoWindow.open(map, this.myLocationMarker);
        //AUTOCOMPLETE
        // takes input and performs autocomplete
        var mapInput = document.getElementById('pac-input');
        var newArea = new google.maps.places.Autocomplete(mapInput);
        newArea.bindTo('bounds', map);
        setTimeout(function () {
            mapInput.style.opacity = "1";
        }, 1000);
        google.maps.event.addListener(newArea, 'place_changed', function () {
            var _this = this;
            var place = newArea.getPlace();
            if (!place.geometry) {
                return;
            }
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            }
            else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            //"YOU ARE HERE" MARKER CHANGES ON NEW LOCATION
            this.myLocationInfoWindow.close();
            this.myLocationMarker.setMap(null);
            this.myLocationMarker = new google.maps.Marker({
                position: { "lat": place.geometry.location.lat(), "lng": place.geometry.location.lng() },
                map: map,
            });
            this.myLocationMarker.setIcon('https://maps.google.com/mapfiles/ms/icons/green-dot.png');
            this.myLocationInfoWindow.open(map, this.myLocationMarker);
            //
            this.mainService.search([place.geometry.location.lng(), place.geometry.location.lat()])
                .subscribe(function (response) {
                _this.zone.run(function () {
                    var stylistData = {};
                    response.forEach(function (stylist, index) {
                        stylist.obj.distanceFromLocation = Number(stylist.dis.toFixed(2));
                        stylistData["stylist" + index] = stylist.obj;
                    });
                    _this.stylists = _this.createMarkers(stylistData, map, newArea);
                });
            });
        }.bind(this));
        //AUTOCOMPLETE END
        this.mainService.search([myPosition.lng, myPosition.lat])
            .subscribe(function (response) {
            console.log(response);
            _this.zone.run(function () {
                var stylistData = {};
                response.forEach(function (stylist, index) {
                    stylist.obj.distanceFromLocation = Number(stylist.dis.toFixed(2));
                    stylistData["stylist" + index] = stylist.obj;
                });
                _this.stylists = _this.createMarkers(stylistData, map, newArea);
                document.getElementById("table-headers").classList.remove("hidden");
            });
        });
    };
    SearchComponent.prototype.createMarkers = function (response, map, newArea) {
        var markers = [];
        for (var stylistMapInfo in response) {
            if (response.hasOwnProperty(stylistMapInfo) && typeof response[stylistMapInfo]["geolocation"] != "undefined") {
                var lat = response[stylistMapInfo]["geolocation"]["coordinates"][1];
                var lon = response[stylistMapInfo]["geolocation"]["coordinates"][0];
                var stylistMarker = {
                    lat: lat,
                    lng: lon
                };
                var addMarker = new google.maps.Marker({
                    position: stylistMarker,
                    map: map
                });
                var firstName = response[stylistMapInfo]["firstName"];
                var lastName = response[stylistMapInfo]["lastName"];
                var stylistName = firstName + " " + lastName;
                var content = "<a href='./view-stylist/" + firstName + "." + lastName + "'>" + stylistName + "</a><br>" + response[stylistMapInfo]["location"];
                var infoWindow = new google.maps.InfoWindow({
                    content: content
                });
                markers.push([addMarker, infoWindow, response[stylistMapInfo]]);
            }
        }
        markers.forEach(function (marker) {
            google.maps.event.addListener(marker[0], 'click', function () {
                marker[1].open(map, marker[0]);
            });
            google.maps.event.addListener(newArea, 'place_changed', function () {
                marker[1].close();
            });
        });
        var stylists = [];
        for (var stylistInfo in response) {
            if (typeof response[stylistInfo]["geolocation"] != "undefined") {
                stylists.push(response[stylistInfo]);
            }
        }
        //adding a marker to each stylist object
        markers.forEach(function (marker, index) {
            stylists[index].marker = marker[0];
        });
        return stylists;
    };
    SearchComponent.prototype.onChange = function (change) {
        var dropDowns = document.getElementsByTagName("select");
        var filters = [];
        for (var i = 0; i < dropDowns.length - 1; i++) {
            if (dropDowns[i].selectedIndex != 0) {
                filters.push(dropDowns[i].value);
            }
            else {
                filters.push(" ");
            }
        }
        //comparing the object property against the active filter
        this.stylists.forEach(function (marker) {
            if (filters[0] != " " && filters[0] != marker["price"] ||
                (filters[1] != " " && marker["availability"].indexOf(filters[1]) == -1) ||
                (filters[2] != " " && filters[2] != marker["mobile"] && marker["mobile"] != "Both") ||
                (filters[3] != " " && marker["languages"].indexOf(filters[3]) == -1) ||
                (filters[4] != " " && filters[4] != marker["expertise"] && marker["expertise"] != "Any")) {
                marker["marker"].setVisible(false);
            }
            else {
                marker["marker"].setVisible(true);
            }
        });
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(884),
            styles: [__webpack_require__(800)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _d) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(mainService, session, router, toastr, renderer, el) {
        this.mainService = mainService;
        this.session = session;
        this.router = router;
        this.toastr = toastr;
        this.renderer = renderer;
        this.el = el;
        this.newUser = {
            firstName: '',
            lastName: '',
            username: '',
            password: ''
        };
        this.newStylist = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            location: ''
        };
        this.stylistCheck = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.mainService.url = this.router.url;
        this.mainService.checkHome();
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.session.signup(this.newUser)
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/login']);
                _this.toastr.success('You have been registered, please log in');
            }
            else {
                _this.toastr.error('Something went wrong, please try again');
            }
        });
    };
    SignupComponent.prototype.signUpStylist = function () {
        var _this = this;
        this.session.signupStylist(this.newStylist)
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/login']);
                _this.toastr.success('You have been registered, please log in');
            }
            else {
                _this.toastr.error('Something went wrong, please try again');
            }
        });
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(885),
            styles: [__webpack_require__(801)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _f) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = (function () {
    function SessionService(router, http) {
        this.router = router;
        this.http = http;
        this.isAuth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.BASE_URL = 'https://estil-backend.herokuapp.com';
        this.token = localStorage.getItem('token');
        if (this.token != null) {
            this.isAuth.emit(true);
        }
        else {
            this.isAuth.emit(false);
        }
    }
    SessionService.prototype.get = function () {
        this.id = localStorage.getItem('id');
        this.role = localStorage.getItem('role');
        return this.http.get(this.BASE_URL + "/profile/" + this.role + "/" + this.id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.getBoard = function (id) {
        this.id = id;
        this.role = "stylist";
        return this.http.get(this.BASE_URL + "/profile/" + this.role + "/" + this.id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.edit = function (user) {
        this.id = localStorage.getItem('id');
        return this.http.put(this.BASE_URL + "/profile/" + this.role + "/" + this.id, user)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.getPrivateData = function () {
        return this.http.get("/profile")
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    SessionService.prototype.canActivate = function () {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/login']);
        this.isAuth.emit(true);
        return false;
    };
    SessionService.prototype.isAuthenticated = function () {
        return this.token != null ? true : false;
    };
    SessionService.prototype.signup = function (user) {
        return this.http.post(this.BASE_URL + "/signup", user)
            .map(function (response) {
            response.json();
            return true;
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err); });
    };
    SessionService.prototype.signupStylist = function (stylist) {
        return this.http.post(this.BASE_URL + "/stylist/signup", stylist)
            .map(function (response) {
            response.json();
            return true;
        })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(err); });
    };
    SessionService.prototype.login = function (webUser) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", webUser)
            .map(function (response) {
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                _this.isAuth.emit(true);
                localStorage.setItem('token', token);
                localStorage.setItem('id', response.json().user._id);
                localStorage.setItem('role', response.json().role);
                _this.router.navigate(['/profile']);
                // return true for successful login
                return true;
            }
            else {
                // return false for failed login
                return false;
            }
        });
    };
    SessionService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.isAuth.emit(false);
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        this.router.navigate(['/login']);
    };
    SessionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], SessionService);
    return SessionService;
    var _a, _b;
}());
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainService = (function () {
    function MainService(router, http) {
        this.router = router;
        this.http = http;
        this.BASE_URL = 'https://estil-backend.herokuapp.com';
        this.home = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MainService.prototype.runPinterest = function () {
        (function (w, d, scriptUrl) {
            var firstScript, newScript, hazPinIt;
            // generate an unique-ish global ID: hazPinIt_ plus today's Unix day
            hazPinIt = 'PIN_' + ~~(new Date().getTime() / 86400000);
            if (!w[hazPinIt]) {
                // don't run next time
                w[hazPinIt] = false;
                // avoid KB927917 error in IE8
                w.setTimeout(function () {
                    // load the bulk of pinit.js
                    firstScript = d.getElementsByTagName('SCRIPT')[0];
                    newScript = d.createElement('SCRIPT');
                    newScript.type = 'text/javascript';
                    newScript.async = true;
                    newScript.src = scriptUrl;
                    firstScript.parentNode.insertBefore(newScript, firstScript);
                }, 10);
            }
        }(window, document, '//assets.pinterest.com/js/pinit_main.js'));
    };
    MainService.prototype.checkHome = function () {
        if (this.url == "/home") {
            this.home.emit(true);
        }
        else {
            this.home.emit(false);
        }
    };
    MainService.prototype.search = function (location) {
        var locationObject = { "location": location };
        return this.http.post(this.BASE_URL + "/api/search", locationObject)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    MainService.prototype.sendAppointment = function (appointmentData) {
        return this.http.post(this.BASE_URL + "/api/appointment", appointmentData)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    MainService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    MainService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], MainService);
    return MainService;
    var _a, _b;
}());
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 618;


/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(740);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(session, toastr, vRef) {
        this.session = session;
        this.toastr = toastr;
        this.title = 'app works!';
        this.toastr.setRootViewContainerRef(vRef);
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(878),
            styles: [__webpack_require__(794)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_search_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_booking_booking_component__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__session_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_dropdown__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_validation__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_bootstrap__ = __webpack_require__(810);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_13__search_booking_booking_component__["a" /* BookingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_16_ngx_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_17_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_ng2_bootstrap__["a" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_ng2_bootstrap__["b" /* CollapseModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_15__main_service__["a" /* MainService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }),
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_service__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__search_search_component__["a" /* SearchComponent */],
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(session, mainService, router) {
        var _this = this;
        this.session = session;
        this.mainService = mainService;
        this.router = router;
        this.isCollapsed = true;
        this.session.isAuth
            .subscribe(function (isAuth) {
            _this.isAuth = isAuth;
        });
        if (this.session.token != null) {
            this.isAuth = true;
        }
        else {
            this.isAuth = false;
        }
        this.mainService.home
            .subscribe(function (home) {
            _this.home = home;
        });
        if (this.mainService.url == "/home") {
            this.home = true;
        }
        else {
            this.home = false;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.session.logout();
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(881),
            styles: [__webpack_require__(797)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__main_service__["a" /* MainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingComponent = (function () {
    function BookingComponent(session, mainService, zone, toastr) {
        this.session = session;
        this.mainService = mainService;
        this.zone = zone;
        this.toastr = toastr;
        this.hour = "12";
        this.minute = "00";
        this.ampm = "pm";
        this.BASE_URL = 'https://estil-backend.herokuapp.com';
    }
    BookingComponent.prototype.ngOnChanges = function () {
        var _this = this;
        //have to change board to undefined to reload the form in the html, the only way to get the pinterest board to update between stylists
        this.board = undefined;
        this.session.getBoard(this.stylist._id)
            .subscribe(function (response) {
            _this.zone.run(function () {
                _this.board = response.user.board;
                console.log(_this.board);
                console.log(_this.stylist);
                _this.mainService.runPinterest();
            });
        });
    };
    BookingComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.date = this.formatDate(date);
        this.userId = localStorage.getItem("id");
        console.log(this.stylist);
    };
    BookingComponent.prototype.formatDate = function (date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    BookingComponent.prototype.makeAppointment = function () {
        var _this = this;
        var requestTime = this.hour + ":" + this.minute + this.ampm;
        var stylistName = this.stylist.firstName + " " + this.stylist.lastName;
        var appointmentData = {
            stylist: this.stylist._id,
            stylistName: stylistName,
            user: this.userId,
            date: this.date,
            startTime: requestTime
        };
        this.mainService.sendAppointment(appointmentData)
            .subscribe(function (response) {
            console.log(response);
            if (response) {
                _this.toastr.success('Appointment saved to your Profile');
            }
            else {
                _this.toastr.error('Something went wrong');
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata('design:type', Object)
    ], BookingComponent.prototype, "stylist", void 0);
    BookingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(883),
            styles: [__webpack_require__(799)]
        }),
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__main_service__["a" /* MainService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _d) || Object])
    ], BookingComponent);
    return BookingComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=booking.component.js.map

/***/ }),

/***/ 740:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "#app-component {\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "img {\n  display: block;\n  margin: 0 auto;\n  width: 30%;\n  height: auto;\n  margin-top: 5%;\n}\n\nh2 {\n  text-align: center;\n  font-size: 2em;\n  line-height: 150%;\n}\n\n@media only screen and (max-width : 1200px) {\n  h2 {\n    font-size: 1.8em;\n  }\n}\n\n@media only screen and (max-width : 979px) {\n  img {\n    width: 40%;\n    margin-top: 12.5%\n  }\n\n  h2 {\n    font-size: 1.6em;\n  }\n}\n\n@media only screen and (max-width : 767px) {\n\n  img {\n    width: 60%;\n  }\n\n  h2 {\n    font-size: 4.25vw;\n  }\n}\n\n@media only screen and (max-width : 480px) {\n  img {\n    margin-top: 25%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "input {\n  display: block;\n  font-size: 18px;\n}\n\ninput[type=\"checkbox\"] {\n  display: inline;\n}\n\n.component {\n  margin-top: 5%;\n}\n\n.col1 {\n  margin-top: 5%;\n}\n\nlabel, input, button {\n  font-size: 18px;\n  margin-bottom: 2%;\n}\n\nbutton {\n  margin-top: 2%;\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "img {\n  margin-left: 5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "#location {\n  font-size: 18px;\n}\n\n.update-location {\n  margin-top: 15%;\n}\n\n.update-location input {\n  display: block;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.update-location p, .update-location button {\n  display: inline;\n  margin: 0 2%;\n}\n\n.update-location button {\n  font-size: 17px;\n}\n\nselect {\n  display: inline-block;;\n}\n\n.category {\n  width: 25%;\n  margin-bottom: 3%;\n}\n\n#board-url {\nwidth: 100%;\nmargin-bottom: 5%; \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "button, input[type=\"date\"] {\n  display: block\n}\n\nbutton {\n  margin-bottom: 3%;\n}\ninput[type=\"date\"] {\n  margin-bottom: 3%;\n}\n\nbutton, input[type=\"date\"], select:first-of-type {\n  margin-left: 20%;\n}\n\n#stylist-board {\n  width: 100%;\n  height: 400px;\n  border: 2px solid black;\n  margin-top: 4em;\n  text-align: center;\n}\n\n#make-appointment {\n  margin-top: 5em;\n}\n\n#board {\n  margin-top: 2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, ".search {\n  text-align: center;\n  border: none;\n  font-size: 28px;\n}\n\n#pac-input {\n  margin-left: 1%;\n  font-size: 26px;\n  color: black;\n  opacity: 1;\n  border: none;\n  text-decoration: underline;\n}\n\n.table-striped>tbody>tr:nth-child(odd),\n.table-striped>tbody>tr:nth-child(odd) {\n   background-color: white;\n }\n\n .table-striped>tbody>tr:nth-child(even),\n .table-striped>tbody>tr:nth-child(even) {\n    background-color: #f8f8f8;\n  }\n\n.first-row {\n  margin-top: 2%;\n}\n\nbutton {\n  color: white;\n  background-color: #3f6d7f;\n}\n\nbutton:hover {\n  color: white;\n  background-color: #192b33;\n}\n\ni {\n  text-align: center;\n  font-size: 1.6em;\n}\n\ni:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  cursor: pointer; cursor: hand;\n}\n\n#map {\n  width: 100%;\n  height: 400px;\n  background-color: white;\n  margin-top: 50px;\n}\n\n#listOfStylists {\n  margin-top: 50px;\n}\n\n#backToMap {\n  margin-top: 2%;\n}\n\ntable {\n  margin-left: 5%;\n}\n\nth {\n  padding-left: 3%;\n  padding-bottom: 1.5%;\n}\n\n#profile-header {\n  padding-left: 0;\n  padding-right: 3%;\n}\n\ntd {\n  padding: 1% 3%;\n}\n\n.stylist-name {\n  -webkit-transition: color .1s;\n  transition: color .1s;\n  color: #265C83;\n}\n\n.stylist-name:hover {\n  color: #72c5e5;\n  cursor: pointer; cursor: hand;\n}\n\n#hidden {\n  opacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "input {\n  display: block;\n}\n\n.component {\n  margin-top: 5%;\n}\n\n.col1 {\n  margin-top: 2.5%;\n}\n\nlabel, input, button {\n  margin-bottom: 2%;\n}\n\ninput[type=\"checkbox\"] {\n  display: inline;\n}\n\nbutton {\n  margin-top: 2%;\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 391,
	"./af.js": 391,
	"./ar": 397,
	"./ar-dz": 392,
	"./ar-dz.js": 392,
	"./ar-ly": 393,
	"./ar-ly.js": 393,
	"./ar-ma": 394,
	"./ar-ma.js": 394,
	"./ar-sa": 395,
	"./ar-sa.js": 395,
	"./ar-tn": 396,
	"./ar-tn.js": 396,
	"./ar.js": 397,
	"./az": 398,
	"./az.js": 398,
	"./be": 399,
	"./be.js": 399,
	"./bg": 400,
	"./bg.js": 400,
	"./bn": 401,
	"./bn.js": 401,
	"./bo": 402,
	"./bo.js": 402,
	"./br": 403,
	"./br.js": 403,
	"./bs": 404,
	"./bs.js": 404,
	"./ca": 405,
	"./ca.js": 405,
	"./cs": 406,
	"./cs.js": 406,
	"./cv": 407,
	"./cv.js": 407,
	"./cy": 408,
	"./cy.js": 408,
	"./da": 409,
	"./da.js": 409,
	"./de": 411,
	"./de-at": 410,
	"./de-at.js": 410,
	"./de.js": 411,
	"./dv": 412,
	"./dv.js": 412,
	"./el": 413,
	"./el.js": 413,
	"./en-au": 414,
	"./en-au.js": 414,
	"./en-ca": 415,
	"./en-ca.js": 415,
	"./en-gb": 416,
	"./en-gb.js": 416,
	"./en-ie": 417,
	"./en-ie.js": 417,
	"./en-nz": 418,
	"./en-nz.js": 418,
	"./eo": 419,
	"./eo.js": 419,
	"./es": 421,
	"./es-do": 420,
	"./es-do.js": 420,
	"./es.js": 421,
	"./et": 422,
	"./et.js": 422,
	"./eu": 423,
	"./eu.js": 423,
	"./fa": 424,
	"./fa.js": 424,
	"./fi": 425,
	"./fi.js": 425,
	"./fo": 426,
	"./fo.js": 426,
	"./fr": 429,
	"./fr-ca": 427,
	"./fr-ca.js": 427,
	"./fr-ch": 428,
	"./fr-ch.js": 428,
	"./fr.js": 429,
	"./fy": 430,
	"./fy.js": 430,
	"./gd": 431,
	"./gd.js": 431,
	"./gl": 432,
	"./gl.js": 432,
	"./he": 433,
	"./he.js": 433,
	"./hi": 434,
	"./hi.js": 434,
	"./hr": 435,
	"./hr.js": 435,
	"./hu": 436,
	"./hu.js": 436,
	"./hy-am": 437,
	"./hy-am.js": 437,
	"./id": 438,
	"./id.js": 438,
	"./is": 439,
	"./is.js": 439,
	"./it": 440,
	"./it.js": 440,
	"./ja": 441,
	"./ja.js": 441,
	"./jv": 442,
	"./jv.js": 442,
	"./ka": 443,
	"./ka.js": 443,
	"./kk": 444,
	"./kk.js": 444,
	"./km": 445,
	"./km.js": 445,
	"./ko": 446,
	"./ko.js": 446,
	"./ky": 447,
	"./ky.js": 447,
	"./lb": 448,
	"./lb.js": 448,
	"./lo": 449,
	"./lo.js": 449,
	"./lt": 450,
	"./lt.js": 450,
	"./lv": 451,
	"./lv.js": 451,
	"./me": 452,
	"./me.js": 452,
	"./mi": 453,
	"./mi.js": 453,
	"./mk": 454,
	"./mk.js": 454,
	"./ml": 455,
	"./ml.js": 455,
	"./mr": 456,
	"./mr.js": 456,
	"./ms": 458,
	"./ms-my": 457,
	"./ms-my.js": 457,
	"./ms.js": 458,
	"./my": 459,
	"./my.js": 459,
	"./nb": 460,
	"./nb.js": 460,
	"./ne": 461,
	"./ne.js": 461,
	"./nl": 463,
	"./nl-be": 462,
	"./nl-be.js": 462,
	"./nl.js": 463,
	"./nn": 464,
	"./nn.js": 464,
	"./pa-in": 465,
	"./pa-in.js": 465,
	"./pl": 466,
	"./pl.js": 466,
	"./pt": 468,
	"./pt-br": 467,
	"./pt-br.js": 467,
	"./pt.js": 468,
	"./ro": 469,
	"./ro.js": 469,
	"./ru": 470,
	"./ru.js": 470,
	"./se": 471,
	"./se.js": 471,
	"./si": 472,
	"./si.js": 472,
	"./sk": 473,
	"./sk.js": 473,
	"./sl": 474,
	"./sl.js": 474,
	"./sq": 475,
	"./sq.js": 475,
	"./sr": 477,
	"./sr-cyrl": 476,
	"./sr-cyrl.js": 476,
	"./sr.js": 477,
	"./ss": 478,
	"./ss.js": 478,
	"./sv": 479,
	"./sv.js": 479,
	"./sw": 480,
	"./sw.js": 480,
	"./ta": 481,
	"./ta.js": 481,
	"./te": 482,
	"./te.js": 482,
	"./tet": 483,
	"./tet.js": 483,
	"./th": 484,
	"./th.js": 484,
	"./tl-ph": 485,
	"./tl-ph.js": 485,
	"./tlh": 486,
	"./tlh.js": 486,
	"./tr": 487,
	"./tr.js": 487,
	"./tzl": 488,
	"./tzl.js": 488,
	"./tzm": 490,
	"./tzm-latn": 489,
	"./tzm-latn.js": 489,
	"./tzm.js": 490,
	"./uk": 491,
	"./uk.js": 491,
	"./uz": 492,
	"./uz.js": 492,
	"./vi": 493,
	"./vi.js": 493,
	"./x-pseudo": 494,
	"./x-pseudo.js": 494,
	"./yo": 495,
	"./yo.js": 495,
	"./zh-cn": 496,
	"./zh-cn.js": 496,
	"./zh-hk": 497,
	"./zh-hk.js": 497,
	"./zh-tw": 498,
	"./zh-tw.js": 498
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 802;


/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\" id=\"app-component\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\" id=\"home-component\">\n  <img src=\"../assets/images/estil.png\" alt=\"\">\n  <h2>Need a haircut?<br>Good start.</h2>\n</div>\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class='col-xs-4 col-xs-offset-1 col1'>\n    <form *ngIf=\"stylistCheck == false\">\n      <label for=\"username\">\n        Email\n      </label>\n    \t<input type=\"email\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Email Address\" required email/>\n    \t<label for=\"password\">\n        Password\n      </label>\n    \t<input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"..........\" required/>\n      <button class=\"btn btn-info\" (click)=\"logIn(user)\">Log in</button>\n    </form>\n\n    <form *ngIf=\"stylistCheck\">\n      <label for=\"username\">\n        Email\n      </label>\n    \t<input type=\"text\" name=\"username\" [(ngModel)]=\"stylist.username\" placeholder=\"Email Address\" required email/>\n      <label for=\"password\">\n        Password\n      </label>\n    \t<input type=\"password\" name=\"password\" [(ngModel)]=\"stylist.password\" placeholder=\"..........\" required/>\n      <button class=\"btn btn-info\" (click)=\"logIn(stylist)\">Stylist Log in</button>\n    </form>\n\n    <label for=\"resume\">Are you a stylist? Check here</label>\n    <input type=\"checkbox\" [(ngModel)]=\"stylistCheck\">\n\n    <p class=\"account-message\">\n      Don't have an account yet? <a [routerLink]=\"['/signup']\">Sign up</a>\n    </p>\n  </div>\n\n  <div class='col-xs-6'>\n    <img src=\"../assets/images/home-screen.png\" width=\"100%\" height=\"auto\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"isCollapsed = !isCollapsed\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"/\" *ngIf=\"!home\">\n    \t  <img src=\"../assets/images/estil-logo.png\" width=\"25%\" height=\"25%\" alt=\"\">\n\t\t  </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" [collapse]=\"isCollapsed\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!isAuth\"><a [routerLink]=\"['home']\">Home</a></li>\n        <li *ngIf=\"!isAuth\"><a [routerLink]=\"['login']\">Login</a></li>\n        <li *ngIf=\"isAuth\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li><a [routerLink]=\"['search']\">Search</a></li>\n        <li *ngIf=\"isAuth\"><a [routerLink]=\"['']\" (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n</nav>\n"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "<script async defer src=\"//assets.pinterest.com/js/pinit.js\"></script>\n\n<div class=\"col-lg-3 col-md-4 col-xs-6 thumb profile-pic\">\n  <form>\n    <div class=\"form-group\">\n      <div *ngIf=\"user\">\n        <div *ngIf=\"!user.avatar\">\n          <a class=\"thumbnail\" href=\"#\">\n            <img src=\"../assets/images/default-avatar.png\">\n          </a>\n        </div>\n        <div *ngIf=\"user.avatar\">\n          <a class=\"thumbnail\" href=\"#\">\n            <img [src]=\"user.avatar\" />\n          </a>\n        </div>\n      </div>\n      <input type=\"file\" class=\"form-control\" name=\"avatar\" ng2FileSelect [uploader]=\"uploader\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addAvatar()\">Add new avatar</button>\n  </form>\n  <ng-container *ngIf=\"role == 'stylist'\">\n  \t<div class=\"update-location\">\n\t\t<h4>Update your location fast!</h4>\n\t\t<input type=\"text\" id=\"location\" placeholder=\"Type here\">\n\t\t<p>or click</p>\n\t\t<button class=\"btn btn-success\" (click)=\"here()\">Here I am!</button>\n\t  </div>\n  </ng-container>\n</div>\n\n<div class=\"col-lg-5 col-md-8 col-xs-6\">\n  <ng-container *ngIf=\"role == 'user'\">\n\t\t<form *ngIf=\"!editCheck\">\n\t    <div *ngIf=\"user\">\n\t      <p> Email: {{ user.username }} </p>\n\t      <p> Name: {{ user.firstName }} {{ user.lastName }} </p>\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"profileToggle()\">Edit profile</button><hr>\n        <table style=\"width: 100%\">\n          <tr>\n            <th>Stylist</th>\n            <th>Date</th>\n            <th>Time</th>\n          </tr>\n          <ng-container *ngFor=\"let appointment of appointments\">\n            <tr>\n              <td>{{appointment.stylistName}}</td>\n              <td>{{appointment.date | date}}</td>\n              <td>{{appointment.startTime}}</td>\n            </tr>\n          </ng-container>\n        </table>\n\t    </div>\n\t  </form>\n\t  <form *ngIf=\"editCheck\">\n\t    <div *ngIf=\"user\">\n\t      <label for=\"username\">Email:</label>\n\t      <input type=\"text\" name=\"username\" value=\"{{ user.username }}\" [(ngModel)]=\"user.username\"><br>\n\t      <button class=\"btn btn-info\" (click)=\"profileToggle()\">Update</button>\n\t    </div>\n\t  </form>\n\t</ng-container>\n\t<ng-container *ngIf=\"role == 'stylist'\">\n\t\t<form *ngIf=\"!editCheck\">\n\t\t\t<div *ngIf=\"user\">\n\t\t\t\t<p> Email: {{ user.username }} </p>\n\t\t\t\t<p> Name: {{ user.firstName }} {{ user.lastName }} </p>\n\t\t\t\t<p> Location: {{ user.location }}</p>\n        <p> Availability: {{ user.availability }}</p>\n        <p> Price: {{ user.price }}</p>\n        <p> Languages: {{ user.languages }}</p>\n        <p> Services: {{ user.services }}</p>\n\n\n\n        <button class=\"btn btn-primary\" (click)=\"profileToggle()\">Edit profile</button><hr>\n        <table style=\"width: 100%\">\n          <tr>\n            <th>Customer</th>\n            <th>Date</th>\n            <th>Time</th>\n          </tr>\n          <ng-container *ngFor=\"let appointment of appointments\">\n            <tr>\n              <td>{{appointment.userName}}</td>\n              <td>{{appointment.date | date}}</td>\n              <td>{{appointment.startTime}}</td>\n            </tr>\n          </ng-container>\n        </table>\n\t\t\t</div>\n\t\t</form>\n\t\t<form *ngIf=\"editCheck\">\n\t\t\t<div *ngIf=\"user\">\n\t\t\t\t<label class=\"category\" for=\"username\">Email:</label>\n\t\t\t\t<input type=\"text\" name=\"username\" value=\"{{ user.username }}\" [(ngModel)]=\"user.username\"><br>\n\t\t\t\t<label class=\"category\" for=\"firstName\">First Name:</label>\n\t\t\t\t<input type=\"text\" name=\"firstName\" value=\"{{ user.firstName }}\" [(ngModel)]=\"user.firstName\"><br>\n\t\t\t\t<label class=\"category\" for=\"lastName\">Last Name:</label>\n\t\t\t\t<input type=\"text\" name=\"lastName\" value=\"{{ user.lastName }}\" [(ngModel)]=\"user.lastName\"><br>\n\t\t\t\t<label class=\"category\" for=\"availability\">Availability</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Monday\" [(ngModel)]=\"days.Monday\">M</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Tuesday\" [(ngModel)]=\"days.Tuesday\">T</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Wednesday\" [(ngModel)]=\"days.Wednesday\">W</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Thursday\" [(ngModel)]=\"days.Thursday\">T</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Friday\" [(ngModel)]=\"days.Friday\">F</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Saturday\" [(ngModel)]=\"days.Saturday\">S</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Sunday\" [(ngModel)]=\"days.Sunday\">S</label><br>\n        <label class=\"category\" for=\"price\">Price</label>\n          <select name=\"price\" [(ngModel)]=\"user.price\" id=\"\">\n            <option value=\"€\">€</option>\n            <option value=\"€€\">€€</option>\n            <option value=\"€€€\">€€€</option>\n          </select>\n          <br>\n        <label class=\"category\" for=\"languages\">Languages</label>\n          <label><input type=\"checkbox\" name=\"Catalan\" [(ngModel)]=\"langs.Catalan\">Catalan</label>\n          <label><input type=\"checkbox\" name=\"Spanish\" [(ngModel)]=\"langs.Spanish\">Spanish</label>\n          <label><input type=\"checkbox\" name=\"English\" [(ngModel)]=\"langs.English\">English</label><br>\n        <label class=\"category\" for=\"services\">Services</label>\n          <label><input type=\"checkbox\" name=\"Unisex\" [(ngModel)]=\"servs.Unisex\">Unisex</label>\n          <label><input type=\"checkbox\" name=\"Men\" [(ngModel)]=\"servs.Men\">Men</label>\n          <label><input type=\"checkbox\" name=\"Women\" [(ngModel)]=\"servs.Women\">Women</label><br>\n        <br>\n\t\t\t\t<button class=\"btn btn-info\" (click)=\"profileToggle()\">Update</button>\n\t\t\t</div>\n\t\t</form>\n\t</ng-container>\n\n</div>\n\n<div class=\"col-lg-4 thumb gallery\">\n  <h3 class=\"text-center\">Your Board</h3>\n  <form *ngIf=\"board != undefined\">\n    <input type=\"input\" name=\"board\" value=\"{{ user.board }}\" placeholder=\"https://es.pinterest.com/your/board/\" [(ngModel)]=\"user.board\" (ngModelChange)=\"updateBoard()\" id=\"board-url\">\n    <a data-pin-do=\"embedBoard\" data-pin-board-width=\"400\" data-pin-scale-height=\"400\" data-pin-scale-width=\"80\" href=\"{{user.board}}\"></a>\n  </form>\n</div>\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-6\" id=\"make-appointment\">\n    <button class=\"btn btn-success\" (click)=\"makeAppointment()\">Make an appointment</button>\n    <input type=\"date\" [(ngModel)]=\"date\">\n    <select name=\"\" id=\"\" [(ngModel)]=\"hour\">\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n      <option value=\"6\">6</option>\n      <option value=\"7\">7</option>\n      <option value=\"8\">8</option>\n      <option value=\"9\">9</option>\n      <option value=\"10\">10</option>\n      <option value=\"11\">11</option>\n      <option value=\"12\">12</option>\n    </select>\n    <select name=\"\" id=\"\" [(ngModel)]=\"minute\">\n      <option value=\"00\">00</option>\n      <option value=\"15\">15</option>\n      <option value=\"30\">30</option>\n      <option value=\"45\">45</option>\n    </select>\n    <select name=\"\" id=\"\" [(ngModel)]=\"ampm\">\n      <option value=\"am\">am</option>\n      <option value=\"pm\">pm</option>\n    </select>\n  </div>\n\n  <div class=\"col-xs-6\" id=\"board\">\n\n    <form *ngIf=\"board\">\n      <a data-pin-do=\"embedBoard\" data-pin-board-width=\"400\" data-pin-scale-height=\"400\" data-pin-scale-width=\"80\" [href]=\"board\" id=\"board\"></a>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<div class=\"row search\">\n  <h2>What's your location? <input type=\"text\" id=\"pac-input\" name=\"search\" placeholder=\"type here...\"></h2>\n</div>\n<div class=\"row first-row\">\n     <div class=\"col-xs-2\">\n       <label for=\"price\">Price</label>\n       <select id=\"price\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Add filter</option>\n             <option value=\"€\">€</option>\n             <option value=\"€€\">€€</option>\n             <option value=\"€€€\">€€€</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"day\">Day</label>\n       <select id=\"day\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Today</option>\n             <option value=\"Monday\">Monday</option>\n             <option value=\"Tuesday\">Tuesday</option>\n             <option value=\"Wednesday\">Wednesday</option>\n             <option value=\"Thursday\">Thursday</option>\n             <option value=\"Friday\">Friday</option>\n             <option value=\"Saturday\">Saturday</option>\n             <option value=\"Sunday\">Sunday</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"where\">Home visit?</label>\n       <select id=\"where\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Don't mind</option>\n             <option value=\"Home visit\">My place</option>\n             <option value=\"Salon\">Their place</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"style\">Language</label>\n       <select id=\"style\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Any</option>\n             <option value=\"Spanish\">Spanish</option>\n             <option value=\"Catalan\">Catalan</option>\n             <option value=\"English\">English</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"gender\">Gender</label>\n       <select id=\"gender\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Unisex</option>\n             <option value=\"Women\">Women only</option>\n             <option value=\"Men\">Men only</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"distance\">Distance</label>\n       <select id=\"distance\" class=\"dropdown form-control\" [(ngModel)]=\"distance\">\n             <option value=10>Add filter</option>\n             <option value=2>2km</option>\n             <option value=5>5km</option>\n       </select>\n     </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-6\" id=\"col-map\">\n    <div id=\"map\"></div>\n  </div>\n\n  <div class=\"col-xs-6\">\n    <button (click)=\"growMap()\" *ngIf=\"list\" class=\"btn\" id=\"backToMap\">Back to Map</button>\n    <table class=\"table-striped\" id=\"listOfStylists\">\n      <tr id=\"table-headers\" class=\"hidden\">\n        <th id=\"profile-header\">Profile</th>\n        <th>Name</th>\n        <th>Location</th>\n        <th>Distance</th>\n      </tr>\n      <tr *ngFor=\"let stylist of stylists\">\n        <ng-container *ngIf=\"stylist.marker.visible && stylist.distanceFromLocation < distance\">\n          <td><i (click)=\"shrinkMap(stylist)\" class=\"fa fa-user\" aria-hidden=\"true\"></i></td>\n          <td class=\"stylist-name\">{{ stylist.firstName }} {{stylist.lastName}}</td>\n          <td>{{ stylist.location }}</td>\n          <td>{{ stylist.distanceFromLocation}}km</td>\n        </ng-container>\n      </tr>\n    </table>\n  </div>\n  <div class=\"col-xs-6\" *ngIf=\"this.list\">\n    <app-booking [stylist]=\"stylist\"></app-booking>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class='col-xs-4 col-xs-offset-1 col1'>\n    <form *ngIf=\"stylistCheck == false\">\n\n      <label for=\"firstName\">\n        First Name\n      </label>\n    \t<input type=\"text\" name=\"firstName\" [(ngModel)]=\"newUser.firstName\" required/>\n      <label for=\"lastName\">\n        Last Name\n      </label>\n    \t<input type=\"text\" name=\"lastName\" [(ngModel)]=\"newUser.lastName\" required/>\n      <label for=\"username\">\n        Email\n      </label>\n    \t<input type=\"email\" name=\"username\" [(ngModel)]=\"newUser.username\" placeholder=\"Email Address\" required email/>\n    \t<label for=\"password\">\n        Password\n      </label>\n    \t<input type=\"password\" name=\"password\" [(ngModel)]=\"newUser.password\" placeholder=\"..........\" required/>\n      <button class=\"btn btn-info\" (click)=\"signUp()\">Sign Up</button>\n    </form>\n\n    <form *ngIf=\"stylistCheck\">\n      <label for=\"firstName\">\n        First Name\n      </label>\n    \t<input type=\"text\" name=\"firstName\" [(ngModel)]=\"newStylist.firstName\" required/>\n      <label for=\"lastName\">\n        Last Name\n      </label>\n    \t<input type=\"text\" name=\"lastName\" [(ngModel)]=\"newStylist.lastName\" required/>\n      <label for=\"username\">\n        Email\n      </label>\n    \t<input type=\"text\" name=\"username\" [(ngModel)]=\"newStylist.username\" placeholder=\"Email Address\" required email/>\n      <label for=\"password\">\n        Password\n      </label>\n    \t<input type=\"password\" name=\"password\" [(ngModel)]=\"newStylist.password\" placeholder=\"..........\" required/>\n      <label for=\"location\">\n        Location\n      </label>\n      <input type=\"text\" name=\"location\" [(ngModel)]=\"newStylist.location\" required id=\"stylist-location\"/>\n      <!-- <label for=\"resume\">\n        Resume/Portfolio\n      </label>\n      <input type=\"file\" name=\"resume\" [(ngModel)]=\"newStylist.resume\" placeholder=\"..........\" required/> -->\n      <button class=\"btn btn-info\" (click)=\"signUpStylist()\">Apply to join</button>\n    </form>\n    <!-- <input type=\"text\" name=\"location\" id=\"location\" required/> -->\n\n    <label for=\"resume\">Are you a stylist? Check here</label>\n    <input type=\"checkbox\" [(ngModel)]=\"stylistCheck\">\n\n    <p class=\"account-message\">\n      Do you already have an account? <a [routerLink]=\"['/login']\">Login</a>\n    </p>\n  </div>\n\n\n  <div class='col-xs-6'>\n    <img src=\"../assets/images/home-screen.png\" width=\"100%\" height=\"auto\" alt=\"\">\n  </div>\n</div>\n"

/***/ })

},[1145]);
//# sourceMappingURL=main.bundle.js.map
