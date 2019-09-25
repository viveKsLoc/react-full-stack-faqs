module.exports = [
    {
        name: "YDKJS Review",
        desc: "FAQ's based on Kyle Simpson's You Don't Know JS Series",
        emoji: "💩",
        id: "you-dont-know-js-review",
        faqs: [
            {
                question: "What are the 2 ways to cheat lexical scope in JavaScript?",
                answer:
                    '1. eval ( ) : passing in a string like "var a = 3" will modify the lexical scope of where the eval statement is at runtime. 2. with ( ) : this statement takes an object, which has zero or more properties and threats that object as if it is a wholly separate lexical scope, and thus the object\'s properties are treated as lexically defined in that scope.',
                tags: ["javascript"],
                type: "list",
                number: 274,
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
                number: 275,
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
                id: "bnxjlb1",
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
                question: "What is hoisting in JavaScript?",
                answer:
                    "Before run-time JavaScript looks for all variable and function declarations in the scope and then hoists them ot the top of the function before they are declared.",
                tags: ["javascript"],
                type: "definition",
                number: 78,
                id: "c7mwo7b",
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
                question: "What is closure in JavaScript?",
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
                question: "What is the \"this\" keyword in JavaScript?",
                answer:
                    '"this" refers to a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.',
                tags: ["javascript"],
                type: "definition",
                number: 3,
                id: "0fg1g5g",
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
                    "What are the 4 rules for determining what \"this\" refers to in JavaScript?",
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
                        name: "JavaScript Tutorial For Beginners #29 - THIS Keyword",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=yVdU2coJ1VQ"
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
                id: "88x8ubo",
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
                question: "What's the difference between a shallow copy and deep copy in JavaScript?",
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
            {
                question:
                    "What is the purpose of Object.preventExtensions( ) in JavaScript?",
                answer:
                    "When an object is passed into this function, an error will be thrown when there is an attempt to define a property on the object.",
                tags: ["javascript"],
                type: "definition",
                number: 27,
                id: "r8jroi9",
                sources: [
                    {
                        name: "Object.preventExtensions() - MDN Web Docs",
                        site: "firefox",
                        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions"
                    },
                    {
                        name: "JavaScript Video Tutorial - Preventing Extensions on an Object",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=EzWcVZ1QSM8"
                    },
                    {
                        name: "Prevent Extensions - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#prevent-extensions"
                    }
                ]
            },
            {
                question:
                    "What's the difference between sealing, freezing, and deep-freezing an object in JavaScript?",
                answer:
                    "Object.seal( ): Prevent new properties being added and marks existing properties as non-configurable but they are still writable. Object.freeze( ) Will do same as seal but not have the values be writable. Object.deepFreeze is not a built in function but it means to freeze the properties of objects nested in the main object.",
                tags: ["javascript"],
                type: "comparison",
                number: 28,
                id: "oais0xm",
                sources: [
                    {
                        name: "Variable immutability with Object freeze, seal and preventExtensions methods",
                        site: "medium",
                        url: "https://medium.com/@obaranovskyi/variable-immutability-with-object-freeze-seal-and-preventextensions-methods-7e0d2ebfd920"
                    },
                    {
                        name: "Object seal, freeze, and preventExtensions",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=ZdF2aOYpIqw"
                    },
                    {
                        name: "Seal, Freeze - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#seal"
                    },
                ]
            },
            {
                question:
                    "What are the 4 events that occur when a function is invoked with the \"new\" keyword?",
                answer:
                    "1. A brand new object is created (aka, constructed) out of thin air. 2. The newly constructed object is prototype linked. 3. The newly constructed object is set as the this binding for that function call. 4. Unless the function returns its own alternate object, the new invoked function call will automatically return the newly constructed object",
                tags: ["javascript"],
                type: "list",
                number: 32,
                id: "zrhh9vo",
                sources: [
                    {
                        name: "What is the 'new' keyword in JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/3658673"
                    },
                    {
                        name: "Using the new Keyword in JavaScript",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=I2CdrKlPdAY"
                    },
                    {
                        name: "new Binding - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#new-binding"
                    }
                ]
            },
            {
                question:
                    "What is the difference between an expression and a statement?",
                answer:
                    "An expression is any reference to a variable or value, or a set of variables and values combined with operators. Statements are made up of expressions and are defined as a group of words, numbers, and operators that performs a specific task.",
                tags: ["programming-fundamentals", "javascript"],
                type: "comparison",
                number: 92,
                id: "nz6uigo",
                sources: [
                    {
                        name: "What is the difference between an expression and a statement in Python?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/questions/4728073/what-is-the-difference-between-an-expression-and-a-statement-in-python"
                    },
                    {
                        name: "Expressions vs. Statements in JS / Intro to JavaScript ES6 programming, lesson 15",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=WVyCrI1cHi8"
                    },
                    {
                        name: "Statements - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/ch1.md#statements"
                    },
                ],
            },
            {
                question: "What's the difference between compiling and interpreting code?",
                answer:
                    "Interpreting code means translating the commands from top to bottom, line by line, every time the program is run whereas compiling code means the translation is done ahead of time.",
                tags: ["programming-fundamentals", "javascript"],
                type: "comparison",
                number: 93,
                id: "8w2045j",
                sources: [
                    {
                        name: "Compiled vs. Interpreted Languages",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/3265602/9715166"
                    },
                    {
                        name: "Short Lesson - Compilation vs Interpretation",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=JNMy969SjyU"
                    },
                    {
                        name: "Executing a Program - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/ch1.md#executing-a-program"
                    },
                ],
            },
            {
                question:
                    "How does an arrow function affect the this keyword in JavaScript?",
                answer:
                    "Arrow functions do not bind their own this, they lexically bind their context so they refer to the originating context.",
                tags: ["javascript"],
                type: "explanation",
                number: 141,
                id: "2zxjzh5",
                sources: [
                    {
                        name: "Understanding \"this\" in javascript with arrow functions",
                        site: "globe",
                        url: "https://www.codementor.io/dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc"
                    },
                    {
                        name: "Arrow function and this keyword in javascript😃",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=tANuyOClBIY"
                    },
                    {
                        name: "Lexical This - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch2.md#lexical-this"
                    },
                ]
            },
            {
                question:
                    "Why should you not use the JSON Parse --> JSON Stringify method of deep cloning an object?",
                answer:
                    "Using JSON.parse(JSON.stringify(obj)) won't account for undefined and functions. There is not method of saving functions or undefined values in JSON.",
                tags: ["javascript"],
                type: "explanation",
                number: 146,
                id: "rg8h0r9",
                sources: [
                    {
                        name: "javascript deep copy using JSON",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/q/20662319"
                    },
                    {
                        name: "Copying Arrays (deep and shallow) - Beau teaches JavaScript",
                        site: "youtube",
                        url: "https://youtu.be/EeZBKv34mm4?t=236"
                    },
                    {
                        name: "Duplicating Objects - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#duplicating-objects"
                    },
                ]
            },
            {
                question: "What are the 3 steps of compilation in JavaScript?",
                answer:
                    "1. Tokenizing / Lexing: breaking up a string of characters into meaningful chunks, called tokens. 2. Parsing: taking an array of tokens and turning it into a tree of nested elements called the Abstract Syntax Tree. 3. code-Generation: Taking the AST and turning it into executable code.",
                tags: ["javascript"],
                type: "list",
                number: 273,
                id: "hfv4gir",
                sources: [
                    {
                        name: "What is compilation?",
                        site: "quora",
                        url: "https://www.quora.com/What-is-compilation"
                    },
                    {
                        name: "Compilation - Part One: Overview of the Stages of Compilation",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=0A079QpDAzY"
                    },
                    {
                        name: "Compiler Theory - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md#compiler-theory"
                    },
                ]
            },
            {
                question: "What's the difference between == and === in JavaScript?",
                answer:
                    "The double equals (==) uses implicit conversion when comparing values. If we compare the number 5 with the string \"5\" (5 == \"5\"), the string will be converted to a number and compared. The triple equals (===) does not implicitly convert so (\"5\" === 5) will return false.",
                tags: ["javascript"],
                type: "comparison",
                number: 9,
                id: "6b1n3qp",
                sources: [
                    {
                        name: "Which equals operator (== vs ===) should be used in JavaScript comparisons?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons"
                    },
                    {
                        name: "== vs === - Beau teaches JavaScript",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=kVOmc7NK1M0"
                    },
                    {
                        name: "Loose Equals vs. Strict Equals - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch4.md#loose-equals-vs-strict-equals"
                    }
                ]
            },
            {
                question: "How to deep clone an object in JavaScript?",
                answer:
                    "If the object does not have any functions a simple conversion to JSON and back will deep clone --> JSON.parse(JSON.stringify(objectToClone)). But if there are functions in the object or the object is a function, you should look at external libraries such as underscore or lodash.",
                tags: ["javascript"],
                type: "explanation",
                number: 172,
                id: "l40vuie",
                sources: [
                    {
                        name: "What is the most efficient way to deep clone an object in JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/122704"
                    },
                    {
                        name: "Deep Copying vs Shallow Copying",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=duyshh9Fs1U"
                    },
                    {
                        name: "Duplicating Objects - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/ch3.md#duplicating-objects"
                    },
                ]
            },
        ],
    },
    {
        name: "Programming 101",
        desc: "Quick QnA for a Beginner Programmer",
        emoji: "🍏",
        id: "programming-101",
        faqs: [
            {
                question: "What's the difference between a variable and a value?",
                answer:
                    "A variable is a holder for a representation of a value. Consider {let a = 4}, a is the variable and 4 is the value.",
                tags: ["programming-fundamentals"],
                type: "comparison",
                number: 276,
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
                number: 277,
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
                number: 279,
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
                number: 280,
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
                number: 281,
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
                number: 284,
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
            "FAQ's for all those StackOverflow questions you've been digging through.",
        emoji: "🌟",
        id: "javascript-interview-questions-strings",
        faqs: [
            {
                question: "How to check if a string contains a substring in JavaScript?",
                answer: "https://gist.github.com/masautt/d7ce557b65745b22cac71373ae1b723d",
                tags: ["javascript"],
                type: "code",
                number: 169,
                id: "r460xpv",
                sources: [
                    {
                        name: "How to check whether a string contains a substring in JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1789952"
                    },
                    {
                        name: "JavaScript Array includes method",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=iOml7u_sAVk"
                    },
                    {
                        name: "Array Includes() and IndexOf() Methods in JavaScript",
                        site: "medium",
                        url: "https://medium.com/better-programming/array-includes-method-in-javascript-38d919b59c41"
                    },
                ]
            },
            {
                question: "How to replace all occurrences of a string in JavaScript?",
                answer: "https://gist.github.com/masautt/c27efdded65c976f7dc19cef9c6a8e2c",
                tags: ["javascript"],
                type: "code",
                number: 285,
                id: "n679h6b",
                sources: [
                    {
                        name: "How to replace all occurrences of a string?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/17606289/9715166"
                    },
                    {
                        name: "How to replace all occurrences of a string in JavaScript",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=7FcavNZnLAc"
                    },
                    {
                        name: "How to replace all occurrences of a string in JavaScript",
                        site: "globe",
                        url: "https://flaviocopes.com/how-to-replace-all-occurrences-string-javascript/"
                    },
                ]
            },
            {
                question: "How to capitalize first letter of a string in JavaScript?",
                answer: "https://gist.github.com/masautt/963203e3217f1e57d08ec36911a9b2ac",
                tags: ["javascript"],
                type: "code",
                number: 181,
                id: "isy74qv",
                sources: [
                    {
                        name: "How do I make the first letter of a string uppercase in JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1026087"
                    },
                    {
                        name: "JavaScript Capitalize First Letter: How to make strings and arrays sentence case",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=8IEI-7fj2j4"
                    },
                    {
                        name: "Three Ways to Title Case a Sentence in JavaScript",
                        site: "free-code-camp",
                        url: "https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/"
                    },
                ]
            },
            {
                question: "How to find longest substring without repeating characters in JavaScript?",
                answer: "https://gist.github.com/masautt/8cb604746c7dff090d0654759d1e19a7",
                tags: ["javascript"],
                type: "code",
                number: 235,
                id: "7bbszl6",
                sources: [
                    {
                        name: "Longest Substring Without Repeating Characters in JS",
                        site: "stack-overflow",
                        url: "https://codereview.stackexchange.com/a/220231"
                    },
                    {
                        name: "CODING INTERVIEW PRACTICE | EP 2 | LONGEST SUBSTRING WITHOUT REPEATS",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=sZosU8JjVaA"
                    },
                    {
                        name: "Longest Substring Without Repeating Characters",
                        site: "medium",
                        url: "https://medium.com/@dimko1/longest-substring-without-repeating-characters-997ded46e89d"
                    },
                ]
            },
            {
                question: "How to convert a string to a number in JavaScript?",
                answer: "https://gist.github.com/masautt/715c78034f26aa6605ceaad32276b750",
                tags: ["javascript"],
                type: "code",
                number: 236,
                id: "olq9ps4",
                sources: [
                    {
                        name: "Convert a string to an integer?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1133814"
                    },
                    {
                        name: "Easily Convert JavaScript Strings to Numbers",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=nhOnfbAmebg"
                    },
                    {
                        name: "JS String to Number",
                        site: "medium",
                        url: "https://medium.com/@cristi.nord/js-string-to-number-7d82010ef263"
                    },
                ]
            },
            {
                question: "How to remove vowels from string in JavaScript?",
                answer: "https://gist.github.com/masautt/239d93bfab41d9f37ef33017a8fec460",
                tags: ["javascript"],
                type: "code",
                number: 238,
                id: "19k7g5p",
                sources: [
                    {
                        name: "Counting number of vowels in a string with JavaScript",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/29450463"
                    },
                    {
                        name: "Javascript Challenges - Count the number of vowels in a string",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=j8CU_quwHv0"
                    },
                    {
                        name: "Javascript Algorithms #1: Counting the Vowels in a String Of Text",
                        site: "dev",
                        url: "https://dev.to/worldclassdev/javascript-algorithms-1-counting-the-vowels-in-a-string-oftext-5ejl"
                    },
                ]
            },
            {
                question: "How to reverse a string in JavaScript?",
                answer: "https://gist.github.com/masautt/bc26c58dfc81a60c39ba731943b66a13",
                tags: ["javascript"],
                type: "code",
                number: 240,
                id: "u7t2s1q",
                sources: [
                    {
                        name: "How do you reverse a string in place in JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/959004/9715166"
                    },
                    {
                        name: "Javascript Coding Challenge #1: Reverse a String (FreeCodeCamp)",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=miiM5JJgrQo"
                    },
                    {
                        name: "Reverse a String in JavaScript",
                        site: "medium",
                        url: "https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c"
                    },
                ]
            },
            {
                question:
                    "What's the difference between undeclared and undefined in JavaScript?",
                answer:
                    "Undeclared variables have not been referenced before in the current scope. Undefined variables have been declared but have not been assigned a value.",
                tags: ["javascript"],
                type: "comparison",
                number: 11,
                id: "h6uz3x9",
                sources: [
                    {
                        name: "variable === undefined vs. typeof variable === \"undefined\"",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/questions/4725603/variable-undefined-vs-typeof-variable-undefined"
                    },
                    {
                        name: "JavaScript for Developers 12 - Understanding undefined",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=oYhyG1M-W-o"
                    },
                    {
                        name: "undefined vs \"undeclared\" - You Don't Know JS",
                        site: "github",
                        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/types-grammar/ch1.md#undefined-vs-undeclared"
                    }
                ]

            },
            {
                question: "How to check if a string is all uppercase in JavaScript?",
                answer: "https://gist.github.com/masautt/bb551be4a59ef8080534cc91ca4785b8",
                tags: ["javascript"],
                type: "code",
                number: 241,
                id: "4eqrzp8",
                sources: [
                    {
                        name: "How can I test if a letter in a string is uppercase or lowercase using JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1077692/9715166"
                    },
                    {
                        name: "Core Javascript Tutorial - toLowerCase(), toUpperCase() and trim() method of String Object",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=hivLxFl-kAg"
                    },
                    {
                        name: "String.prototype.toUpperCase()",
                        site: "firefox",
                        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"
                    },
                ]
            },
            {
                question: "How to check if a string is all lowercase in JavaScript?",
                answer: "https://gist.github.com/masautt/c7146f1f5daad173418ef871bc5343e8",
                tags: ["javascript"],
                type: "code",
                number: 242,
                id: "trhvy6b",
                sources: [
                    {
                        name: "How can I test if a letter in a string is uppercase or lowercase using JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1077692/9715166"
                    },
                    {
                        name: "Core Javascript Tutorial - toLowerCase(), toUpperCase() and trim() method of String Object",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=hivLxFl-kAg"
                    },
                    {
                        name: "String.prototype.toLowerCase()",
                        site: "firefox",
                        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"
                    },
                ]
            },
            {
                question: "How to find most reoccuring character in JavaScript?",
                answer: "https://gist.github.com/masautt/2e8d8d84fd8761889ed0fc9399b4d219",
                tags: ["javascript"],
                type: "code",
                number: 243,
                id: "2fmdui8",
                sources: [
                    {
                        name: "Finding the most frequent character in a string javascript",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/22590204/9715166"
                    },
                    {
                        name: "Javascript Array Exercise: Majority Element",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=wQIEnwsXECs"
                    },
                    {
                        name: "Find the most commonly used character in string",
                        site: "medium",
                        url: "https://medium.com/@Dragonza/find-the-most-commonly-used-character-in-string-ed00dc2279be"
                    },
                ]
            },
            {
                question: "How to get all permutations of a string in JavaScript?",
                answer: "https://gist.github.com/masautt/3033aea4a933ae26a3971263e71fc6dd",
                tags: ["javascript"],
                type: "code",
                number: 244,
                id: "nq1zehe",
                sources: [
                    {
                        name: "Permutations in JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/20871714/9715166"
                    },
                    {
                        name: "JavaScript the Basics - Algorithms Part 3 Permutations",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=rxO6BFKr6ww"
                    },
                    {
                        name: "Implement All Permutations of a Set in JavaScript",
                        site: "medium",
                        url: "https://initjs.org/all-permutations-of-a-set-f1be174c79f8"
                    },
                ]
            },
            {
                question: "How to reverse a sentence in JavaScript?",
                answer: "https://gist.github.com/masautt/488736f2ec7d4cc2d68e258da54be37a",
                tags: ["javascript"],
                type: "code",
                number: 245,
                id: "pdeg7lj",
                sources: [
                    {
                        name: "Reverse a sentence and print each word in reverse order in Javascript [closed]",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/34083746/9715166"
                    },
                    {
                        name: "How to reverse word order in a sentence in 40 seconds ! JavaScript.",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=XK8-AUQSPW0"
                    },
                    {
                        name: "A popular programming interview question — reverse words of a sentence.",
                        site: "medium",
                        url: "https://medium.com/@hmurari/a-popular-programming-interview-question-reverse-words-of-a-sentence-3bac606d15a2"
                    },
                ]
            },
            {
                question: "How to find first non-repeating character in JavaScript?",
                answer: "https://gist.github.com/masautt/7778c80230db544d0a8e0877b919c6ae",
                tags: ["javascript"],
                type: "code",
                number: 246,
                id: "g3y4as9",
                sources: [
                    {
                        name: "return the first non repeating character in a string in javascript",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/24793128/9715166"
                    },
                    {
                        name: "Finding the First Non Repeating Character - JavaScript - Simplest Approach",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=tGoqKsPltxE"
                    },
                    {
                        name: "First non-repeating letter",
                        site: "medium",
                        url: "https://medium.com/@brendt_bly/first-non-repeating-letter-c00ef6a2e9b8"
                    },
                ]
            },
            {
                question: "How to check if string is palindrome in JavaScript?",
                answer: "https://gist.github.com/masautt/1c9732ad1ff32327d7b6cc7439d1a9af",
                tags: ["javascript"],
                type: "code",
                number: 247,
                id: "j99xx3o",
                sources: [
                    {
                        name: "Palindrome check in Javascript",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/14813569/9715166"
                    },
                    {
                        name: "Javascript Coding Challenge #3: Palindrome Check (Freecodecamp)",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=hvV48xfwZCs"
                    },
                    {
                        name: "Three ways to check for palindromes in JavaScript",
                        site: "dev",
                        url: "https://dev.to/domazet93/three-ways-to-check-for-palindromes-in-javascript-jbk"
                    },
                ]
            },
            {
                question: "How to check if string has only digits in JavaScript?",
                answer: "https://gist.github.com/masautt/9748d1234ef146ae12901a68b4a55c33",
                tags: ["javascript"],
                type: "code",
                number: 258,
                id: "c3bt8ij",
                sources: [
                    {
                        name: "Check if string contains only digits",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1779019/9715166"
                    },
                    {
                        name: "Javascript - how to make html input text Allow only Numeric values In JS [ with source code ]",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=6bKvevjR7GM"
                    },
                    {
                        name: "Regex tutorial — A quick cheatsheet by examples",
                        site: "medium",
                        url: "https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285"
                    },
                ]
            },
            {
                question: "How to get number of vowels and consonants in JavaScript?",
                answer: "https://gist.github.com/masautt/1109907cf23eaae3d9e981f190ff938d",
                tags: ["javascript"],
                type: "code",
                number: 259,
                id: "j6epsxe",
                sources: [
                    {
                        name: "Counting number of vowels in a string with JavaScript",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/29450463"
                    },
                    {
                        name: "Javascript Challenges - Count the number of vowels in a string",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=j8CU_quwHv0"
                    },
                    {
                        name: "Javascript Algorithms #1: Counting the Vowels in a String Of Text",
                        site: "dev",
                        url: "https://dev.to/worldclassdev/javascript-algorithms-1-counting-the-vowels-in-a-string-oftext-5ejl"
                    },
                ]
            },
            {
                question: "How to count number of occurrences of a string in JavaScript?",
                answer: "https://gist.github.com/masautt/65167ff69e94f2fc01b3a49b1d7ec846",
                tags: ["javascript"],
                type: "code",
                number: 260,
                id: "daldhei",
                sources: [
                    {
                        name: "Count the number of occurrences of a character in a string in Javascript",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/881111"
                    },
                    {
                        name: "JavaScript Tips and Tricks 03 - Count number of characters",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=BxPxXk0ubA4"
                    },
                    {
                        name: "String Practice Problems",
                        site: "medium",
                        url: "https://medium.com/@codingfreak/string-practice-problems-i-c64e073a7138"
                    },
                ]
            },
            {
                question: "How to find longest palindrome of a string in JavaScript?",
                answer: "https://gist.github.com/masautt/6fcd34d2806a727aacbf6395d034eefa",
                tags: ["javascript"],
                type: "code",
                number: 261,
                id: "bvl9h3f",
                sources: [
                    {
                        name: "Given a string s, find the longest palindromic substring in s.",
                        site: "jsfiddle",
                        url: "https://jsfiddle.net/vovchuck_bogdan/yv6u9d1u/2/"
                    },
                    {
                        name: "LONGEST PALINDROME SUB STRING WITH DYNAMIC PROGRAMMING",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=Fi5INvcmDos"
                    },
                    {
                        name: "Longest Palindromic Substring",
                        site: "medium",
                        url: "https://medium.com/@bhprtk/longest-palindromic-substring-a8190fab03ff"
                    },
                ]
            },
            {
                question: "How to check if 2 strings are anagrams in JavaScript?",
                answer: "https://gist.github.com/masautt/2ec67e0cd0c580a6336034a99f46ed6a",
                tags: ["javascript"],
                type: "code",
                number: 267,
                id: "etqai3t",
                sources: [
                    {
                        name: "JavaScript anagram comparison",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/23785653/9715166"
                    },
                    {
                        name: "JS Interview - Anagrams - Question 15",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=YCpxWfxU0NQ"
                    },
                    {
                        name: "Solving the anagram problem",
                        site: "medium",
                        url: "https://medium.com/@gianpaul.r/solving-the-anagram-problem-c4589211c130"
                    },
                ]
            },
        ],
    },
    {
        name: "JS Interview Questions - Arrays",
        desc:
            "FAQ's for all those StackOverflow questions you've been digging through.",
        emoji: "🌟",
        id: "javascript-interview-questions-arrays",
        faqs: [
            {
                question: "How to remove an element from an array in JavaScript?",
                answer: "https://gist.github.com/masautt/76be367edee65ac1b5a87853fcef724e",
                tags: ["javascript"],
                type: "code",
                number: 170,
                id: "otgvjxf",
                sources: [
                    {
                        name: "How do I remove a particular element from an array in JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/5767357"
                    },
                    {
                        name: "JavaScript Tip: Deleting an Element from an Array",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=lQ5TnRXZoPs"
                    },
                    {
                        name: "How to remove an element from a JavaScript array.",
                        site: "medium",
                        url: "https://medium.com/@enirate/how-to-remove-an-element-from-a-javascript-array-ce41d6ea259f"
                    },
                ]
            },
            {
                question: "How to append to array in JavaScript?",
                answer: "https://gist.github.com/masautt/0d1918dcaa0378fcdfcc724ef8facaab",
                tags: ["javascript"],
                type: "code",
                number: 182,
                id: "kr0ns2b",
                sources: [
                    {
                        name: "How to append something to an array?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/351421"
                    },
                    {
                        name: "Common Array Methods - Beau teaches JavaScript",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=MeZVVxLn26E"
                    },
                    {
                        name: "JavaScript: Array Methods Cheatsheet",
                        site: "medium",
                        url: "https://medium.com/@timhancodes/javascript-array-methods-cheatsheet-633f761ac250"
                    },
                ]
            },
            {
                question: "How to sort array in JavaScript?",
                answer: "https://gist.github.com/masautt/fe73908d0ccdde9a3e6df98ea884f108",
                tags: ["javascript"],
                type: "code",
                number: 189,
                id: "hieewlp",
                sources: [
                    {
                        name: "How to sort an array of integers correctly",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1063027/9715166"
                    },
                    {
                        name: "Sorting Arrays in JavaScript (Array.prototype.sort)",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=BbuLjEqFlw0"
                    },
                    {
                        name: "Is Javascript Array.sort() Stable?",
                        site: "medium",
                        url: "https://medium.com/@fsufitch/is-javascript-array-sort-stable-46b90822543f"
                    },
                ]
            },
            {
                question: "How to sort array of objects by value in JavaScript?",
                answer: "https://gist.github.com/masautt/17931ce2f5efee67ab58f8a8331e9c49",
                tags: ["javascript"],
                type: "code",
                number: 190,
                id: "wioawyg",
                sources: [
                    {
                        name: "Sorting an array of JavaScript objects by property",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/979289/9715166"
                    },
                    {
                        name: "Custom Array Sorts in JavaScript",
                        site: "youtube",
                        url: "https://youtu.be/zVevl-K-m7Y?t=301"
                    },
                    {
                        name: "Swift: Sort an array of objects, depending on a boolean property",
                        site: "medium",
                        url: "https://medium.com/@flxschmidt/sort-an-array-of-objects-depending-on-a-boolean-property-in-swift-544150965f14"
                    },
                ]
            },
            {
                question: "How to reverse an array in JavaScript?",
                answer: "https://gist.github.com/masautt/36116cd6712763d2208cdd7160820c88",
                tags: ["javascript"],
                type: "code",
                number: 239,
                id: "h74jep5",
                sources: [
                    {
                        name: "What is the most efficient way to reverse an array in Javascript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/9113136/9715166"
                    },
                    {
                        name: "Javascript reverse an Array",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=_KUdewtpQL4"
                    },
                    {
                        name: "Code Recipe: How to Reverse an Array in JavaScript",
                        site: "medium",
                        url: "https://medium.com/dailyjs/code-recipe-how-to-reverse-an-array-in-javascript-4a0306001d28"
                    },
                ]
            },
            {
                question:
                    "How to remove duplicates from an array in JavaScript?",
                answer: "https://gist.github.com/masautt/4ce6ca53bce681831d7fcba66c96d304",
                tags: ["javascript"],
                type: "code",
                number: 262,
                id: "uwq5qpf",
                sources: [
                    {
                        name: "Get all unique values in a JavaScript array (remove duplicates)",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/14438954/9715166"
                    },
                    {
                        name: "Remove duplicates from array in JavaScript – the only right way",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=bRpVR1x_O8Q"
                    },
                    {
                        name: "How to Remove Array Duplicates in ES6",
                        site: "medium",
                        url: "https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c"
                    },
                ]
            },
            {
                question: "How to check if array contains a value in JavaScript?",
                answer: "https://gist.github.com/masautt/76ac3c8e7e12ca605c843467765041dd",
                tags: ["javascript"],
                type: "code",
                number: 263,
                id: "luglhko",
                sources: [
                    {
                        name: "How do I check if an array includes an object in JavaScript?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1473742/9715166"
                    },
                    {
                        name: "JavaScript Problem: Searching an Array for a Value",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=MLNmrzGQYdU"
                    },
                    {
                        name: "Arrays in JavaScript",
                        site: "medium",
                        url: "https://medium.com/swlh/arrays-in-javascript-e64b873ad801"
                    },
                ]
            },
            {
                question: "How to check if all elements in an array are unique in JavaScript?",
                answer: "https://gist.github.com/masautt/f1deaa07515d9cdfc1a306c8f99d1e21",
                tags: ["javascript"],
                type: "code",
                number: 264,
                id: "i9hzdt2",
                sources: [
                    {
                        name: "Check if an array contains duplicate values",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/34192063/9715166"
                    },
                    {
                        name: "Remove duplicates from array in JavaScript – the only right way",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=bRpVR1x_O8Q"
                    },
                    {
                        name: "How to Remove Array Duplicates in ES6",
                        site: "medium",
                        url: "https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c"
                    },
                ]
            },
            {
                question: "How to find the min/max value of an array in JavaScript?",
                answer: "https://gist.github.com/masautt/c666b85dc77ba2b0d913162a5e55548a",
                tags: ["javascript"],
                type: "code",
                number: 265,
                id: "8osyb4f",
                sources: [
                    {
                        name: "Find the min/max element of an Array in JavaScript",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1669222/9715166"
                    },
                    {
                        name: "JavaScript Tip: Finding the Minimum or Maximum Value in an Array",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=IY7TRbXLU6c"
                    },
                    {
                        name: "Calculate the Max/Min value from an array",
                        site: "globe",
                        url: "https://www.jstips.co/en/javascript/calculate-the-max-min-value-from-an-array/"
                    },
                ]
            },
            {
                question: "How to find the intersection of 2 arrays in JavaScript?",
                answer: "https://gist.github.com/masautt/c64cebd8b3d4503d6a65cf2dce6370a3",
                tags: ["javascript"],
                type: "code",
                number: 266,
                id: "tb57y5j",
                sources: [
                    {
                        name: "Simplest code for array intersection in javascript",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/1885569/9715166"
                    },
                    {
                        name: "How to find intersection of two arrays in JavaScript",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=m3U69xPawkw"
                    },
                    {
                        name: "Array intersection, difference and union in ES6",
                        site: "medium",
                        url: "https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848"
                    },
                ]
            },
            {
                question: "How to remove all odd numbers from an array in JavaScript?",
                answer: "https://gist.github.com/masautt/9f149ed3ec221795efd0d6ae97854568",
                tags: ["javascript"],
                type: "code",
                number: 268,
                id: "86526vu",
                sources: [
                    {
                        name: "Testing whether a value is odd or even",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/6211660/9715166"
                    },
                    {
                        name: "How to Check a Number is Even or Odd in JavaScript",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=h9gsO0arDgY"
                    },
                    {
                        name: "Check if Number is Even/Odd",
                        site: "globe",
                        url: "https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/"
                    },
                ]
            },
            {
                question: "How to remove all even numbers from an array in JavaScript?",
                answer: "https://gist.github.com/masautt/7c7766dc75bfd420df4d53c58133b866",
                tags: ["javascript"],
                type: "code",
                number: 269,
                id: "6x0juyv",
                sources: [
                    {
                        name: "Testing whether a value is odd or even",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/6211660/9715166"
                    },
                    {
                        name: "How to Check a Number is Even or Odd in JavaScript",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=h9gsO0arDgY"
                    },
                    {
                        name: "Check if Number is Even/Odd",
                        site: "globe",
                        url: "https://css-tricks.com/snippets/javascript/check-if-number-is-evenodd/"
                    },
                ]
            },
            {
                question: "How to find the first duplicate element of an array in JavaScript?",
                answer: "https://gist.github.com/masautt/df672d72e0fa70e596c5a916944459aa",
                tags: ["javascript"],
                type: "code",
                number: 270,
                id: "q2b43jv",
                sources: [
                    {
                        name: "Javascript: How to find first duplicate value and return its index?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/39346715/9715166"
                    },
                    {
                        name: "CodeFights: Interview Practice - First Duplicate from Google",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=L0VivTGm0nQ"
                    },
                    {
                        name: "Algorithms Exercise: Find the First Duplicate in an Array",
                        site: "medium",
                        url: "https://medium.com/@joshsaintjacque/algorithms-exercise-find-the-first-duplicate-in-an-array-e97e9ed282c1"
                    },
                ]
            },
            {
                question: "How to remove the first element from an array in JavaScript?",
                answer: "https://gist.github.com/masautt/9caca1bb263eac04e77907a0c4e92a63",
                tags: ["javascript"],
                type: "code",
                number: 271,
                id: "4kl7b58",
                sources: [
                    {
                        name: "https://stackoverflow.com/questions/2003815/how-to-remove-element-from-an-array-in-javascript",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/2003825/9715166"
                    },
                    {
                        name: "How to remove the first element of a JavaScript Array - Array.prototype.shift()",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=8xFxxhfuw7g"
                    },
                    {
                        name: "How to remove an element from a JavaScript array.",
                        site: "medium",
                        url: "https://medium.com/@enirate/how-to-remove-an-element-from-a-javascript-array-ce41d6ea259f"
                    },
                ]
            },
            {
                question: "How to remove the last element from an array in JavaScript?",
                answer: "https://gist.github.com/masautt/298a6fefb1d8bbec65698db879e4c765",
                tags: ["javascript"],
                type: "code",
                number: 286,
                id: "mo1dpw7",
                sources: [
                    {
                        name: "Remove last item from array",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/19544478/9715166"
                    },
                    {
                        name: "JavaScript Array - 05 - Remove the last element",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=RbrrOQEiotU"
                    },
                    {
                        name: "How to remove an element from a JavaScript array.",
                        site: "medium",
                        url: "https://medium.com/@enirate/how-to-remove-an-element-from-a-javascript-array-ce41d6ea259f"
                    },
                ]
            },
            {
                question: "How to shuffle an array in JavaScript?",
                answer: "https://gist.github.com/masautt/5e4b063c06153d6c82a02543aa89f541",
                tags: ["javascript"],
                type: "code",
                number: 272,
                id: "pkjkh4p",
                sources: [
                    {
                        name: "How to randomize (shuffle) a JavaScript array?",
                        site: "stack-overflow",
                        url: "https://stackoverflow.com/a/12646864/9715166"
                    },
                    {
                        name: "JavaScript Problem: Shuffling an Array",
                        site: "youtube",
                        url: "https://www.youtube.com/watch?v=myL4xmtAVtw"
                    },
                    {
                        name: "How To Correctly Shuffle An Array in JavaScript",
                        site: "medium",
                        url: "https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb"
                    },
                ]
            },
        ],
    }
];
