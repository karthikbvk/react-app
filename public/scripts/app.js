'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Details = function () {
    function Details() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Details);

        this.name = name;
        this.age = age;
    }

    _createClass(Details, [{
        key: 'getDscription',
        value: function getDscription() {
            return ' hi this is ' + (this.name + " " + this.age) + ' years old .';
        }
    }]);

    return Details;
}();

var Traveller = function (_Details) {
    _inherits(Traveller, _Details);

    function Traveller(name, age, homeLocation) {
        _classCallCheck(this, Traveller);

        var _this = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, name, age));

        _this.homeLocation = homeLocation;
        return _this;
    }

    _createClass(Traveller, [{
        key: 'hasLocation',
        value: function hasLocation() {
            return !!this.homeLocation;
        }
    }, {
        key: 'getDscription',
        value: function getDscription() {
            var description = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), 'getDscription', this).call(this);
            if (this.hasLocation()) {
                description += 'i am from ' + this.homeLocation;
            }

            return description;
        }
    }]);

    return Traveller;
}(Details);

var out = new Traveller('karthik', 28, 'Bangalore');
console.log(out.getDscription());
var out1 = new Traveller();
console.log(out1.getDscription());
console.log(out);
console.log(out1);
