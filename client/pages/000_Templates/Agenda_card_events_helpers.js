

////////* Todos Events *//////

Template.addtodosItem.events({
    /// events go here
    'submit form': function(event){
    event.preventDefault();
    var todositemName = $('[name="todositemName"]').val();
    Agenda.insert({
        todos: todositemName,
        createdAt: new Date()
    });
    $('[name="todositemName"]').val('');
}
});

Template.todosItem.events({
    // events go here
    'click .delete-todositem': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = 
            Agenda.remove({ _id: documentId });
    },

    'keyup [name=todosItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var todosItem = $(event.target).val();
        Agenda.update({ _id: documentId }, {$set: { todos: todosItem }});
        }
    },

});