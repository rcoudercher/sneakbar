export default class Sneakbar {
    actionText: string;
    actionTextColor: string;
    backgroundColor: string;
    customClasses: Array<string>;
    duration: number;
    position: string;
    showAction: boolean;
    text: string;
    textColor: string;

    constructor({
        actionText = "Dismiss",
        actionTextColor = "#22c55e",
        backgroundColor = "#262626",
        customClasses = [],
        duration = 5000,
        position = "bottom-start",
        showAction = true,
        text = "Hello world !",
        textColor = "#fff",
    }) {
        this.actionText = actionText;
        this.actionTextColor = actionTextColor;
        this.backgroundColor = backgroundColor;
        this.customClasses = customClasses;
        this.duration = duration;
        this.position = position;
        this.showAction = showAction;
        this.text = text;
        this.textColor = textColor;
    }

    show() {
        // Create the sneakbar wrapper
        let sneakbar = document.createElement("div");
        sneakbar.classList.add("sneakbar");

        // Make sure 'position' is not null or undefined
        if (this.position == null) throw new Error("Null or undefined position");

        const positions = [
            "top-start",
            "top-center",
            "top-end",
            "bottom-start",
            "bottom-center",
            "bottom-end",
        ];

        // Make sure 'position' is one the 6 allowed
        if (!positions.includes(this.position)) throw new Error("Wrong position");

        // Add position
        sneakbar.classList.add(`sneakbar-${this.position}`);

        // Make sure 'backgroundColor' is not null or undefined
        if (this.backgroundColor == null) throw new Error("Null or undefined backgroundColor");

        // Regex to validate hexadecimal color
        const hexColorRegex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$", "i");

        // Make sur 'backgroundColor' has right format
        if (!hexColorRegex.test(this.backgroundColor)) {
            throw new Error("Wrong backgroundColor format. Must be a valid hexadecimal color.");
        }
        
        // Add backgroundColor
        sneakbar.style.backgroundColor = this.backgroundColor;

        // customClasses

        // Make sure 'customClasses' is not null or undefined
        if (this.customClasses == null) throw new Error("Null or undefined customClasses");

        // Add the custom classes to the sneakbar
        this.customClasses.forEach((customClass) => {
            if (customClass.length < 50) {
                sneakbar.classList.add(customClass);    
            } else {
                throw new Error(`Custom class ${customClass} too long. Must be less than 50 characters.`);
            }
        });

        // Create the sneakbar's text
        let p = document.createElement("p");

        // Make sure 'text' is not null or undefined
        if (this.text == null) throw new Error("Null or undefined text");

        p.innerText = this.text;

        // Make sure 'textColor' is not null or undefined
        if (this.textColor == null) throw new Error("Null or undefined textColor");

        // Make sur 'textColor' has right format
        if (!hexColorRegex.test(this.textColor)) {
            throw new Error("Wrong textColor format. Must be a valid hexadecimal color.");
        }

        p.style.color = this.textColor;

        sneakbar.appendChild(p);

        // Make sure showAction is a boolean
        if (this.showAction !== true && this.showAction !== false) {
            throw new Error("showAction must be a boolean");
        }

        if (this.showAction) {
                
            // Create the action button
            let btn = document.createElement("button");

            // Make sure 'actionText' is not null or undefined
            if (this.actionText == null) throw new Error("Null or undefined actionText");

            btn.innerText = this.actionText;

            // Make sur 'actionTextColor' has right format
            if (!hexColorRegex.test(this.actionTextColor)) {
                throw new Error("Wrong actionTextColor format. Must be a valid hexadecimal color.");
            }

            btn.style.color = this.actionTextColor;

            // Remove the sneakbar when clicking on the action button
            btn.addEventListener("click", () => {
                sneakbar.remove();
            });

            sneakbar.appendChild(btn);
        }

        if (!Number.isInteger(this.duration)) {
            throw new Error("Duration must be a valid integer");
        }

        // Set a timeout to remove the sneakbar from the DOM
        setTimeout(() => {
            sneakbar.remove();
        }, this.duration);

        // Add the sneakbar to the DOM
        document.body.appendChild(sneakbar);
    }
}
