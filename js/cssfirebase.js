fetch('https://csscursos-88ea7-default-rtdb.firebaseio.com/styles.json')
.then(response => response.json())
.then(data => {
    const backgroundColor = data["backgroundcolor"]; //obtengo el valor de firebase
    document.documentElement.style.setProperty("--backgroundColor", backgroundColor);

    const colorText = data["color"];
    document.documentElement.style.setProperty("--colorText", colorText);
})
.catch(error => {
    console.error('Error al traer datos de la API:', error);
})
