describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    })
  });

  it('Image and sound change when party horn radio button selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes when increasing volume', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider').invoke('val', 60).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider').invoke('val', 70).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');
    });
  });

  it('Honk button disabled when textbox input is invalid', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').should('be.disabled');
    cy.get('#volume-number').clear().type('AAA');
    cy.get('#honk-btn').should('be.disabled');
  });

  it("Error should be shown when number typed is outside of range", () => {
    cy.get('#volume-number').clear().type(150);
    cy.get('input:invalid').should('have.length', 1);
  });
});
