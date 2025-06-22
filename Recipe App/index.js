const searchBox = document.querySelector(".searchBox");
const Searchbtn = document.querySelector(".Searchbtn");
const recipecontainer = document.querySelector(".recipe-container");
const recipedetailscontent = document.querySelector(".recipe-details-content");
const recipeclosebtn = document.querySelector(".recipe-close-btn");

//function to get recipes
const fetchRecipes = async (query) => {
  recipecontainer.innerHTML = "<h2>Feching recipes....</h2>"; // Clear previous results
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const response = await data.json();

  recipecontainer.innerHTML = ""; // Clear previous results
  response.meals.forEach((meal) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
    <img src ="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea} - ${meal.strCategory}</p>
    
    
    `;
    // recipecontainer.appendChild(recipeDiv);
    const Button = document.createElement("button");
    Button.textContent = "View Recipe";
    recipeDiv.appendChild(Button);

    //Adding EventListener to the button
    Button.addEventListener("click", () => {
      openRecipePopup(meal);
    });
    // recipeDiv.appendChild(Button);

    recipecontainer.appendChild(recipeDiv);
  });
};
//function to fetch ingredients and  measurements
const fetchIngredients = (meal) => {
  let ingredientslist = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      const measure = meal[`strMeasure${i}`];
      ingredientslist += `<li>${ingredient} ${ingredient}</li>`;
    } else {
      break;
    }
  }
  return ingredientslist;
};
const openRecipePopup = (meal) => {
  recipedetailscontent.innerHTML = `
   <h2 class="recipeName">${meal.strMeal}</h2>
   <h3>Ingredients:</h3>
   <ul class ="ingredientList">${fetchIngredients(meal)}</ul>
  <div class = "recipeInstructions">
  <h3>Instructions:</h3>
  <p>${meal.strInstructions}</p>
  
  </div>
   `;
  recipedetailscontent.parentElement.style.display = "block";
};

//Adding EventListener to the close button
recipeclosebtn.addEventListener("click", () => {
  recipedetailscontent.parentElement.style.display = "none";
});
Searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  if(!searchInput){
    recipecontainer.innerHTML = `<h2>Type the meal in the search box.</h2>`;
    return;
  }

  fetchRecipes(searchInput);
  // console.log('Button clicked');
});
//1.5m m
