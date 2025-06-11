---
sidebar_position: 3
---

# Shared Parameter Builder – One‑Page Guide

> Quickly create Revit Shared Parameters from Excel using the Dynamo graph.
> Everything you need – instructions, blank template, sample data and Forge IDs – in one place.

![Dynamo Script Overview](./img/shared-parameter-builder/dynamo-script-overview.png)

---

## 🔧 Como Funciona o Script Dynamo

:::info Para Iniciantes
Este script automatiza a criação de Shared Parameters no Revit lendo dados do Excel. Não se preocupe se você é novo no Dynamo - vamos explicar cada passo!
:::

### Fluxo do Script (da esquerda para direita)

![Dynamo Node Flow](./img/shared-parameter-builder/dynamo-script-overview.png)

#### 1️⃣ **Entrada de Dados (File Path)**
- **O que faz**: Localiza o arquivo Excel com seus parâmetros
- **Para você**: Cole o caminho completo do seu arquivo Excel aqui
- **Exemplo**: `C:\Users\SeuNome\Desktop\MeusParametros.xlsx`

#### 2️⃣ **Leitura do Excel (Data.ImportExcel)**
- **O que faz**: Lê todas as linhas e colunas do Excel
- **Importante**: Os dados saem como **texto simples** (strings)
- **Por que isso importa**: O Revit precisa de códigos específicos, não texto comum

#### 3️⃣ **Conversão de Dados (List.Deconstruct + List.Transpose)**
- **O que faz**: Separa cada coluna do Excel em listas individuais
- **Para você**: Não precisa mexer aqui - funciona automaticamente
- **Resultado**: 6 listas separadas (uma para cada coluna)

#### 4️⃣ **Conversão Forge (Nodes TypeId)**
- **O que faz**: Converte texto do Excel em códigos que o Revit entende
- **SpecType.ByTypeId**: Converte tipos de dados (texto, número, etc.)
- **GroupType.ByTypeId**: Converte grupos de propriedades
- **Category.ByName**: Converte nomes de categorias

:::warning Por que Precisamos do Forge?
O Excel armazena tudo como texto, mas o Revit precisa de identificadores específicos. Por exemplo:
- Excel: `"autodesk.spec:spec.string-2.0.0"` (texto)
- Revit: `SpecTypeId` (objeto específico)

O Forge faz essa "tradução" automática!
:::

#### 5️⃣ **Criação dos Parâmetros (Parameter.CreateSharedParameter)**
- **O que faz**: Finalmente cria os Shared Parameters no Revit
- **Recebe**: Todos os dados convertidos dos passos anteriores
- **Resultado**: Parâmetros aparecem no seu projeto Revit

### Principais Nodes Explicados

| Node | Função | Por que é Importante |
|------|--------|---------------------|
| `Data.ImportExcel` | Lê arquivo Excel | Entrada de dados do usuário |
| `List.Deconstruct` | Separa colunas | Organiza dados para processamento |
| `List.Transpose` | Reorganiza listas | Prepara dados na ordem correta |
| `SpecType.ByTypeId` | Converte tipo de dado | Revit entende o formato do parâmetro |
| `GroupType.ByTypeId` | Converte grupo | Revit sabe onde mostrar o parâmetro |
| `Category.ByName` | Converte categoria | Revit sabe em quais objetos aplicar |
| `Parameter.CreateSharedParameter` | Cria parâmetro | Resultado final no Revit |

---

## ① Quick Start

1. **Copy** the **Blank Template** (section ③) into a new Excel sheet.
2. **Fill** the rows with your parameters. Use the **Forge ID Cheat‑Sheet** (section ⑤) to copy valid *groupType* and *specType* values.
3. **Save** the file and point the **File Path** node in Dynamo to it.
4. Press **Run** – your Shared Parameters will appear in Revit.

---

## ② Column Definitions

| Column              | Purpose                                                     |
| ------------------- | ----------------------------------------------------------- |
| **parameter\_Name** | Exact name of the new Shared Parameter.                     |
| **category**        | Target Revit category (single or several separated by `;`). |
| **groupName**       | Folder name shown in the Properties palette.                |
| **instance/Type**   | `TRUE` → Instance   `FALSE` → Type                          |
| **grouptype**       | Copy one string from *GroupTypeId* list.                    |
| **spectype**        | Copy one string from *SpecTypeId* list.                     |

---

## ③ Blank Template   *copy ↓ into Excel*

```text
parameter_Name	category	groupName	instance/Type	grouptype	spectype
```

---

## ④ Worked Example   *paste ready‑to‑run*

