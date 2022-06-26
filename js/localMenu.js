import { drinks } from './drinks.js';
import { food } from './food.js'
import { wine } from './wine.js'

const noAlcohol = document.getElementById('noAlcohol')
const bottle = document.getElementById('bottle')
const can = document.getElementById('can')
const drink = document.getElementById('drink')
const savories = document.getElementById('savories')
const medallion = document.getElementById('medallion')
const aditionals = document.getElementById('aditionals')
const hotFood = document.getElementById('hotFood')
const pizzas = document.getElementById('pizzas')
const sinTacc = document.getElementById('sinTacc')
const sinTaccDesserts = document.getElementById('sinTaccDesserts')
const wines = document.getElementById('wines')
const almaMora = document.getElementById('almaMora')
const tupac = document.getElementById('tupac')
const santaJulia = document.getElementById('santaJulia')
const tierraTelteca = document.getElementById('tierraTelteca')
const elPeral = document.getElementById('elPeral')
const chanarmuyo = document.getElementById('chanarmuyo')




const renderMenu = (array, id) =>{

            array.forEach((product) => {
                const div = document.createElement('div')
                div.classList.add('item', 'flex', 'justify-between')
                div.innerHTML += `
                                 <div class="">
                                    <h5 class="prod prod-title text-white font-medium">${product.name}
                                    <p class="prod prod-desc text-white  ml-4">${product.desc}</p>  
                                  </div>
                                  </h5>
                                  <p class="prod prod-price text-white">${product.price}</p>
                                 `
    id.appendChild(div)
    });
}


renderMenu(drinks[2], noAlcohol)
renderMenu(drinks[0], bottle)
renderMenu(drinks[1], can)
renderMenu(drinks[3], drink)
renderMenu(food[0], savories)
renderMenu(food[1], medallion)
renderMenu(food[2], aditionals)
renderMenu(food[3], hotFood)
renderMenu(food[6], sinTacc)
renderMenu(food[7], sinTaccDesserts)
renderMenu(food[4], pizzas)
renderMenu(food[5], fittings)
renderMenu(food[8], desserts)
renderMenu(wine[0], wines)
renderMenu(wine[1], almaMora)
renderMenu(wine[2], tupac)
renderMenu(wine[3], santaJulia)
renderMenu(wine[4], tierraTelteca)
renderMenu(wine[5], elPeral)
renderMenu(wine[6], chanarmuyo)

