let key = document.querySelectorAll('al');
let input = document.getElementById('input_area');
let capsLockIsOn = false;

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  let keyDiv = document.getElementById(getKeyDivId(event));
  if (!keyDiv){
    return;
  }
  switch (event.key) {
    case "CapsLock": {
      if(capsLockIsOn){
        keyDiv.style.backgroundColor = 'white';
      } else {
        keyDiv = keyDiv.style.backgroundColor = 'grey';
      }
      capsLockIsOn = !capsLockIsOn;
      return;
    }
    case "Shift": {} break;
    case "Enter": { input.value = input.value + "\n"; } break;
    case "Tab": { input.value = input.value + "\t" } break;
    case "Backspace": { input.value = input.value.substring(0, input.value.length - 1) } break;
    default: {
      input.value = input.value + event.key;
    } break;
  }
  keyDiv.style.backgroundColor = 'grey';
});


document.addEventListener("keyup", function (event) {
  if(event.key === "CapsLock"){return;}
  if(event.key === "Shift"){
    let lshiftDiv = document.getElementById("lshift");
    let rshiftDiv = document.getElementById("rshift");
    lshiftDiv.style.backgroundColor = 'white';
    rshiftDiv.style.backgroundColor = 'white';
  }
  let keyDiv = document.getElementById(getKeyDivId(event));
  keyDiv = keyDiv.style.backgroundColor = 'white';
});

function getKeyDivId(event) {
  key = event.key;
  switch(key) {
    case "~": return "`";
    case "!": return "1";
    case "@": return "2";
    case "#": return "3";
    case "$": return "4";
    case "%": return "5";
    case "^": return "6";
    case "&": return "7";
    case "*": return "8";
    case "(": return "9";
    case ")": return "0";
    case "_": return "-";
    case "+": return "=";
    case "{": return "[";
    case "}": return "]";
    case "|": return "\\";
    case ":": return ";";
    case "\"": return "'";
    case "<": return ",";
    case ">": return ".";
    case "?": return "/";
    case "Shift": {
      return event.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT? "lshift" : "rshift"
    };
    default: return key.toLowerCase();
  }
}