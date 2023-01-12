class Autor {
    constructor(jmeno,prijmeni,datum) {
        values = [jmeno,prijmeni,datum];
    }

    getJmeno() {
        return this.jmeno;
    }
}

class Obraz {
    constructor(Autor,nazev,cena,rok) {
        values = [Autor,nazev,cena,rok];
    }
    
    getCena() {
        return this.cena;
    }
}

const obrazy = [
    new Obraz(new Autor("Bruh", "Us", new Date(1957, 7, 5)), "Electrical", 28000000, 2000),
    new Obraz(new Autor("Impos", "Tor", new Date(1765, 16, 11)), "Incredible", 25000000, 1799),
    new Obraz(new Autor("Impos", "Tor", new Date(1765, 16, 11)), "Sus", 36000000, 1806),
    new Obraz(new Autor("Bruh", "Us", new Date(1957, 7, 5)), "Lil Bro", 21000000, 1994)
];

function celCena() {
    let celCena = 0;
    obrazy.forEach(element => {
        celCena += element.getCena();
    });
}

function xD() {
    obrazy.sort((a,b) => a.getCena - b.getCena);
    let nejdrazsi = [];
    nejdrazsi.forEach(element => {
        return element.nazev + " " + element.Autor.jmeno;
    });
}

function obrazAutor(autor) {
    let obrazyAutor = [];
    if(element.Autor.jmeno == autor.jmeno && element.Autor.prijmeni == autor.prjijmeni) {
         obrazyAutor.push(element);
    }
    obrazyAutor.sort((a,b) => a.getCena - b.getCena);
    return obrazyAutor;
}

function autori() {
    let autori = [];
    
}

console.log(XD());
console.log(celCena());