```text
parameter_Name	category	groupName	instance/Type	grouptype	spectype
SRE_ELEVATOR_TYPE	Specialty Equipment	Specialty Equipment_SRE	FALSE	autodesk.parameter.group:identityData-1.0.0	autodesk.spec:spec.string-2.0.0
SRE_ELEVATOR_DRIVE_TYPE	Specialty Equipment	Specialty Equipment_SRE	FALSE	autodesk.parameter.group:identityData-1.0.0	autodesk.spec:spec.string-2.0.0
SRE_ELEVATOR_STOPS	Specialty Equipment	Specialty Equipment_SRE	TRUE	autodesk.parameter.group:identityData-1.0.0	autodesk.spec.aec:number-2.0.0
SRE_ELEVATOR_DOORS	Specialty Equipment	Specialty Equipment_SRE	TRUE	autodesk.parameter.group:identityData-1.0.0	autodesk.spec.aec:number-2.0.0
SRE_ELEVATOR_LOAD	Specialty Equipment	Specialty Equipment_SRE	FALSE	autodesk.parameter.group:identityData-1.0.0	autodesk.spec.aec:number-2.0.0
```

---

## ⑤ Forge ID Cheat‑Sheet

<details>
<summary><strong>GroupTypeIds</strong></summary>

```text
autodesk.parameter.group:identityData-1.0.0
autodesk.parameter.group:dimensions-1.0.0
autodesk.parameter.group:constraints-1.0.0
autodesk.parameter.group:electrical-1.0.0
autodesk.parameter.group:mechanical-1.0.0
autodesk.parameter.group:mechanicalAirflow-1.0.0
autodesk.parameter.group:ifc-1.0.0
autodesk.parameter.group:materials-1.0.0
```

</details>

<details>
<summary><strong>SpecTypeIds – Electrical & General (excerpt)</strong></summary>

```text
autodesk.spec.aec.electrical:apparentPower-2.0.0
autodesk.spec.aec.electrical:apparentPowerDensity-1.0.0
autodesk.spec.aec.electrical:cableTraySize-2.0.0
autodesk.spec.aec.electrical:colorTemperature-2.0.0
autodesk.spec.aec.electrical:current-2.0.0
autodesk.spec.aec.electrical:demandFactor-2.0.0
autodesk.spec.aec.electrical:frequency-2.0.0
autodesk.spec.aec.electrical:illuminance-2.0.0
autodesk.spec.aec.electrical:luminousFlux-2.0.0
autodesk.spec.aec.electrical:power-2.0.0
autodesk.spec.aec.electrical:powerDensity-2.0.0
autodesk.spec.aec:number-2.0.0
autodesk.spec:spec.string-2.0.0
autodesk.spec:spec.bool-1.0.0
```

*(scroll for the full list)*

</details>

<details>
<summary><strong>Full SpecTypeId List (HVAC, Piping, Structural, …)</strong></summary>

```text
autodesk.spec.aec.energy:energy-2.0.0
autodesk.spec.aec.energy:heatCapacityPerArea-2.0.0
autodesk.spec.aec.energy:heatTransferCoefficient-2.0.0
autodesk.spec.aec.energy:isothermalMoistureCapacity-2.0.0
autodesk.spec.aec.energy:thermalConductivity-2.0.0
autodesk.spec.aec.hvac:airFlow-2.0.0
autodesk.spec.aec.hvac:coolingLoad-2.0.0
autodesk.spec.aec.piping:pipeSize-2.0.0
autodesk.spec.aec.structural:force-2.0.0
autodesk.spec.aec:volume-2.0.0
autodesk.spec.reference:image-1.0.0
```

</details>

---

---

### Need help?

* Check in‑line comments inside the Dynamo graph for node‑by‑node explanations.
* Forge documentation: **Revit API → ForgeTypeId**.
* Contact **Paulo Giavoni – BIM Specialist** for assistance.

---

## 🚀 Dicas para Iniciantes

### ✅ Checklist Antes de Rodar
- [ ] Arquivo Excel salvo e fechado
- [ ] Caminho do arquivo correto no node "File Path"
- [ ] Dados preenchidos seguindo exatamente o template
- [ ] Revit aberto com um projeto ativo

### ⚠️ Erros Comuns
1. **"Cannot find file"**: Verifique se o caminho está correto
2. **"Invalid SpecType"**: Use exatamente os códigos da lista Forge
3. **"Parameter already exists"**: O parâmetro já foi criado antes
4. **"Invalid Category"**: Nome da categoria deve estar em inglês

### 💡 Dicas Avançadas
- **Múltiplas categorias**: Separe com `;` (ex: "Walls;Doors;Windows")
- **Backup**: Sempre faça backup do projeto antes de rodar
- **Teste pequeno**: Comece com 1-2 parâmetros para testar
- **Nomes únicos**: Use prefixos para evitar conflitos (ex: "SRE_", "MEP_")

---

*Version 1.0 • Last updated: June 11, 2025*
