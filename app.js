class Textbox {
    constructor() {
        this.textbox = document.createElement("textarea");
        this.textbox.classList.add("textbox");
        this.textbox.setAttribute("id", "textbox");
    }

    getTextbox() {
        return this.textbox;
    }

}

class App {
    constructor() {
        this.main = document.createElement("main");
        this.main.classList.add("main");
        this.lang = document.createElement("p");
        this.lang.id = 'language';
        this.lang.textContent = 'English - "Alt left", Belarusian - "Alt right"';
        document.body.appendChild(this.main);
        this.textbox = new Textbox();
        this.keyboard = new Keyboard(this.textbox,this.main).getKeysContainer();
        this.main.appendChild(this.lang);
        this.main.appendChild(this.textbox.getTextbox());
        this.main.appendChild(this.keyboard);
        document.body.appendChild(this.main);
        setTimeout(function() {
            document.getElementById("textbox").focus();
        }, 0);
        this.main.addEventListener(
            "keydown",
            (event) => {
                event.preventDefault();
           if(!event.repeat)
              {let key = document.getElementById(event.code.toLowerCase());
                if (!(key===null))  {
               key.click();
               key.classList.toggle("active");
              }
            }
            },
            true
          );

    this.main.addEventListener(
            "keyup",
            (event) => {
           if(!event.repeat)
              {
              let key = document.getElementById(event.code.toLowerCase());
              if (!(key===null)) {
                key.classList.toggle("active");
              }

            }
            },
            true
          );
    }




    }




class Keyboard {
    constructor(main) {
        this.keysContainer = document.createElement("div");
        this.keysContainer.classList.add("keys");
        this.keysContainer.appendChild(this.createKeys());
        this.keys = this.keysContainer.querySelectorAll(".key");
        this.value = "";
        this.capsLock = false; 
        this.main=main;
        this.caps=false;
        this.language = "en";
    }
    getKeysContainer() {
        return this.keysContainer;
    }
    getKeys() {
        return this.keys;
    }

