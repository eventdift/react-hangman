const LANGUAGES = [
  "c",
  "csharp",
  "elixir",
  "erlang",
  "fortran",
  "golang",
  "groovy",
  "haskell",
  "java",
  "javascript",
  "kotlin",
  "objectivec",
  "perl",
  "php",
  "python",
];

function randomWord() {
  return LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)];
}

export { randomWord };