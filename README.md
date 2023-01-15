Sneakbar is a simple notification toast.

# Getting started

Install the package with NPM:

```
npm install sneakbar
```

Add the following to a JS file where you want to use a Sneakbar:

```
import Sneakbar from "sneakbar"; // The class to instantiate
import "sneakbar/sneakbar.scss"; // CSS
```

Instantiate the Sneakbar class and use the show method:

```
let sneakbar = new Sneakbar({
    actionText: "OK",
    duration: 6000,
    position: "bottom-end",
    text: "Kept you waiting huh?",
});

sneakbar.show();
```

# Options

You can add the following options to the initialisation object to customize the Sneakbar:

* **actionText**: string, the text of the action button (default: "Dismiss")
* **actionTextColor**: string, the hexadecimal color of the action button (default: #22c55e)
* **backgroundColor**: string, the hexadecimal color of the Sneakbar backgroud (default: #262626)
* **customClasses**: array, classes to add to the Sneakbar wrapper element (default: [])
* **duration**: integer, milliseconds before the Sneakbar disappears (default: 5000)
* **position**: string, where the Sneakbar will appear (default: bottom-start)
    * top-start
    * top-center
    * top-end
    * bottom-start
    * bottom-center
    * bottom-end
* **showAction**: boolean, whether to show the action button or not (default: true)
* **text**: string, the text content of the Sneakbar (default: Hello world !)
* **textColor**: string, the hexadecimal color of the Sneakbar text (default: white)
