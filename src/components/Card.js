export class Card {
  build() {
    const card = document.createElement("article");
    card.classList.add("docs");
    card.innerText = "Bonjour les gens !";
    document.body.appendChild(card);
  }
}
