var estudiantes = ["Maria", "Javier", "Pepe", "José"]

function saludarEstudiantes(estudiante){
  console.log("Hola " + estudiante)
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i])
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}

while (estudiantes.length > 0) {
  saludarEstudiantes(estudiantes.pop())
}