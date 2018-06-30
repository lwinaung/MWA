const cluster = require('cluster');
const os = require('os');

const cpus = os.cpus().length;
const memory = Math.ceil((os.totalmem) / 1073741824);
console.log("CPUS Length: " + cpus);
console.log("Total Memory: " + memory);

function checkSystem() {
    if (cpus < 2) {
        console.log("Processor is not supported");
    }
    else if (memory < 4) {
        console.log("This app need at least 4GB of RAM");
    }
    else {
        console.log("System is checked successfully");
    }
}

process.nextTick(() => {
    checkSystem();
})
console.log("Checking your system...");    