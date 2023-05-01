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
        document.body.appendChild(this.main);
        this.textbox = new Textbox();
        this.keyboard = new Keyboard(this.textbox,this.main).getKeysContainer();
        //this.textbox.focus();
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
              {let key = this.findKey(event.code, document.getElementsByClassName("key"));
              if (key!=0) {
               key.click();               
               key.classList.toggle("active");
              }
              else 
              console.log(key)
            }
            },
            true
          );
        
    this.main.addEventListener(
            "keyup",
            (event) => {
           if(!event.repeat)
              {
              let key = this.findKey(event.code, document.getElementsByClassName("key"));
              if (key!=0) {
                key.classList.toggle("active");
              }
              //else 
              console.log(key)
            }
            },
            true
          );
    }  
    


    
    
    findKey(code, keys) {
       function hasKey(value, code) {
           const list = Array.from(value.classList); 
           for (let i=0; i<list.length; i++)
             {
              if ((list[i].replace("-",""))==(code.toLowerCase()
              ))
              return true;
             }
              return false;
            }
          for (let i=0; i<keys.length;i++){
            //console.log (keys[i].classList)
            if (hasKey(keys[i], code)){
            return keys[i];}
          }
          return 0;
        }
    
    }
    



class Keyboard {
    constructor(textbox, main) {
        this.keysContainer = document.createElement("div");
        this.keysContainer.classList.add("keys");
        this.keysContainer.appendChild(this.createKeys());
        this.keys = this.keysContainer.querySelectorAll(".key");
        this.value = "";
        this.capsLock = false; 
        this.textbox = textbox;
        this.main=main;
    }
    getKeysContainer() {
        return this.keysContainer;
    }
    getKeys() {
        return this.keys;
    }
   /* _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.value);
        }
    }*/
    keySend(ev) {
        console.log ("keySend start!");
        let textbox=document.getElementById("textbox");
        textbox.focus();
        //var ke = new KeyboardEvent("keydown", {key: "w", keyCode: 87, ctrlKey: true, cancelable: true, bubbles: true});"KeyU"
        var ke = new KeyboardEvent(ev, {key: "u", code:"KeyU", ctrlKey: true, cancelable: true, bubbles: true});
        this.main.dispatchEvent(ke);
        console.log ("keySend start!");
        textbox.focus();
      }
    createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "DEL",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "\"","ENTER",
            "Shift ", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift",
            "Ctrl ","Win", "Alt "," ", "Alt","Ctrl", "←", "↓", "→"
        ];

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("key");
            keyElement.textContent = key;

            switch (key) {
                
                case "`":
                    keyElement.classList.add("backquote");
                    break;

                case "-":
                    keyElement.classList.add("minus");
                    break;

                case "=":
                    keyElement.classList.add("equal");
                    break;

                case "Backspace":
                    keyElement.classList.add("backspace");
                    keyElement.addEventListener("click", () => {
                       
                    });

                    break;

                case "Tab":
                    keyElement.classList.add("tab");

                    break;

                case "[":
                    keyElement.classList.add("bracket-left");

                    break;

                case "]":
                    keyElement.classList.add("bracket-right");

                    break;

                case "\\":
                    keyElement.classList.add("backslash");

                    break;

                case "CapsLock":
                    keyElement.classList.add("capslock");
                    break;

                case "DEL":
                    keyElement.classList.add("delete");
                    break;

                case ";":
                    keyElement.classList.add("semicolon");
                    break;

                case "\"":
                    keyElement.classList.add("quote");
                    break;

                case "ENTER":
                    keyElement.classList.add("enter");

                    break;

                case "Shift ":
                    keyElement.classList.add("shift-left");

                    break;

                case ",":
                    keyElement.classList.add("comma");

                    break;

                case ".":
                    keyElement.classList.add("period");

                    break;

                case "/":
                    keyElement.classList.add("slash");

                    break;

                case "Shift":
                    keyElement.classList.add("shift-right");

                    break;

                case "Ctrl ":
                    keyElement.classList.add("ctrl");
                    keyElement.classList.add("control-left");
                    break;

                case "Ctrl":
                    keyElement.classList.add("ctrl");
                    keyElement.classList.add("control-right");
                    break;

                case "Win":
                    keyElement.classList.add("meta-left");

                    break;

                case "Alt ":
                    keyElement.classList.add("alt");
                    keyElement.classList.add("alt-left");

                    break;

                case "Alt":
                    keyElement.classList.add("alt");
                    keyElement.classList.add("alt-right");
    
                        break;

                case " ":
                    keyElement.classList.add("space");
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
                    if (!isNaN(key))
                      {keyElement.classList.add("digit-"+key);}
                      else {keyElement.classList.add("key-"+key);}
                      keyElement.addEventListener("click", () => {
                        //this. value += this.capsLock ? key.toUpperCase() : key.toLowerCase();
                        //this._triggerEvent("oninput");
                        console.log("klick "+ key);
                        //this.keySend("keydown");
                        let textbox=document.getElementById("textbox");
                        textbox.value=textbox.value+key;
                        textbox.focus();
                    });
                   // keyElement.addEventListener("mouseup", () => {
                        //this. value += this.capsLock ? key.toUpperCase() : key.toLowerCase();
                        //this._triggerEvent("oninput");
                  //      console.log("klick "+ key);
                        //this.keySend("keyup");
                    //});
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
    

