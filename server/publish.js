if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('agenda', function agendaPublication() {
    return Agenda.find({
        $or: [
            { private: { $ne: true } },
            { owner: this.userId },
      ],
    });
  });
}