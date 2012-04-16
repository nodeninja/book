(function ($) {

    var RaceInfo = Backbone.Model.extend({
        defaults:{
            done: false,
            toggled: false
        },

        toggle: function() {
            if (this.get('toggled')) {
                this.set({toggled: false});
            }
            else {
                this.set({toggled: true});
            }
        }
    });

    // Collection of models
    var RaceInfoList = Backbone.Collection.extend({
        model:RaceInfo,

        url: '/api/raceinfo',

        // Filter down the list of all place terms that pay three or less
        threeOrLess: function() {

            var lowTerms = this.filter(function(placeTerm){
                return placeTerm.toJSON().placeTerms == 3;
            });
            return lowTerms;
        }

    });

    // Individual row view
    var RaceInfoView = Backbone.View.extend({

        tagName:'tr',

        raceInfoTemplate: _.template($('#raceInfo-template').html()),

        events:{
            'click input.toggleItem': 'done'

        },

        initialize:function () {

            var viewModel = this.model;
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.model.bind('remove', this.unrender);
            this.model.on("change:toggled", this.toggle, this);

        },

        render:function () {
            $(this.el).html(this.placeTermTemplate(this.model.toJSON()));
            return this; // for chainable calls, like .render().el

        },

        // `unrender()`: Makes Model remove itself from the DOM.
        unrender:function () {
            $(this.el).remove();
        },

        // `remove()`: We use the method `destroy()` to remove a model from its collection. Normally this would also delete the record from its persistent storage, but we have overridden that (see above).
        remove:function () {
            alert('destroying');
            this.model.destroy();
        },

        done: function() {
            $(this.el).fadeOut();
        },

        toggle: function() {


            if (this.model.toJSON().toggled) {
                $(this.el).hide();
            }
            else {
                $(this.el).show();
            }
        }

    });

    // **ListView class**: Our main app view.
    var ListView = Backbone.View.extend({

        el:$('body'), // attaches `this.el` to an existing element.

        events:{
            'click input.togglePlaceTerms': 'togglePlaceTerms'
        },

        // `initialize()`: Automatically called upon instantiation.
        // Where you make all types of bindings, _excluding_ UI events, such as clicks, etc.
        initialize:function () {

            _.bindAll(this, 'render', 'appendItem'); // fixes loss of context for 'this' within methods

            window.placeTermList = new PlaceTermList;
            var self = this;
            placeTermList.fetch({
                success: function() {
                    self.render(); // not all views are self-rendering. This one is.
                },

                error: function() {
                    console.log('error');
                }
            });


        },

        // `render()`: Function in charge of rendering the entire view in `this.el`.
        // Needs to be manually called by the user.
        render:function () {
            var self = this;
            //$('body').append("<button id='add'>Add list item</button>");
            _(placeTermList.models).each(function (item) { // in case collection is not empty
                self.appendItem(item);
            }, this);

        },

        appendItem:function (item) {
            var itemView = new PlaceTermView({model:item});
            $('thead').append(itemView.render().el);
        },

        togglePlaceTerms:function () {
            console.log('toggling');
            _.each(placeTermList.twoOrLess(), function(placeTerm) {
                placeTerm.toggle();
            });
        }
    });

    // **listView instance**: Instantiate main app view.
    var listView = new ListView();
})(jQuery);