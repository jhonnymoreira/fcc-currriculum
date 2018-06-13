# FCC Curriculum

This is how I'm tackling the problems presented in the [freeCodeCamp](freecodecamp.org) curriculum.

---

## Certifications

- **Javascript Algorithms And Data Structures Certification**
    - Projects
        -  [x] [Palindrome Checker](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)
        - [x] [Roman Numeral Converter](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)
        - [x] [Caesars Cipher](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)
        - [ ] [Telephone Number Validator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)
        - [ ] [Cash Register](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)

---

## Code Structure

```
<project-name>
├── index.d.ts // TypeScript typings for the main file
├── index.js // Code for the project main file
├── index.test.js // Tests for the project main file
└── utils
    ├── <utils-module>
    │   ├── index.js // Code for the `utils` module
    │   └── index.test.js // Tests for the `utils` module
    ├── index.d.ts // Exports all the `utils` modules TypeScript typings
    └── index.js // Exports all the `utils` modules
```

---

## Dependencies

This project uses:

- [Babel](https://babeljs.io)
- [Jest](https://facebook.github.io/jest/)
- [ESLint](https://eslint.org)

### Babel

It uses the preset `env` alongside `babel-jest`. This setup gives me the freedom to use some non supported syntax such as `import/export` in Node.

### Jest

Since FCC has a lot of examples to each exercise, instead of following the cycle `code -> test -> refactor` over and over, it's easier if we setup the tests first and then just code. I've always used Jest and it is enough for my use cases.

### ESLint

Linters. Linters everywhere! I'm using the `airbnb` config with a few extra rules from `eslint-plugin-jest` and without semi-colons. Even though there is very strong points on why I should be using semi-colons, I'm really not used to it.
