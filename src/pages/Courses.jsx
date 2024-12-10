import { useState } from 'react';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: 'C Programming',
      description: 'Learn fundamental programming concepts with C language.',
      duration: '3 months',
      level: 'Beginner',
      notes: [
        'Introduction to C Programming: C is a general-purpose, procedural, high-level programming language. It was developed in the early 1970s by Dennis Ritchie at Bell Labs. C is widely used for system and application software.',
        'Basic Syntax and Data Types: Variables must be declared before use. C supports basic data types like int, char, float, double. Operators include arithmetic, relational, logical, and bitwise.',
        'Control Flow: Conditional statements (if, else if, else, switch) and loops (for, while, do-while) allow for decision-making and iteration in C programs.',
        'Functions: Functions help modularize code. Recursion allows functions to call themselves to solve problems like factorial, Fibonacci series.',
        'Arrays and Strings: Arrays store multiple elements of the same type. Strings are arrays of characters, and C provides functions like strlen(), strcpy(), strcat() to manipulate them.',
        'Pointers: Pointers store the memory address of variables. Pointer operations include dereferencing (*), referencing (&), and pointer arithmetic.',
        'Structures and Unions: Structures group different data types under one name. Unions allow multiple data types but share the same memory.',
        'File Input/Output: Use fopen(), fclose(), fread(), fwrite(), fprintf(), and fscanf() for file operations. Modes include "r", "w", "a", "r+" for reading, writing, and appending.',
        'Memory Management: Static memory is automatically allocated, while dynamic memory can be allocated using malloc(), calloc(), realloc(), and freed with free(). Avoid memory leaks by freeing dynamically allocated memory.',
        'Error Handling and Debugging: Use errno and stderr for error handling. GDB is a popular debugger for stepping through C code.',
        'Advanced Topics: Bitwise operations (AND, OR, XOR, shift operators) manipulate bits. Linked lists (singly, doubly, circular) are dynamic data structures. Recursion is used in problems like tree traversal and factorial calculations.',
        'Common C Standard Library Functions: Include functions from stdio.h, stdlib.h, string.h, and math.h for common tasks like input/output, memory allocation, string manipulation, and mathematical operations.'
      ]
    },
    {
      title: 'Java Programming',
      description: 'Comprehensive Java programming course with practical projects.',
      duration: '5 months',
      level: 'Intermediate',
      notes: [
        'Java is an object-oriented programming language. Understanding the basics of OOP like classes, objects, inheritance, and polymorphism is crucial.',
        'Variables and Data Types: Java has primitive data types such as int, char, double, and boolean, along with reference types like arrays and objects.',
        'Control Flow: Use if-else statements, switch cases, loops (for, while), and break/continue for controlling program flow.',
        'Methods and Functions: Java functions are defined inside classes. Learn about method overloading and method overriding.',
        'Object-Oriented Programming Concepts: Learn the key concepts of OOP, including classes, objects, inheritance, abstraction, encapsulation, and polymorphism.',
        'Java Collections Framework: Understand and use Collections like ArrayList, LinkedList, HashMap, and HashSet for storing and managing data efficiently.',
        'Multithreading: Java supports multithreading for concurrent execution. Learn to use Thread and Runnable interface to run multiple threads.',
        'Exception Handling: Java provides exception handling using try, catch, finally, and throws to handle runtime errors and avoid crashes.',
        'File Handling: Read and write files using classes like FileReader, FileWriter, BufferedReader, and BufferedWriter.',
        'GUI Programming: Use Swing and JavaFX to create graphical user interfaces for Java applications.',
        'Database Connectivity (JDBC): Learn how to connect Java applications to databases using JDBC to store and retrieve data.',
        'Spring Framework: Understand and work with Spring Framework to build enterprise-level applications, focusing on dependency injection and Aspect-Oriented Programming (AOP).'
      ]
    },
    {
      title: 'Python Programming',
      description: 'Learn Python programming from basics to advanced concepts.',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      notes: [
        'Python Syntax: Python uses indentation to define code blocks, making it easy to read. Master the syntax and indentation rules.',
        'Data Types: Python has built-in data types like int, float, string, list, tuple, set, and dictionary. Understand their use and operations.',
        'Control Flow: Learn how to use if-else, loops (for, while), and control statements like break, continue, and pass.',
        'Functions and Lambda Expressions: Functions allow code reuse. Learn to define functions using def and understand lambda expressions for writing short functions.',
        'Exception Handling: Python uses try, except, else, and finally blocks to handle errors effectively and maintain program flow.',
        'File Handling: Work with files using built-in functions like open(), read(), write(), and close(). Understand reading and writing files in different modes.',
        'Object-Oriented Programming: Python supports OOP, including inheritance, polymorphism, and encapsulation. Learn to create classes and objects.',
        'Python Libraries: Master popular libraries like NumPy for numerical operations, Pandas for data analysis, and Matplotlib for data visualization.',
        'Web Development: Use Flask or Django for web development. Learn how to build web applications, handle routing, and work with databases.',
        'Database Interaction: Use SQLite or MySQL with Python to interact with databases using modules like sqlite3 and MySQLdb.',
        'Testing and Debugging: Learn how to write unit tests with the unittest module. Understand debugging techniques using the Python debugger (pdb).',
        'Python for Data Science: Learn how to analyze and manipulate data with libraries like pandas, NumPy, and Scikit-learn for machine learning.'
      ]
    },
    {
      title: 'Web Development Fundamentals',
      description: 'Learn HTML, CSS, and JavaScript basics for building modern websites.',
      duration: '3 months',
      level: 'Beginner',
      notes: [
        'HTML Basics: Learn the structure of web pages using HTML tags like <html>, <body>, <head>, <p>, <div>, <h1> to <h6>, and more.',
        'CSS Styling: Understand how to apply styles with CSS. Learn about selectors, properties, values, and how to use external stylesheets.',
        'Responsive Design: Learn about responsive web design techniques using media queries to adjust layouts for different screen sizes.',
        'JavaScript Fundamentals: Learn the basics of JavaScript, including variables, data types, operators, and loops.',
        'DOM Manipulation: Understand how to interact with the Document Object Model (DOM) using JavaScript to dynamically change HTML content.',
        'Event Handling: Learn how to handle user events like clicks, mouse movements, and keypresses to make your site interactive.',
        'Forms and Validations: Learn how to create forms in HTML and validate user input using JavaScript.',
        'JavaScript Functions: Functions help modularize your code. Learn to define, call, and pass parameters to functions.',
        'Advanced CSS Techniques: Explore CSS Grid, Flexbox, and animations to create modern, responsive layouts.',
        'Web Accessibility: Learn about accessibility best practices to ensure that your website is usable by everyone, including people with disabilities.',
        'Version Control with Git: Learn how to use Git for version control and host your code on platforms like GitHub.',
        'Web Development Tools: Use browser dev tools, code editors like VS Code, and understand web hosting and deployment techniques.'
      ]
    },
    {
      title: 'SQL Database',
      description: 'Master database concepts and SQL query language for data management.',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      notes: [
        'Database Design: Learn how to design relational databases using tables, primary keys, foreign keys, and normalization techniques.',
        'SQL Queries: Master SQL commands like SELECT, INSERT, UPDATE, DELETE, WHERE, and ORDER BY to manipulate data.',
        'Aggregate Functions: Use functions like COUNT(), AVG(), SUM(), MIN(), and MAX() to summarize data.',
        'Joins: Understand different types of joins (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN) to combine data from multiple tables.',
        'Subqueries: Learn how to use subqueries to nest one query inside another to solve complex problems.',
        'Indexes: Understand how indexes improve the performance of database queries and how to create and drop indexes.',
        'Normalization: Learn database normalization rules (1NF, 2NF, 3NF) to reduce data redundancy and improve data integrity.',
        'Stored Procedures and Triggers: Learn to automate tasks using stored procedures and triggers.',
        'Transactions: Understand transactions, commit, rollback, and how to maintain data consistency.',
        'SQL Optimization: Learn how to optimize SQL queries for performance, focusing on indexing, query restructuring, and avoiding performance bottlenecks.',
        'Database Management Systems: Learn about popular DBMS like MySQL, PostgreSQL, and Oracle.',
        'Advanced SQL Topics: Dive into advanced SQL topics such as window functions, CTEs (Common Table Expressions), and complex joins.'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Our Courses</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-emerald-400 transition duration-300 cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">
                    <span className="font-medium text-emerald-400">Duration:</span> {course.duration}
                  </p>
                  <p className="text-sm text-gray-300">
                    <span className="font-medium text-emerald-400">Level:</span> {course.level}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Display Important Notes if a course is selected */}
        {selectedCourse && (
          <div className="mt-12 bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Important Notes for {selectedCourse.title}</h2>
            <ul className="space-y-2 text-gray-300">
              {selectedCourse.notes.map((note, index) => (
                <li key={index} className="text-sm">{note}</li>
              ))}
            </ul>
            <button
              className="mt-6 px-4 py-2 bg-emerald-400 text-white rounded-md hover:bg-emerald-500"
              onClick={() => setSelectedCourse(null)}
            >
              Close Notes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
