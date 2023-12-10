var a = 1 + 2;
var b = a + 3 + "bb";
var c = {
    apple: a,
    banana: b
};
var d = c.apple * 4;
console.log(d);


function log(message, userId) {
    var time = new Date().toLocaleDateString();
    console.log(time, message, userId || 'Not Signed In');
}
log('User signed in'), 'dae';
