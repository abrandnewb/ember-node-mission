import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
  datePublished: DS.attr('string'),
  postImage: DS.attr('string'),
  author: DS.belongsTo('user')
});
