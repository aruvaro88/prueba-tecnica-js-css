export default (json) => {
  const totalAge = json.reduce((acum, elm) => acum + elm.edad, 0)
  const avg = totalAge / json.length
  return avg.toFixed(2)
}
