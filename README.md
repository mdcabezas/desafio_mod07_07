 # Desafio Modulo 07 Proyecto 07

#### Requerimientos
 
 1. Testea que la ruta GET /cafes devuelve un **status code 200** y el tipo de dato recibido es un arreglo con por lo menos 1 objeto.
2. Comprueba que se obtiene un **código 404** al intentar eliminar un café con un id que
no existe.
3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un **código 201**.
4. Prueba que la ruta PUT /cafes devuelve un **status code 400** si intentas actualizar un
café enviando un id en los parámetros que sea diferente al id dentro del payload.

 
 #### Resultado

 PASS  tests/server.spec.js  
  Operaciones CRUD de cafes  
    ✓ Código 200 comprueba 1 Arreglo al menos 1 Objeto (31 ms)  
    ✓ Código 404 si elimina id inexistente (10 ms)  
    ✓ Código 201 agrega nuevo registro exitosamente (15 ms)  
    ✓ Código 400 distinto id en parámetro y payload (4 ms)  

Test Suites: 1 passed, 1 total  
Tests:       4 passed, 4 total  
Snapshots:   0 total  
Time:        0.564 s, estimated 1 s  
Ran all test suites.
