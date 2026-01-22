function printTimeStamp() {
  const now = new Date();
  console.log(`Current Timestamp: ${now.toISOString()}`);
}

function greetUser(name: string) {
  console.log(
    `Hello, ${name}! Welcome to our application. We hope you have a great experience.`,
  );
}

greetUser("Alice");

printTimeStamp();
