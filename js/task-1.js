function slugify(title) {
  const small = title.toLowerCase();
  return small.split(" ").join("-");
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// Gökhan hocam ödevin altında çözüm vardı bakmadan böyle yaptım. Çözüm yöntemini de öğrendim. Yine de kendi yaptığım yöntemle teslim etmek istedim.