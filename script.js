// Données de départ fournies. Aucun comportement n’est encore implémenté.
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];
let prochainId = 3;

// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.

const ajouter =document.getElementById("ajouter")
const listeProduits =document.getElementById("liste-produits")


ajouter.addEventListener("click", (e) =>{
  produits.forEach(produit =>{
    const produi =document.createElement("article")
    listeProduits.appendChild(produi)
    produi.classList.add("produit")

    const div =document.createElement("div")
    produit.appendChild(div)
  

    const nomProduit =document.createElement("h3")
    nomProduit.textContent=(produit.nom)
    div.appendChild(nomProduit)
    nomProduit.classList.add("nom-produit")

    const prixProduit =document.createElement("p")
    prixProduit.textContent=(produit.prix)
    div.appendChild(prixProduit)
    prixProduit.classList.add("prix-produit")

    const supprimer =document.createElement("button")
    supprimer.textContent("Retirer")
    produi.appendChild(supprimer)
    supprimer.addEventListener("click", (e) => {
      supprimerProduit(produit)
      produi.remove()
    })

    function supprimerProduit(produit){
      const index = produits.findIndex(d =>d ===produit)
      produits.splice(index,1)
    }
    

  })

})