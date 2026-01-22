class Script {
  static printTimeStamp() {
    const now = new Date();
    console.log(`Current Timestamp: ${now.toISOString()}`);
  }

  static greetUser(name: string) {
    console.log(`Hello, ${name}! Welcome to our application.`);
  }
}

Script.printTimeStamp();
Script.greetUser("Alice");
