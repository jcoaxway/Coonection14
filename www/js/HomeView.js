var HomeView = function(store) {

	this.findByName = function() {
    store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(HomeView.liTemplate(employees));
        if (self.iscroll) {
            console.log('Refresh iScroll');
            self.iscroll.refresh();
        } else {
            console.log('New iScroll');
            self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
        }
    });
	},
	
	this.findByName2= function() {
		store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(HomeView.liTemplate(employees));
    });
	},
	
	this.render = function() {
		this.el.html(HomeView.template());
		return this;
	},
 
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);

    };
 
    this.initialize();
 
}
 
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());
