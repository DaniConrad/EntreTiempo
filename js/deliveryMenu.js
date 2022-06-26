import { food } from './food.js'

const medallion = document.getElementById('medallion')
const aditionals = document.getElementById('aditionals')
const pizzas = document.getElementById('pizzas')
const savories = document.getElementById('savories')


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

renderMenu(food[0], savories)
renderMenu(food[1], medallion)
renderMenu(food[2], aditionals)
renderMenu(food[4], pizzas)

