Template.signature.rendered = function() {
    // set your defaults here
    return new ViewModel('text',{
        first: '',
        last: '',
        title: '',
        company: 'Abstracta',
        www: 'http://abstracta.se',
        address: 'Box 75, Lammengatan 2',
        address2: 'SE-360 30 Lammhult Sweden',
        phone1: 'Office +46 472 26 96 00',
        phone2: 'Direct +46 472 26 96 ',
        name: function() {
          return (this.first()) + " " + (this.last());
        }
    }).bind(this);
};