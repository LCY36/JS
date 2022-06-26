var food =document.querySelector('.food');
var foodName =document.querySelector('.foodInfo h4');
var foodAry =[];

// 버튼 누르기전 food page 숨김
food.style.display = "none"


document.querySelector('.button-primary').addEventListener('click',function(){

    food.style.display = "block"

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(data => data.json())
        .then(data =>{
            createFood(data.meals[0])   
        })
        .catch(error =>{
            console.log(error)
        });
})

const createFood = meal => {
    const x = 1;
    const ingredients = [];
   
    for(let i = 1; i<=20; i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        }
        else
            break;
    }

    console.log(ingredients.map(i => `<li> ${i} </li>`))  
    
    const newInnerHTML =`
        <div class="row">
            <div class="foodIngredients five columns">
                <img src=${meal.strMealThumb} alt="">
                <p>Category:</p>
                <p>Area: ${meal.strArea}</p>
                ${meal.strTags != null?
                    `<p>Tags: ${meal.strTags}</p>` : `<p> </p>`}
                <h5>Ingredients:</h5>
                <ul>
                    ${ingredients.map(i => `<li> ${i} </li>`).join('')}
                </ul>
            </div>
            <div class="foodInfo seven columns">
                <h4>${meal.strMeal}</h4>
                <span>${meal.strInstructions}</span>
            </div>
        </div>
        <div class="foodVideo row">
            <h4>Video Recipe</h4>
            <iframe width="420" height="315"
            src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
            </iframe>
        </div>`

        food.innerHTML=newInnerHTML

}

