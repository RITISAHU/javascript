async function searchRecipes() {
  const query = document.getElementById('searchInput').value;
  const apiKey = 'YOUR_SPOONACULAR_API_KEY'; // Replace this with your actual API key
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  const container = document.getElementById('recipesContainer');
  container.innerHTML = '';

  data.results.forEach(recipe => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${recipe.title}" />
    `;
    container.appendChild(recipeDiv);
  });
}
