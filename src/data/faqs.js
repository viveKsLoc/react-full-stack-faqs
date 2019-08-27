module.exports = [
  {
    question: `What's the difference between CSS Component Frameworks and CSS Utility Frameworks`,
    answer: `Component Frameworks limit writing actual CSS because they offer prebuilt components that can be imported. Utility frameworks encourage inline styling by offering prebuilt classes that correlate to CSS attributes.`,
    tags: [`Front-End`, `CSS`, `JS-Libraries`],
    types: [`Comparison`],
    id: 0
  },
  {
    question: `What's the difference between TypeScript and JavaScript?`,
    answer: `TypeScript is a SuperSet of JavaScript created by Microsoft in 2012. TypeScript is strongly-typed which helps identify compilation errors in development.`,
    tags: [`JavaScript`, `TypeScript`, `Programming Paradigms`, `JS-Libraries`],
    types: [`Comparison`],
    id: 1
  },
  {
    question: `What is the this keyword in JavaScript?`,
    answer: `The this keyword refers to the object that is executing the current function.`,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 2
  },
  {
    question: `What does "use strict" do in JavaScript?`,
    answer: `The "use strict" string litereal was introduced in ESCMScript 5. When included in a scope, errors are thrown for insecure coding practices like assigning values to undeclared variables. The this keyword does not traverse up the functional scope to the global object when it is undefind.`,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 3
  },
  {
    question: `What is closure?`,
    answer: `Closure refers to when a function can access variables outside of its lexical scope.`,
    tags: [`JavaScript`, `Programming-Fundamentals`],
    types: [`Definition`],
    id: 4
  },
  {
    question: `What is the DOM?`,
    answer: `The DOM is the browsers API that allows a scripting language like JavaScript to manipulate HTML on a webpage.`,
    tags: [`DOM`, `Front-End`],
    types: [`Definition`],
    id: 5
  },
  {
    question: `What's the difference between the var, let, and const keywords in JavaScript?`,
    answer: `Each are used to declare a variable, but var has been a part of JavaScript since the start while let and const were introduced in ES6. var has functional scope while the others have block scope. const is identical to let but you aren't allowed to redeclare a variable declared with const`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 6
  },
  {
    question: `What is the box model in CSS?`,
    answer: `The box model is the hierarchy of css attributes on elements. Content --> padding --> border --> margin.`,
    tags: [`CSS`, `Front-End`],
    types: [`Definition`],
    id: 7
  },
  {
    question: `What's the difference between == and === in JavaScript?`,
    answer: `The double equals (==) uses implicit conversion when comparing values. If we compare the number 5 with the string "5" (5 == "5"), the string will be converted to a number and compared. The triple equals (===) does not implicitly convert so ("5" === 5) will return false.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 8
  },
  {
    question: `What's the difference between null and undefiend in JavaScript?`,
    answer: `undefined is given to a variable that has not been assigned a value. null can only be assigned by a developer.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 9
  },
  {
    question: `What's the difference between undeclared and undefined in JavaScript?`,
    answer: `Undeclared variables have not been referenced before in the current scope. Undefined variables have been declared but have not been assigned a value.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 10
  },
  {
    question: `What's the difference between the window and document in the DOM?`,
    answer: `The window refers to the object that represent's the browser's window. All global JavaScript objects, functions, and variables automaically become members of the window object. The document is nested in the window object and refers to the actual HTML code of the webpage.`,
    tags: [`DOM`, `Front-End`],
    types: [`Comparison`],
    id: 11
  },
  {
    question: `What is event bubbling?`,
    answer: `When a user interacts with a nested element and the event "bubbles" to the top through its ancestor elements.`,
    tags: [`DOM`, `Front-End`],
    types: [`Definition`],
    id: 12
  },
  {
    question: `What's the difference between the call and apply functions in JavaScript?`,
    answer: `Both are function prototypes that call the function while passing in a this object. apply takes in and array of arguments as the second function while call does not require the array and will take an infinite amount of arguments.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 13
  },
  {
    question: `What's the difference between a shallow copy and deep copy?`,
    answer: `Shallow copies do not consider the fields of an object that are references to other objects so it keeps the same memory addresses. Deep copies make a copy of dynamically allocated memory that is pointed to by the fields.`,
    tags: [`JavaScript`, `Programming-Fundamentals`],
    types: [`Comparison`],
    id: 14
  },
  {
    question: `What is immutable?`,
    answer: `When we say something is immutable it means it we cannot modify it's value after assignment, we would need to create a copy of it. Numbers and strings are immutable while objects, arrays, functions, classes, sets, and maps are not.`,
    tags: [`JavaScript`, `Programming-Fundamentals`],
    types: [`Definition`],
    id: 15
  },
  {
    question: `What are the 2 key features of React that set it apart from other frameworks?`,
    answer: `React features JSX, a syntax extension to JavaScript that is similar to other templating languages but comes iwth the full power of JavaScript. React also uses a virtual dom which is a lightweidght copy of the DOM that allows eliminates the need to constantly update the entire DOM which is slow.`,
    tags: [`React.js`, `JavaScript`, `Front-End`, `JS-Libraries`],
    types: [`List`],
    id: 16
  },
  {
    question: `What is specificity in CSS?`,
    answer: `Specificity refers to the weight that is applied to a given CSS declaration. Types < Classes < IDs < !Important keyword.`,
    tags: [`CSS`, `Front-End`],
    types: [`Definition`],
    id: 17
  },
  {
    question: `What's the difference betwen visibility: hidden and display: none in CSS?`,
    answer: `Visibility hidden renders in the DOM while display none does not.`,
    tags: [`CSS`, `Front-End`],
    types: [`Comparison`],
    id: 18
  },
  {
    question: `What is a first class function?`,
    answer: `This means functions can be stored in a variable, object, or array and they can be passed into and returned from a function.`,
    tags: [`JavaScript`, `Programming-Fundamentals`],
    types: [`Definition`],
    id: 19
  },
  {
    question: `What is a lambda function?`,
    answer: `These are essentially nameless functions.`,
    tags: [`JavaScript`, `Programming-Fundamentals`],
    types: [`Definition`],
    id: 20
  },
  {
    question: `What is an arrow function in JavaScript?`,
    answer: `Arrow functions, new to ES6, are ways to write Lambda functions. These functions however, do not have their own this value. They are bound to the enclosing scope.`,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 21
  },
  {
    question: `What are features of a functional programming language?`,
    answer: `1. First-class functions: functions can be stored in a variable object or array and can be passed in or returned from functions 
      2. Higher Order Functions: (Factory Functions) functions that can build other functions by taking a function as an argument
      3. Lambda functions: A nameless function`,
    tags: [`Programming-Fundamentals`, `JavaScript`],
    types: [`List`],
    id: 22
  },
  {
    question: `What is a higher order function?`,
    answer: `These are functions that take a function as an argument and/or return a new function.`,
    tags: [`Programming-Fundamentals`, `JavaScript`],
    types: [`Definition`],
    id: 23
  },
  {
    question: `What's the difference between classical and prototypal inheritance?`,
    answer: `Classical relies on classes and prototypal relies on prototypes. Classes are immutable, you can't modify or add new methods at runtime while prototypes can be either. Classes may or may not support multiple inheritance where objects can inherit from multiple prototypes.`,
    tags: [`Programming-Fundamentals`, `JavaScript`],
    types: [`Comparison`],
    id: 24
  },
  {
    question: `What are property descriptors in JavaScript?`,
    answer: `Property descriptors describe attributes of a property. These include configurable - alters ability to change other property descriptors and delete the property, enumerable - changes whether the property is displayed when the object is looped over, and writable - whether the value can be changed.`,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 25
  },
  {
    question: `What is the purpose of Object,preventExtensions( ) in JavaScript?`,
    answer: `When an object is passed into this function, an error will be thrown when there is an attempt to define a property on the object.`,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 26
  },
  {
    question: `What's the difference between sealing, freezing, and deep-freezing an object in JavaScript?`,
    answer: `Object.seal( ): Prevent new properties being added and marks existing properties as non-configurable but they are still writable. 
    Object.freeze( ) Will do same as seal but not have the values be writable
    Object.deepFreeze is not a function but it means to freeze the properties of objects nested in the main object.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 27
  },
  {
    question: `What's the difference between the typeof and instanceof operators in JavaScript?`,
    answer: `The typeof operator returns a string indicating the type of the operand while the instanceof operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 28
  },
  {
    question: `What's the difference between the in and hasOwnProperty operators in JavaScript?`,
    answer: `The in property returns true if the specified property is in the specified object or it's prototype chain while hasOwnProperty will return true if the object has the specified property as it's own (not just from the prototype chain)`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 29
  },
  {
    question: `What are the 4 rules for determining what "this" refers to in JavaScript?`,
    answer: `1. Was the function called with the new binding (new binding) ? If so, this is the newly constructed object.
    2. Was the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.
    3. Was the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.
    4. Otherwise, default the this (default binding). If in strict mode, make it undefined, otherwise choose the global object.`,
    tags: [`JavaScript`],
    types: [`List`],
    id: 30
  },
  {
    question: `What are the 4 things events that occur when a function is invoked with the "new" keyword?`,
    answer: `1. A brand new object is created (aka, constructed) out of thin air
    2. The newly constructed object is prototype linked
    3. The newly constructed object is set as the this binding for that function call
    4. Unless the function returns its own alternate object, the new invoked function call will automatically return the newly constructed object`,
    tags: [`JavaScript`],
    types: [`List`],
    id: 31
  },
  {
    question: `What's the difference between accessing an object through the property method and key method?`,
    answer: `The property method (object.property) is the common method to declare an access an object's properties.
    The key method (object["property"]) takes in a string as the property which means you can access variable names that have spaces in them.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 32
  },
  {
    question: `What's the difference between HTTP Basic Authentication and OAuth?`,
    answer: `HTTP Basic and requires the client keeps the password in clear text and send it with each request. 
      OAuth is faster because it relies on security token validation (digital signature verification)`,
    tags: [`Security`, `Back-End`],
    types: [`Comparison`],
    id: 33
  },
  {
    question: `Why should you never use HTTP Basic Authentication?`,
    answer: `1. You are not allowed to specify only certain features of a web service with just a username and password.
    2. This process blocks other devices trying to access the same service with the username and password
    3. No support for extensions like two-factor authentication`,
    tags: [`Security`, `Back-End`],
    types: [`Explanation`],
    id: 34
  },
  {
    question: `What is an IIFE in JavaScript?`,
    answer: `An IIFE is an immediately invoked function expression which runs as soon as it's defined. Also known as a Self Executing Anonymous Function, these are often used to assign values to variables by returning values from the function.`,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 35
  },
  {
    question: `What is SEO?`,
    answer: `SEO, Search Engine Optimization is the process of increasing the quality and quantity of a webebsite traffic by increasing the visibility of a website or a web page to users of a web search engine.`,
    tags: [`Front-End`],
    types: [`Definition`],
    id: 36
  },
  {
    question: `What are some ways to increase SEO?`,
    answer: `- Specifying an alt tag on images
    - Add an XML sitemap
    - Avoid broken links
    - Add a robots.txt file
    - Specify a favicon
    - Avoid JavaScript errors
    - Optimize assets (including minification)
    - Enable and force SSL
    - Include detailed meta tags`,
    tags: [`Front-End`],
    types: [`List`],
    id: 36
  },
  {
    question: `What is an XML sitemap?`,
    answer: `XML sitemaps list a website's important pages, making sure a search engine can find and crawl through all pages.`,
    tags: [`Front-End`],
    types: [`Definition`],
    id: 37
  },
  {
    question: `What is the robots.txt file?`,
    answer: `robots.txt gives instructions about a site to web crawlsers. These instructions are called the Robots Exclusion Protocol. You can use this file to specify endpoints that should be avoided however malicious bots can still access these endpoints since the file is publically available.`,
    tags: [`Front-End`],
    types: [`Definition`],
    id: 38
  },
  {
    question: `What is minification?`,
    answer: `Minification refers to the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser. A minifier might remove comments, spaces, unused code, and use shorter variable and function names.`,
    tags: [`Front-End`],
    types: [`Definition`],
    id: 39
  },
  {
    question: `What is a favicon?`,
    answer: `A favicon (favorite icon) is a 16 x 16 or 32 x 32 .ico file that is shown next to the title of a webpage in the browser.`,
    tags: [`Front-End`],
    types: [`Definition`],
    id: 40
  },
  {
    question: `What is SSL?`,
    answer: `SSL (secure sockets layer) is the standard security technology for establishing an encrypted link between a web server and a browser. Without SSL, data sent between clients and servers is sent in plain text - which makes it really easy to be intercepted.`,
    tags: [`Front-End`, `Back-End`, `Security`, `Networking`],
    types: [`Definition`],
    id: 41
  },
  {
    question: `What is the three-way handshake?`,
    answer: `The three-way handshake is a method used in a TCP/IP network to create a connection between a local host/client and server. It is a 3 step process that requires both the client and server to exchange SYN and ACK packets before actual data communication begins.`,
    tags: [`Networking`],
    types: [`Definition`],
    id: 42
  },
  {
    question: `What are the steps of a three-way handshake`,
    answer: `1. The client sends a SYN data packet over an IP network to a server on the same or an external network.
    2. The target server must have open ports that can accept and initiate new connections before it recieves the SYN packet and responds with a confirmation receipt - the ACK packet or SYN/ACK packet.
    3. The client node receives the SYN/ACK packed from the server and responds with an ACK packet.`,
    tags: [`Networking`],
    types: [`List`],
    id: 43
  },
  {
    question: `What's the difference between an ACK, SYN, and SYN-ACK packet?`,
    answer: `SYN refers to a request to SYNCHRONNIZE
    ACK refers to a general ACKNOWLEDGEMENT
    SYN-ACK refers to an ACKNOWLEDGEMENT to a SYNCHRONIZE request`,
    tags: [`Networking`],
    types: [`Comparison`],
    id: 44
  },
  {
    question: `What is a SYN flood?`,
    answer: `A form of denial of service attack in which an attacker sends a succession of SYN requests to a target's system in attempt to consume enough server resources to make the system unresponsive to legitimate traffic.`,
    tags: [`Networking`, `Security`],
    types: [`Definition`],
    id: 45
  },
  {
    question: `What is a Denial-of-Service attack?`,
    answer: `Any attempt to shut down a machine or network, making it inaccessible to its intended users. These attacks are usually accomplished by flooding the target with traffic, or sending it information that triggers a crash.`,
    tags: [`Networking`, `Security`],
    types: [`Definition`],
    id: 46
  },
  {
    question: `What's the difference between a DOS and a DDOS attack?`,
    answer: `A DDOS (Distributed Denial of Service) attack is more threatening because it means the attempts to override the target with traffic are coming from multiple IP Addresses. This makes it difficult to distinguish legitimate traffic from malicious.`,
    tags: [`Networking`, `Security`],
    types: [`Comparison`],
    id: 47
  },
  {
    question: `What is the purpose of a meta tag?`,
    answer: `Meta tags offer metadata about the HTML page. This can include description, keywords, author, viewport, and charset.`,
    tags: [`HTML`, `Front-End`],
    types: [`Definition`],
    id: 48
  },
  {
    question: `What is the first line you include in any HTML file?`,
    answer: `You need to use <!DOCTYPE html> at the top of your HTML file. This is not an HTML tag, this is an instruction to the web browser about what version of HTML the page is written in.`,
    tags: [`HTML`, `Front-End`],
    types: [`Definition`],
    id: 49
  },
  {
    question: `What is HTTP keep-alive?`,
    answer: `HTTP keep-alive, aka HTTP persistent connection is an instruction that allows a single TCP connection to remain open for multiple HTTP requests/responses. Enabling the keep-alive header allows you to serve all web page resources over a single connection thus reducing client load times and server load.`,
    tags: [`Networking`],
    types: [`Definition`],
    id: 50
  },
  {
    question: `What is DNS lookup?`,
    answer: `DNS (Domain Name System) lookup refers to the process of mapping domain names to IP addresses.`,
    tags: [`Networking`],
    types: [`Definition`],
    id: 51
  },
  {
    question: `Why do some consider @import bad practice in CSS?`,
    answer: `@import is not recognized by older browsers, however this is starting to change. @import also synchronously links CSS files while <link> is asynchronous.`,
    tags: [`CSS`, `Front-End`],
    types: [`Explanation`],
    id: 52
  },
  {
    question: `What's the difference between <link> and @import with CSS?`,
    answer: `<link> is the HTML method for including CSS while @import is the CSS method. @import allows you to include css files inside another css file because it's written in CSS. <link> allows for multiple css files to be loaded asynchronously. Older browsers might not work properly with @import.`,
    tags: [`CSS`, `HTML`, `Front-End`],
    types: [`Comparison`],
    id: 53
  },
  {
    question: `What's the difference between Art Direction and Resolution Switching?`,
    answer: `Art Direciton refers to serving several images potentially at the same resolution but cropped differently or with different aspect resolutions to optimize user experince. . 
    Resolution switching refers to offering different resolutions for images based on the size of the screen accessing them in order to lower bandwidth.`,
    sources: [
      {
        name: `Stack Overflow`,
        site: `https://stackoverflow.com/questions/46363870/difference-between-html-implementation-for-art-direction-and-resolution-switchin`
      }
    ],
    tags: [`Front-End`, `User Experience`],
    types: [`Comparison`],
    id: 54
  },
  {
    question: `What are some ways to prevent bots from scraping an API?`,
    answer: `-Incorporate Rate Limiting,
    -Set up Authentication`,
    tags: [`Back-End`, `Security`],
    types: [`List`],
    id: 55
  },
  {
    question: `What status codes are acceptable when a user attempts to create a resource that already exists through a REST API?`,
    answer: `-409 Conflict: Widely-Acceptable
    -422 Unprossable Entity: Acceptable
    -400 Bad Request: Acceptable but discouraged`,
    tags: [`Back-End`, `REST`],
    types: [`List`],
    id: 56
  },
  {
    question: `What's the difference between CSS Flexbox and CSS Grid?`,
    answer: `Flexbox allows item's width and height to change (flex) to fill the available space while CSS grid is a set width and height for all elements and keeps the same scale.`,
    tags: [`Front-End`, `CSS`],
    types: [`Comparison`],
    id: 57
  },
  {
    question: `What are the SOLID principles?`,
    answer: `SOLID is an acronym to remember fundamental software engineering principles
    S - Single responsibility
    O - Open Closed
    L - Liskov substitution
    I - Interface Segregation
    D - Dependency Inversion`,
    tags: [`Software-Engineering`],
    types: [`Definition`, `List`],
    id: 58
  },
  {
    question: `What is the single responsibility principle?`,
    answer: `The principle that every module, class, or function should only have one reason to change. Single responsibility is the S in SOLID software engineering principles.`,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 59
  },
  {
    question: `What's the difference between two-way data binding and one-way data flow?`,
    answer: `Two-way data binding means UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa.
    One-way data flow means the model is the single source of truth such that changes in the UI trigger measures that signal user intent to the model. Only the model has access to change the states app's state.`,
    tags: [`Front-End`, `JavaScript`],
    types: [`Comparison`],
    id: 60
  },
  {
    question: `What's the difference between React.js and Angular.JS's approach on data binding?`,
    answer: `React.js uses a one-way data flow while Angular uses two-way binding.`,
    tags: [`Front-End`, `JavaScript`, `React.js`, `JS-Libraries`],
    types: [`Comparison`],
    id: 61
  },
  {
    question: `What's the difference between monolithic and microservice architectures?`,
    answer: `Monolithic uses a set of identical servers behind a load balance while microservices relies on decoupling all servers and spreading them across virtual machines on servers.`,
    tags: [`Design-Patterns`, `Back-End`],
    types: [`Comparison`],
    id: 62
  },
  {
    question: `What's the difference between synchronous and asynchronous programming?`,
    answer: `When trying to grab data in synchronous you would need to wait until all the data has been received but with asynchronous you won't need to wait (block), you will be alerted later when the data has been returned.`,
    tags: [`Programming-Fundamentals`, `JavaScript`],
    types: [`Comparison`],
    id: 63
  },
  {
    question: `What is the open/closed principle?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 64
  },
  {
    question: `What is the Liskov substitution principle?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 65
  },
  {
    question: `What is the Interface Segregation Principle?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 66
  },
  {
    question: `What is the depency inversion principle?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 67
  },
  {
    question: `What is the KISS principle?`,
    answer: `KISS (Keep it Simple Stupid / Keep it Stupid Simple) is a design principle noted by the US Navy that states systems work best when they are kept simple.`,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 68
  },
  {
    question: `What is the main benefit we recieve with React Hooks?`,
    answer: `React hooks allows us to only write function in JavaScript and removes the need for the class and this keywords.`,
    tags: [`Front-End`, `JavaScript`, `React.js`, `JS-Libraries`],
    types: [`Explanation`],
    id: 69
  },
  {
    question: `What's the difference between React Redux and the Context API?`,
    answer: ``,
    tags: [`Front-End`, `JavaScript`, `React.js`, `JS-Libraries`],
    types: [`Comparison`],
    id: 70
  },
  {
    question: `What is behavior driven development?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 71
  },
  {
    question: `What are the 5 JavaScript Data Types?`,
    answer: `Number, String, Boolean, Object, and Undefined`,
    tags: [`JavaScript`],
    types: [`List`],
    id: 72
  },
  {
    question: `Who is the creator of JavaScript?`,
    answer: `Brendan Eich from Netscape built JavaScript in 10 days.`,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 73
  },
  {
    question: `What's the difference between ViewState and SessionState?`,
    answer: `ViewState refers to a specific page in a session. SessionState is specific to user specific data that can be accessed across all pages in a web application.`,
    tags: [`Front-End`, `Back-End`],
    types: [`Comparison`],
    id: 74
  },
  {
    question: `What is the purpose of Void(0) in JavaScript?`,
    answer: `Void(0) can be used to prevent the page from refreshing because it calls another method instead.`,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 75
  },
  {
    question: `What is a cookie?`,
    answer: `A cookie is a small test file that gets created when a user visits a website. Cookies are sent to the back-end to be used to keept track of user sessions.`,
    tags: [`Front-End`, `Back-End`],
    types: [`Definition`],
    id: 76
  },
  {
    question: `What is the difference between lexical scope and dynamic scope in JavaScript?`,
    answer: `When we traverse up the lexical scope we are looking at the nesting of brackets {} but when we traverse up dynamic scope we are following the function call's scopes.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 77
  },
  {
    question: `Why is using innerHTML discouraged?`,
    answer: `There is no method to append content already defined with innnerHTML. The entire innerHTML content is re-parsed and bult into elements, therefore its much slower. innerHTML does not provide validation so if we insert invalid or broken HTML we can break the document.`,
    tags: [`JavaScript`, `DOM`, `HTML`],
    types: [`Explanation`],
    id: 78
  },
  {
    question: `What are the 3 types of errors in JavaScript?`,
    answer: `-Syntax Errors: (Parsing Errors) occur at interpret time.
    -Runtime Errors: (Exceptions) occur during execution, the syntax could be right but the code might not execute properly.
    -Logical Errors:  Errors that occur due to improper code, most difficult to debug.`,
    tags: [`JavaScript`],
    types: [`List`],
    id: 79
  },
  {
    question: `What's the difference between window.onload and onDocumentReady?`,
    answer: `The onload function is not run until all the information on the page is loaded. onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of code. `,
    tags: [`DOM`],
    types: [`Comparison`],
    id: 80
  },
  {
    question: `What is JSONP?`,
    answer: `Also known as JSON with padding is a script tag injection that generates a dynamic script tag used to trick the browser into making a connection with a new domain.`,
    tags: [`JavaScript`, `Front-End`],
    types: [`Definition`],
    id: 81
  },
  {
    question: `Why was JSONP created?`,
    answer: `JSONP was used to circumvent the restriction that JavaScript files cannot make calls to domains that are not where that file originates from, (to avoid cross site scripting). Instead, JavaScript code is used to generate script tags with the domain of the server to fetch data from, thus the browser will call to the domain hoping to fetch a JavaScript file. The src file will include a parameter ?callback=variable which will execute JavaScript code that returns JSON and assigns it to that variable.`,
    tags: [`JavaScript`, `Front-End`],
    types: [`Explanation`],
    id: 82
  },
  {
    question: `Why should we no longer use JSONP?`,
    answer: `JSONP exposes multiple vulnerabilities - it assumes excessive trust, it also further exposes Cross-Site Request Forgery vulnerabilities. There is also no proper way to get failure codes back when you request JSON data form an endpoint.`,
    tags: [`JavaScript`, `Front-End`],
    types: [`Explanation`],
    id: 83
  },
  {
    question: `What's the difference between an event-handler and even-listener?`,
    answer: `A listener is an object that subscribes for events from a source, you can have many listeners subscribing for each type of event. A handler is an object that is responsible for handling certain events where you would only have one handler for each type of event.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 84
  },
  {
    question: `What is a Screen Object?`,
    answer: `The screen object contains information about the user's screen. availHeight, availWidth, colorDept, height, pixelDepth, and width.`,
    tags: [`JavaScript`, `Front-End`],
    types: [`Definition`],
    id: 85
  },
  {
    question: `What is the difference between the availWidth/height and width/height in the JavaScript Screen Object?`,
    answer: `The availWidth/height returns the height/width exclusing the taskbar.`,
    tags: [`JavaScript`, `Front-End`],
    types: [`Comparison`],
    id: 86
  },
  {
    question: `What's the difference between the escape and unescape functions?`,
    answer: `Escapes and unescapes are both used for removing traces of offending characters that could prevent interprelation. For example, when you call unescape("\thi") you will get the tab inserted, but when you call escape("\thi") you will see "\\thi"`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 87
  },
  {
    question: `What is the drawback of creating true private methods in JavaScript?`,
    answer: `True private methods are very memory inefficient as a new copy of the method would be created for each instance.`,
    tags: [`JavaScript`],
    types: [`Explanation`],
    id: 88
  },
  {
    question: `What's the difference between declaring a function at run-time vs. parse-time?`,
    answer: `Run time var foo = function( ) means that if we call foo( ) before that statement we will receive and error. However if we use parse-time with function foo( ) then calling foo( ) above will not result in an error.`,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 89
  },
  {
    question: `What is hoisting?`,
    answer: `Before run-time JavaScript looks for all variable and function declarations and then hoists them ot the top of the function before they are declared.`,
    tags: [`Programming-Fundamentals`, `JavaScript`],
    types: [`Definition`],
    id: 90
  },
  {
    question: `What's the difference between an indexed array and an associative array?`,
    answer: `Indexed arrays are the normal arrays we see in JavaScript where each element is identified by it's index, a number. An associative array (also known as maps) are not forced to use a number as the index.`,
    tags: [`Programming-Fundamentals`, `JavaScript`],
    types: [`Comparison`],
    id: 91
  },
  {
    question: `What is HTML?`,
    answer: `HTML stands for Hyper Text Markup Language. It is used to markup webpages through nesting elements.`,
    tags: [`HTML`, `Front-End`],
    types: [`Definition`],
    id: 92
  },
  {
    question: `What is an HTML tag?`,
    answer: `HTML tags are composed of an opening tag, content, and an ending tag. Tags can be nested within other tags.`,
    tags: [`HTML`, `Front-End`],
    types: [`Definition`],
    id: 93
  },
  {
    question: `Which HTML tags do not require an end tag?`,
    answer: `The <img> and <br> tags do not require an end tag.`,
    tags: [`HTML`, `Front-End`],
    types: [`List`],
    id: 94
  },
  {
    question: `How many default heading sizes are there in HTML?`,
    answer: `There are 6 headings ranging from <h1> to <h6>, with <h1> the largest.`,
    tags: [`HTML`, `Front-End`],
    types: [`List`],
    id: 95
  },
  {
    question: `How do you create a hyperlink in HTML?`,
    answer: `You can use an anchor tag <a> and set the href equal to the link <a href="google.com">Visit Google.com</a>.`,
    tags: [`HTML`, `Front-End`],
    types: [`Code`],
    id: 96
  },
  {
    question: `What are the 3 types of lists available with HTML?`,
    answer: `<ul> : unordered list that displays items with a bullet,
    <ol> : ordered list that displays items with the number 1. 2. 3.,
    <dl> : definition list displays elements like a dictionary with the definiton tabbed over`,
    tags: [`HTML`, `Front-End`],
    types: [`List`],
    id: 97
  },
  {
    question: `What is the difference between HTML elements and tags?`,
    answer: `HTML elements communicate to the browser to render text. When elements are enclosed by the brackets <> they form HTML tags.`,
    tags: [`HTML`, `Front-End`],
    types: [`Comparison`],
    id: 98
  },
  {
    question: `What's the difference between Semantic Elements and non-semantic Elements?`,
    answer: `Semantic elements describe the meaning to the user as to what content they contain. Examples of semantic elements are <form> <table> and <article> while non semantic are <div> and <span>. We don't know what is inside these span and div tags where as we know what to expect with semantic elements.`,
    tags: [`HTML`, `Front-End`],
    types: [`Comparison`],
    id: 99
  },
  {
    question: `What is an image map?`,
    answer: `An image map is an image with clickable areas. You can use the <map> and <area> tags to identify areas in an image that when clicked will navigate to a link.`,
    tags: [`HTML`, `Front-End`],
    types: [`Definition`],
    id: 100
  },
  {
    question: `How can we nest other webpages in our HTML?`,
    answer: `The <iframe> tag is used to load other webpages by setting the src equal to the website.`,
    tags: [`HTML`, `Front-End`],
    types: [`Code`],
    id: 101
  },
  {
    question: `How do you change the collor of a bullet in an <ul> tag?`,
    answer: `The color of the bullet is always the color of the first text of the list. In order to change the color of the bullet you must change the color of the text.`,
    tags: [`HTML`, `Front-End`],
    types: [`Code`],
    id: 102
  },
  {
    question: `How many empty elements are there in HTML?`,
    answer: `Empty elements do not have any parameters and thus do not render and content. These include the <br> and <hr> tags.`,
    tags: [`HTML`, `Front-End`],
    types: [`List`],
    id: 103
  },
  {
    question: `What are the uses for a span tag?`,
    answer: `The span tag is used to add color on text, background on text, and highlight on text.`,
    tags: [`HTML`, `Front-End`],
    types: [`Explanation`],
    id: 104
  },
  {
    question: `What is the purpose behind the iframe tag?`,
    answer: `The iframe tag is used to display external web pages within your webpage.`,
    tags: [`HTML`, `Front-End`],
    types: [`Definition`],
    id: 105
  },
  {
    question: `What is the difference between an expression and a statement in JavaScript?`,
    answer: `An expression is any reference to a variable or value, or a set of variables and values combined with operators. Statements are made up of expressions and are defined as a group of words, numbers, and operators that performs a specific task.`,
    tags: [`JavaScript`, `Programming-Fundamentals`],
    types: [`Comparison`],
    id: 106
  },
  {
    question: `What is the difference between compiling and interpreting code?`,
    answer: `Interpreting code means translating the commands from top to bottom, line by line, every time the program is run whereas compiling code means the translation is done ahead of time.`,
    tags: [`JavaScript`, `Programming-Fundamentals`],
    types: [`Comparison`],
    id: 107
  },
  {
    question: `What is CSS?`,
    answer: `CSS, Cascading Style Sheets is used to style HTML.`,
    tags: [`CSS`, `Front-End`],
    types: [`Definition`],
    id: 108
  },
  {
    question: `What are the 3 types of CSS stylings?`,
    answer: `1. External : Written in separate style sheets (.css fiels)
    2. Internal : Written at the top of HTML files (<style> tags)
    3. Inline: Written inside the HTML tag (<p style=""></p>)`,
    tags: [`CSS`, `Front-End`],
    types: [`List`],
    id: 109
  },
  {
    question: `What is a CSS selector?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Definition`],
    id: 110
  },
  {
    question: `What is Tweening?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Definition`],
    id: 111
  },
  {
    question: `What are CSS image scripts?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Definition`],
    id: 112
  },
  {
    question: `What are CSS counters?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Definition`],
    id: 113
  },
  {
    question: `How do you round the corners of an element with CSS?`,
    answer: `Setting the border-radius to a set value of pixels will round the corners.`,
    tags: [`CSS`, `Front-End`],
    types: [`Code`],
    id: 114
  },
  {
    question: `What is the difference between a Linear and Radial Gradient?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Comparison`],
    id: 115
  },
  {
    question: `What are the properties of flex-box?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`List`],
    id: 116
  },
  {
    question: `What is the difference between padding and margin?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Comparison`],
    id: 117
  },
  {
    question: `What is a CSS pseudo class?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Definition`],
    id: 118
  },
  {
    question: `What are the types of positions in CSS?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`List`],
    id: 119
  },
  {
    question: `What's the difference between inline and block elements?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Comparison`],
    id: 120
  },
  {
    question: `What's the difference between ID's and classes?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Comparison`],
    id: 121
  },
  {
    question: `What is Software Engineering?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 122
  },
  {
    question: `What is the Software Development Life Cycle?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 123
  },
  {
    question: `What's the difference between the Waterfall and Agile Model?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Comparison`],
    id: 124
  },
  {
    question: `What is the role of a Software Project Manager?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 125
  },
  {
    question: `What is Software Project Scope?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 126
  },
  {
    question: `What is Software Project Estimation?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 127
  },
  {
    question: `What are functional parts?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 128
  },
  {
    question: `What is a baseline?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 129
  },
  {
    question: `What is Software Configuration Management?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 130
  },
  {
    question: `What is Chnage Control?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 131
  },
  {
    question: `What is a Software Requirement?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 132
  },
  {
    question: `What is the Feasibility Study?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 133
  },
  {
    question: `What's the difference between function and non-functional requirements?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Comparison`],
    id: 134
  },
  {
    question: `What are Software Metrics?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 135
  },
  {
    question: `What is Modularization?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 136
  },
  {
    question: `What is Cohesion?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 137
  },
  {
    question: `What is Coupling?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 138
  },
  {
    question: `What is DFD Level 0?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 139
  },
  {
    question: `What's the difference between black box testing and white box testing?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Comparison`],
    id: 140
  },
  {
    question: `What are the 3 types of Software Maintenance?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`List`],
    id: 141
  },
  {
    question: `What are CASE tools?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 142
  },
  {
    question: `What are the 5 things you can decorate in TypeScript?`,
    answer: ``,
    tags: [`TypeScript`, `JavaScript`],
    types: [`List`],
    id: 143
  },
  {
    question: `What is event delegation in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 144
  },
  {
    question: `What is prototypal inheritance in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 145
  },
  {
    question: `What's the difference between forEach and map loops?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 146
  },
  {
    question: `What is a module?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 147
  },
  {
    question: `What is AJAX?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 148
  },
  {
    question: `What is JavaScript templating?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 149
  },
  {
    question: `What is the difference between an attribute and property?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 150
  },
  {
    question: `Why is extending built in JavaScript objects not a good idea?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Explanation`],
    id: 151
  },
  {
    question: `What is the same origin policy?`,
    answer: ``,
    tags: [`JavaScript`, `Front-End`],
    types: [`Definition`],
    id: 152
  },
  {
    question: `What is a Ternary Operator?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 153
  },
  {
    question: `Why should we avoid using the global scope?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Explanation`],
    id: 154
  },
  {
    question: `What is a single page application?`,
    answer: ``,
    tags: [`Front-End`],
    types: [`Definition`],
    id: 155
  },
  {
    question: `What's the difference between mutable and immutable objects?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 156
  },
  {
    question: `What is the event loop?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 157
  },
  {
    question: `What's the difference between ES6 classes and ES5 function constructors?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 158
  },
  {
    question: `How does an arrow function affect the this keyword?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Explanation`],
    id: 159
  },
  {
    question: `What is the spread operator?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 160
  },
  {
    question: `What is the difference between test( ) and exec( )?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 161
  },
  {
    question: `What is the purpose of the history object?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 162
  },
  {
    question: `What are the 3 ways to create an object?`,
    answer: `1. Object Literal
    2. Creating and Instance
    3. Object Constructor`,
    tags: [`JavaScript`],
    types: [`List`],
    id: 163
  },
  {
    question: `What are the 3 ways to create an array in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`List`],
    id: 164
  },
  {
    question: `What is an Array Literal?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 165
  },
  {
    question: `How do you access nested array elements in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 166
  },
  {
    question: `What are the pre-determined falsy values?`,
    answer: `1. false
    2. 0
    3. ""
    4. null
    5. undefined
    6. NaN`,
    tags: [`JavaScript`],
    types: [`List`],
    id: 167
  },
  {
    question: `What is the purpose of the console.time( ) function?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Explanation`],
    id: 168
  },
  {
    question: `How do you round integers up or down in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 169
  },
  {
    question: `How do you get the remainder in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 170
  },
  {
    question: `What is the purpose of the isNaN function in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 171
  },
  {
    question: `What is the difference between the Number.isNaN( ) and isNaN( ) function in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 172
  },
  {
    question: `What is the difference between the prefix and postfix operator?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 173
  },
  {
    question: `What is the Object Literal?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 174
  },
  {
    question: `What are the 3 types of popup boxes?`,
    answer: `1. Alert
    2. Confirm
    3. Prompt`,
    tags: [`JavaScript`, `Front End`],
    types: [`List`],
    id: 175
  },
  {
    question: `What is String Contactenation?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 176
  },
  {
    question: `What is the purpose of the trim( ) command?`,
    answer: `Removes whitespace from the beginning and end of a string.`,
    tags: [`JavaScript`],
    types: [`Definition`],
    id: 177
  },
  {
    question: `What is the difference between charAt( ) and indexOf( )?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 178
  },
  {
    question: `What is a CSS property?`,
    answer: ``,
    tags: [`CSS`],
    types: [`Definition`],
    id: 179
  },
  {
    question: `What's the difference between CSS font-style and font-variant properties?`,
    answer: ``,
    tags: [`CSS`],
    types: [`Comparison`],
    id: 180
  },
  {
    question: `What's the difference between attribute and element selectors?`,
    answer: ``,
    tags: [`CSS`],
    types: [`Comparison`],
    id: 181
  },
  {
    question: `What are child selectors?`,
    answer: ``,
    tags: [`CSS`],
    types: [`Definition`],
    id: 182
  },
  {
    question: `What are the operators you can apply to child selectors?`,
    answer: `>
    +
    ~`,
    tags: [`CSS`],
    types: [`List`],
    id: 183
  },
  {
    question: `What is the universal selector?`,
    answer: ``,
    tags: [`CSS`],
    types: [`Definition`],
    id: 184
  },
  {
    question: `What is a <div> element?`,
    answer: ``,
    tags: [`HTML`],
    types: [`Definition`],
    id: 185
  },
  {
    question: `What is a hyperlink?`,
    answer: ``,
    tags: [`Front-End`, `HTML`],
    types: [`Definition`],
    id: 186
  },
  {
    question: `How can you redirect to another webpage in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 187
  },
  {
    question: `How can you check whether a string contains a substring in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 188
  },
  {
    question: `How can you remove an element from an array in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 189
  },
  {
    question: `How can you remove a property from an Object in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 190
  },
  {
    question: `How can you deep clone and object in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 191
  },
  {
    question: `How can you return the response from an asynchronous call in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 192
  },
  {
    question: `How can I include a JavaScript file in another JavaScript file?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 193
  },
  {
    question: `How can you check whether a box is checked using JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 194
  },
  {
    question: `How can you validate an email address in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`, `Regular Expressions`],
    types: [`Code`],
    id: 195
  },
  {
    question: `What does it mean to use a # in the href?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Explanation`],
    id: 196
  },
  {
    question: `What is the difference between using # and javascript.void(0) for an href value?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 197
  },
  {
    question: `How can you create a GUID / UUID in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 198
  },
  {
    question: `How do you get a timestamp in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 199
  },
  {
    question: `How can you check if an array includes an object in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 200
  },
  {
    question: `How can you capitalize the first letter in a string in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 201
  },
  {
    question: `How can you append something to an array in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 202
  },
  {
    question: `How can you prevent a submit button from refreshing the page when clicked using JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 203
  },
  {
    question: `What is the purpose of using the (!!) NOT NOT operator?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Explanation`],
    id: 204
  },
  {
    question: `How can you check if a key exists in an Object in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 205
  },
  {
    question: `How can you loop through an Object in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 206
  },
  {
    question: `How can you change and elements class using JavaScript?`,
    answer: ``,
    tags: [`JavaScript`, `CSS`],
    types: [`Code`],
    id: 207
  },
  {
    question: `How can you check for an empty Object using JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 208
  },
  {
    question: `How to sort an array in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 209
  },
  {
    question: `How to sort an array of objects by value in JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Code`],
    id: 210
  },
  {
    question: `Why are global and static ojects not recommended?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Explanation`],
    id: 211
  },
  {
    question: `What is Inversion of Control?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Explanation`],
    id: 212
  },
  {
    question: `What is the Law of Demeter?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Definition`],
    id: 213
  },
  {
    question: `What is the Principle of Least Knowledge?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Definition`],
    id: 214
  },
  {
    question: `What is Active-Record?`,
    answer: ``,
    tags: [`Design-Patterns`, `Databases`],
    types: [`Definition`],
    id: 215
  },
  {
    question: `What is Data-Mapper`,
    answer: ``,
    tags: [`Design-Patterns`, `Databases`],
    types: [`Definition`],
    id: 216
  },
  {
    question: `What is an Anit-Corruption Layer?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Definition`],
    id: 217
  },
  {
    question: `What is Singleton?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Definition`],
    id: 218
  },
  {
    question: `What is Data Abstraction`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Definition`],
    id: 219
  },
  {
    question: `What is the DRY Principle?`,
    answer: ``,
    tags: [`Design-Patterns`, `Software-Engineering`],
    types: [`Definition`],
    id: 220
  },
  {
    question: `Why do some consider the goto statement harmful?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Explanation`],
    id: 221
  },
  {
    question: `What is the robustness principle?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Definition`],
    id: 222
  },
  {
    question: `What is separation of concerns?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Definition`],
    id: 223
  },
  {
    question: `Why do we need high cohesion and loose coupling?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Explanation`],
    id: 224
  },
  {
    question: `What's the difference between cohesion and coupling`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Comparison`],
    id: 225
  },
  {
    question: `What is code refactoring`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Definition`],
    id: 226
  },
  {
    question: `What's the difference between first-party and third-party cookies?`,
    answer: ``,
    tags: [`Front-End`, `Back-End`],
    types: [`Comparison`],
    id: 227
  },
  {
    question: `What is stateless?`,
    answer: ``,
    tags: [`Design-Patterns`],
    types: [`Definition`],
    id: 228
  },
  {
    question: `What is eventual consistency?`,
    answer: ``,
    tags: [`Databases`, `Back-End`],
    types: [`Definition`],
    id: 229
  },
  {
    question: `What is the CAP theorem?`,
    answer: ``,
    tags: [`Databases`, `Back-End`],
    types: [`Definition`],
    id: 230
  },
  {
    question: `What's the difference between SQL and NoSQL?`,
    answer: ``,
    tags: [`Databases`],
    types: [`Comparison`],
    id: 231
  },
  {
    question: `What is Kubernetes?`,
    answer: ``,
    tags: [`Back-End`],
    types: [`Definition`],
    id: 232
  },
  {
    question: `Why is Kubernetes important?`,
    answer: ``,
    tags: [`Back-End`],
    types: [`Explanation`],
    id: 233
  },
  {
    question: `What is Linux?`,
    answer: ``,
    tags: [`Back-End`],
    types: [`Definition`],
    id: 234
  },
  {
    question: `Why are more servers built with Linux than Windows?`,
    answer: ``,
    tags: [`Linux`, `Operating-Systems`],
    types: [`Explanation`],
    id: 235
  },
  {
    question: `What's the difference between Linux and Windows?`,
    answer: ``,
    tags: [`Linux`, `Operating-Systems`],
    types: [`Explanation`],
    id: 236
  },
  {
    question: `What is Agile?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 237
  },
  {
    question: `What is a Sprint?`,
    answer: ``,
    tags: [`Software-Engineering`],
    types: [`Definition`],
    id: 238
  },
  {
    question: `What is an API?`,
    answer: ``,
    tags: [`APIs`, `Back-End`],
    types: [`Definition`],
    id: 239
  },
  {
    question: `What is REST?`,
    answer: ``,
    tags: [`REST`, `APIs`],
    types: [`Definition`],
    id: 240
  },
  {
    question: `What is Boostrap?`,
    answer: ``,
    tags: [`CSS`, `Front-End`],
    types: [`Definition`],
    id: 241
  },
  {
    question: `What is JQuery?`,
    answer: ``,
    tags: [`JavaScript`, `Front-End`, `JS-Libraries`],
    types: [`Definition`],
    id: 242
  },
  {
    question: `What is CoffeeScript?`,
    answer: ``,
    tags: [`JavaScript`, `JS-Libraries`],
    types: [`Definition`],
    id: 243
  },
  {
    question: `Why was JQuery so popular?`,
    answer: ``,
    tags: [`JavaScript`, `JS-Libraries`],
    types: [`Explanation`],
    id: 244
  },
  {
    question: `Why is JQuery no longer popular?`,
    answer: ``,
    tags: [`JavaScript`, `JS-Libraries`],
    types: [`Explanation`],
    id: 245
  },
  {
    question: `What is a bug?`,
    answer: ``,
    tags: [`Programming-Fundamentals`],
    types: [`Definition`],
    id: 246
  },
  {
    question: `What is debugging?`,
    answer: ``,
    tags: [`Programming-Fundamentals`],
    types: [`Definition`],
    id: 247
  },
  {
    question: `What is code?`,
    answer: ``,
    tags: [`Programming-Fundamentals`],
    types: [`Definition`],
    id: 248
  },
  {
    question: `What is a data structure?`,
    answer: ``,
    tags: [`Programming-Fundamentals`],
    types: [`Definition`],
    id: 249
  },
  {
    question: `What is deployment?`,
    answer: ``,
    tags: [`Programming-Fundamentals`],
    types: [`Definition`],
    id: 250
  },
  {
    question: `What is documentation?`,
    answer: ``,
    tags: [`Programming-Fundamentals`],
    types: [`Definition`],
    id: 251
  },
  {
    question: `What is a domain name?`,
    answer: ``,
    tags: [`Networking`],
    types: [`Definition`],
    id: 252
  },
  {
    question: `What is a framework?`,
    answer: ``,
    tags: [`JS-Libraries`],
    types: [`Definition`],
    id: 253
  },
  {
    question: `What is the front-end?`,
    answer: ``,
    tags: [`Front-End`],
    types: [`Definition`],
    id: 254
  },
  {
    question: `What is the back-end?`,
    answer: ``,
    tags: [`Back-End`],
    types: [`Definition`],
    id: 255
  },
  {
    question: `What is full-stack?`,
    answer: ``,
    tags: [`Front-End`, `Back-End`],
    types: [`Definition`],
    id: 256
  },
  {
    question: `What is Git?`,
    answer: ``,
    tags: [`Git`, `Version-Control`],
    types: [`Definition`],
    id: 257
  },
  {
    question: `What is Github?`,
    answer: ``,
    tags: [`Git`, `Version-Control`],
    types: [`Definition`],
    id: 258
  },
  {
    question: `Why is Git the most popular version-control?`,
    answer: ``,
    tags: [`Git`, `Version-Control`],
    types: [`Explanation`],
    id: 259
  },
  {
    question: `What is HTTP?`,
    answer: ``,
    tags: [`Networking`],
    types: [`Definition`],
    id: 260
  },
  {
    question: `What's the difference between Git and Mercurial?`,
    answer: ``,
    tags: [`Version-Contorl`, `Git`],
    types: [`Comparison`],
    id: 261
  },
  {
    question: `What's the difference between Java and JavaScript?`,
    answer: ``,
    tags: [`JavaScript`],
    types: [`Comparison`],
    id: 262
  },
  {
    question: `What is a language?`,
    answer: ``,
    tags: [`Programming-Fundamentals`],
    types: [`Definition`],
    id: 263
  },
  {
    question: `What is a library?`,
    answer: ``,
    tags: [`Programming-Fundamentals`, `JS-Libraries`],
    types: [`Definition`],
    id: 264
  },
  {
    question: `What is a framework?`,
    answer: ``,
    tags: [`JS-Libraries`],
    types: [`Definition`],
    id: 265
  },
  {
    question: `What is mobile first development?`,
    answer: ``,
    tags: [`Front-End`, `Mobile-Development`],
    types: [`Definition`],
    id: 266
  },
  {
    question: `What is minimum viable product?`,
    answer: ``,
    tags: [`Software Engineering`],
    types: [`Definition`],
    id: 267
  },
  {
    question: `What is MySQL?`,
    answer: ``,
    tags: [`Databases`],
    types: [`Definition`],
    id: 268
  },
  {
    question: `What is an Operating System?`,
    answer: ``,
    tags: [`Operating Systems`],
    types: [`Definition`],
    id: 270
  },
  {
    question: `What is Middleware?`,
    answer: ``,
    tags: [`Design-Patterns`, `APIs`],
    types: [`Definition`],
    id: 271
  },
  {
    question: `What is resolution?`,
    answer: ``,
    tags: [`Imbedded Systems`],
    types: [`Definition`],
    id: 272
  },
  {
    question: `What is responsive design`,
    answer: ``,
    tags: [`User-Experience`, `Front-End`],
    types: [`Defintition`],
    id: 273
  },
  {
    question: `What is Python?`,
    answer: ``,
    tags: [`Python`],
    types: [`Definition`],
    id: 274
  },
  {
    question: `What is Ruby?`,
    answer: ``,
    tags: [`Ruby`],
    types: [`Definition`],
    id: 275
  },
  {
    question: `What is Ruby on Rails?`,
    answer: ``,
    tags: [`Ruby`, `Back-End`],
    types: [`Definition`],
    id: 276
  },
  {
    question: `What's the difference between Ruby and Ruby on Rails?`,
    answer: ``,
    tags: [`Ruby`, `Back-End`],
    types: [`Comparison`],
    id: 277
  },
  {
    question: `What is a software stack?`,
    answer: ``,
    tags: [`Back-End`, `Front-End`],
    types: [`Definition`],
    id: 278
  },
  {
    question: `What is UI Design?`,
    answer: ``,
    tags: [`User-Experience`, `Front-End`],
    types: [`Definition`],
    id: 279
  },
  {
    question: `What is UX Design?`,
    answer: ``,
    tags: [`User-Experience`, `Front-End`],
    types: [`Definition`],
    id: 280
  },
  {
    question: `What's the difference between UX and UI Design?`,
    answer: ``,
    tags: [`User-Experience`, `Front-End`],
    types: [`Comparison`],
    id: 281
  },
  {
    question: `What is a web app?`,
    answer: ``,
    tags: [`Front-End`, `Back-End`],
    types: [`Definition`],
    id: 282
  },
  {
    question: `What is a wireframe?`,
    answer: ``,
    tags: [`User-Experience`, `Front-End`],
    types: [`Definition`],
    id: 283
  },
  {
    question: `What is blockchain?`,
    answer: ``,
    tags: [`Blockchain`],
    types: [``],
    id: 284
  },
  {
    question: `What is Artificial Intelligence?`,
    answer: ``,
    tags: [`Artificial-Intelligence`],
    types: [`Definition`],
    id: 285
  },
  {
    question: `What is Machine Learning?`,
    answer: ``,
    tags: [`Artificial-Intelligence`],
    types: [`Definition`],
    id: 286
  },
  {
    question: `What's the difference between Machine Learning and Artificial-Intelligence?`,
    answer: ``,
    tags: [`Artificial-Intelligence`],
    types: [`Comparison`],
    id: 287
  },
  {
    question: `What is Internet of Things?`,
    answer: ``,
    tags: [`Imbedded-Systems`],
    types: [`Definition`],
    id: 288
  },
  {
    question: `What is Big Data`,
    answer: ``,
    tags: [`Data-Science`],
    types: [`Definition`],
    id: 289
  },
  {
    question: `What is Data Mining?`,
    answer: ``,
    tags: [`Data-Science`],
    types: [`Definition`],
    id: 290
  },
  {
    question: `What is troubleshooting?`,
    answer: ``,
    tags: [`Programming-Fundamentals`],
    types: [`Definition`],
    id: 291
  },
  {
    question: `What's the difference between troubleshooting and debugging?`,
    answer: ``,
    tags: [`Programming-Fundamentals`],
    types: [`Comparison`],
    id: 292
  },
  {
    question: `What is the terminal?`,
    answer: ``,
    tags: [`Linux`, `Operating Systems`],
    types: [`Definition`],
    id: 293
  },
  {
    question: `What is bash?`,
    answer: ``,
    tags: [`Linux`],
    types: [`Definition`],
    id: 294
  },
  {
    question: `What's the difference between UNIX and LINUX?`,
    answer: ``,
    tags: [`Linux`],
    types: [`Definiction`],
    id: 295
  },
  {
    question: `What is a WAN?`,
    answer: ``,
    tags: [`Networking`],
    types: [`Definition`],
    id: 296
  },
  {
    question: `What is a LAN?`,
    answer: ``,
    tags: [`Networking`],
    types: [`Definition`],
    id: 297
  },
  {
    question: `What is the difference between WAN and LAN`,
    answer: ``,
    tags: [`Networking`],
    types: [`Definition`],
    id: 298
  },
  {
    question: `What is I/O?`,
    answer: ``,
    tags: [`Operating Sytems`],
    types: [`Definition`],
    id: 299
  }
];
