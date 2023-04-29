
const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: [],
    },
    init() {
        this.elements.main = document.createElement("main");
        this.elements.keysContainer = document.createElement("div");
        this.elements.main.classList.add("main");
        this.elements.keysContainer.classList.add("keys");
        this.elements.keysContainer.appendChild(this.createKeys());
        this.elements.keys = this.elements.keysContainer.querySelectorAll(".key");
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },

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

    },

    }
    window.addEventListener("DOMContentLoaded", function () {

        Keyboard.init();
    });

