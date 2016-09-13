'./money.html'


///// HELPERS /////


Template.moneyPage.helpers({
  agenda() {
    return Agenda.find({}, {sort: {createdAt: -1}});  },
});






////////* Networth Events *//////


Template.addnetworthItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var networthitemName = $('[name="networthitemName"]').val();
    Agenda.insert({
        networth: networthitemName,
        createdAt: new Date()
    });
    $('[name="networthitemName"]').val('');
}
});

Template.networthItem.events({
    // events go here
    'click .delete-networthitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=networthItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var networthItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { networth: networthItem }});
        }
    },
});

////////* FIRE Events *//////




Template.addfireItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var fireitemName = $('[name="fireitemName"]').val();
    Agenda.insert({
        fire: fireitemName,
        createdAt: new Date()
    });
    $('[name="fireitemName"]').val('');
}
});

Template.fireItem.events({
    // events go here
    'click .delete-fireitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=fireItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var fireItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { fire: fireItem }});
        }
    },
});


////////* Earnings Events *//////


Template.addearningsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var earningsitemName = $('[name="earningsitemName"]').val();
    Agenda.insert({
        earnings: earningsitemName,
        createdAt: new Date()
    });
    $('[name="earningsitemName"]').val('');
}
});

Template.earningsItem.events({
    // events go here
    'click .delete-earningsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=earningsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var earningsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { earnings: earningsItem }});
        }
    },
});


////////* Spending Events *//////


Template.addspendingItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var spendingitemName = $('[name="spendingitemName"]').val();
    Agenda.insert({
        spending: spendingitemName,
        createdAt: new Date()
    });
    $('[name="spendingitemName"]').val('');
}
});

Template.spendingItem.events({
    // events go here
    'click .delete-spendingitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=spendingItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var spendingItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { spending: spendingItem }});
        }
    },
});


////////* Assets Events *//////




Template.addassetsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var assetsitemName = $('[name="assetsitemName"]').val();
    Agenda.insert({
        assets: assetsitemName,
        createdAt: new Date()
    });
    $('[name="assetsitemName"]').val('');
}
});

Template.assetsItem.events({
    // events go here
    'click .delete-assetsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=assetsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var assetsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { assets: assetsItem }});
        }
    },
});


////////* Borrow Events *//////




Template.addborrowItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var borrowitemName = $('[name="borrowitemName"]').val();
    Agenda.insert({
        borrow: borrowitemName,
        createdAt: new Date()
    });
    $('[name="borrowitemName"]').val('');
}
});

Template.borrowItem.events({
    // events go here
    'click .delete-borrowitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=borrowItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var borrowItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { borrow: borrowItem }});
        }
    },
});




////////* Savings Events *//////




Template.addsavingsItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var savingsitemName = $('[name="savingsitemName"]').val();
    Agenda.insert({
        savings: savingsitemName,
        createdAt: new Date()
    });
    $('[name="savingsitemName"]').val('');
}
});

Template.savingsItem.events({
    // events go here
    'click .delete-savingsitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=savingsItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var savingsItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { savings: savingsItem }});
        }
    },
});


////////* Run Rate Events *//////




Template.addrunItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var runitemName = $('[name="runitemName"]').val();
    Agenda.insert({
        run: runitemName,
        createdAt: new Date()
    });
    $('[name="runitemName"]').val('');
}
});

Template.runItem.events({
    // events go here
    'click .delete-runitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=runItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var runItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { run: runItem }});
        }
    },
});


////////* Debttoequity Events *//////




Template.adddebttoequityItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var debttoequityitemName = $('[name="debttoequityitemName"]').val();
    Agenda.insert({
        debttoequity: debttoequityitemName,
        createdAt: new Date()
    });
    $('[name="debttoequityitemName"]').val('');
}
});

Template.debttoequityItem.events({
    // events go here
    'click .delete-debttoequityitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=debttoequityItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var debttoequityItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { debttoequity: debttoequityItem }});
        }
    },
});


////////* Budget Events *//////




Template.addbudgetItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var budgetitemName = $('[name="budgetitemName"]').val();
    Agenda.insert({
        budget: budgetitemName,
        createdAt: new Date()
    });
    $('[name="budgetitemName"]').val('');
}
});

Template.budgetItem.events({
    // events go here
    'click .delete-budgetitem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=budgetItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var budgetItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { budget: budgetItem }});
        }
    },
});





