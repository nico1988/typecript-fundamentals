"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// == CLASSES == //
/**
 * (1) Classes work similarly to what you're used to seeing in JS
 * -   They can "implement" interfaces
 */
// export class Contact implements HasEmail {
//   email: string;
//   name: string;
//   constructor(name: string, email: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
/**
 * (2) This looks a little verbose -- we have to specify the words "name" and "email" 3x.
 * -   Typescript has a shortcut: PARAMETER PROPERTIES
 */
/**
 * (3) Access modifier keywords - "who can access this thing"
 *
 * - public - everyone
 * - protected - me and subclasses
 * - private - only me
 */
// class ParamPropContact implements HasEmail {
//   constructor(public name: string, public email: string = "no email") {
//     // nothing needed
//   }
// }
/**
 * (4) Class fields can have initializers (defaults)
 * lazy initialization
 */
var OtherContact = /** @class */ (function () {
    function OtherContact(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.age = 0;
        // () password must either be initialized like this, or have a default value
        // this.password = Math.round(Math.random() * 1e14).toString(32);
        this.age = 34;
    }
    Object.defineProperty(OtherContact.prototype, "password", {
        // @ts-ignore
        get: function () {
            if (!this.passwordVal) {
                this.passwordVal = Math.round(Math.random() * 1e14).toString(32);
            }
            return this.passwordVal;
        },
        enumerable: true,
        configurable: true
    });
    OtherContact.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.password;
                return [2 /*return*/];
            });
        });
    };
    return OtherContact;
}());
var oo = new OtherContact('nico', '410827024@qq.com', 13333333333);
console.log('oo.password:::', oo.password);
/**
 * (5) TypeScript even allows for abstract classes, which have a partial implementation
 */
// abstract class AbstractContact implements HasEmail, HasPhoneNumber {
//   public abstract phone: number; // must be implemented by non-abstract subclasses
//   constructor(
//     public name: string,
//     public email: string // must be public to satisfy HasEmail
//   ) {}
//   abstract sendEmail(): void; // must be implemented by non-abstract subclasses
// }
/**
 * (6) implementors must "fill in" any abstract methods or properties
 */
// class ConcreteContact extends AbstractContact {
//   constructor(
//     public phone: number, // must happen before non property-parameter arguments
//     name: string,
//     email: string
//   ) {
//     super(name, email);
//   }
//   sendEmail() {
//     // mandatory!
//     console.log("sending an email");
//   }
// }
