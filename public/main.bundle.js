webpackJsonp([1,4],{

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService(router, http) {
        this.router = router;
        this.http = http;
        this.BASE_URL = 'https://estil-backend.herokuapp.com';
    }
    SearchService.prototype.search = function (location) {
        var locationObject = { "location": location };
        return this.http.post(this.BASE_URL + "/api/search", locationObject)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    SearchService.prototype.sendAppointment = function (appointmentData) {
        return this.http.post(this.BASE_URL + "/api/appointment", appointmentData)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    SearchService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], SearchService);
    return SearchService;
    var _a, _b;
}());
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
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
    function HomeComponent(session, router) {
        this.session = session;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.session.url = this.router.url;
        this.session.checkHome();
        console.log(this.session.url);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(659),
            styles: [__webpack_require__(598)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
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
    function LoginComponent(session, router, toastr) {
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
        this.session.url = this.router.url;
        this.session.checkHome();
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
            template: __webpack_require__(660),
            styles: [__webpack_require__(599)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(149);
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
    function ProfileComponent(route, router, session, toastr, http, el, zone) {
        this.route = route;
        this.router = router;
        this.session = session;
        this.toastr = toastr;
        this.http = http;
        this.el = el;
        this.zone = zone;
        this.editCheck = false;
        this.days = {};
        this.langs = {};
        this.servs = {};
        this.BASE_URL = 'http://localhost:3000';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getUserDetails(params['id']);
        });
        this.session.url = this.router.url;
        this.session.checkHome();
        this.id = localStorage.getItem('id');
        this.role = localStorage.getItem('role');
        this.uploader = new __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload__["FileUploader"]({
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
            console.log(_this.user);
            _this.session.runPinterest();
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
                    _this.session.runPinterest();
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
            template: __webpack_require__(662),
            styles: [__webpack_require__(601)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _g) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(40);
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
    function SearchComponent(searchService, session, router, zone) {
        this.searchService = searchService;
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
        this.session.url = this.router.url;
        this.session.checkHome();
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
        this.myLocationMarker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
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
            this.myLocationMarker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
            this.myLocationInfoWindow.open(map, this.myLocationMarker);
            //
            this.searchService.search([place.geometry.location.lng(), place.geometry.location.lat()])
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
        this.searchService.search([myPosition.lng, myPosition.lat])
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
            template: __webpack_require__(664),
            styles: [__webpack_require__(603)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__search_service__["a" /* SearchService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__session_service__["a" /* SessionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _d) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
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
    function SignupComponent(session, router, toastr, renderer, el) {
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
        this.session.url = this.router.url;
        this.session.checkHome();
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
            template: __webpack_require__(665),
            styles: [__webpack_require__(604)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _e) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(391);
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
        this.home = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.BASE_URL = 'https://estil-backend.herokuapp.com';
        this.token = localStorage.getItem('token');
        if (this.token != null) {
            this.isAuth.emit(true);
        }
        else {
            this.isAuth.emit(false);
        }
    }
    SessionService.prototype.runPinterest = function () {
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
    SessionService.prototype.checkHome = function () {
        if (this.url == "/home") {
            this.home.emit(true);
        }
        else {
            this.home.emit(false);
        }
    };
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

/***/ 421:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 421;


/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(543);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__(79);
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
            template: __webpack_require__(658),
            styles: [__webpack_require__(597)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_booking_booking_component__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_dropdown__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_validation__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_file_upload__);
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
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_11__search_booking_booking_component__["a" /* BookingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_16_ngx_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_17_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_18_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_13__search_service__["a" /* SearchService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_service__ = __webpack_require__(36);
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

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(40);
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
    function NavbarComponent(session, router) {
        var _this = this;
        this.session = session;
        this.router = router;
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
        this.session.home
            .subscribe(function (home) {
            _this.home = home;
        });
        if (this.session.url == "/home") {
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
            template: __webpack_require__(661),
            styles: [__webpack_require__(600)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__(79);
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
    function BookingComponent(session, search, zone, toastr) {
        this.session = session;
        this.search = search;
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
                _this.session.runPinterest();
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
        this.search.sendAppointment(appointmentData)
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
            template: __webpack_require__(663),
            styles: [__webpack_require__(602)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === 'function' && _d) || Object])
    ], BookingComponent);
    return BookingComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=booking.component.js.map

/***/ }),

/***/ 543:
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

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "img {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "input {\n  display: block;\n  font-size: 18px;\n}\n\ninput[type=\"checkbox\"] {\n  display: inline;\n}\n\n.component {\n  margin-top: 5%;\n}\n\n.col1 {\n  margin-top: 5%;\n}\n\nlabel, input, button {\n  font-size: 18px;\n  margin-bottom: 2%;\n}\n\nbutton {\n  margin-top: 2%;\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "#location {\n  font-size: 18px;\n}\n\n.update-location {\n  margin-top: 15%;\n}\n\n.update-location input {\n  display: block;\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.update-location p, .update-location button {\n  display: inline;\n  margin: 0 2%;\n}\n\n.update-location button {\n  font-size: 17px;\n}\n\nselect {\n  display: inline-block;;\n}\n\n.category {\n  width: 25%;\n  margin-bottom: 3%;\n}\n\n#board-url {\nwidth: 100%;\nmargin-bottom: 5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "button, input[type=\"date\"] {\n  display: block\n}\n\nbutton {\n  margin-top: 10%;\n  margin-bottom: 3%;\n}\ninput[type=\"date\"] {\n  margin-bottom: 3%;\n}\n\nbutton, input[type=\"date\"], select:first-of-type {\n  margin-left: 15%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, ".search {\n  text-align: center;\n  border: none;\n  font-size: 28px;\n}\n\n#pac-input {\n  margin-left: 1%;\n  font-size: 26px;\n  color: black;\n  opacity: 1;\n  border: none;\n  text-decoration: underline;\n}\n\n.table-striped>tbody>tr:nth-child(odd),\n.table-striped>tbody>tr:nth-child(odd) {\n   background-color: white;\n }\n\n .table-striped>tbody>tr:nth-child(even),\n .table-striped>tbody>tr:nth-child(even) {\n    background-color: #f8f8f8;\n  }\n\n.first-row {\n  margin-top: 2%;\n}\n\nbutton {\n  color: white;\n  background-color: #3f6d7f;\n}\n\nbutton:hover {\n  color: white;\n  background-color: #192b33;\n}\n\ni {\n  text-align: center;\n  font-size: 1.6em;\n}\n\ni:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  cursor: pointer; cursor: hand;\n}\n\n#map {\n  width: 100%;\n  height: 400px;\n  background-color: white;\n  margin-top: 50px;\n}\n\n#listOfStylists {\n  margin-top: 50px;\n}\n\n#backToMap {\n  margin-top: 2%;\n}\n\ntable {\n  margin-left: 5%;\n}\n\nth {\n  padding-left: 3%;\n  padding-bottom: 1.5%;\n}\n\n#profile-header {\n  padding-left: 0;\n  padding-right: 3%;\n}\n\ntd {\n  padding: 1% 3%;\n}\n\n.stylist-name {\n  -webkit-transition: color .1s;\n  transition: color .1s;\n  color: #265C83;\n}\n\n.stylist-name:hover {\n  color: #72c5e5;\n  cursor: pointer; cursor: hand;\n}\n\n#hidden {\n  opacity: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "input {\n  display: block;\n}\n\n.component {\n  margin-top: 5%;\n}\n\n.col1 {\n  margin-top: 2.5%;\n}\n\nlabel, input, button {\n  margin-bottom: 2%;\n}\n\ninput[type=\"checkbox\"] {\n  display: inline;\n}\n\nbutton {\n  margin-top: 2%;\n  font-size: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 658:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row\">\n\t<div class=\"container\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/images/estil.png\" alt=\"\">\n"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class='col-xs-4 col-xs-offset-1 col1'>\n    <form *ngIf=\"stylistCheck == false\">\n      <label for=\"username\">\n        Email\n      </label>\n    \t<input type=\"email\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Email Address\" required email/>\n    \t<label for=\"password\">\n        Password\n      </label>\n    \t<input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"..........\" required/>\n      <button class=\"btn btn-info\" (click)=\"logIn(user)\">Log in</button>\n    </form>\n\n    <form *ngIf=\"stylistCheck\">\n      <label for=\"username\">\n        Email\n      </label>\n    \t<input type=\"text\" name=\"username\" [(ngModel)]=\"stylist.username\" placeholder=\"Email Address\" required email/>\n      <label for=\"password\">\n        Password\n      </label>\n    \t<input type=\"password\" name=\"password\" [(ngModel)]=\"stylist.password\" placeholder=\"..........\" required/>\n      <button class=\"btn btn-info\" (click)=\"logIn(stylist)\">Stylist Log in</button>\n    </form>\n\n    <label for=\"resume\">Are you a stylist? Check here</label>\n    <input type=\"checkbox\" [(ngModel)]=\"stylistCheck\">\n\n    <p class=\"account-message\">\n      Don't have an account yet? <a [routerLink]=\"['/signup']\">Sign up</a>\n    </p>\n  </div>\n\n  <div class='col-xs-6'>\n    <img src=\"../assets/images/home-screen.png\" width=\"100%\" height=\"auto\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"/\" *ngIf=\"!home\">\n    \t  <img src=\"../assets/images/estil-logo.png\" width=\"25%\" height=\"25%\" alt=\"\">\n\t\t  </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <li *ngIf=\"!isAuth\"><a [routerLink]=\"['home']\">Home</a></li>\n        <li *ngIf=\"!isAuth\"><a [routerLink]=\"['login']\">Login</a></li>\n        <!-- <li *ngIf=\"!isAuth\"><a [routerLink]=\"['signup']\">Signup</a></li> -->\n        <li *ngIf=\"isAuth\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n        <li><a [routerLink]=\"['search']\">Search</a></li>\n        <li *ngIf=\"isAuth\"><a [routerLink]=\"['']\" (click)=\"logout()\">Logout</a></li>\n        <p>{{url}}</p>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container -->\n</nav>\n"

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "<script async defer src=\"//assets.pinterest.com/js/pinit.js\"></script>\n\n<div class=\"col-lg-3 col-md-4 col-xs-6 thumb profile-pic\">\n  <form>\n    <div class=\"form-group\">\n      <div *ngIf=\"user\">\n        <div *ngIf=\"!user.avatar\">\n          <a class=\"thumbnail\" href=\"#\">\n            <img src=\"../assets/images/default-avatar.png\">\n          </a>\n        </div>\n        <div *ngIf=\"user.avatar\">\n          <a class=\"thumbnail\" href=\"#\">\n            <img [src]=\"user.avatar\" />\n          </a>\n        </div>\n      </div>\n      <input type=\"file\" class=\"form-control\" name=\"avatar\" ng2FileSelect [uploader]=\"uploader\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"addAvatar()\">Add new avatar</button>\n  </form>\n  <ng-container *ngIf=\"role == 'stylist'\">\n  \t<div class=\"update-location\">\n\t\t<h4>Update your location fast!</h4>\n\t\t<input type=\"text\" id=\"location\" placeholder=\"Type here\">\n\t\t<p>or click</p>\n\t\t<button class=\"btn btn-success\" (click)=\"here()\">Here I am!</button>\n\t  </div>\n  </ng-container>\n</div>\n\n<div class=\"col-lg-5 col-md-8 col-xs-6\">\n  <ng-container *ngIf=\"role == 'user'\">\n\t\t<form *ngIf=\"!editCheck\">\n\t    <div *ngIf=\"user\">\n\t      <p> Email: {{ user.username }} </p>\n\t      <p> Name: {{ user.firstName }} {{ user.lastName }} </p>\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"profileToggle()\">Edit profile</button><hr>\n        <table style=\"width: 100%\">\n          <tr>\n            <th>Stylist</th>\n            <th>Date</th>\n            <th>Time</th>\n          </tr>\n          <ng-container *ngFor=\"let appointment of appointments\">\n            <tr>\n              <td>{{appointment.stylistName}}</td>\n              <td>{{appointment.date | date}}</td>\n              <td>{{appointment.startTime}}</td>\n            </tr>\n          </ng-container>\n        </table>\n\t    </div>\n\t  </form>\n\t  <form *ngIf=\"editCheck\">\n\t    <div *ngIf=\"user\">\n\t      <label for=\"username\">Email:</label>\n\t      <input type=\"text\" name=\"username\" value=\"{{ user.username }}\" [(ngModel)]=\"user.username\"><br>\n\t      <button class=\"btn btn-info\" (click)=\"profileToggle()\">Update</button>\n\t    </div>\n\t  </form>\n\t</ng-container>\n\t<ng-container *ngIf=\"role == 'stylist'\">\n\t\t<form *ngIf=\"!editCheck\">\n\t\t\t<div *ngIf=\"user\">\n\t\t\t\t<p> Email: {{ user.username }} </p>\n\t\t\t\t<p> Name: {{ user.firstName }} {{ user.lastName }} </p>\n\t\t\t\t<p> Location: {{ user.location }}</p>\n        <p> Availability: {{ user.availability }}</p>\n        <p> Price: {{ user.price }}</p>\n        <p> Languages: {{ user.languages }}</p>\n        <p> Services: {{ user.services }}</p>\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"profileToggle()\">Edit profile</button><hr>\n        <table style=\"width: 100%\">\n          <tr>\n            <th>Customer</th>\n            <th>Date</th>\n            <th>Time</th>\n          </tr>\n          <ng-container *ngFor=\"let appointment of appointments\">\n            <tr>\n              <td>{{appointment.userName}}</td>\n              <td>{{appointment.date | date}}</td>\n              <td>{{appointment.startTime}}</td>\n            </tr>\n          </ng-container>\n        </table>\n\t\t\t</div>\n\t\t</form>\n\t\t<form *ngIf=\"editCheck\">\n\t\t\t<div *ngIf=\"user\">\n\t\t\t\t<label class=\"category\" for=\"username\">Email:</label>\n\t\t\t\t<input type=\"text\" name=\"username\" value=\"{{ user.username }}\" [(ngModel)]=\"user.username\"><br>\n\t\t\t\t<label class=\"category\" for=\"firstName\">First Name:</label>\n\t\t\t\t<input type=\"text\" name=\"firstName\" value=\"{{ user.firstName }}\" [(ngModel)]=\"user.firstName\"><br>\n\t\t\t\t<label class=\"category\" for=\"lastName\">Last Name:</label>\n\t\t\t\t<input type=\"text\" name=\"lastName\" value=\"{{ user.lastName }}\" [(ngModel)]=\"user.lastName\"><br>\n\t\t\t\t<label class=\"category\" for=\"availability\">Availability</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Monday\" [(ngModel)]=\"days.Monday\">M</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Tuesday\" [(ngModel)]=\"days.Tuesday\">T</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Wednesday\" [(ngModel)]=\"days.Wednesday\">W</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Thursday\" [(ngModel)]=\"days.Thursday\">T</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Friday\" [(ngModel)]=\"days.Friday\">F</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Saturday\" [(ngModel)]=\"days.Saturday\">S</label>\n\t\t\t\t\t<label><input type=\"checkbox\" name=\"Sunday\" [(ngModel)]=\"days.Sunday\">S</label><br>\n        <label class=\"category\" for=\"price\">Price</label>\n          <select name=\"price\" [(ngModel)]=\"user.price\" id=\"\">\n            <option value=\"€\">€</option>\n            <option value=\"€€\">€€</option>\n            <option value=\"€€€\">€€€</option>\n          </select>\n          <br>\n        <label class=\"category\" for=\"languages\">Languages</label>\n          <label><input type=\"checkbox\" name=\"Catalan\" [(ngModel)]=\"langs.Catalan\">Catalan</label>\n          <label><input type=\"checkbox\" name=\"Spanish\" [(ngModel)]=\"langs.Spanish\">Spanish</label>\n          <label><input type=\"checkbox\" name=\"English\" [(ngModel)]=\"langs.English\">English</label><br>\n        <label class=\"category\" for=\"services\">Services</label>\n           <label><input type=\"checkbox\" name=\"Unisex\" [(ngModel)]=\"servs.Unisex\">Unisex</label>\n+          <label><input type=\"checkbox\" name=\"Men\" [(ngModel)]=\"servs.Men\">Men</label>\n+          <label><input type=\"checkbox\" name=\"Women\" [(ngModel)]=\"servs.Women\">Women</label><br>\n        <br>\n\t\t\t\t<button class=\"btn btn-info\" (click)=\"profileToggle()\">Update</button>\n\t\t\t</div>\n\t\t</form>\n\t</ng-container>\n\n</div>\n\n\n<div class=\"col-lg-4 thumb gallery\">\n  <h3 class=\"text-center\">Your Board</h3>\n  <form *ngIf=\"board != undefined\">\n    <input type=\"input\" name=\"board\" value=\"{{ user.board }}\" placeholder=\"https://es.pinterest.com/your/board/\" [(ngModel)]=\"user.board\" (ngModelChange)=\"updateBoard()\" id=\"board-url\">\n    <a data-pin-do=\"embedBoard\" data-pin-board-width=\"400\" data-pin-scale-height=\"400\" data-pin-scale-width=\"80\" href=\"{{user.board}}\"></a>\n  </form>\n</div>\n"

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-6\" id=\"make-appointment\">\n    <button class=\"btn btn-success\" (click)=\"makeAppointment()\">Make an appointment</button>\n    <input type=\"date\" [(ngModel)]=\"date\">\n    <select name=\"\" id=\"\" [(ngModel)]=\"hour\">\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n      <option value=\"5\">5</option>\n      <option value=\"6\">6</option>\n      <option value=\"7\">7</option>\n      <option value=\"8\">8</option>\n      <option value=\"9\">9</option>\n      <option value=\"10\">10</option>\n      <option value=\"11\">11</option>\n      <option value=\"12\">12</option>\n    </select>\n    <select name=\"\" id=\"\" [(ngModel)]=\"minute\">\n      <option value=\"00\">00</option>\n      <option value=\"15\">15</option>\n      <option value=\"30\">30</option>\n      <option value=\"45\">45</option>\n    </select>\n    <select name=\"\" id=\"\" [(ngModel)]=\"ampm\">\n      <option value=\"am\">am</option>\n      <option value=\"pm\">pm</option>\n    </select>\n  </div>\n\n<div class=\"col-xs-6\" id=\"board\">\n\n  <form *ngIf=\"board\">\n    <a data-pin-do=\"embedBoard\" data-pin-board-width=\"400\" data-pin-scale-height=\"400\" data-pin-scale-width=\"80\" [href]=\"board\" id=\"board\"></a>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<div class=\"row search\">\n  <h2>What's your location? <input type=\"text\" id=\"pac-input\" name=\"search\" placeholder=\"type here...\"></h2>\n</div>\n<div class=\"row first-row\">\n     <div class=\"col-xs-2\">\n       <label for=\"price\">Price</label>\n       <select id=\"price\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Add filter</option>\n             <option value=\"€\">€</option>\n             <option value=\"€€\">€€</option>\n             <option value=\"€€€\">€€€</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"day\">Day</label>\n       <select id=\"day\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Today</option>\n             <option value=\"Monday\">Monday</option>\n             <option value=\"Tuesday\">Tuesday</option>\n             <option value=\"Wednesday\">Wednesday</option>\n             <option value=\"Thursday\">Thursday</option>\n             <option value=\"Friday\">Friday</option>\n             <option value=\"Saturday\">Saturday</option>\n             <option value=\"Sunday\">Sunday</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"where\">Home visit?</label>\n       <select id=\"where\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Don't mind</option>\n             <option value=\"Home visit\">My place</option>\n             <option value=\"Salon\">Their place</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"style\">Language</label>\n       <select id=\"style\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Any</option>\n             <option value=\"Spanish\">Spanish</option>\n             <option value=\"Catalan\">Catalan</option>\n             <option value=\"English\">English</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"gender\">Gender</label>\n       <select id=\"gender\" class=\"dropdown form-control\" (change)=\"onChange($event.target.value)\">\n             <option>Unisex</option>\n             <option value=\"Women\">Women only</option>\n             <option value=\"Men\">Men only</option>\n       </select>\n     </div>\n     <div class=\"col-xs-2\">\n       <label for=\"distance\">Distance</label>\n       <select id=\"distance\" class=\"dropdown form-control\" [(ngModel)]=\"distance\">\n             <option value=10>Add filter</option>\n             <option value=2>2km</option>\n             <option value=5>5km</option>\n       </select>\n     </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-6\" id=\"col-map\">\n    <div id=\"map\"></div>\n  </div>\n\n  <div class=\"col-xs-6\">\n    <button (click)=\"growMap()\" *ngIf=\"list\" class=\"btn\" id=\"backToMap\">Back to Map</button>\n    <table class=\"table-striped\" id=\"listOfStylists\">\n      <tr id=\"table-headers\" class=\"hidden\">\n        <th id=\"profile-header\">Profile</th>\n        <th>Name</th>\n        <th>Location</th>\n        <th>Distance</th>\n      </tr>\n      <tr *ngFor=\"let stylist of stylists\">\n        <ng-container *ngIf=\"stylist.marker.visible && stylist.distanceFromLocation < distance\">\n          <td><i (click)=\"shrinkMap(stylist)\" class=\"fa fa-user\" aria-hidden=\"true\"></i></td>\n          <td class=\"stylist-name\">{{ stylist.firstName }} {{stylist.lastName}}</td>\n          <td>{{ stylist.location }}</td>\n          <td>{{ stylist.distanceFromLocation}}km</td>\n        </ng-container>\n      </tr>\n    </table>\n  </div>\n  <div class=\"col-xs-6\" *ngIf=\"this.list\">\n    <app-booking [stylist]=\"stylist\"></app-booking>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n  <div class='col-xs-4 col-xs-offset-1 col1'>\n    <form *ngIf=\"stylistCheck == false\">\n\n      <label for=\"firstName\">\n        First Name\n      </label>\n    \t<input type=\"text\" name=\"firstName\" [(ngModel)]=\"newUser.firstName\" required/>\n      <label for=\"lastName\">\n        Last Name\n      </label>\n    \t<input type=\"text\" name=\"lastName\" [(ngModel)]=\"newUser.lastName\" required/>\n      <label for=\"username\">\n        Email\n      </label>\n    \t<input type=\"email\" name=\"username\" [(ngModel)]=\"newUser.username\" placeholder=\"Email Address\" required email/>\n    \t<label for=\"password\">\n        Password\n      </label>\n    \t<input type=\"password\" name=\"password\" [(ngModel)]=\"newUser.password\" placeholder=\"..........\" required/>\n      <button class=\"btn btn-info\" (click)=\"signUp()\">Sign Up</button>\n    </form>\n\n    <form *ngIf=\"stylistCheck\">\n      <label for=\"firstName\">\n        First Name\n      </label>\n    \t<input type=\"text\" name=\"firstName\" [(ngModel)]=\"newStylist.firstName\" required/>\n      <label for=\"lastName\">\n        Last Name\n      </label>\n    \t<input type=\"text\" name=\"lastName\" [(ngModel)]=\"newStylist.lastName\" required/>\n      <label for=\"username\">\n        Email\n      </label>\n    \t<input type=\"text\" name=\"username\" [(ngModel)]=\"newStylist.username\" placeholder=\"Email Address\" required email/>\n      <label for=\"password\">\n        Password\n      </label>\n    \t<input type=\"password\" name=\"password\" [(ngModel)]=\"newStylist.password\" placeholder=\"..........\" required/>\n      <label for=\"location\">\n        Location\n      </label>\n      <input type=\"text\" name=\"location\" [(ngModel)]=\"newStylist.location\" required id=\"stylist-location\"/>\n      <!-- <label for=\"resume\">\n        Resume/Portfolio\n      </label>\n      <input type=\"file\" name=\"resume\" [(ngModel)]=\"newStylist.resume\" placeholder=\"..........\" required/> -->\n      <button class=\"btn btn-info\" (click)=\"signUpStylist()\">Apply to join</button>\n    </form>\n    <!-- <input type=\"text\" name=\"location\" id=\"location\" required/> -->\n\n    <label for=\"resume\">Are you a stylist? Check here</label>\n    <input type=\"checkbox\" [(ngModel)]=\"stylistCheck\">\n\n    <p class=\"account-message\">\n      Do you already have an account? <a [routerLink]=\"['/login']\">Login</a>\n    </p>\n  </div>\n\n\n  <div class='col-xs-6'>\n    <img src=\"../assets/images/home-screen.png\" width=\"100%\" height=\"auto\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(422);


/***/ })

},[929]);
//# sourceMappingURL=main.bundle.js.map