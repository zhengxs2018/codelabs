export function id(length = 4) {
  return Math.random().toString(32).substr(2, length)
}

export function generateKey(sep = '-') {
  return `${id(8)}${sep}${id()}${sep}${id()}${sep}${id()}${sep}${id(8)}${id()}`
}
