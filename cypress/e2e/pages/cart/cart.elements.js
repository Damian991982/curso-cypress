export class CartElements {
  static get buttons() {
    return {
      get placeOrder() {
        return cy.get('button[data-toggle="modal"]');
      },
    };
  }
  //  //td[text()="Nexus 6"]//ancestor::tr//a
  //   cy.contains('td', 'Samsung galaxy s6').closest('tr').find('td').find('a')
  static get links() {
    return {
      delete(productName) {
        return cy.contains("td", productName).closest("tr").find("a");
      },
    };
  }
}
