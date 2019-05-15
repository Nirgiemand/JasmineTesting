// sellel testsuitel Aadress Book toimuvad testid
describe('Aadress Book', function() {
  // muutujate defineerimine
  var AadressBook,
      thisContact;

  beforeEach(function(){
    // muutujatele objektide andmine, et ei peaks igas testis(it) seda tegema
        aadressBook = new AadressBook(),
        thisContact = new Contact();
  });
  // mida test/funktsioon tegema peaks
  it('should be able to add a contact', function() {
    // muutujate defineerimine
    //  var aadressBook = new AadressBook(),
      //    thisContact = new Contact();

      // Lisame kontakti "thisContact" array-sse
      addressBook.addContact(thisContact);
      // eeldame array positsioonil 0 on thisContact
      expect(aadressBook.getContact(0)).toBe(thisContact);
  });
  // mida test/funktsioon tegema peaks
  it('should be able to delete a contact', function() {
    // kasutame meetodit addContact, et uus contact
      aadressBook.addContact(thisContact);
      // kustutame array liikme indexi 0 järgi
      aadressBook.deleteContact(0);

      // eeldame, et ei leia enam äsja kustutatud kontakti
      expect(aadressBook.getContact(0)).not.toBeDefined();
  });
});

// testsuite Async Aadress Book hakkavad testid toimuma
describe('Async Aadress Book', function(){
  // muutujale objekti andmine
  var AadressBook = new AadressBook();

  beforeEach(function(done) {
      aadressBook.getInitialContacts(function() {
        // lõpetab asünkroonse funktsiooni, et test saaks edasi minna
          done();
      });
  });
  // mida asünkroonne funktsioon tegema peaks ehk initsiaalid leidma
  it('should grab initial contacts', function(){
      // eeldame, et pärast meetodi kasutamist on muutuja väärtus muutunud true-ks
      expect(aadressBook.initialComplete).toBe(true);
      // funktsioon lõpetab töö
      done();
  });
});