    getCaretPosition() {
        let ctrl= document.getElementById("textbox");
        // IE < 9 Support 
        if (document.selection) {
            var range = document.selection.createRange();
            var rangelen = range.text.length;
            range.moveStart('character', -ctrl.value.length);
            var start = range.text.length - rangelen;
            return {
                'start': start,
                'end': start + rangelen
            };
        } // IE >=9 and other browsers
        else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
            return {
                'start': ctrl.selectionStart,
                'end': ctrl.selectionEnd
            };
        } else {
            return {
                'start': 0,
                'end': 0
            };
        }
    }
    
 setCaretPosition(start, end) {
        let ctrl= document.getElementById("textbox");
        // IE >= 9 and other browsers
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(start, end);
        }
        // IE < 9 
        else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    }

      printKey(key) {
        let position=this.getCaretPosition().start;
        let textbox=document.getElementById("textbox");
        if (this.language=="en")
        textbox.value=textbox.value.replace(textbox.value.slice(0,position),textbox.value.slice(0,position)+(this.caps?key[1]:key[0]));
        else 
        textbox.value=textbox.value.replace(textbox.value.slice(0,position),textbox.value.slice(0,position)+(this.caps?key[3]:key[2]));
        textbox.focus();
        let newPosition=position+1;
        this.setCaretPosition(newPosition,newPosition);
    }
    createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = {
            backquote:["`","~","ё","Ё"],
            digit1:["1","!","1","!"], 
            digit2:["2","@","2","\""], 
            digit3:["3","#","3","№"],
            digit4:["4","$","4",";"], 
            digit5:["5","%","5","%"],
            digit6:["6","^","6",":"],
            digit7:["7","&","7","?"],
            digit8:["8","*","8","*"],
            digit9:["9","(","9","("],
            digit0:["0",")","0",")"], 
            minus:["-","_","-","_"], 
            equal:["=","+","=","+"],
            backspace:["Backspace"],
            tab:["\t","\t","\t","\t"],
            keyQ:["q","Q","й","Й"], 
            keyW:["w","W","ц","Ц"],
            keyE:["e","E","у","У"],
            keyR:["r","R","к","К"],
            keyT:["t","T","е","Е"],
            keyY:["y","Y","н","Н"],
            keyU:["u","U","г","Г"],
            keyI:["i","I","ш","Ш"],
            keyO:["o","O","ў","Ў"],
            keyP:["p","P","е","Е"],
            bracketLeft:["[","{","х","Х"],
            bracketRight:["]","}","'","'"],
            backslash:["\\","|","\\","/"],
            delete:["DEL"],
            capsLock:["CapsLock"],
            keyA:["a","A","ф","Ф"],
            keyS:["s","S","ы","Ы"],
            keyD:["d","D","в","В"],
            keyF:["f","F","а","А"],
            keyG:["g","G","п","П"],
            keyH:["h","H","р","Р"],
            keyJ:["j","J","о","О"],
            keyK:["k","K","л","Л"],
            keyL:["l","L","д","Д"],
            semicolon:[";",":","ж","Ж"],
            quote:["'","\"","э","Э"],
            enter:["\n","\n","\n","\n"],
            shiftLeft:["Shift"],
            keyZ:["z","Z","я","Я"],
            keyX:["x","X","ч","Ч"],
            keyC:["c","C","с","С"],
            keyV:["v","V","м","М"],
            keyB:["b","B","і","І"],
            keyN:["n","N","т","Т"],
            keyM:["m","M","Ь","Ь"],
            comma:[",","<","б","Б"],
            period:[".",">","ю","Ю"],
            slash:["/","?",".",","],
            arrowUp:["↑","↑","↑","↑"],
            shiftRight:["Shift"],
            controlLeft:["Ctrl"],
            metaLeft:["Win"],
            altLeft:["Alt"],
            space:[" "],
            altRight:["Alt"],
            controlRight:["Ctrl"],
            arrowLeft:["←","←","←","←"],
            arrowDown:["↓","↓","↓","↓"],
            arrowRight:["→","→","→","→"],

        };
        let codes = Object.keys(keyLayout)
        console.log(keyLayout.backquote[1])
        console.log(keyLayout.backquote[1])
        codes.forEach(key => {
            const keyElement = document.createElement("button");
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("key");
            keyElement.textContent = keyLayout[key][0];
            keyElement.setAttribute("id",key.toLowerCase());

            switch (key) {

                case "backspace":
                    keyElement.classList.add("backspace");
                    keyElement.addEventListener("click", () => {
                        let position=this.getCaretPosition().start;
                        let textbox=document.getElementById("textbox");
                        textbox.value=textbox.value.replace(textbox.value.slice(0,position),textbox.value.slice(0,position).slice(0,-1));
                        textbox.focus();
                        let newPosition=position-1;
                        this.setCaretPosition(newPosition,newPosition);
                       
                    });

                    break;


                case "capsLock":
                keyElement.addEventListener("click", () => {
                   this.caps=!this.caps;
                });
                    break;

                case "delete":
                keyElement.addEventListener("click", () => {
                    let position=this.getCaretPosition().start;
                    let textbox=document.getElementById("textbox");
                    textbox.value=textbox.value.replace(textbox.value.slice(position),textbox.value.slice(position).slice(1));
                    textbox.focus();
                    this.setCaretPosition(position,position);
                   
                });
                    break;

                case "shiftRight":
                    keyElement.classList.add("shift");
                    keyElement.addEventListener("mousedown", () => {
                       this.caps=!this.caps;
                    });
                    keyElement.addEventListener("mouseup", () => {
                       this.caps=!this.caps;
                    });
                    break;

                case "shiftLeft":
                    keyElement.classList.add("shift");
                    keyElement.addEventListener("mousedown", () => {
                       this.caps=!this.caps;
                    });
                    keyElement.addEventListener("mouseup", () => {
                       this.caps=!this.caps;
                    });
                    break;



                case "controlRight":
                    keyElement.classList.add("ctrl");
                    break;



                case "controlLeft":
                    keyElement.classList.add("ctrl");
                    break;

                case "metaLeft":
                    keyElement.addEventListener("click", () => {
                });
                    break;

                
                case "altRight":
                    keyElement.classList.add("alt");
                    keyElement.addEventListener("click", () => {
                    this.language="blr";
                    let lang=document.getElementById("language");
                    lang.textContent = 'Англійская - "Alt left", Беларуская - "Alt right"'

                    });
    
                    break;

                    case "altLeft":
                    keyElement.classList.add("alt");
                    keyElement.addEventListener("click", () => {
                    this.language="en";
                    let lang=document.getElementById("language");                       
                    lang.textContent = 'English - "Alt left", Belarusian - "Alt right"'
                    });
    
                        break;

                case "↑":
                    keyElement.classList.add("arrow");
                    keyElement.classList.add("arrow-up");
    
                        break;

                case "←":
                    keyElement.classList.add("arrow");
                    keyElement.classList.add("arrow-left");
                    break;

                case "↓":
                    keyElement.classList.add("arrow");
                    keyElement.classList.add("arrow-down");
                    break;

                case  "→":
                    keyElement.classList.add("arrow");
                    keyElement.classList.add("arrow-right");
                    break;

                default:
                    if (key==("enter"))
                      {
                        keyElement.textContent = "Enter";
                      }
                    else if(key==("tab"))
                      {
                        keyElement.textContent = "Tab";
                      }
                    keyElement.addEventListener("click", () => {this.printKey(keyLayout[key])
                    console.log(this.getCaretPosition()); 
                    });
                break;
            }



            fragment.appendChild(keyElement);

    });

        return fragment;

    }

    }
    window.addEventListener("DOMContentLoaded", function () {
    new App();
    });

