function incrementString (strng) {
    var chars = strng.split("");
    const text = chars.filter(function(char){return isNaN(char)}).join("");
    if (text.length === strng.length){
        return text + '1'
    }
    const nums = chars.filter(function(char){return !isNaN(char)}).join("")
    const numWithoutLeading0 = parseInt(nums, 10);
    const inceremtedNumberWithoutZeros = numWithoutLeading0 + 1;
    const inceremtedNumberWithZeros = `${inceremtedNumberWithoutZeros}`.padStart(nums.length, '0');
    return text + inceremtedNumberWithZeros
  }

  function anagrams(word, words) {
    return words.filter(function(wordInArray){return isAnagram(wordInArray, word)})

}

function isAnagram(str1, str2){
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function chooseBestSum(maxKm, n, ls) {
  let permutations = [];
  for(let i = 0; i < ls.length; i++){
    for(let j = i + 1; j < ls.length; j++){
      for(let k = j + 1; k < ls.length; k++){
        permutations.push([ls[i], ls[j], ls[k]])

      }

    }

  }
  let vmi = permutations.map((permutation) => permutation.reduce((a, b) => a + b, 0))
  let sorted = vmi.sort((a, b) => b -a)
  return sorted.find((value) => value <= maxKm);
}

function permutationHelper(t, k, ls){
  if (ls.length < k) return null
  const results = [[]]
  for (const value of ls) {
      console.log("val: " +value)
      const copy = [...results]
      console.log("copy: " +copy)
      for (const prefix of copy) {
        console.log("prefix: " +prefix)
          results.push(prefix.concat(value))
      }
  }
  return results;
}

console.log(permutationHelper(163, 3, [50, 55, 56, 57, 58]))

  //console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]))