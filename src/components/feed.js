function feed() {
    const section = document.createElement('section');
    const nav = document.createElement ('nav');
    const select = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    const write = document.createElement('button');
    const logo = document.createElement('img');

    logo.src = './imagenes/image.png';
    write.textContent = 'Añade una Receta';
    option1.value = 'Mejores Recetas';
    option1.textContent ='Mejores Recetas';
    option2.value ='Usuarios'
    option2.textContent ='Usuarios'
    option3.value ='Salir'
    option3.textContent ='Salir'
  

    section.append(logo, write, nav);
    nav.append(select)
    select.append(option1, option2, option3)
    return section;
}
export default feed;