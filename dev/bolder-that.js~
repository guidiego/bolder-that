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
    var regExp = new RegExp(factor, "g");

    for (var x = 0; x < this.wrap.length; x++) {
	var html   = this.wrap[x].innerHTML;
	this.selector.innerHTML = factor;
	html = html.replace(regExp, this.selector.outerHTML);
	this.wrap[x].innerHTML = html;
    } 
  }

  /**
   * This function create a HTML Element
   * @param query (string) : The query that you want to create a element
   */
  _constructElement(query) {
    var totalElements = query.replace(/#/g, ".~").split("."),
        element       = document.createElement(totalElements[0]);

    for (var x = 1; x < totalElements.length; x++) {
      if (totalElements[x].indexOf(".~") >= 0) element.id = totalElements[x].replace(".~", "");
      if (totalElements[x].indexOf(".") >= 0) element.classList.add(totalElements[x].replace(".", ""));
    }

    return element;
  }

  _unSelect(factor) {
	this.selector.innerHTML = factor;
  	var old = this.selector.outerHTML,
	    regExp = new RegExp(old, "g");
	
    for (var x = 0; x < this.wrap.length; x++) {
	var html   = this.wrap[x].innerHTML;
	html = html.replace(regExp, factor);
	this.wrap[x].innerHTML = html;
    } 
  }
}
