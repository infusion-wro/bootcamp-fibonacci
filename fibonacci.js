function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  var previous = 1;
  var current = 1;

  for (var i = 2; i < n; i++) {
    var tmp = previous + current;
    previous = current;
    current = tmp;
  }

  return current;
}

module.exports = fibonacci;
