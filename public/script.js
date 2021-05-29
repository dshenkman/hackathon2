//
//




const sendData = async () => {

  try {
    const getrecipe = document.getElementById('recipes').value

    const response = await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${getrecipe}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7ea3bba4femshe5fbca7638aac73p143dabjsn9df29e5ddd31",
		"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
	}

      })

      const data = await response.json()
      console.log(data);

      const div = document.getElementById("root");
      const recipe = document.getElementById('ifrm');
      const loader = document.createElement('div')
      loader.id = "loader"
      div.appendChild(loader)
      loader.style.display = "block"


      recipe.style.display = "block";
      // recipe.style.width = null
      // recipe.style.height = null
      // recipe.src = null

      // recipe.style.align = "middle";
      recipe.src = data.hits[8].recipe.url;
      div.appendChild(recipe)


  }
  catch(error) {
    console.log(error);
  }

}

const sendData2 = async () => {

  try {
    const getrecipe = document.getElementById('recipes').value

    const response = await fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${getrecipe}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7ea3bba4femshe5fbca7638aac73p143dabjsn9df29e5ddd31",
		"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com"
	}

      })

      const data = await response.json()
      console.log(data);

      const div = document.getElementById("root");
      const recipe = document.getElementById('ifrm');
      const loader = document.createElement('div')
      loader.id = "loader"
      div.appendChild(loader)
      loader.style.display = "block"


      recipe.style.display = "block";
      // recipe.style.width = null
      // recipe.style.height = null
      // recipe.src = null

      // recipe.style.align = "middle";
      recipe.src = data.hits[2].recipe.url;
      div.appendChild(recipe)


  }
  catch(error) {
    console.log(error);
  }

}


const checkData = async () => {

  const response = await fetch("http://localhost:3000/data")

  const data = await response.json()



  const zipcode = document.getElementById('zipcode').value
  const item = document.getElementById('item').value

  const displayItem = document.getElementById('displayItem')

  const appendItem = document.createElement('h1')
  displayItem.innerText = ""
  appendItem.innerText = `These local stores have ${item} in stock:`

  displayItem.appendChild(appendItem)
  const div = document.getElementById('root2')



  div.innerText = ""


  // itemName.innerText = " "



  for (var i = 0; i < data.length; i++) {
    if (data[i].item_name == item ||data[i].zipcode == zipcode ) {
      // console.log(item);

      const product = data[i].item_name
      const store = data[i].store_name
      const price = data[i].price
      console.log(`${product} is at ${store} and the price is $ ${price}`);


      const productP = document.createElement('p')
      const storeP = document.createElement('p')
      const priceP = document.createElement('p')
      //
      // itemName.innerText = `${product} is at ${store} and the price is $ ${price}`
      // console.log(itemName);
      // div.appendChild(itemName)
      storeP.innerText = ""
      priceP.innerText = ""
      productP.innerText = product
      storeP.innerText = store
      priceP.innerText = `$${price}`

      // div.appendChild(productP)
      div.appendChild(storeP)
      div.appendChild(priceP)





    } else {
      console.log("this item does not exist");
    }

  }



  // div.appendChild(itemName)

  console.log(`${zipcode} + ${item}`);


}

const clearValue = () => {
  const value = document.getElementById('recipes')

  value.value = ""

}

const clearValue1 = () => {
  const value = document.getElementById('zipcode')


  value.value = ""

}

const clearValue2 = () => {

  const value = document.getElementById('item')

  value.value = ""



}
