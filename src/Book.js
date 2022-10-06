"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
    set SetRating(a) {
        if (a < 0 || a > 10) {
            throw new Error('A bemeneti érték egy és 10 között lehet csak!');
        }
        this.rating = a;
    }
    toString() {
        return this.name + " - " + this.rating;
    }
}
exports.Book = Book;
