/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = +budget;
        this.wasExpensive = function () {
           return (this.budget > 100000000) ? true : false;
        }
    }
}

let avatar = new Movie('Avatar', 'James Cameron', 760000000);
let blow = new Movie('Blow', 'Ted Demme', 52990000)

console.log(avatar)
console.log(avatar.wasExpensive());
console.log(blow)
console.log(blow.wasExpensive());