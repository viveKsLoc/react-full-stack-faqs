module.exports = [
  {
    name: "YDKJS Review",
    desc: "FAQ's based on Kyle Simpson's You Don't Know JS Series",
    id: "you-dont-know-js",
    emoji: "💩",
    url: "https://8snib.csb.app/set/you-dont-know-js",
    faqs: [
      {
        question: "What are the 2 ways to cheat lexical scope in JavaScript?",
        answer:
          '1. eval ( ) : passing in a string like "var a = 3" will modify the lexical scope of where the eval statement is at runtime. 2. with ( ) : this statement takes an object, which has zero or more properties and threats that object as if it is a wholly separate lexical scope, and thus the object\'s properties are treated as lexically defined in that scope.',
        tags: ["javascript"],
        type: "list",
        number: 301,
        id: "1kxmhgp",
        sources: [
          {
            name: "Cheating Lexical Scope: eval",
            site: "globe",
            url: "https://frontendmasters.com/courses/advanced-javascript/cheating-lexical-scope-eval/"
          },
          {
            name: "Cheating lexical scoping in JavaScript",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=W_StzOwiKXk"
          },
          {
            name: "Cheating Lexical - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch2.md#cheating-lexical"
          },
        ]
      },
      {
        question:
          "What is the difference between lexical scope and dynamic scope in JavaScript?",
        answer:
          "When we traverse up the lexical scope we are looking at the nesting of brackets {} but when we traverse up dynamic scope we are following the function call's scopes.",
        tags: ["programming-fundamentals", "javascript"],
        type: "comparison",
        number: 67,
        id: "swl1uaa",
        sources: [
          {
            name: "Static (Lexical) Scoping vs Dynamic Scoping (Pseudocode)",
            site: "stack-overflow",
            url: "https://stackoverflow.com/a/22395580/9715166",
          },
          {
            name: "006 Lexical Scope",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=dHYhMP8ESuk",
          },
          {
            name: "Chapter 2: Lexical Scope - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch2.md#chapter-2-lexical-scope",
          },
        ]
      },
      {
        question:
          "What are the 3 drawbacks with anonymous functions in JavaScript?",
        answer:
          '1. They have no useful name to display in stack traces, which can make debugging difficult. 2. Without a name, the function needs to refer to itself for recursion which requires the deprecated "arguments.callee" reference. 3. Without a name it is difficult to determine the purpose of the function.',
        tags: ["javascript"],
        type: "list",
        number: 302,
        id: "az6wgql",
        sources: [
          {
            name: "what are the advantages and disadvantages of anonymous methods in javascript?",
            site: "stack-overflow",
            url: "https://stackoverflow.com/a/9123921/9715166"
          },
          {
            name: "16.3: ES6 Arrow Function - Topics of JavaScript/ES6",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=mrYMzpbFz18"
          },
          {
            name: "Unlexical - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch6.md#unlexical"
          },
        ]
      },
      {
        question: "What is an IIFE in JavaScript?",
        answer:
          "An IIFE is an Immediately Invoked Function Expression which runs as soon as it's defined by adding ( ) to the end of the function scope. These functions don't need names so the most common form is an anonymous function.",
        tags: ["javascript"],
        type: "definition",
        number: 34,
        id: "7h9x8fl",
        sources: [
          {
            name: "What is the (function() { } )() construct in JavaScript?",
            site: "stack-overflow",
            url: "https://stackoverflow.com/a/8228308"
          },
          {
            name: "Scopes and Closures In-dept 06 - IIFE",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=q21QSRpNaAQ"
          },
          {
            name: "Invoking Function Expressions Immediately - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md#invoking-function-expressions-immediately"
          }
    
        ]
      },
      {
        question:
          "What's the difference between the var, let, and const keywords in JavaScript?",
        answer:
          "Each are used to declare a variable, but var has been a part of JavaScript since the start while let and const were introduced in ES6. var has functional scope while the others have block scope. const is identical to let but you aren't allowed to redeclare a variable declared with const",
        tags: ["javascript"],
        type: "comparison",
        number: 7,
        id: "bnxjlb",
        sources: [
          {
            name: "What's the difference between using \"let\" and \"var\"?",
            site: "stack-overflow",
            url: "https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var"
          },
          {
            name: "JavaScript Let, Const & Var: A Complete Guide",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=dzEieWaOJE0"
          },
          {
            name: "Function vs. Block Scope Review - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md#review-tldr"
          }
        ]
      },
      {
        question: "What is hoisting?",
        answer:
          "Before run-time JavaScript looks for all variable and function declarations in the scope and then hoists them ot the top of the function before they are declared.",
        tags: ["javascript"],
        type: "definition",
        number: 78,
        id: "c7mwo7",
        sources: [
          {
            name: "Javascript function scoping and hoisting",
            site: "stack-overflow",
            url: "https://stackoverflow.com/a/7506937"
          },
          {
            name: "Hoisting - Beau teaches JavaScript",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=C1PZh_ea-7I"
          },
          {
            name: "Review (TL;DR) - You Don't Know JS",
            site: "github",
            url: "In JavaScript, what code executes at runtime and what code executes at parsetime?"
          },
        ],
      },
      {
        question: "What is closure?",
        answer:
          "Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.",
        tags: ["javascript", "programming-fundamentals"],
        type: "definition",
        number: 5,
        id: "v8e59bt",
        sources: [
          {
            name: "How do JavaScript closures work?",
            site: "stack-overflow",
            url: "https://stackoverflow.com/questions/111102/how-do-javascript-closures-work"
          },
          {
            name: "Nitty Gritty - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch5.md#nitty-gritty"
          }
        ]
      },
      {
        question: "What is the this keyword in JavaScript?",
        answer:
          '"this" refers to a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.',
        tags: ["javascript"],
        type: "definition",
        number: 3,
        id: "0fg1g5",
        sources: [
          {
            name: "How does the \"this\" keyword work?",
            site: "stack-overflow",
            url: "https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work"
          },
          {
            name: "JavaScript for Developers 38 - Understanding the this keyword",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=URVdQG96MUw"
          },
          {
            name: "What's this? - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch1.md#whats-this"
          }
        ],
      },
      {
        question:
          'What are the 4 rules for determining what "this" refers to in JavaScript?',
        answer:
          "1. Called with new? Use the newly constructed object. 2. Called with call, apply, or bind? Use that specified object. 3. Called with a context object owning the call? Use that context object. 4. Default: undefined in strict mode and global object otherwise.",
        tags: ["javascript"],
        type: "list",
        number: 31,
        id: "8gkoaid",
        sources: [
          {
            name: "How does the \"this\" keyword work?",
            site: "stack-overflow",
            url: "https://stackoverflow.com/a/17514482"
          },
          {
            name: "this all Makes Sense Now! - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#review-tldr"
          }
        ]
      },
      {
        question: "What are the 7 JavaScript Primary Data Types?",
        answer: "Number, String, Boolean, Object, Null, Undefined and Symbol",
        tags: ["javascript"],
        type: "list",
        number: 63,
        id: "qpw4l0b",
        sources: [
          {
            name: "JavaScript data types and data structures - MDN Web Docs",
            site: "firefox",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types",
          },
          {
            name: "Data Types - Beau teaches JavaScript",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=808eYu9B9Yw",
          },
          {
            name: "Built-in Types - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch1.md#built-in-types",
          },
        ]
      },
      {
        question:
          "What's the difference between accessing an object through the property method and key method?",
        answer:
          'The property method (object.property) is the common method to declare an access an object\'s properties. The key method (object["property"]) takes in a string as the property which means you can access variable unusual characters like spaces. You can also pass in computed property names in the key method.',
        tags: ["javascript"],
        type: "comparison",
        number: 33,
        id: "88x8ub",
        sources: [
          {
            name: "Property Accessors - MDN Web Docs",
            site: "firefox",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors"
          },
          {
            name: "Object properties and propety accessors in JS",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=sXed76BTqfA"
          },
          {
            name: "Objects - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#contents"
          }
        ]
      },
      {
        question: "What's the difference between a shallow copy and deep copy?",
        answer:
          "Shallow copies do not consider the fields of an object that are references to other objects so it keeps the same memory addresses. Deep copies make a copy of dynamically allocated memory that is pointed to by the fields.",
        tags: ["javascript", "programming-fundamentals"],
        type: "comparison",
        number: 15,
        id: "q0u9qzk",
        sources: [
          {
            name: "What is the difference between a deep copy and a shallow copy?",
            site: "stack-overflow",
            url: "https://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy"
          },
          {
            name: "Copying Arrays (deep and shallow) - Beau teaches JavaScript",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=EeZBKv34mm4"
          },
          {
            name: "How to differentiate between deep and shallow copies in JavaScript",
            site: "free-code-camp",
            url: "https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/"
          }
        ]
      },
      {
        question: "What are the 3 property descriptors in JavaScript?",
        answer:
          "1. configurable: alters ability to change other property descriptors and delete the property. 2. enumerable : changes whether the property is displayed when the object is looped over. 3. writable : whether the value can be changed.",
        tags: ["javascript"],
        type: "list",
        number: 26,
        id: "8ap4fbp",
        sources: [
          {
            name: "JavaScript Object Property Descriptors",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=LD1tQEWsjz4"
          },
          {
            name: "JavaScript — Property Descriptor",
            site: "medium",
            url: "https://codeburst.io/javascript-object-property-attributes-ac012be317e2"
          },
          {
            name: "Property Descriptors - You Don't Know JS",
            site: "github",
            url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#property-descriptors"
          }
        ]
      },
    ],
  },
  {
    name: "Programming 101",
    desc: "Quick QnA for any beginner programmer",
    id: "programming-101",
    emoji: "🍏",
    url: "https://8snib.csb.app/set/programming-101",
    faqs: [
      {
        question: "What's the difference between a variable and a value?",
        answer:
          "A variable is a holder for a representation of a value. Consider {let a = 4}, a is the variable and 4 is the value.",
        tags: ["programming-fundamentals"],
        type: "comparison",
        number: 304,
        id: "o1m8bh8",
        sources: [
          {
            name: "What is a variable?",
            site: "quora",
            url: "https://www.quora.com/What-is-a-variable"
          },
          {
            name: "Programming Basics: Statements & Functions: Crash Course Computer Science #12",
            site: "youtube",
            url: "https://youtu.be/l26oaHV7D40?t=56"
          },
          {
            name: "The Visual Guide To JavaScript Variable Definitions & Scope",
            site: "medium",
            url: "https://medium.com/@js_tut/the-visual-guide-to-javascript-variable-definitions-scope-abfb86edad"
          },
        ]
      },
      {
        question: "What is a loop?",
        answer:
          "A loop is a sequence of instructions that is continually repeated until a certain condition is reached.",
        tags: ["programming-fundamentals"],
        type: "definition",
        number: 305,
        id: "1fn4aw5",
        sources: [
          {
            name: "What is a for loop?",
            site: "quora",
            url: "https://www.quora.com/What-is-a-for-loop"
          },
          {
            name: "Programming Basics: Statements & Functions: Crash Course Computer Science #12",
            site: "youtube",
            url: "https://youtu.be/l26oaHV7D40?t=256"
          },
          {
            name: "The Complete Guide To Loops",
            site: "medium",
            url: "https://medium.com/@js_tut/the-complete-guide-to-loops-cfa6522157e9"
          },
        ]
      },
      {
        question: "What is a data structure?",
        answer:
          "A data structure is a particular way of organizing data in a computer so that it can be used effectively. Arrays, Linked lists, Stacks...",
        tags: ["programming-fundamentals"],
        type: "definition",
        number: 307,
        id: "6bdumv6",
        sources: [
          {
            name: "What exactly is a data structure?",
            site: "quora",
            url: "https://www.quora.com/What-exactly-is-a-data-structure"
          },
          {
            name: "Data Structures: Crash Course Computer Science #14",
            site: "youtube",
            url: "https://youtu.be/DuDz6B4cqVc"
          },
          {
            name: "Introduction to Data Structures",
            site: "medium",
            url: "https://medium.com/swlh/introduction-to-data-structures-9134b7d064a6"
          },
        ]
      },
      {
        question: "What is a function?",
        answer:
          "A function is a named section of a program that performs a specific task. This task can be jumped to by calling the name of that section.",
        tags: ["programming-fundamentals"],
        type: "definition",
        number: 308,
        id: "uxyt91a",
        sources: [
          {
            name: "What is a function in computer programming?",
            site: "quora",
            url: "https://www.quora.com/What-is-a-function-in-computer-programming"
          },
          {
            name: "Programming Basics: Statements & Functions: Crash Course Computer Science #12",
            site: "youtube",
            url: "https://youtu.be/l26oaHV7D40?t=459"
          },
          {
            name: "Basic JavaScript: Write Reusable JavaScript with Functions",
            site: "free-code-camp",
            url: "https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions/"
          },
        ]
      },
      {
        question: "What is recursion?",
        answer:
          "Recursion refers to the process of a function calling itself directly or indirectly.",
        tags: ["programming-fundamentals"],
        type: "definition",
        number: 309,
        id: "gg14f8e",
        sources: [
          {
            name: "What is recursion?",
            site: "quora",
            url: "https://www.quora.com/What-is-recursion"
          },
          {
            name: "What Is Recursion - Recursion Explained In 3 Minutes",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=YZcO_jRhvxs"
          },
          {
            name: "Recursion Made Simple",
            site: "medium",
            url: "https://medium.com/code-zen/recursion-demystified-24867f045c62"
          },
        ]
      },
      {
        question: "What is scope?",
        answer:
          "Scope refers to the visibility of variables. Variables that are out of scope are not recognized. Only variables in scope can be accessed.",
        tags: ["programming-fundamentals"],
        type: "definition",
        number: 312,
        id: "e1bejw9",
        sources: [
          {
            name: "What is scope of the variable?",
            site: "quora",
            url: "https://www.quora.com/What-is-scope-of-the-variable"
          },
          {
            name: "Scope - Programming Languages",
            site: "youtube",
            url: "https://www.youtube.com/watch?v=wTn6oQ56MV8"
          },
          {
            name: "Scope vs. Context in JavaScript",
            site: "medium",
            url: "https://medium.com/better-programming/scope-vs-context-in-javascript-b31818f58558"
          },
        ]
      },
    ],
  },
  {
    name: "JS Interview Questions - Strings",
    desc:
      "FAQ's for all interview questions involving strings",
    id: "javascript-interview-questions-strings",
    emoji: "🌟",
    url: "https://8snib.csb.app/set/javascript-interview-questions-strings",
    faqs: [
      {
        question:
          "How to check if a string contains a substring in JavaScript?",
        answer:
          "https://gist.github.com/masautt/d7ce557b65745b22cac71373ae1b723d",
        tags: ["JavaScript"],
        type: "Code",
        number: 188,
        id: "r460xpv"
      },
      {
        question: "How to replace all occurrences of a string in JavaScript?",
        answer:
          "https://gist.github.com/masautt/c27efdded65c976f7dc19cef9c6a8e2c",
        tags: ["JavaScript"],
        type: "Code",
        number: 200,
        id: "n679h6"
      },
      {
        question: "How to capitalize first letter of a string in JavaScript?",
        answer:
          "https://gist.github.com/masautt/963203e3217f1e57d08ec36911a9b2ac",
        tags: ["JavaScript"],
        type: "Code",
        number: 201,
        id: "isy74qv"
      },
      {
        question:
          "How to find longest substring without repeating characters in JavaScript?",
        answer:
          "https://gist.github.com/masautt/8cb604746c7dff090d0654759d1e19a7",
        tags: ["JavaScript"],
        type: "Code",
        number: 259,
        id: "7bbszl"
      },
      {
        question: "How to convert a string to a number in JavaScript?",
        answer:
          "https://gist.github.com/masautt/715c78034f26aa6605ceaad32276b750",
        tags: ["JavaScript"],
        type: "Code",
        number: 260,
        id: "olq9ps"
      },
      {
        question: "How to convert a number to a string in JavaScript?",
        answer:
          "https://gist.github.com/masautt/7e7a7645923bd673bca1ffe95393deb9",
        tags: ["JavaScript"],
        type: "Code",
        number: 261,
        id: "a3mjlio"
      },
      {
        question: "How to remove vowels from string in JavaScript?",
        answer:
          "https://gist.github.com/masautt/239d93bfab41d9f37ef33017a8fec460",
        tags: ["JavaScript"],
        type: "Code",
        number: 262,
        id: "19k7g5"
      },
      {
        question: "How to reverse a string in JavaScript?",
        answer:
          "https://gist.github.com/masautt/bc26c58dfc81a60c39ba731943b66a13",
        tags: ["JavaScript"],
        type: "Code",
        number: 264,
        id: "u7t2s1q"
      },
      {
        question: "How to check if a string is all uppercase in JavaScript?",
        answer:
          "https://gist.github.com/masautt/bb551be4a59ef8080534cc91ca4785b8",
        tags: ["JavaScript"],
        type: "Code",
        number: 265,
        id: "4eqrzp8"
      },
      {
        question: "How to check if a string is all lowercase in JavaScript?",
        answer:
          "https://gist.github.com/masautt/c7146f1f5daad173418ef871bc5343e8",
        tags: ["JavaScript"],
        type: "Code",
        number: 266,
        id: "trhvy6"
      },
      {
        question: "How to find most reoccuring character in JavaScript?",
        answer:
          "https://gist.github.com/masautt/2e8d8d84fd8761889ed0fc9399b4d219",
        tags: ["JavaScript"],
        type: "Code",
        number: 267,
        id: "2fmdui8"
      },
      {
        question: "How to get all permutations of a string in JavaScript?",
        answer:
          "https://gist.github.com/masautt/3033aea4a933ae26a3971263e71fc6dd",
        tags: ["JavaScript"],
        type: "Code",
        number: 268,
        id: "nq1zehe"
      },
      {
        question: "How to reverse a sentence in JavaScript?",
        answer:
          "https://gist.github.com/masautt/488736f2ec7d4cc2d68e258da54be37a",
        tags: ["JavaScript"],
        type: "Code",
        number: 270,
        id: "pdeg7lj"
      },
      {
        question: "How to find first non-repeating character in JavaScript?",
        answer:
          "https://gist.github.com/masautt/7778c80230db544d0a8e0877b919c6ae",
        tags: ["JavaScript"],
        type: "Code",
        number: 271,
        id: "g3y4as9"
      },
      {
        question: "How to check if string is palindrome in JavaScript?",
        answer:
          "https://gist.github.com/masautt/1c9732ad1ff32327d7b6cc7439d1a9af",
        tags: ["JavaScript"],
        type: "Code",
        number: 272,
        id: "j99xx3o"
      },
      {
        question: "How to check if string has only digits in JavaScript?",
        answer:
          "https://gist.github.com/masautt/9748d1234ef146ae12901a68b4a55c33",
        tags: ["JavaScript"],
        type: "Code",
        number: 283,
        id: "c3bt8ij"
      },
      {
        question: "How to get number of vowels and consonants in JavaScript?",
        answer:
          "https://gist.github.com/masautt/1109907cf23eaae3d9e981f190ff938d",
        tags: ["JavaScript"],
        type: "Code",
        number: 284,
        id: "j6epsxe"
      },
      {
        question:
          "How to count number of occurrences of a string in JavaScript?",
        answer:
          "https://gist.github.com/masautt/65167ff69e94f2fc01b3a49b1d7ec846",
        tags: ["JavaScript"],
        type: "Code",
        number: 285,
        id: "daldhei"
      },
      {
        question: "How to find longest palindrome of a string in JavaScript?",
        answer:
          "https://gist.github.com/masautt/6fcd34d2806a727aacbf6395d034eefa",
        tags: ["JavaScript"],
        type: "Code",
        number: 286,
        id: "bvl9h3f"
      },
      {
        question: "How to check if 2 strings are anagrams in JavaScript?",
        answer:
          "https://gist.github.com/masautt/2ec67e0cd0c580a6336034a99f46ed6a",
        tags: ["JavaScript"],
        type: "Code",
        number: 293,
        id: "etqai3t"
      }
    ],
  },
  {
    name: "JS Interview Questions - Arrays",
    desc:
      "FAQ's for all interview questions involving arrays",
    id: "javascript-interview-questions-arrays",
    faqs: [
      {
        question: "How to remove an element from an array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/76be367edee65ac1b5a87853fcef724e",
        tags: ["JavaScript"],
        type: "Code",
        number: 189,
        id: "otgvjxf"
      },
      {
        question: "How to append to array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/0d1918dcaa0378fcdfcc724ef8facaab",
        tags: ["JavaScript"],
        type: "Code",
        number: 202,
        id: "kr0ns2b"
      },
      {
        question: "How to sort array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/fe73908d0ccdde9a3e6df98ea884f108",
        tags: ["JavaScript"],
        type: "Code",
        number: 209,
        id: "hieewlp"
      },
      {
        question: "How to sort array of objects by value in JavaScript?",
        answer:
          "https://gist.github.com/masautt/17931ce2f5efee67ab58f8a8331e9c49",
        tags: ["JavaScript"],
        type: "Code",
        number: 210,
        id: "wioawyg"
      },
      {
        question: "How to reverse an array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/36116cd6712763d2208cdd7160820c88",
        tags: ["JavaScript"],
        type: "Code",
        number: 263,
        id: "h74jep"
      },
      {
        question: "How to remove duplicates from an array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/4ce6ca53bce681831d7fcba66c96d304",
        tags: ["JavaScript"],
        type: "Code",
        number: 287,
        id: "uwq5qpf"
      },
      {
        question: "How to check if array contains a value in JavaScript?",
        answer:
          "https://gist.github.com/masautt/76ac3c8e7e12ca605c843467765041dd",
        tags: ["JavaScript"],
        type: "Code",
        number: 288,
        id: "luglhko"
      },
      {
        question:
          "How to check if all elements in an array are unique in JavaScript?",
        answer:
          "https://gist.github.com/masautt/f1deaa07515d9cdfc1a306c8f99d1e21",
        tags: ["JavaScript"],
        type: "Code",
        number: 289,
        id: "i9hzdt"
      },
      {
        question: "How to find the largest value of an array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/c666b85dc77ba2b0d913162a5e55548a",
        tags: ["JavaScript"],
        type: "Code",
        number: 290,
        id: "8osyb4f"
      },
      {
        question: "How to find the smallest value of an array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/e083d73429887f53fa384b726d82deea",
        tags: ["JavaScript"],
        type: "Code",
        number: 291,
        id: "v5jvz0e"
      },
      {
        question: "How to find the intersection of 2 arrays in JavaScript?",
        answer:
          "https://gist.github.com/masautt/c64cebd8b3d4503d6a65cf2dce6370a3",
        tags: ["JavaScript"],
        type: "Code",
        number: 292,
        id: "tb57y5j"
      },
      {
        question: "How to remove all odd numbers from an array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/9f149ed3ec221795efd0d6ae97854568",
        tags: ["JavaScript"],
        type: "Code",
        number: 294,
        id: "86526vu"
      },
      {
        question: "How to remove all even numbers from an array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/7c7766dc75bfd420df4d53c58133b866",
        tags: ["JavaScript"],
        type: "Code",
        number: 295,
        id: "6x0juy"
      },
      {
        question:
          "How to find the first duplicate element of an array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/df672d72e0fa70e596c5a916944459aa",
        tags: ["JavaScript"],
        type: "Code",
        number: 296,
        id: "q2b43jv"
      },
      {
        question: "How to remove the first element from an array?",
        answer:
          "https://gist.github.com/masautt/9caca1bb263eac04e77907a0c4e92a63",
        tags: ["JavaScript"],
        type: "Code",
        number: 297,
        id: "4kl7b58"
      },
      {
        question: "How to remove the last element from an array?",
        answer:
          "https://gist.github.com/masautt/298a6fefb1d8bbec65698db879e4c765",
        tags: ["JavaScript"],
        type: "Code",
        number: 298,
        id: "mo1dpw"
      },
      {
        question: "How to shuffle an array in JavaScript?",
        answer:
          "https://gist.github.com/masautt/5e4b063c06153d6c82a02543aa89f541",
        tags: ["JavaScript"],
        type: "Code",
        number: 299,
        id: "pkjkh4p"
      }
    ],
    emoji: "🌟",
    url: "https://8snib.csb.app/set/javascript-interview-questions-arrays"
  }
];
