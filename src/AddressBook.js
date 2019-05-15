function AadressBook() {
      // tühi array
      this.contact = [];
      // boolean esialgse väärtusega false
      this.initialComplete = false;
}

// asünkroonne meetod getInitialContacts
AadressBook.prototype.getInitialContacts = function(cb){
      // muutuja self, et ta võtaks end AadressBooki objekti väärtuseks
      var self = this;

      setTimeout(function(){
        // asünkroonne funktsioon booleani väärtuse true-ks muutmine pärast Timeout väärtust 3
          self.initialComplete = true;
          if (cb) {
            return cb ();
          }

      }, 3);
}

// meetod mis lisab uue contacti arraysse
AadressBook.prototype.addContact = function(contact) {
      this.contacts.push(contact);
}

// meetod contacti array-st kätte saamiseks indexi abil
AadressBook.prototype.getContact = function(index){
      return this.contacts[index];
}

//meetod kontakti array-st kustutamiseks indexi järgi
AadressBook.prototype.deleteContact = function(index){
      this.contacts.splice(index, 1);
}
