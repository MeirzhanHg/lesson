"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '0');

// console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let a = prompt('Один из последних просмотренных фильмов?', 'не смотрел');
let b = prompt('На сколько оцените его?', '0');
let c = prompt('Один из последних просмотренных фильмов?', 'не смотрел');
let d = prompt('На сколько оцените его?', '0');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);