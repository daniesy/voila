var Voila = function(_options){
	var options = {csscontainer:"css", htmlcontainer: "html", previewcontainer: "preview", autorun: true},
		cssContainer, htmlContainer, previewContainer;
	
	function extend(first, second) {
        var prop;
        for (prop in second) {
            if (second.hasOwnProperty(prop)) {
                first[prop] = second[prop];
            }
        }
    };
    function cleanString(text){
    	return text.replace(/\s/g, ' '); 
    };
	function cssChanged(e){
		var style = cssContainer.innerText,
	    regex = /([^{]+){([^}]+)}/gm,
	    matches, output = [];
	    style = cleanString(style);

	    while (matches = regex.exec(style)) {
	         var elements = previewContainer.querySelectorAll(matches[1]);
	         for(var i = 0; i < elements.length; i+=1) {
	         	elements[i].setAttribute("style", matches[2]);
	         }
	    }
	};
	function htmlChanged(e){
		previewContainer.innerHTML = htmlContainer.innerText;
		cssChanged();
	};
	function init(){
		extend(options, _options);
		cssContainer = document.getElementsByClassName(options.csscontainer)[0];
		htmlContainer = document.getElementsByClassName(options.htmlcontainer)[0];
		previewContainer = document.getElementsByClassName(options.previewcontainer)[0];
		addEvents();
		if(options.autorun){
			run();
		}
	};
	function addEvents(){
		cssContainer.addEventListener("keyup", cssChanged);
		htmlContainer.addEventListener("keyup", htmlChanged);
	}
	function run(){
		htmlChanged();
		cssChanged(); 
	};
	return init();
};