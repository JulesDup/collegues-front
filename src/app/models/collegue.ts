export class Collegue {

  constructor(public matricule: string, public nom: string, public prenom: string, public email: string, public dateDeNaissance: Date, public photoUrl: string) {
    this.matricule = matricule;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.dateDeNaissance = dateDeNaissance;
    this.photoUrl = photoUrl;

  }

}
