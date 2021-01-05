const fetch = require("node-fetch").default;
const cmd = require('child_process');
const chalk = require('chalk');

const newLine = () => process.stdout.write(chalk.whiteBright('> '));
const start = () => cmd.execSync('cls'); cmd.execSync('title chat'); newLine();

start();

process.stdin.on('data', data => {
    const message = Buffer.from(data).toString('ascii');

    fetch("https://api.snowflakedev.xyz/api/chatbot?message="+encodeURIComponent(message), {
        headers: {
            "Authorization": "API_KEY"
        }
    })
    .then(res => res.json())
    .then(data => { 
        console.log(data.message); 
        newLine()
    })
    .catch(e => console.error(e));
});