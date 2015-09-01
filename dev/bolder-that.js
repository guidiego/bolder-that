class BolderThat {
  /**
   * This function init the Lib
   * @param query (string) : The box that you want to Find and Bolder a Text
   * @param selector (string) : The Selector that you want to put on
   */
  constructor(query, selector) {
    this.wrap       = document.querySelectorAll(query);
    this.selector   = selector ? this._constructElement(selector) : this._constructElement("strong");
    this.lastFactor = "";
  }

  /**
   * This function run the action from a Word
   * @param factor (string) : The word that you want to Bold
   */
  run(factor){
    this._unSelect(this.lastFactor);
    this.lastFactor = factor;
    if (factor.replace(/ /g, "").length > 0) {
      this.regExp = new RegExp(factor, "ig");
      this._runIntoChild(this.wrap, factor);
    }
  }

  /**
   * This is a Recursive Function that goes to the childrens to put Bolder
   * @param child (arrary) An array of HTMLObjects | null
   * @param factor (string) The Atual Factor;
   */
  _runIntoChild(child, factor) {
    for (var i = 0; i < child.length; i++) {
      if (child[i].children.length <= 0) {
        var html  = child[i].innerText,
            words = [],
            temp  = html.match(this.regExp).map(e => words.indexOf(e) < 0 && words.push(e));
            console.log(words);
        for (var x = 0; x < words.length; x++){
          this.selector.innerText = words[x];
          html = html.replace(words[x], this.selector.outerHTML);
        }

        child[i].innerHTML = html;
      } else {
        this._runIntoChild(child[i].children, factor);
      }
    }
  }

  /**
   * This function create a HTML Element
   * @param query (string) : The query that you want to create a element
   */
  _constructElement(query) {
    var totalElements = query.replace(/#/g, ".~id~").replace(/\./g, ".~class~").split("."),
        element       = document.createElement(totalElements[0]);

    for (var x = 1; x < totalElements.length; x++) {
      if (totalElements[x].indexOf("~id~") >= 0) element.id = totalElements[x].replace("~id~", "");
      if (totalElements[x].indexOf("~class~") >= 0) element.classList.add(totalElements[x].replace("~class~", ""));
    }

    return element;
  }

  _unSelect(factor) {
    this.selector.innerHTML = factor;
    var old    = this.selector.outerHTML,
        regExp = new RegExp(old, "g");

    for (var x = 0; x < this.wrap.length; x++) {
    	var html   = this.wrap[x].innerHTML;
    	html = html.replace(regExp, factor);
    	this.wrap[x].innerHTML = html;
    }
  }
}
