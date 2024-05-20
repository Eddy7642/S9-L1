// Definiamo l'interfaccia Smartphone
interface Smartphone {
    credito: number;
    numeroChiamate: number;
    
    ricarica(importo: number): void;
    chiamata(minuti: number): void;
    chiama404(): number;
    azzeraChiamate(): void;
}

// Classe User che implementa l'interfaccia Smartphone
class User implements Smartphone {
    credito: number;
    numeroChiamate: number;
    nome: string;
    cognome: string;

    constructor(nome: string, cognome: string, credito: number = 0, numeroChiamate: number = 0) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }

    ricarica(importo: number): void {
        this.credito += importo;
    }

    chiamata(minuti: number): void {
        const costoChiamata = 0.20 * minuti;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    chiama404(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

// Esempio di utilizzo della classe User
const utente1 = new User("Mario", "Rossi");
const utente2 = new User("Luca", "Bianchi", 10);

utente1.ricarica(5);
utente1.chiamata(10); // Effettua una chiamata di 10 minuti
console.log(`Credito residuo di ${utente1.nome} ${utente1.cognome}: ${utente1.credito}€`);
console.log(`Minuti di chiamata effettuati da ${utente1.nome} ${utente1.cognome}: ${utente1.chiama404()}`);

utente2.chiamata(20); // Effettua una chiamata di 20 minuti
console.log(`Credito residuo di ${utente2.nome} ${utente2.cognome}: ${utente2.credito}€`);
console.log(`Minuti di chiamata effettuati da ${utente2.nome} ${utente2.cognome}: ${utente2.chiama404()}`);

utente2.azzeraChiamate(); // Azzera i minuti di chiamata
console.log(`Minuti di chiamata dopo l'azzeramento: ${utente2.chiama404()}`);
