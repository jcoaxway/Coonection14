var ConnectionsView = function(store) {

	this.findByName = function() {
		store.findByName($('.search-key').val(), function(employees) {
		
        $('.employee-list').html(ConnectionsView.liTemplate(employees));
        if (self.iscroll) {
            console.log('Refresh iScroll');
            self.iscroll.refresh();
        } else {
            console.log('New iScroll');
            self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
        }
    });
	},
	
	
	this.render = function() {
		this.el.html(ConnectionsView.template());
		return this;
	},
 
    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);

    };
 
    this.initialize();
 
}
 
ConnectionsView.template = Handlebars.compile($("#home-tpl").html());
ConnectionsView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());
