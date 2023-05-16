describe("template spec", () => {
  it("Anasayfa Test", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#main-button").click();
    cy.wait(500);
  });

  it("Sipariş Sayfası", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[href="/siparis-olustur/1"] > .ürün-çeşitleri').click();
    cy.wait(2000);
    cy.get("#uyari > div").should(
      "contain.text",
      "En az 4 malzeme seçmelisiniz."
    );
    cy.wait(2000);
    cy.get(":nth-child(1) > .checkmark").click();
    cy.get(":nth-child(2) > .checkmark").click();
    cy.get(":nth-child(3) > .checkmark").click();
    cy.get(":nth-child(4) > .checkmark").click();
    cy.wait(1000);
    cy.get("textarea").type("Sipariş NOTU Deneme");
    cy.get(".toplam-ucret > :nth-child(2)").should("contain.text", "80");
    cy.get(":nth-child(1) > button").click();
    cy.wait(1000);
    cy.get(".toplam-ucret > :nth-child(2)").should("contain.text", "160");
    cy.get(":nth-child(5) > div > label > input").click();
    cy.wait(1000);
    cy.get(".toplam-ucret > :nth-child(2)").should("contain.text", "180");
    cy.wait(1000);
    cy.get("#button-siparis > button").click();
    cy.get("#onay-ürün-adi").should("contain.text", "Terminal Pizza");
    cy.get(":nth-child(1) > .onay-font-kalin").should(
      "contain.text",
      "Orta Boy (M)"
    );
    cy.get(":nth-child(2) > .onay-font-kalin").should("contain.text", "Normal");
    cy.get(".onay-font-kalin").should("have.length", 5);
    cy.get(":nth-child(4) > .onay-font-kalin").should(
      "contain.text",
      "Sipariş NOTU Deneme"
    );
    cy.get(":nth-child(5) > .onay-font-kalin").should("contain.text", "180₺");
  });
});
