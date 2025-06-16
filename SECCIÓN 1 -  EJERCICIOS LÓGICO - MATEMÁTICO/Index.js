/* 
    NOTA IMPORTANTE: Este archivo está excedido en comentarios únicamente con la finalidad de brindar claridad en los ejercicios y no por una necesidad del código.
    En práctica real, no es recomendable dejar comentarios innecesarios en el código, ya que puede dificultar la lectura y mantenimiento del mismo.
    Los comentarios deben ser claros, concisos y relevantes para el código que los acompaña y solo en casos muy requeridos, como cuando hay lógica compleja.
*/

//#region Ejercicio 1 Invertir cada palabra de una cadena de texto.
    console.log('\nEjercicio 1 Invertir cada palabra de una cadena de texto.');

    function fnInvertidorDePalabras(txtCadena) {
        const txtPalabrasInvertidas = txtCadena.split(' ').map(palabra => palabra.split('').reverse().join('')).join(' ');
        return txtPalabrasInvertidas;
    }

    console.log(fnInvertidorDePalabras('Hola soy una cadena')); // "aloH yos anu anedac"
    console.log(fnInvertidorDePalabras('Programando ando')); // "odnamargorP odna"
    console.log(fnInvertidorDePalabras('Concatenación')); // "nóicanetacnoC"
//#endregion

//#region Ejercicio 2 Limpiar arreglo de números
    console.log('\nEjercicio 2 Limpiar arreglo de números');
    
    function fnLimpiadorDeArreglo(arrNumeros) {
        const arrNumerosPares = arrNumeros.filter(numero => numero % 2 === 0);
        const arrNumerosSinRepetir = [...new Set(arrNumerosPares)];
        return arrNumerosSinRepetir;
    }

    console.log(fnLimpiadorDeArreglo([2,7,9,12,33,15,22,12,4])); //[2,12,22,4]
    console.log(fnLimpiadorDeArreglo([1,2,3,4,5,6,7,2,4,6,8,6])); //[2,4,6,8]
//#endregion

//#region Ejercicio 3 Generador de una lista de pares de números primos gemelos
    //Lógica que lo haga
//#endregion

//#region Ejercicio 4 Evaluador de combinación de números dentro de un arreglo con un número objetivo
    console.log('\nEjercicio 4 Evaluador de combinación de números dentro de un arreglo con un número objetivo');
    
    function fnEvaluadorDeCombinacionDeNumeros(arrNumeros, numObjetivo) {
        for(let i = 0; i< arrNumeros.length; i++) {
            const numActual = arrNumeros[i];
            for(let j = i + 1; j < arrNumeros.length; j++) {
                const numSiguiente = arrNumeros[j];
                const suma = numActual + numSiguiente;

                if(suma === numObjetivo) {
                    return true;
                }
            }
        }
        return false;
    }

    console.log(fnEvaluadorDeCombinacionDeNumeros([2, 5, 8, 44, 1, 7], 9)); // true 8+1=9 || 2+7 = 9

    console.log(fnEvaluadorDeCombinacionDeNumeros([55,3,8,11,45,1], 12)); // true 3+8+1 = 12

    console.log(fnEvaluadorDeCombinacionDeNumeros([4,8,48,44,1], 11)); // false ninguna combinación suma 11
//#endregion

//#region Ejercicio 5 Consulta SQL-Libros que la alumna Sonia tiene prestados, que no ha devuelto y cuyo préstamo está vencido al día 30/07/2021
    console.log('\nEjercicio 5 Consulta SQL-Libros que la alumna Sonia tiene prestados, que no ha devuelto y cuyo préstamo está vencido al día 30/07/2021');

    //NOTA: No tenía conocimiento de cómo sumar días a una fecha. Por lo que para la última condición le pregunte a una IA cómo podía hacerlo y me proporcionó la opción de usar DATE_ADD junto a INTERVAL y DAY. La pregunta fue hecha a IA con la finalidad de obtener una posible solución rápidamente.
    const sql = `SELECT LIBRO.Nombre FROM LIBRO JOIN PRESTAMO ON Id_libro = LIBRO.id JOIN ALUMNO ON ALUMNO.id = PRESTAMO.Id_alumno WHERE ALUMNO.Nombres = 'Sonia' AND PRESTAMO.Entregado = false AND DATE_ADD(PRESTAMO.Fecha_prestamo, INTERVAL LIBRO.Dias_limite_prestamo DAY) < '2021-07-30'`
    console.log(sql);

//#endregion