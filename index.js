let katzDeliLine = []

let takeANumber = (currentLine, name) => {
    currentLine.push(`${name}`);
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

let nowServing = currentLine => {
  if (currentLine !== undefined) {
    let empty = []
 empty = currentLine.splice(0)[1]);
 return `Currently serving ${empty}.`
 } else { "There is nobody waiting to be served!"
}
