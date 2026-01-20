function printTimeStamp() {
  const now = new Date();
  console.log(`Current Timestamp: ${now.toISOString()}`);
}

function greetUser(name: string) {
  console.log(`Hello, ${name}! Welcome to our application.`);
}

greetUser("Alice");

printTimeStamp();
