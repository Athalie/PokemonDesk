"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
var MENU = [
    {
        id: 1,
        value: 'Home',
        link: '#'
    },
    {
        id: 2,
        value: 'Pokédex',
        link: '#'
    },
    {
        id: 3,
        value: 'Legendaries',
        link: '#'
    },
    {
        i: 4,
        value: 'Documentation',
        link: '#'
    }
];
var Header = function () { return react_1.default.createElement("div", { className: Header_module_scss_1.default.root },
    react_1.default.createElement("div", { className: Header_module_scss_1.default.wrap },
        react_1.default.createElement("div", { className: Header_module_scss_1.default.pokemonLogo }),
        react_1.default.createElement("div", { className: Header_module_scss_1.default.menuWrap }, MENU.map(function (_a) {
            var id = _a.id, value = _a.value, link = _a.link;
            return react_1.default.createElement("a", { key: id, href: link, className: Header_module_scss_1.default.menuLink }, value);
        })))); };
exports.default = Header;
//# sourceMappingURL=index.js.map