import clr
clr.AddReference('ProtoGeometry')
from Autodesk.DesignScript.Geometry import *

import datetime

# Coleta a hora atual
hora_atual = IN[0]  # Entrada do nó "DateTime.Now"
multiplicador_divisor = IN[1]  # Entrada do valor de multiplicação/divisão (Slider)

# Extrair o valor dos segundos atuais
segundos = hora_atual.Second

# Função para multiplicar e dividir os segundos
def processar_segundos(segundos, valor):
    multiplicado = segundos * valor
    dividido = segundos / valor if valor != 0 else None  # Evitar divisão por zero
    return multiplicado, dividido

# Processa os segundos
resultado_multiplicado, resultado_dividido = processar_segundos(segundos, multiplicador_divisor)

# Assign your output to the OUT variable
OUT = resultado_multiplicado
