// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director)
    
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const scoreSum = moviesArray.reduce((accumulator, movie) => accumulator + (movie.score || 0), 0);
    return parseFloat((scoreSum / moviesArray.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

        const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
        const dramaSum = dramaMovies.reduce((accumulator, movie) => accumulator + movie.score, 0);
        const dramaCount = dramaMovies.length;
        return dramaCount === 0 ? 0 : parseFloat((dramaSum / dramaCount).toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
        return  [...moviesArray]
            .sort((a, b) => a.title.localeCompare(b.title))
            .slice(0, 20)
            .map(movie => movie.title);
 }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
        if (moviesArray.length === 0) {
            return moviesArray;
        }
        return moviesArray.map(movie => ({
            ...movie,
            duration: movie.duration * 60, // Convert hours to minutes
        }));
    }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
        if (moviesArray.length === 0) {
            return null;
        }
    
        const yearScoreSum = moviesArray.reduce((accumulator, movie) => {
            if (movie.score && movie.year) {
                const yearScore = movie.score * movie.year;
                return accumulator + yearScore;
            }
            return accumulator;
        }, 0);
    
        const yearCount = new Set(moviesArray.map(movie => movie.year)).size;
    
        if (yearCount === 0) {
            return null;
        }
    
        if (yearCount === 1) {
            const [year] = moviesArray.map(movie => movie.year);
            return parseFloat((yearScoreSum / year).toFixed(2));
        }
    
        const yearScores = moviesArray.reduce((accumulator, movie) => {
            if (movie.score && movie.year) {
                const yearScore = movie.score * movie.year;
                accumulator[movie.year] = (accumulator[movie.year] || 0) + yearScore;
            }
            return accumulator;
        }, {});
    
        const oldestYear = Math.min(...Object.keys(yearScores).map(Number));
        return parseFloat((yearScores[oldestYear] / moviesArray.filter(movie => movie.year === oldestYear).length).toFixed(2));
    }
