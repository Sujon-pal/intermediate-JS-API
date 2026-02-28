    // Main function: This will run when we click "Run Console Demo"
    function runDemo() {

      // 1️⃣ Simple message show in console
      console.log("Hello World!");

      // 2️⃣ Creating two variables
      let name = "Sujon";   // string variable
      let age = 22;         // number variable

      // Showing variable values in console
      console.log("Name:", name);
      console.log("Age:", age);

      // 3️⃣ Warning message (Yellow color in console)
      console.warn("This is a warning message!");

      // 4️⃣ Error message (Red color in console)
      console.error("This is an error message!");

      // 5️⃣ Array of objects (Multiple users data)
      const users = [
        { name: "Sujon", age: 22 },
        { name: "Rahim", age: 25 },
        { name: "Karim", age: 30 }
      ];

      // Showing array data in table format (Very useful for debugging)
      console.table(users);

      // 6️⃣ Single Object
      const student = {
        name: "Sujon",
        department: "CSE",
        semester: 6
      };

      // Showing object in console
      console.log("Student Object:", student);

      // 7️⃣ Show full DOM structure of body
      // Useful for checking HTML element properties
      console.dir(document.body);

      // 8️⃣ Group multiple logs together
      console.group("User Info Group");   // Start group
      console.log("Name:", name);
      console.log("Age:", age);
      console.groupEnd();                 // End group

      // 9️⃣ Check how much time a code takes
      console.time("Loop Time");  // Start timer

      // Running a loop 10 lakh times
      for (let i = 0; i < 1000000; i++) {
        // Empty loop just for time test
      }

      console.timeEnd("Loop Time");  // End timer and show result

      // 🔟 Debugger (Pause code execution)
      // If you remove comment (//) and open console,
      // execution will stop on this line
      // debugger;

    }

    // Function to clear the console
    function clearConsole() {
    //   console.clear();  // Clears everything from console 
    }

    runDemo()

