import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  childName: attr('string'),
  parent: belongsTo('parent', { async: true }),
});
