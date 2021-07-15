# Web de frases aleatorias

# TECNOLOGÍAS:
SASS/JavaScript/Node.js /Express

# PRUEBA

🔴🔴🔴https://phrasesweb-cr1337.herokuapp.com 🔴🔴🔴

# RESUMEN 

Página que consume una API propia para mostrar los mensajes almacenados en una base de datos.

# API

Consiste en una ruta GET que te muestra todas las palabras/frases almacenadas en la 
base de datos de manera desordenada, los datos son enviador en formato json
de tal forma que nunca se van a devolver las frases en el mismo orden

Una ruta POST por la cual se cargan los datos, se utilizó Mongoose para el modelo.

# HOME

El home consta de un input, por el cual al ingresar una frase y enviarla, 
este se esconde y comienza a mostrar de forma dinámica todas las frases devueltas por la API.
Se puede volver a enviar una frase si presiona un botón que vuelve a mostrar el input.
