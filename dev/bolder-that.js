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
		this._unSelect();
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
				var html   = child[i].innerText,
				    _clazz = this;

				html = html.replace(this.regExp, function (v) {
					console.log(_clazz.regExp);
					_clazz.selector.innerHTML = v;
					return _clazz.selector.outerHTML;
				})

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

	/**
	* This function clean the text
	*/
	_unSelect() {
		this.selector.innerHTML = "x";
		var s   = this.selector.outerHTML.split("x"),
		    reg = new RegExp(s[0]+"|"+s[1], "g");
		for (var x = 0; x < this.wrap.length; x++) this.wrap[x].innerHTML = this.wrap[x].innerHTML.replace(reg, "");
	}
}
