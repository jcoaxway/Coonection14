var FacturaView = function(invoice) {
 
	this.render = function() {
		this.el.html(FacturaView.template(invoice));
		return this;
	};
	
    this.initialize = function() {
        this.el = $('<div/>');
    };
 
    this.initialize();
 
 }
 
FacturaView.template = Handlebars.compile($("#employee-tpl").html());