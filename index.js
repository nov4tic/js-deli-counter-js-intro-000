let katzDeliLine = []

let takeANumber = (currentLine, name) => {
    currentLine.push(`${name}`);
    return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

let nowServing = currentLine => {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
     return `Currently serving ${currentLine.shift()}.`
  }}

let currentLine = katzDeliLine => {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (i = 0; i < katzDeliLine.length; i++) {
      return `The line is currently ${[i + 1] + katzDeliLine}`
}}}
