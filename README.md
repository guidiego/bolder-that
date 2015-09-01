# Bolder That
A simples micro library to put style (main strong) on a text. To see examples : guidiego.github.io/bolder-that

### How "Install"
You can download the .zip / .tar.gz of this project or clone this repository using:

```zsh
    git clone
```

After that, you can get the **bolder-that.js** from the **dist/** and import at your project.

### How use
For use you need to do 2 steps, the first is Instance **BolderThat()**, and next use **.run()** to find what you want.

##### HTML
```html
<div id="my-text">
  <p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

##### JS
```javascript
var b = new BolderThat("#my-text");
b.run("Lorem");
```

##### Before / After
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


**Lor**em ipsum do**lor** sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do**lor**e magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure do**lor** in reprehenderit in voluptate velit esse cillum do**lor**e eu fugiat nulla pariatur. Excepteur sint
occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Public Methods

#### constructor(query, selector)
**query : ** A string that show what the element that you want to run into for "BOLDER THAT"!
<br><br>
**selector : ** This secondary by default is "strong", but you can put *element.class#id*, ex: *"span.red"*
<br><br>
#### run(factor)
**factor : ** The factor that you want to find/bolder into the element

## Private Methods

#### _runIntoChild(child, factor)
**child : ** An array of HTML Nodes
**factor : ** The same factor of run event
<br><br>
#### _constructElement(query)
**query : ** A query for construct the HTML Object, ex: *"span.red"*
<br><br>
#### _unSelect(factor)
**factor : ** The search factor from the public method run()
