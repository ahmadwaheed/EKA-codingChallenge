const retrieveLastEntry = (model) => {
  return model.forge().orderBy('created_at', 'DESC')
    .fetch()
    .then(function(lastEntry) {
      return lastEntry;
    })
    .catch(function(err) {
      return err;
    });
};

exports.retrieveLastEntry = retrieveLastEntry;

