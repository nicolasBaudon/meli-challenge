# FrontEnd Challenge Mercado Libre

La aplicación en su totalidad esta orientada a microservicios, teniendo una api backend desarrollada en Node y Express, y una aplicación FrontEnd desarollada en React utilizando Nextjs(Hooks) y Sass para los estilos.

## Aplicación

Para iniciar la aplicación se pensó realizarlo con docker y docker-compose, de esta manera se obtiene un ambiente controlado de la aplicación FrontEnd y BackEnd.
Aclaración: Para el FrontEnd se utiliza otro contenedor para Nginx que funciona como reverse proxy.
Si se desea utilizar ambas aplicaciones de manera separada, se puede ingresar a la carpeta de cada una y seguir el README respectivo a las mismas.

## Utilización

Para utilizar la aplicación se necesita tener [Docker](https://www.docker.com/) instalado y [Docker Compose](https://docs.docker.com/compose/install/)(En el caso que no se tenga esto y no se puede realizar la instalación, se pueden iniciar ambas aplicaciones de manera unitaria, como se mencionó en el título anterior): 

Luego se debe ejecutar en el directorio raiz(donde se encuentra el archivo docker-compose.yml):

```bash
docker-compose up
```

La aplicación corre en [http://localhost:8000](http://localhost:8000).