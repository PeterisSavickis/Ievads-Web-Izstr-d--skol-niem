/* Šajā failā tiek norādīta loģika, kura tiek izmantota html daļā. 

    loģika tiek saglabāta funkcijās.
    Lai izveidotu funkciju:
        1)Nepieciesams atslēgvārds function
        2) funkcijas nosaukums jeb vārds kā jūs sauksiet funkciju. Tam jābūt īsam bet pietiekoši aprakstošam, lai paši varētu saprast ko funkcija īsti dara.
        3) Iekavas () - iekavās norāda padotos mainīgos. ja mainīgo nav, iekavas atstāj tukšas. 
        3) figūriekavas {} - iekšā sajās iekavās glabā funkcijas loģiku. Visi aprēķini unloģiskās darbības notiek šeit.  
 */
function alertFunction() {
    alert('Tu nospiedi pogu!');
}

/*Šis ir vēl viens veids kā pierakstīt funkciju. Šo veido sauc par lielās bultas funkciju - big arrow function. 
  Princips ir ļoti līdzīgs kā parastai funkcijai, bet iztrūkst atslēgasvārds function. Šī ir labā prakse kā mūsdienās pieraksta funkcijas. 
  Pēc loģikas šī funkcija dara precīzi to pāsu ko funkcija alertFunction.
 */
alertFunctionAdvanced = () => {
    alert('Tu nospiedi pogu!');
}

//Funkcija, kuru var izmantot, lai pievienotu tabula papildus rindas ierakstus. 
submitForm = () => {
    //vērtība tiek iegūta refrencējot html elemetu pēc tā Id.
    // .value nodrošina ka mēs iegūstam konkrētā html elementa vērtību. Šajā gadījumā ierakstīto tekstu input formā.
    //Izsauktā html vērtība tiek saglabāta mainīgājā norādot let atslēgvārdu un mainīgā nosaukumu. 
    let vards = document.getElementById("vards").value;
    let uzvards = document.getElementById("uzvards").value;

    // Tā pat kā tika iegūti input fomras elementi vārdam un uzvārdam. Arī šajā gadījumā tabulas elements tiek iegūts pēc tā Id
    let tabula = document.getElementById("tabula");
    //Tiek izveidota tabulas rinda un saglabāta mainīgajā tabulasRinda, lai vēlāk to varētu referencēt pie informācijas ievades. 
    //iebūvētā funkcija insertRow izveido jaunu tabulas rindu. Skaitlis 1 norāda pozīciju tabulā, kur jāievieto rinda.
    //Programmēšanā skaitīšnas sistēma sākas no 0. Pirmais elements mūsu tabulā ir table header ar kolonnu nosaukumiem - vārds un uzvārds.
    //Tātad ja vēlamies ievietot rindu pēc tabulas kolonnu virsraksiem, jānorāda 2. elements, kas pēc programmēšanas skaitīšanas sistēmas ir 1.
    let tabulasRinda = tabula.insertRow(1);
    //Kā jau minēts iepriekš, programmēšanā skaitīšanas sistēma sākas no 0 
    //Ja vēlamies ievietot vērtības tabulas rindas 1. un 2. šūnā, ir jānorāda 0 un 1 elements.
    let cell1 = tabulasRinda.insertCell(0);
    let cell2 = tabulasRinda.insertCell(1);
    //tabulas šūnās padodam vērtības, kuras iepriekš bijām saglabājuši mainīgajos, kas satur informāciju ar ievadītajām vērtībām. 
    cell1.innerHTML = vards;
    cell2.innerHTML = uzvards;

    /* Loģika sai funkcijas metodei
    1) Saglabājam minīgajos ievadītās vārda un uzvārda vērtības.
    2) Saglabājam mainīgajā html tabulu.
    3) Izveidojam mainīgo priekš izvēlētās tabulas rindas.
    4) Izveidojam mainīgos priekš tabulas rindas šūnām.
    5) ievietojam šūnās ievadītās vērtības.
    */
}