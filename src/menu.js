import Restaurant from './restaurant.jpg'
const menufunction = () => {
    content.innerHTML = "";
    const h1 = document.createElement('h1')
    h1.classList.add('page-title');
    h1.innerHTML = 'Menu Header'
    content.appendChild(h1);


    const div = document.createElement('div');
    div.classList.add('Paragraph');
    div.innerHTML = 'Menu paragraph';
    content.appendChild(div);

    const myRestaurant = new Image();
    myRestaurant.src = Restaurant;
    myRestaurant.classList.add('image');
  
    content.appendChild(myRestaurant);

   
    
}

export {menufunction};


