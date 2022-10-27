import URL_SERVICES from "../config/config"

async function createDish({ name,category, price, picture, ingredients,isVegan,isGlutenFree
,restaurantId})
{

const dish ={
    name: "req.body.name",
    category: "req.body.category",
    price: "req.body.price",
    picture: "req.body.picture",
    ingredients: "req.body.ingredients",
    isVegan: "req.body.isVegan",
    isGlutenFree: "req.body.isGlutenFree",
    restaurantId : '6320d342d4203565c30409de'
    }
 
  
  const dishData = JSON.stringify(dish);

  console.log("Dish: ", dishData);

  let result = await fetch(URL_SERVICES.DISH_CREATE, {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : userDish
  }).then(res => {
    console.log("Status: ", res.status);
  }).
  catch(err => {
    console.log(err);
  })

  return result;
}

export default createDish;