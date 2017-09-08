function filterData(params) {

	this.idInput  = document.getElementById(params.idInput);
	this.idRender = document.getElementById(params.idRender); 
	this.showElemRender = params.showElemRender;

	this.classElemFather = params.classElemFather;
	this.classElemChild  = params.classElemChild;

	this.showElementRender = function(filter, visibility) {
			if (visibility == 'show') {
				if (filter.length > 0) 
					this.idRender.classList.remove("hide");
				else
					this.idRender.className += " hide";

			}else {
				this.idRender.classList.remove("hide");
			}
	}


	this.InitSearch = function() {
		  	var filter, classElemFather, classElemChild, i;

		  	filter          = this.idInput.value.toUpperCase();
		  	classElemFather = this.idRender.getElementsByClassName(this.classElemFather);

		  	if (this.showElemRender) 
		  		this.showElementRender(filter, 'show')
		  	else 
				this.showElementRender(filter, 'remove')

		  // Loop through all idRender rows, and hide those who don't match the search query
		  for (i = 0; i < classElemFather.length; i++) {

		  	classElemChild = classElemFather[i].getElementsByClassName(this.classElemChild)[0];

		  	if (classElemChild) {
		  		if (classElemChild.innerHTML.toUpperCase().indexOf(filter) > -1) {
		  			classElemFather[i].style.display = "";
		  		} else {
		  			classElemFather[i].style.display = "none";
		  		}
		  	} 
		  }
	}
}

var params = {
	jsonList        : jsonList,
	idInput         : "myInput",
	idRender        : "myList",
	classElemFather  :  "item-list",
	classElemChild   :  "item-list-child",
	showElemRender  : true // if true wrap is hide when init and is hide when input has nor element 
};

function InitSearch() {
	var newFilter = new filterData(params)
	newFilter.InitSearch()
}
