const { exec } = require('child_process');

// Replace this with your actual Spring Boot start command
const springBootStartCommand = 'java -jar target/movies-0.0.1-SNAPSHOT.jar';

exec(springBootStartCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
