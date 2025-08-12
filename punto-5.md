# Apunte sobre funciones constructoras, clases y prototipos en JavaScript

## 1. Diferencias entre funciones constructoras con prototype y class

Las funciones constructoras con `prototype` son compatibles con navegadores antiguos y ofrecen un control más directo sobre cómo se definen los métodos. Una de sus desventajas es que es al defininir los métodos separado del constructor puede dificultar la lectura

Las clases (`class`) proporcionan una sintaxis más clara y compacta que agrupa métodos y propiedades en un solo lugar. También permiten el uso de propiedades privadas con `#`. La desventaja principal es que no funcionan en navegadores muy antiguos sin transpilar.

## 2. Ventajas de usar getters y setters

Los getters y setters facilitan el control sobre cómo se accede y modifica una propiedad. Permiten validar o procesar datos antes de guardarlos o devolverlos, lo que aporta seguridad evitando cambios accidentales. Además, su uso es sencillo, ya que se emplean como propiedades normales, pero incluyen lógica interna para manejar los valores.

## 3. Problemas al modificar prototipos nativos

Modificar prototipos nativos como el de `String` puede generar conflictos si se usan nombres que coinciden con librerías externas o con métodos que se agreguen en futuras versiones de JavaScript. Esto puede provocar errores inesperados y romper código que no anticipaba esas modificaciones. En general, modificar prototipos nativos se considera una mala práctica porque dificulta el mantenimiento y la depuración.

## 4. Diferencias entre asignar métodos al prototype o usar Object.assign

Asignar un método directamente al `prototype` de una función constructora implica añadir un único método específico, lo que permite un control preciso sobre lo que se modifica. En cambio, usar `Object.assign` copia todos los métodos de un objeto al `prototype` de una sola vez, lo que es más rápido si se tienen muchos métodos, pero puede sobrescribir métodos existentes sin advertencia.

---
