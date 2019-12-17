async function functionloader(){
        HelpDesk();
        await sleep(200);
        datum();
        await sleep(200);
        modem();
        await sleep(200);
        klacht();
        await sleep(200);
        nu();
        await sleep(200);
        reload();
        await sleep(200);
        bellen();
        await sleep(200);
        mobiel();
        await sleep(200);
        ibtv();
        await sleep(200);
        aantal();
        await sleep(200);
        splitter();
        await sleep(200);
        box();
        await sleep(200);
        zenders();
        await sleep(200);
        sleep();
        await sleep(200);
        einde();
        await sleep(200);

}
//global scope
let = name;
let = datum;
let = modem;
let = klacht;
let = nu;
let = reload;
let = bellen
let = mobiel
let = ibtv
let = splitter
let = zenders

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function write(text){
  document.body.innerHTML += text;
  }
  
async function HelpDesk() {
    

    name = prompt("wat is uw naam?");
    //loop om antwoord te forceren
    while (name == ""){
        name = prompt ("Wat is uw naam")
    }
    write(" <h1> <br> Klant naam is  " +  name + "</h1>");
    
    
}

async function datum() {


    datum = prompt("Wat is de datum");
    while (datum == ""){
        datum = prompt ("Wat is uw naam")
    }
    write("<br> De datum is:" + datum);
    
}



async function modem() {
    

    modem = prompt("Wat is het type en merk van uw modem?");
    while(modem == ""){
        modem = prompt("Wat is het type en merk van uw modem?")
    }
    write("<br> Het merk en type van de modem is: " + modem);
    write("<br> <br> <h2>Internet.</h2>");
    
}
//ínternet//
async function klacht() {
    

    klacht = confirm("Heeft u klachten over ons product  'internet' ? ");
    
    if(klacht == true){
        write("<br> <ul><li> Klant meld problemen met internet.</li></ul>");
    }else{
        write("<br> <ul><li> Klant meld geen probleem met internet.</li></ul>");
    }


}
async function nu() {
    

    nu = confirm("Kunt u naar www.nu.nl?")
   
    if (nu == true) {
        write("<br> <ul><li>Browsen naar www.nu.nl lukt: </li></ul>" );
    }else {
        write("<br> <ul><li> U kunt niet browsen naar www.nu.nl </li></ul>");
    }
}
async function reload() {
    

    reload = confirm("Reageert de pagina snel op F5?");

    if (reload == true && nu == true) {
        write("<br> <br> <ul><li>U kunt browsen en de pagina laad snel.</li></ul> " );
    }else {
        write("<br> <ul><li>U kunt niet browsen en de pagina laad langzaam of niet.</li></ul>" );
        write('<a href="../html/internet.html">Internet problemen</a>');
    } 
        write("<br> <br> <h2>Klant meld problemen met Internet en Bellen: </h2>" );

// Internet en bellen
}
async function bellen(){
    

    bellen  = confirm(" Hoort u een kiestoon?");
   
    if (bellen == true){
    write("<br>  <ul><li>De klant hoort een kiestoon</li></ul>");
    }else {
    write("<br> <ul><li> De klant hoort geen kiestoon</li></ul>");
    write('<a href="../html/kiestoon.html">Kiestoon problemen</a>');
    }
}

async function mobiel() {
    

    mobiel = confirm("Kunt u met uw mobiel het nummer bellen waar u een klacht over heeft? :" );
    
    if (mobiel == true){
        write("<br> <ul><li> De klant kan bellen naar het gevraagde nummer </li></ul>");
    }else{
        write("<br <ul><li> De klant kan niet bellen naar het gevraagde nummer </li></ul>");
        write('<a href="../html/bellen.html">Oplossing bellen </a>');
    }
        write("<br> <br> <h2>Internet, Bellen en Televisie</h2>");
}

// internet bellen en tv
async function ibtv () {
    

    ibtv = confirm("Heeft u een klacht over ons product: Internet, Bellen en Televisie?" );

    if(ibtv == true){
        write("<br> <ul><li>De klant heeft problemen met de Producten Internet, Bellen en Televisie</li></ul>");
        
    }else{
        write("<br> <ul><li>De klant heeft geen problemen met de producten: Internet, Bellen, Televisie</li></ul>");
    }
}

async function aantal() {
    let = aantal

    aantal = prompt("Hoeveel televisie toestellen heeft u?" );
    while(aantal == ""){
        aantal = prompt("Hoeveel televisie toestellen heeft u?")
    }
    
    write("<br> <ul><li>de klant heeft " + aantal + " toestellen</li></ul>");
}

async function splitter() {
    

    splitter = confirm("Is uw splitter goed aangesloten?");

    if(splitter == true){
        write("<br> <ul><li>De splitter is goed aangesloten</li></ul>");
    }else
        write("<br> <ul><li>De splitter is niet goed aangesloten</li></ul>");
        write('<a href="../html/splitter.html">Splitter problemen</a>');
   
}

async function box() {
    let  = box 

    box = confirm("Is uw settopbox goed aangesloten?");

    if (box == true){
        write("<br> <ul><li>De settopbox is goed aangesloten.</li></ul>");
    }else{
        write("<br> <ul><li>De settopbox is niet goed aangesloten. </li></ul>");
        write('<a href="../html/settopbox.html">Settopbox problemen</a>');
    }
}

async function zenders() {
    

    zenders = confirm("Worden de zenders gevonden?");

    if(zenders == true){
        write("<br> <ul><li>De zenders worden gevonden.</li></ul>");
    }else{
        write("<br> <ul><li>De zenders worden niet gevonden.</li></ul>");
        write('<a href="../html/ibtv.html">TV problemen</a>');
    }
    // async function einde() {

    //     write("<h3> Eindresultaat</h3>")
        
    //       if (klacht == true || ibtv == true) {
    //         write("<br><br>U heeft klachten gemeld op:  "+date+ "Uw modem:  " + modem + "    werkt niet goed.");
    //       }
    //       if(klacht==false&& ibtv==false){
    //         write("<br><br>U heeft geen klachten gemeld op:    "+date+ "<br>Uw modem:  " + modem + "   werkt goed.");
    //       }
    //     }        
}
