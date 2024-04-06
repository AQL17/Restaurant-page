const contactFunction = () => {
    content.innerHTML = "";
    const h1 = document.createElement('h1')
    h1.classList.add('page-title');
    h1.innerHTML = 'Contact Header'
    content.appendChild(h1);


    const div = document.createElement('div');
    div.classList.add('Paragraph');
    let form = ` <form action="/submit_form" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>

    <label for="gender">Gender:</label><br>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br>
    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other</label><br><br>

    <label for="subscribe">Subscribe to newsletter:</label>
    <input type="checkbox" id="subscribe" name="subscribe"><br><br>

    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
</form>`
    div.innerHTML = form;
    content.appendChild(div);
    
}

export {contactFunction};

