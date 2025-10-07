/** Zwraca true, jeśli w ciągu występują jakiekolwiek znaczniki HTML */
export const isTextHTML = (str) => {
  if (!str) return false;
  // Prosty wzorzec: <tag …> lub </tag>
  return /<\/?[a-z][\s\S]*>/i.test(str.trim());
};
