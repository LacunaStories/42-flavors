(function(window, document, undefined) {

  /* Sets a random integer quantity in range [1, 20] for each flavor. */
  function setQuantities() {
  	
  	var myListFlavors = document.getElementsByClassName("meta");
	 for (var i = 0; i < myListFlavors.length; i++){
	 	var currentFlavor = myListFlavors[i];
	 	var firstElement = currentFlavor.childNodes[0];
	 	
	 	var qInt = Math.floor(Math.random()*20 + 1);
	 	var newElement = document.createElement("span");
	 	newElement.className = "quantity";
	 	newElement.innerHTML = qInt;
	 	
	 	currentFlavor.insertBefore(newElement, firstElement);
	 }
 }

  /* Extracts and returns an array of flavor objects based on data in the DOM. Each
   * flavor object should contain five properties:
   *
   * element: the HTMLElement that corresponds to the .flavor div in the DOM
   * name: the name of the flavor
   * description: the description of the flavor
   * price: how much the flavor costs
   * quantity: how many cups of the flavor are available
   */
  function extractFlavors() {
  	var myFlavors = document.getElementsByClassName("flavor");
  	var flavorArray = [];
  	for (var i = 0; i < myFlavors.length; i++){
  		var cF = myFlavors[i];
  		var fN = cF.getElementsByTagName("h2")[0].innerHTML;
  		var fD = cF.getElementsByTagName("p")[0].innerHTML;
  		var fP = cF.getElementsByClassName("price")[0].innerHTML;
  		var fQ = cF.getElementsByClassName("quantity")[0].innerHTML;
  		
  		var flavorObject = {
  			element: cF, 
  			name: fN, 
  			description: fD,
  			price: fP,
  			quantity: fQ,
  		};
  		
  		flavorArray.push(flavorObject);
  	}
  }

  /* Calculates and returns the average price of the given set of flavors. The
   * average should be rounded to two decimal places. */
  function calculateAveragePrice(flavors) {
  	var total = 0;
  	total += flavors.forEach(getPrice);
  	console.log(total);
  	var average = total/flavorArray.length;
  	average = average.toFixed(2);
  	return average;
  }
  	
  /* Finds flavors that have prices below the given threshold. Returns an array
   * of strings, each of the form "[flavor] costs $[price]". There should be
   * one string for each cheap flavor. */
  function findCheapFlavors(flavors, threshold) {
    // TODO
  }

  /* Populates the select dropdown with options. There should be one option tag
   * for each of the given flavors. */
  function populateOptions(flavors) {
    // TODO
  }

  /* Processes orders for the given set of flavors. When a valid order is made,
   * decrements the quantity of the associated flavor. */
  function processOrders(flavors) {
    // TODO
  }

  /* Highlights flavors when clicked to make a simple favoriting system. */
  function highlightFlavors(flavors) {
    // TODO
  }


  /***************************************************************************/
  /*                                                                         */
  /* Please do not modify code below this line, but feel free to examine it. */
  /*                                                                         */
  /***************************************************************************/


  var CHEAP_PRICE_THRESHOLD = 1.50;

  // setting quantities can modify the size of flavor divs, so apply the grid
  // layout *after* quantities have been set.
  setQuantities();
  var container = document.getElementById('container');
  new Masonry(container, { itemSelector: '.flavor' });

  // calculate statistics about flavors
  var flavors = extractFlavors();
  var averagePrice = calculateAveragePrice(flavors);
  console.log('Average price:', averagePrice);

  var cheapFlavors = findCheapFlavors(flavors, CHEAP_PRICE_THRESHOLD);
  console.log('Cheap flavors:', cheapFlavors);

  // handle flavor orders and highlighting
  populateOptions(flavors);
  processOrders(flavors);
  highlightFlavors(flavors);

})(window, document);
