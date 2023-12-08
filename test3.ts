let a = 1 + 2
let b = a + 3 + "bb"
let c = {
  apple: a,
  banana: b
}
let d = c.apple * 4

function log(message: string, userId?: string) {
  let time = new Date().toLocaleDateString()
  console.log(time, message, userId || 'Not Signed In')
}
log('User signed in'), 'dae'