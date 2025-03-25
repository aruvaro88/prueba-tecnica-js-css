export default (word1, word2) => {
  const sortString = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f\s]/g, "")
      .split("")
      .sort()
      .join("")
  return sortString(word1) === sortString(word2) ? "Verdadero" : "Falso"
}
