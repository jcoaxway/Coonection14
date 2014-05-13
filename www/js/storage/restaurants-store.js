var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var restaurants = this.restaurants.filter(function(element) {
            var fullName =  element.Name;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, restaurants);
    }

    this.findById = function(id, callback) {
        var restaurants = this.restaurants;
        var restaurant = null;
        var l = restaurants.length;
        for (var i=0; i < l; i++) {
            if (restaurants[i].id === id) {
                restaurant = restaurants[i];
                break;
            }
        }
        callLater(callback, restaurant);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.restaurants = [
			{"id": 51, "Name": "Paris Club", "cuisine":"French", "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com", "lat":"23", "lon":"23"},
			{"id": 52, "Name": "Paris Club II", "cuisine":"French", "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com", "lat":"23", "lon":"23.1"}
			{"id": 53, "Name": "Paris Club III", "cuisine":"French", "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com", "lat":"23", "lon":"23.2"}
			
        ];

    callLater(successCallback);

}