const { exec } = require('child_process');

// Replace this with your actual Maven build command
const mavenBuildCommand = 'mvn clean install';

exec(mavenBuildCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
