# JavaScript 178: Introduction to JavaScript

---

## Workshop Overview
- **Objective:**
  - Introduce participants to JavaScript, its history, and its importance in web development.
  - Cover the basics of JavaScript syntax, data types, variables, and operators.
  - Provide hands-on examples and exercises.

---

## What is JavaScript?
- **Definition:**
  - JavaScript is a versatile, high-level programming language.
  - It is primarily used to add interactive behavior to web pages.
- **Key Features:**
  - Dynamic typing
  - Object-oriented
- **Importance in Web Development:**
  - Enables interactivity
  - Powers client-side scripts
  - Widely supported across all browsers

---

## History of JavaScript
- **Origins:**
  - Developed by Brendan Eich in 1995
  - Originally named Mocha, then LiveScript, and finally JavaScript
- **Evolution:**
  - ECMAScript standardization in 1997
  - Introduction of major features in ES6 (2015) and beyond
- **Current State:**
  - Modern JavaScript is versatile, used both on the client-side and server-side (Node.js).

---

## Setting Up Your Environment
- **Tools Needed:**
  - **Text Editor:** Visual Studio Code or others
  - **Browser:** Chrome, Firefox, etc.
  - **Console:** Access through Developer Tools in browsers
- **Running JavaScript:**
  - Inline in HTML using `<script>` tags
  - External `.js` files linked to HTML
  - Running scripts directly in the browser console

---

## Basic Syntax and Structure
- **Variables:**
  - **Declaring Variables:**
    - `var`, `let`, and `const`
    - Example: 
      ```javascript
      let name = "John";
      const birthYear = 1990;
      var isActive = true;
      ```
  - **Difference between `var`, `let`, and `const`:**
    - `var` has function scope, can be redeclared and updated.
    - `let` has block scope, cannot be redeclared, but can be updated.
    - `const` has block scope, cannot be redeclared or updated.

---

## Data Types
- **Primitive Data Types:**
  - **String:**
    - Represents text
    - Example: 
      ```javascript
      let greeting = "Hello, World!";
      console.log(greeting); // Outputs: Hello, World!
      ```
  - **Number:**
    - Represents both integers and floating-point numbers
    - Example:
      ```javascript
      let age = 25;
      let price = 19.99;
      console.log(age); // Outputs: 25
      console.log(price); // Outputs: 19.99
      ```
  - **Boolean:**
    - Represents true/false values
    - Example:
      ```javascript
      let isStudent = true;
      console.log(isStudent); // Outputs: true
      ```
  - **Undefined:**
    - A variable that has been declared but not assigned a value
    - Example:
      ```javascript
      let uninitializedVar;
      console.log(uninitializedVar); // Outputs: undefined
      ```
  - **Null:**
    - Represents the intentional absence of any object value
    - Example:
      ```javascript
      let emptyValue = null;
      console.log(emptyValue); // Outputs: null
      ```

---

## Operators
- **Arithmetic Operators:**
  - Used for basic mathematical operations
  - **Examples:**
    ```javascript
    let sum = 10 + 5; // 15
    let difference = 10 - 5; // 5
    let product = 10 * 5; // 50
    let quotient = 10 / 5; // 2
    let remainder = 10 % 3; // 1
    console.log(sum, difference, product, quotient, remainder);
    ```
- **Comparison Operators:**
  - Used to compare two values
  - **Examples:**
    ```javascript
    let isEqual = 10 == "10"; // true (loose equality)
    let isStrictEqual = 10 === "10"; // false (strict equality)
    let isNotEqual = 10 != "10"; // false
    let isGreater = 10 > 5; // true
    let isLess = 10 < 5; // false
    console.log(isEqual, isStrictEqual, isNotEqual, isGreater, isLess);
    ```
- **Logical Operators:**
  - Used to combine multiple conditions
  - **Examples:**
    ```javascript
    let andCondition = (5 > 3) && (10 > 8); // true
    let orCondition = (5 > 3) || (10 < 8); // true
    let notCondition = !(5 > 3); // false
    console.log(andCondition, orCondition, notCondition);
    ```
- **Assignment Operators:**
  - Used to assign values to variables
  - **Examples:**
    ```javascript
    let x = 10;
    x += 5; // x = x + 5; -> 15
    x -= 2; // x = x - 2; -> 13
    x *= 3; // x = x * 3; -> 39
    x /= 3; // x = x / 3; -> 13
    console.log(x);
    ```

---

## Hands-On Exercises
- **Task 1:** Declare variables using `var`, `let`, and `const`, and print their values to the console.
- **Task 2:** Use arithmetic operators to perform simple calculations and display the results.
- **Task 3:** Compare different values using comparison operators and log the results.

---

## Debugging and Tools
- **Debugging in the Browser:**
  - Using the console to view errors and test code snippets
  - Breakpoints and stepping through code
- **Popular Tools:**
  - **Linter:** ESLint for maintaining code quality
  - **Formatter:** Prettier for consistent code style

---

## Q&A Session
- **Open the floor for questions:**
  - Clarify doubts
  - Discuss real-world applications of JavaScript
  - Provide additional resources for learning
