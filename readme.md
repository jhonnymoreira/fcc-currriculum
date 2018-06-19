# FCC Curriculum

This is how I'm tackling the problems presented in the [freeCodeCamp](freecodecamp.org) curriculum.

---

## Certifications

- **Javascript Algorithms And Data Structures Certification**
    - Projects
        - [x] Palindrome Checker [[Solution](https://git.io/vhKrh) | [Source](https://bit.ly/2JPsnQo)]
        - [x] Roman Numeral Converter [[Solution](https://git.io/vhKoJ) | [Source](https://bit.ly/2MmOuw1)]
        - [x] Caesars Cipher [[Solution](https://git.io/vhKrF) | [Source](https://bit.ly/2HLcF3U)]
        - [x] Telephone Number Validator [[Solution](https://git.io/fmJj8) | [Source](https://bit.ly/2LMhuMv)]
        - [ ] Cash Register [[Source](https://bit.ly/2HJCSjl)]

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
