var ss = SpreadsheetApp.openById('YOUR_Spreadsheet_ID');

var sheet = ss.getSheets()[0]; // 表單回應 1

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}
 
function getData(){
  var range = sheet.getRange('B2:C');
  var values  = range.getValues();
  // Logger.log(values);
  return values.sort();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getCosignerCount() {
  return sheet.getLastRow() - 1;
}
