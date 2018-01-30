var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
    this.on('change', this.render);
  },
  render: function() {
    this.listenTo('change', this.render());
  }

});
