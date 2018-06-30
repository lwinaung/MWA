
const fs = require('fs');

const fileRead = (parent_message) => {
    let data = fs.readFileSync(parent_message, 'utf8');
    return data;
}
process.on('message', (msg_from_parent) => {
    console.log('Message from parent: ' + msg_from_parent);
    let data = fileRead(msg_from_parent);
    process.send(data);
});
