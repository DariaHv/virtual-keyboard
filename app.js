
class App {
    constructor() {
        this.main = document.createElement("main");
        this.main.classList.add("main");
        document.body.appendChild(this.main);
        this.keyboard = new Keyboard();
        this.main.appendChild(this.keyboard.getKeys());
        document.body.appendChild(this.main);
    }

}

class Keyboard {
    constructor() {
        this.keysContainer = document.createElement("div");
        this.keysContainer.classList.add("keys");
        this.keysContainer.appendChild(this.createKeys());
        this.keys = this.keysContainer.querySelectorAll(".key");
    }
    getKeys() {
        return this.keysContainer;
    }

    createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
            "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "DEL",
            "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'","ENTER",
            "Shift ", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "↑", "Shift",
            "Ctrl","Win", "Alt"," ", "Alt","Ctrl", "←", "↓", "→"
        ];

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("key");
            keyElement.textContent = key;

            switch (key) {
                case "Backspace":
                    keyElement.classList.add("backspace");
                    break;

                case "CapsLock":
                    keyElement.classList.add("caps");

                    break;

                case "Tab":
                        keyElement.classList.add("tab");

                        break;
                case "DEL":
                        keyElement.classList.add("del");

                        break;

                case "ENTER":
                    keyElement.classList.add("enter");

                    break;

                case "Shift ":
                    keyElement.classList.add("shift-l");

                    break;

                case "Shift":
                    keyElement.classList.add("shift-r");

                    break;

                case "Ctrl":
                    keyElement.classList.add("ctrl");

                    break;

                case "Win":
                    keyElement.classList.add("win");

                    break;

                case "Alt":
                    keyElement.classList.add("alt");

                    break;

                case " ":
                    keyElement.classList.add("space");
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

