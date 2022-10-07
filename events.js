const events = require("events");

const emitter = new events.EventEmitter();
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`)
});

// emitter.emit("customEvent", "Hello World", "Computer");
// emitter.emit("customEvent", "That`s pretty cool huh?", "Arthur");
// emitter.emit("customEvent111", "Abob", "Katy");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");

})