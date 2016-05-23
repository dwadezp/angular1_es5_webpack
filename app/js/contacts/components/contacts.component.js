var angular = require('angular');

module.exports = angular
  .module('app.contacts.component', [])
  .component('contacts', {
    templateUrl: '/app/js/contacts/components/contacts.template.html',
    controller: ContactsController,
  });

function ContactsController() {
  var ctrl = this;
}

