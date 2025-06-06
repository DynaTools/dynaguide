---
sidebar_position: 1
---

# Tutorial: Famiglia Revit Frattale - Sistema di Rotazione Universale

![Concetto Iniziale](./img/image.png)

<div style={{textAlign: 'center', marginBottom: '2rem'}}>

![Sistema di Rotazione Universale](./img/OrbitFamily-ezgif.com-video-to-gif-converter.gif)

</div>

## Concetto

:::info Ispirazione
Il concetto di creare una famiglia girevole a qualsiasi angolo sembrava impossibile fino a scoprire una tecnica avanzata di famiglie adattive. Questo tutorial semplifica il processo per creare una famiglia di pannello fotovoltaico che può ruotare a qualsiasi angolo.
:::

Il principio è simile a quello di una **morsa frattale**, dove ogni pezzo girevole è collegato all'altro, permettendo movimento su più assi:

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Morsa Frattale - Concetto](./img/image-1.png)

</div>

:::tip Concetto Chiave
Affinché il sistema si adatti a qualsiasi elemento, utilizziamo pezzi girevoli collegati sequenzialmente. Implementeremo questo usando il comando **Revolve** di Revit.
:::

## Parte 1: Creazione della Famiglia Perno Frattale

### 1. Creare Nuova Famiglia

<div className="steps-container">

- Aprire Revit
- Creare una nuova famiglia (**Generic Model Adaptive** o **Metric Generic Model**)
- Definire i piani di riferimento base

</div>

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Creazione Nuova Famiglia](./img/image-2.png)

</div>

### 2. Creare il Primo Revolve

<div className="steps-container">

- Disegnare il profilo per il revolve
- Utilizzare lo strumento **Revolve** per creare il primo pezzo girevole
- Configurare l'asse di rotazione

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Profilo del Revolve](./img/image-3.png)

![Configurazione del Revolve](./img/image-4.png)

![Primo Revolve](./img/image-5.png)

</div>

<div style={{textAlign: 'center', margin: '1rem 0'}}>

![Risultato Primo Revolve](./img/image-6.png)

![Visualizzazione 3D](./img/image-7.png)

</div>

### 3. Aggiungere Parametri Angolari

:::warning Importante
Creare parametri chiari per controllare la rotazione. Questo è fondamentale per il controllo parametrico del sistema.
:::

<div className="steps-container">

- Creare parametri angolari per controllare la rotazione
- Associare i parametri al revolve
- Configurare le formule necessarie

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Creazione Parametri](./img/image-8.png)

![Configurazione Parametri](./img/image-9.png)

![Associazione Parametri](./img/image-10.png)

![Test di Rotazione](./img/image-11.png)

</div>

### 4. Applicare Workplane sul Revolve

:::danger Passaggio Critico
Questo è il passaggio più importante! Il workplane applicato sulla superficie del primo revolve sarà la base per l'elemento successivo.
:::

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Applicazione Workplane](./img/image-12.png)

![Configurazione Workplane](./img/image-13.png)

![Workplane Posizionato](./img/image-14.png)

</div>

### 5. Creare Secondo Revolve in Direzione Diversa

<div className="steps-container">

- Con il workplane attivo, creare un altro revolve
- Orientare questo revolve in una direzione diversa (perpendicolare, ad esempio)
- Configurare i propri parametri angolari

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Secondo Revolve](./img/image-15.png)

![Configurazione Perpendicolare](./img/image-16.png)

![Sistema Completo](./img/image-17.png)

</div>

### 6. Configurare Relazione Tra i Revolve

<div className="steps-container">

- Stabilire la relazione parametrica tra gli elementi
- **Test**: quando uno ruota, l'altro deve seguire mantenendo il suo orientamento relativo
- Regolare i vincoli secondo necessità

</div>

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Test di Movimento](./img/image-18.png)

</div>

### 7. Salvare la Famiglia Perno

<div className="steps-container">

- Salvare questa famiglia con un nome descrittivo (es: `Perno_Frattale_Base`)
- Questa sarà la famiglia di controllo rotazionale

</div>

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>

![Salvataggio Famiglia](./img/image-19.png)

</div>

## Parte 2: Applicazione del Sistema Face-Based

### 8. Creare o Aprire Famiglia Face-Based

<div className="steps-container">

- Creare una nuova famiglia o utilizzarne una esistente (es: pannello fotovoltaico)
- Scegliere il template **Face-Based**
- Modellare l'elemento desiderato (pannello, piastra, ecc.)

</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

![Template Face-Based](./img/image-20.png)

![Pannello Modellato](./img/image-21.png)

</div>

### 9. Inserire nel Progetto

<div className="steps-container">

- Caricare entrambe le famiglie nel progetto
- Prima, inserire la famiglia perno frattale
- Configurare gli angoli iniziali

</div>

### 10. Applicare Famiglia Face-Based

:::tip Applicazione Finale
- Selezionare la famiglia face-based
- **Applicare sulla faccia dell'ultimo revolve** della famiglia perno
- La famiglia face-based ora seguirà tutta la rotazione del sistema
:::

---

## Vantaggi del Metodo

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0'}}>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>🎯 Controllo Totale</h4>
<p>Controllo completo sulla rotazione su più assi</p>
</div>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>🔧 Flessibilità</h4>
<p>Aggiungere quanti livelli di rotazione si desiderano</p>
</div>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>♻️ Riutilizzo</h4>
<p>Il perno può essere utilizzato con diversi elementi face-based</p>
</div>

<div style={{padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px'}}>
<h4>📐 Precisione</h4>
<p>Angoli esatti definiti parametricamente</p>
</div>

</div>

## Consigli Pratici

:::note Buone Pratiche
1. **Denominazione**: Utilizzare nomi chiari per i parametri (es: `Rotazione_Asse_X`, `Rotazione_Asse_Y`)
2. **Test Incrementale**: Testare ogni livello di rotazione prima di aggiungere il successivo
3. **Prestazioni**: Limitare il numero di revolve per mantenere buone prestazioni
4. **Visibilità**: Configurare la visibilità del perno per nasconderlo quando necessario
:::

## Applicazioni Pratiche

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0'}}>

- 🌞 Pannelli fotovoltaici con orientamento preciso
- 🏢 Brise-soleil regolabili  
- 🎨 Elementi di facciata dinamici
- ⚙️ Attrezzature meccaniche con più gradi di libertà
- 💡 Illuminazione direzionale

</div>

## Risultato Finale

:::success Sistema Completo
Avrete un sistema dove:
- ✅ La famiglia perno controlla tutta la rotazione
- ✅ L'elemento face-based (pannello) segue perfettamente il movimento  
- ✅ Si possono regolare angoli in più direzioni
- ✅ Il sistema è completamente parametrico e riutilizzabile
:::
