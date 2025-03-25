export default (json) => {
  return json.map(({ nombre, apellido, apellido2 }) => {
    const capitalizeString = (str) => (str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "")

    return `${capitalizeString(nombre)} ${capitalizeString(apellido)} ${capitalizeString(apellido2)}`.trim()
  })
}
