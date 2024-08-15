function uniq(str) {
   let result = 0;
   let u = str.toLowerCase().trim();                                           let s = {}
   for (let i = 0; i < u.length; i++) {
     let char = u[i];
     console.log(char);
     if (!s[char]) {
         s[char] = 0;
         ss.push[char]
     }
     s[char]++;
   }

  for (let char in s) {
    if (s[char] == 1) {
      result++;
    }
  }


  return result
}


console.log(uniq("somma"));
