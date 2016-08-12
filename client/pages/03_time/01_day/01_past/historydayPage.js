import './historyday.html';


Template.dayHistoryItem.helpers({
  dayHistory() {
    return Daily.find();  },
});