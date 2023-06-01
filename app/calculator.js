exports.calculate = function(expression) {
  // Get the array of tokens and reverse it so we can perform the calculations
  let tokens = expression.split(' ').reverse()
  let index = 0

  // Loop over the tokens
  while (index < tokens.length) {
    // Set the token value
    const token = tokens[index]
    // If the token is an operator then we should perform an action
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      // Get the index of the current token, the operator
      const operatorIndex = tokens.findIndex(element => element === token)

      // If this is a subtract operator, we need to switch the values round because we reversed the array initially
      if (token === '-') {
        // Here, we replace the 3 preceding items in the array, including our current item, with the evaled caclulation
        tokens.splice(operatorIndex - 2, 3, eval(`${tokens[operatorIndex - 1]} ${token} ${tokens[operatorIndex - 2]}`))
      } else {
        tokens.splice(operatorIndex - 2, 3, eval(`${tokens[operatorIndex - 2]} ${token} ${tokens[operatorIndex - 1]}`))
      }

      // We now adjust the index to continue from the next token after the update
      index = operatorIndex - 2
    }
    
    index++;
  }

  // The tokens array now only contains one item, so we return that
  return tokens[0]
}