#!/bin/bash

# Ruta al script que deseas probar
script_a_probar="./tu_script.sh"  # Reemplaza esto con la ruta a tu script

# Crear un archivo temporal para el mensaje de commit
temp_commit_msg=$(mktemp)

# Función para limpiar
cleanup() {
    rm -f "$temp_commit_msg"
}

# Asegúrate de limpiar al final
trap cleanup EXIT

# 1. Prueba: Verifica que se permita un commit sin errores
echo "fix: prueba sin errores" > "$temp_commit_msg"
"$script_a_probar" "$temp_commit_msg"
if [ $? -ne 0 ]; then
    echo "Fallo en la prueba: se esperaba que el commit fuera permitido."
fi

# 2. Prueba: Verifica que se detecten errores de estilo
# Crea un archivo Python con errores de estilo
echo "import os " > test.py  # Nota el espacio después de "os"
echo "def func(): pass" >> test.py

echo "fix: prueba con errores" > "$temp_commit_msg"
"$script_a_probar" "$temp_commit_msg"
if [ $? -eq 0 ]; then
    echo "Fallo en la prueba: se esperaba que el commit fuera bloqueado por errores de estilo."
fi

# Limpia el archivo de prueba
rm -f test.py


#Configuracion GitLab 

stages:
  - test

test_script:
  image: ubuntu:latest
  stage: test
  script:
    - apt-get update
    - apt-get install -y python3-pip  # Instala pip si es necesario
    - pip3 install autopep8 pycodestyle  # Instala las dependencias necesarias
    - chmod +x test_script.sh  # Asegúrate de que el script de prueba sea ejecutable
    - ./test_script.sh  # Ejecuta el script de prueba
