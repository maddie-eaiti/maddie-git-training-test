class Script {
  static printTimeStamp() {
    const now = new Date();
    console.log(`Current Timestamp: ${now.toISOString()}`);
  }

  static greetUser(name: string) {
    console.log(`Hello, ${name}! Welcome to our application.`);
  }

  static newMethod() {
    console.log("This is a new method added to the script.");
  }
}

Script.printTimeStamp();
Script.greetUser("Alice");
Script.newMethod();
