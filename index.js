let katzDeliLine = []

let takeANumber = (currentLine, name) => {
    currentLine.push(`${name}`);
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

let nowServing = currentLine => {
  do {
      let i = currentLine.shift();
      currentLine !== undefined ? `Currently serving ${currentLine[0]}` : `There is nobody waiting to be served!`
    }
    while (i !== undefined)
    }
