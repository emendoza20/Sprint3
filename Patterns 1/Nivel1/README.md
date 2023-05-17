# Sprint 3. Patterns

## Entrega 3.1 - Patterns 1


### Nivel 1 :star: - Callback Hell  :japanese_ogre:

El código adjunto lee un archivo situado en un directorio inbox y escribe su contenido invertido en otro archivo en el directorio outbox . Reestructura y simplifique el código existente para evitar el denominado Callback Hell.

Pasos:

1) Desarrollo la funcion readDir() que devuelve una promesa que resuelve con un arreglo de nombres de archivos que utiliza la funcion **readdir** que se usa para leer el contenido de un directorio en el sistema de archivos en nuestro caso la necisitamos para leer los directorios inbox.