class Tarea{
    mensaje(){
        // console.log("mensaje desde tarea")
        debugger;
        

        let suma = 0, n=0,r;
        r = document.getElementById("resp")
        n = document.getElementById("n").value
        n = parseInt(n)
        for (let i = 1; i <= n; i++) { 
          suma += i;
        }
         r.innerHTML = "La suma es " + suma;

    }
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    PnmNn2(){
       

      let i = 0,r;
      let contador = 0; 
      let n=0;
      r = document.getElementById("resp")
      n = document.getElementById("n").value
      n = parseInt(n)
      while (i <= n) {
        if (i % 2 === 0) {
          contador++;
        } 
        i++;
      }
      r.innerHTML = "Hay "+  contador + " números pares hasta " +n
    }

    
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    Dsunepoi3(){
      
      let n=0,r;
      n = document.getElementById("n").value
      n = parseInt(n)
      r = document.getElementById("resp")
      if (n % 2 === 0) { 
        r.innerHTML = "El "+ n + " es par"
      } else {
        r.innerHTML = "El "+ n + " es impar"
      }  


    }

    DsupeMdE4(){
      let edad = 0,r;
      edad = document.getElementById("edad").value
      edad= parseInt(edad)
      r = document.getElementById("resp")

     if (edad >= 18) {
      r.innerHTML="Eres mayor de edad";
     } else {
      r.innerHTML= "Eres menor de edad";
     }
      
    }

    Dsunepno05(){
      let numero = 0,r;
      numero= document.getElementById("numero").value
      numero=parseInt(numero)
      r= document.getElementById("resp")
       if (numero > 0) {
        r.innerHTML= "El "+numero + " es positivo";
       } else if (numero < 0) { 
        r.innerHTML= "El "+numero + " es negativo";
       } else {
        r.innerHTML= "El "+numero + " es cero";
      }
     
      
    }

