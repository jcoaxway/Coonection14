var HomeView = function(store) {

	this.findByName: function() {
		store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(HomeView.liTemplate(employees));
		
    });
	},
	
	this.render: function() {
			alert("tet");
		this.el.html(HomeView.template());
		return this;
	},
 
    this.initialize = function() {
			alert("tet");
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);

    };
 
    this.initialize();
 
}
 
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());