function regExpTxt() {
  let str = document.getElementById('input').value;
  let regExpAllPoints = new RegExp('\'', 'gm'); \\ множ многострочный поиск '
  let regExpReturnApostroph = /\b\"\b/gm;  \\ граница слов
  let newstr = str.replace(regExpAllPoints, '"');  \\ заменить на "
  newstr = newstr.replace(regExpReturnApostroph, '\''); 
  document.getElementById('output').value = newstr;
}
document.getElementById('input').addEventListener("keyup", regExpTxt);