    DsuaeB6(){
      let anio = 0,r;
      anio= document.getElementById("anio").value
      anio=parseInt(anio)
      r=document.getElementById("resp")
      if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
       r.innerHTML= anio + " es un año bisiesto";
      } else {
       r.innerHTML= anio + " no es un año bisiesto";
      }
    }
    

    Demddn7(){
      let numero1=0,numero2=0,r
      numero1 = parseInt(document.getElementById("numero1").value);
      numero1=parseInt(numero1)
      numero2 = parseInt(document.getElementById("numero2").value);
      numero2=parseInt(numero2)
      r=document.getElementById("resp")

      if (numero1 > numero2) {
        r.innerHTML= numero1 + " es mayor que " + numero2; 
        } else if (numero1 < numero2) {
        r.innerHTML= numero2 + " es mayor que " + numero1;
        } else {
        r.innerHTML= "Ambos números son iguales";
        }
       
    }

    PlnpdNn8(){
   
      let n =0,r;
      n= document.getElementById("n").value
      n=parseInt(n)
      r= document.getElementById("resp")
      for (let i = 1; i <= n; i++) { 
        if (n % i === 0) {
          r.innerHTML=(i + " es par")+ "<br>";
        } 
      }
      
    }

    PldduN9(){
      let numero = 0;
      let acu=0
      numero=document.getElementById("numero").value
      numero=parseInt(numero)
      let r=document.getElementById("resp")
      r.innerHTML= ""
      for (let i = 1; i <= numero; i++) { 
        if (numero % i === 0) {
            r.innerHTML += (i + " es un divisor de " + numero + "<br>");
        }
      
      }
    }

    DsuneP10(){
      let suma = 0,r;
      let numero= document.getElementById("numero").value
      numero=parseInt(numero)
      r=document.getElementById("resp")

      for (let i = 1; i <= numero/2; i++) {
         if (numero % i === 0) {
          suma += i
          
        }
      }
      if (suma === numero) {
        r.innerHTML= numero + " es un número perfecto";
      } else {
       r.innerHTML= numero + " no es un número perfecto";
      }
      
    }

    Dsunep11(){
      let numero = 0,r;
      numero= document.getElementById("numero").value
      numero=parseInt(numero)
      r=document.getElementById("resp")
      let esPrimo = true;
      for (let i = 2; i < numero; i++) { 
        if (numero % i === 0) {
         esPrimo = false; 
         break;
        }
      }
      if (esPrimo) {
       r.innerHTML= numero + " es un número primo";
      } else {
       r.innerHTML= numero + " no es un número primo";
      }
        
    }
    

    Iundpd12() {
          
      let numero = 0; 
      let invertido = 0;
      numero= document.getElementById("numero").value
      numero=parseInt(numero)
      let r=document.getElementById("resp")
      while (numero !== 0) {
      let digito = numero % 10;
      invertido = invertido * 10 + digito; 
      numero = Math.floor(numero / 10);
      }
      r.innerHTML= "El número invertido es " + invertido;

    }

    Mddnpss13(){
       
      let numero1 = 0; 
      let numero2 = 0;
      let resultado = 0;
      numero1= document.getElementById("numero1").value
      numero1=parseInt(numero1)
      numero2= document.getElementById("numero2").value
      numero2=parseInt(numero2)
      let r=document.getElementById("resp")

      for (let i = 0; i < numero2; i++) { 
        resultado += numero1;
      }
      r.innerHTML= ("El resultado de la multiplicación es " + resultado);
        
    }


    Dddnprs14(){
      /*let dividendo = 0; 
      let divisor = 0; 
      let cociente = 0;*/
      
            let dividendo=parseInt(document.getElementById("dividiendo").value);
            let divisor = parseInt(document.getElementById("divisor").value);
            let cociente = 0;
            let r = document.getElementById("resp");

            while (dividendo >= divisor) { 
              dividendo -= divisor; cociente++;
            }
            r.innerHTML= "El cociente de la división es " + cociente;
        
    }

    PlsdfdNn15(){
      let n = 0; 
      let a = 0; 
      let b = 1;
      let resultado = "Serie de Fibonacci: " + a;
      n= document.getElementById("n").value
      n=parseInt(n)
      let r=document.getElementById("resp")
      r.innerHTML= a; 
      r.innerHTML= b;
      for (let i = 2; i < n; i++) { 
        let c = a + b;
        resultado += ", " + c;
        a = b;
        b = c;
      }

       r.innerHTML = resultado;
    }

    Plnmd5a16(){
        
            
      let numeros2 = document.getElementById("arreglo").value;  //”10;15;23;30;45;50” 
            let numeros = numeros2.split(","); // [10, 15, 23, 30, 45, 50]
            let r = document.getElementById("resp");
            r.innerHTML = ""; // Limpiar contenido anterior

            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i] % 5 === 0) {
                    r.innerHTML += numeros[i] + " es múltiplo de 5<br>";
                }
            }
}
    

    Epdlndua17(){
      
/*prueba de escritorio
suma   i     length
 0     0      4
   10    1
   25    2
   48    3
   78    4*/
        let numeros2 = document.getElementById("arreglo").value;  //”10;15;23;30;45;50” 
        let numeros = numeros2.split(","); // [10, 15, 23, 30, 45, 50]
        let suma=0
        let r = document.getElementById("resp");
         r.innerHTML = ""; // Limpiar contenido anterior
          for (let i = 0; i < numeros.length; i++) {
           let num = parseInt(numeros[i]) 
           suma += num;
          }
          let promedio = suma / numeros.length; 
          r.innerHTML= "El promedio es " + promedio.toFixed(2);

    }

    Emdledua18(){
              /*prueba de escritorio
              i   mayor  números[i]  length
              1     10    15            5
              2     15    23
              3     23    300
              4     300    45
              5*/
      /*let numeros = [];
      let mayor = numeros[0];
         numeros = parseInt(document.getElementById("arreglo").value)  //”10;15;23;30;45;50” 
         numeros = numeros.split(",")// [“10”, “15”, “23”, “30”, “45”, “50”]
         numeros =parseInt(numeros) 
         let r=document.getElementById("resp") 
          for (let i = 1; i < numeros.length; i++) { 
            if (numeros[i] > mayor) {

             mayor =  numeros[i];

            }
          }

          r.innerHTML= "El número mayor es " + mayor;*/
          let numerosInput = document.getElementById("arreglo").value;
            let numeros = numerosInput.split(",").map(num => parseInt(num.trim()));

            // Encontrar el número mayor
            let mayor = numeros[0];
            for (let i = 1; i < numeros.length; i++) {
                if (numeros[i] > mayor) {
                    mayor = numeros[i];
                }
            }

            // Mostrar resultado
            let resultado = document.getElementById("resp");
            resultado.innerHTML = "El número mayor es: " + mayor;
     }


    

    PlnqnsAnadua19(){
       let nombresInput = document.getElementById("arreglo").value;
       let nombres = nombresInput.split(",");

       let r = document.getElementById("resp");
       r.innerHTML = ""; // Limpiar contenido anterior

       for (let i = 0; i < nombres.length; i++) {
           if (nombres[i].trim() !== "Ana") {
               r.innerHTML += nombres[i].trim()+"<br>";
    }
  }
}



    LpduardeUeaP20(){
     
      let numerosInput = document.getElementById("arreglo").value;
            let numeros = numerosInput.split(",").map(num => parseInt(num.trim()));

            let r = document.getElementById("resp");
            r.innerHTML = ""; // Limpiar contenido anterior

            let resultado = "";
            for (let i = 0; i < numeros.length; i++) {
                if (numeros[i] % 2 === 0) {
                    resultado += numeros[i] + " es par<br>";
                }
            }

            r.innerHTML = resultado;
     }
    

    

    Iccduc21(){

      let cadena = "";  length
      cadena=document.getElementById("cadena").value
      r=document.getElementById("resp")
                       
            //Console.log(cadena) // imprime toda la cadena:    
          for (let i = 0; i < cadena.length; i++) { 
           innerHTML= (cadena[i]+ "/n" ); // imprime carácter por carácter de la caden
          }

    }

    Cv22(){
      let frase = document.getElementById("frase").value
      let cv=0
      for(let i=0;i < frase.length;i++){
          if (frase[i]== "a" || frase[i]== "e" || frase[i]== "i" || frase[i]== "o" || frase[i]== "u"||frase[i]== "A" || frase[i]== "E" || frase[i]== "i" || frase[i]== "o" || frase[i]== "u" ) {
             cv=cv+1
          }
          
      }
      console.table({cv})
      let resp = document.getElementById("resp")
      resp.textContent="cantidad de vocales es  "+ cv
      
}


    


    Mcepp23(){
      let cadena = document.getElementById('cadena').value;

        let resultado = document.getElementById('resultado');

        resultado.innerHTML = '';

         for (let i = 0; i < cadena.length; i += 2) {
        let parrafo = document.createElement('p');
        parrafo.textContent = cadena[i];
        resultado.appendChild(parrafo);
      }
    }

    Cam24(){
      let cadenaInput = document.getElementById("ingreso").value;

      let cadenaMayusculas = cadenaInput.toUpperCase();

      let respuestaDiv = document.getElementById('resp');
      respuestaDiv.textContent = "La cadena en mayúsculas es: " +cadenaMayusculas;
    }

    Cp25(){
      let num = document.getElementById("msg").value;
      let resp = document.getElementById('resp');
  
      let frase = '';
      let palabras = 0;
      frase = num;
  
      frase = frase.trim();
  
      if (frase === '') {
  
        return 0;
      }
      palabras = frase.split(/\s+/);
      palabras = palabras.length;
  
      resp.textContent = "En su frase ingresada hay "+palabras+" palabras ";
  
    }

    Pepc26(){
      let cadena = document.getElementById('cadena').value;
    
       let primerCaracter = cadena.charAt(0);
       let longitudCadena = cadena.length;
       let resultadoCadena = primerCaracter.repeat(longitudCadena);
       let resultado = document.getElementById('resultado');
       resultado.innerHTML = resultadoCadena +"<br>";
    }
    

    Ilc27(){
      
      let num = document.getElementById("frase").value;
      let resp = document.getElementById("resp");
  
      let frase = "";
      num = num.toLowerCase().split("").reverse().join("");
      frase = num.charAt(0).toUpperCase();
  
      resp.textContent = frase + num.slice(1);
    }


    Cc29(){
        let num = document.getElementById("frase").value;
        let resp = document.getElementById("resp");
    
        let cadena = "";
        cadena = num;
      
    
        resp.textContent = "La suma de los digitos de la cadena es: " + cadena.length;
      }

      Ee30(){
          /*let cadenaInput = document.getElementById("ingreso").value
          let cadenaSinEspacios = cadenaInput.replace(/\s/g, '');
          let respuestaDiv = document.getElementById("resp");
          respuestaDiv.textContent= "La cadena sin espacios es: " + cadenaSinEspacios;*/
          let cadena = "";
          let nuevaCadena = "";
          cadena.getElementById("cadena").value
          r.getElementById("resp")
          for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] !== " ") {
             nuevaCadena += cadena[i];
            }
          }
          r.innerHTML= (nuevaCadena);
      }


        
}
let tarea = new Tarea() //crea una variable igual que la clase
// tarea.mensaje()
