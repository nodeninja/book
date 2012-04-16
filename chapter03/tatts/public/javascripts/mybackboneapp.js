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
                return placeTerm.toJSON().places <= 3;
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
            this.model.on("change:toggled", this.toggle, this);

        },

        render:function () {
            $(this.el).html(this.raceInfoTemplate(this.model.toJSON()));
            return this; // for chainable calls, like .render().el

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

    // Our main app view.
    var RaceAppView = Backbone.View.extend({

        el:$('body'), // attaches `this.el` to an existing element.

        events:{
            'click input.togglePlaceTerms': 'togglePlaceTerms'
        },

        initialize:function () {

            // fixes loss of context for 'this' within methods
            _.bindAll(this, 'render', 'appendItem'); 

            window.raceInfoList = new RaceInfoList;
            var self = this;
            raceInfoList.fetch({
                success: function() {
                    self.render(); 
                },

                error: function() {
                    console.log('error');
                }
            });


        },

        render:function () {
            _(raceInfoList.models).each(function (item) { 
                this.appendItem(item);
            }, this);

        },

        appendItem:function (item) {
            var itemView = new RaceInfoView({model:item});
            $('thead').append(itemView.render().el);
        },

        togglePlaceTerms:function () {
            _.each(raceInfoList.threeOrLess(), function(raceInfo) {
                raceInfo.toggle();
            });
        }
    });

    // Instantiate main app view.
    var view = new RaceAppView();
})(jQuery);