function filterData(params) {

	this.idInput  = document.getElementById(params.idInput);
	this.idRender = document.getElementById(params.idRender); 
	this.showElemRender = params.showElemRender;

	this.ElemFather = params.ElemFather;
	this.ElemChild  = params.ElemChild;

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
		  	var filter, ElemFather, ElemChild, i;

		  	filter = this.idInput.value.toUpperCase();

		  	if (this.showElemRender) 
		  		this.showElementRender(filter, 'show')
		  	else 
				this.showElementRender(filter, 'remove')

			ElemFather = this.idRender.getElementsByClassName(this.ElemFather);

			if (ElemFather.length == 0) 
				ElemFather = this.idRender.getElementsByTagName(this.ElemFather);

		  for (i = 0; i < ElemFather.length; i++) {

		  	ElemChild = ElemFather[i].getElementsByClassName(this.ElemChild)[0];

		  	if (ElemChild == undefined)
		  		ElemChild = ElemFather[i].getElementsByTagName(this.ElemChild)[0]


		  	if (ElemChild) {
		  		if (ElemChild.innerHTML.toUpperCase().indexOf(filter) > -1) 
		  			ElemFather[i].style.display = "";
		  		else 
		  			ElemFather[i].style.display = "none";
		  		
		  	} 
		  }
	}
}

var params = {
	jsonList        : jsonList,
	idInput         : "myInput",
	idRender        : "myList",
	ElemFather  :  "label",
	ElemChild   :  "span",
	showElemRender  : true 
};

function searchFilters() {
	var newFilter = new filterData(params)
	newFilter.InitSearch()
}
