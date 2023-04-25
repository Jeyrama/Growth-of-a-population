/*
In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and 
moreover 50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/


// Solution

function nbYear(p0, percent, aug, p) {
  for (let years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}

// or

function nbYear(p0, percent, aug, p, years = 0) {
  if (p0 < p) {
    return nbYear(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
  }
  return years;
}