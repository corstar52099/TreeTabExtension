chrome.storage.sync.get("color", ({ color }) => {
  console.log('setPageBackgroundColor has been reached');
  console.log('Color: ' + color + '\nDocument Color: ' + document.body.style.backgroundColor);
  let test = hexToRgb(color);
  if (hexToRgb(color) == document.body.style.backgroundColor) {
    document.body.style.backgroundColor = "#FFFFFF";
  }
  else {
    document.body.style.backgroundColor = color;
  }
  
});


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let returnVal = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }
  return "rgb(" + returnVal.r + ", " + returnVal.g + ", " + returnVal.b + ")";
}