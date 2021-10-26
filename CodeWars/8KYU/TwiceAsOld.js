// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// father age = son age * 2

if(dadYearsOld < sonYearsOld*2) {
  while(dadYearsOld !== sonYearsOld * 2) {
      dadYearsOld--
      sonYearsOld--
      count ++
  }
  return count
} else {
  while(dadYearsOld !== sonYearsOld * 2) {
      dadYearsOld++
      sonYearsOld++
      count ++
  }
  return count
}

console.log(twiceAsOld(36,7)) 
  console.log(twiceAsOld(55,30)) 
  console.log(twiceAsOld(42,21)) 
  console.log(twiceAsOld(22,1))



