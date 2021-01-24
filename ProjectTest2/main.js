
// 1. Plugin Scaffold

// 2. Require in XD API dependencies
const { Line, Color } = require("scenegraph");
const commands = require("commands");

// 3. Create a helper function
function randomColor() {
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];
    const color = "#" + Array.from({ length: 3 }, _ => hexValues[Math.floor(Math.random() * hexValues.length)]).join("");
    return color;
}

// 4. Create line data
const lineData = [
    { startX: 100, startY: 110, endX: 210, endY: 233 },
    { startX: 210, startY: 233, endX: 320, endY: 156 },
    { startX: 320, startY: 156, endX: 400, endY: 300 },
    { startX: 400, startY: 300, endX: 500, endY: 120 }
]

// 5. Create the main function | map the manifest's commandId to a handler function
function createLinesCommand(selection) {
    let lines = [];                                 // [2]

    lineData.forEach(data => {                      // [3]
        const line = new Line();                    // [4.i]

        line.setStartEnd(                           // [4.ii]
            data.startX,
            data.startY,
            data.endX,
            data.endY
        );

        line.strokeEnabled = true;                  // [4.iii]
        line.stroke = new Color(randomColor());     // [4.iv]
        line.strokeWidth = 3;                       // [4.v]

        lines.push(line);                           // [4.vi]

        selection.editContext.addChild(line)        // [4.vii]
    });

    selection.items = lines;                        // [5]
    commands.group();                               // [6]
}

// Export Modules
module.exports = {
    commands: {
        createLinesCommand
    }
};