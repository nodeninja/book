/**
 * 8+ = 3 place terms
 * 5-7 = 2 place terms
 * <5 = 0
 * NSW - blue
 * VIC - red
 * QLD - green
 * SA - purple
 * WA - black
 */
(function ($) {

    var PlaceTerm = Backbone.Model.extend({

        defaults:{
            done: false,
            toggled: false
        },

        toggle: function() {
            if (this.get('toggled')) {
                // console.log('setting false');
                this.set({toggled: false});
            }
            else {
                //console.log('setting true');
                this.set({toggled: true});
            }
            // console.log('tog');
        }
    });

    // Collection of place terms
    var PlaceTermList = Backbone.Collection.extend({
        model:PlaceTerm,

        url: '/terms',

        // Filter down the list of all place terms that pay two or less
        twoOrLess: function() {

            var lowTerms = this.filter(function(placeTerm){
                // console.log(placeTerm.toJSON());
                return placeTerm.toJSON().placeTerms == 3;
            });
            // console.log(lowTerms);
            return lowTerms;
        }

    });

    // Individual row view
    var PlaceTermView = Backbone.View.extend({

        tagName:'tr',

        placeTermTemplate: _.template($('#placeterm-template').html()),

        events:{
            'click span.swap':'swap',
            'click span.delete':'remove',
            'click input.toggleItem': 'done'

        },

        initialize:function () {

            var viewModel = this.model;
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.model.bind('remove', this.unrender);
            this.model.on("change:toggled", this.toggle, this);
            //this.model.bind('toggled', this.toggle);

        },

        render:function () {

            // console.log(this.model);

            $(this.el).html(this.placeTermTemplate(this.model.toJSON()));
            //  $(this.el).html('hello');
            return this; // for chainable calls, like .render().el

        },

        // `unrender()`: Makes Model remove itself from the DOM.
        unrender:function () {
            $(this.el).remove();
        },
        // `swap()` will interchange an `Item`'s attributes. When the `.set()` model function is called, the event `change` will be triggered.
        swap:function () {
            var swapped = {
                date:this.model.get('time'),
                time:this.model.get('date')
            };
            this.model.set(swapped);
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
                //  $(this.el).addClass('btn');
                // console.log($(this.el));
            }
            else {
                // console.log('false');
                $(this.el).show();

                //  $(this.el).html('bye');
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