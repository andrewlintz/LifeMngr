'./food.html'


///// HELPERS /////


Template.foodPage.helpers({
    eatlogEach() {
        return Agenda.find( { eatlog: {$exists: true}}, {sort: {createdAt: -1}}); },
    ingredientinventoryEach() {
        return Agenda.find( { ingredientinventory: {$exists: true}}, {sort: {createdAt: -1}}); },
    shoppinglistEach() {
        return Agenda.find( { shoppinglist: {$exists: true}}, {sort: {createdAt: -1}}); },
    menuEach() {
        return Agenda.find( { menu: {$exists: true}}, {sort: {createdAt: -1}}); },
    mealplanEach() {
        return Agenda.find( { mealplan: {$exists: true}}, {sort: {createdAt: -1}}); },

});





////////* Eatlog Events *//////


Template.addeatlogItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var eatlogitemName = $('[name="eatlogitemName"]').val();
    Agenda.insert({
        eatlog: eatlogitemName,
        createdAt: new Date()
    });
    $('[name="eatlogitemName"]').val('');
}
});

Template.eatlogItem.events({
    // events go here
    'click .delete-eatlogitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=eatlogItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var eatlogItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { eatlog: eatlogItem }});
        }
    },
});




////////* Ingredientinventory Events *//////


Template.addingredientinventoryItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var ingredientinventoryitemName = $('[name="ingredientinventoryitemName"]').val();
    Agenda.insert({
        ingredientinventory: ingredientinventoryitemName,
        createdAt: new Date()
    });
    $('[name="ingredientinventoryitemName"]').val('');
}
});

Template.ingredientinventoryItem.events({
    // events go here
    'click .delete-ingredientinventoryitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=ingredientinventoryItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var ingredientinventoryItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { ingredientinventory: ingredientinventoryItem }});
        }
    },
});




////////* Shoppinglist Events *//////


Template.addshoppinglistItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var shoppinglistitemName = $('[name="shoppinglistitemName"]').val();
    Agenda.insert({
        shoppinglist: shoppinglistitemName,
        createdAt: new Date()
    });
    $('[name="shoppinglistitemName"]').val('');
}
});

Template.shoppinglistItem.events({
    // events go here
    'click .delete-shoppinglistitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=shoppinglistItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var shoppinglistItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { shoppinglist: shoppinglistItem }});
        }
    },
});




////////* Menu Events *//////


Template.addmenuItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var menuitemName = $('[name="menuitemName"]').val();
    Agenda.insert({
        menu: menuitemName,
        createdAt: new Date()
    });
    $('[name="menuitemName"]').val('');
}
});

Template.menuItem.events({
    // events go here
    'click .delete-menuitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=menuItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var menuItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { menu: menuItem }});
        }
    },
});




////////* Mealplan Events *//////


Template.addmealplanItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var mealplanitemName = $('[name="mealplanitemName"]').val();
    Agenda.insert({
        mealplan: mealplanitemName,
        createdAt: new Date()
    });
    $('[name="mealplanitemName"]').val('');
}
});

Template.mealplanItem.events({
    // events go here
    'click .delete-mealplanitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=mealplanItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var mealplanItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { mealplan: mealplanItem }});
        }
    },
});
