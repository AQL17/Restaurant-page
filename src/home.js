const homeFunction = () => {
    content.innerHTML = "";
    const h1 = document.createElement('h1')
    h1.classList.add('page-title');
    h1.innerHTML = 'Welcome To AQL Restaurant'
    content.appendChild(h1);


    const div = document.createElement('div');
    div.classList.add('Paragraph');
    div.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries';
    content.appendChild(div);
    
}

export {homeFunction};