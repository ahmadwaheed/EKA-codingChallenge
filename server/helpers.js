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

const retrieveLastUserNameId = (model) => {
  var fetchLastUserNameRow = retrieveLastEntry(model);

  return fetchLastUserNameRow.then((result) => {
    return result.attributes.id;
  })
  .catch((error) => {
    return error;
  });
}






exports.retrieveLastEntry = retrieveLastEntry;
exports. retrieveLastUserNameId = retrieveLastUserNameId;

