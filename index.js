let katzDeliLine = []

let takeANumber = (currentLine, name) => {
    currentLine.push(`${name}`);
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

let nowServing = currentLine => { currentLine.length === 0 ? "There is nobody waiting to be served" : `Currently serving ${currentline.shift()}`