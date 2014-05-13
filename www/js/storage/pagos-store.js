var PagosStore = function(successCallback, errorCallback) {

    this.findByName2 = function(searchKey, callback) {
		//var myfacturas=null;

		//var test=jQuery.getJSON("http://192.168.64.133:8280/misfacturas",  
		//myfacturas=JSON.stringify(data) );
		
		$.ajax({
		dataType: "json",
		url: "http://192.168.64.133:8280/misfacturas",
		crossDomain: true,
		success: function (data) {
			myfacturas=data;//JSON.stringify(data);
			//alert("MyFacturas "+myfacturas);
			//return myfacturas;
		}
		});	
//alert("exists");		
//		alert(JSON.stringify(myfacturas));
        callLater(callback,myfacturas);
    }
	
	this.findByName = function(searchKey, callback) {
        var facturas = this.listaFacturas.filter(function(element) {
		    var fullName = element.emisor;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, facturas);
    }

    this.findById = function(id, callback) {
        var facturas = this.listaFacturas;
        var factura = null;
        var l = facturas.length;
        for (var i=0; i < l; i++) {
			if (facturas[i].id === id) {
			    factura = facturas[i];
                break;
            }
        }
        callLater(callback, factura);
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

this.facturas={"id":1233212, "emisor":"Emisor Factura 1", "concepto":"Recibo de electricidad", "basei":"32,12","vat":"6%","cantidad":"34,32" };
this.listaFacturas=[{"id":1233212, "emisor":"Emisor Factura 1", "concepto":"Recibo de electricidad", "basei":"32,12","vat":"6%","cantidad":"34,32"  },
					 {"id":1234217, "emisor":"Emisor Factura 2", "concepto":"Recibo de gas", "basei":"75,54","vat":"6%","cantidad":"80,07"},
					 {"id":5657342, "emisor":"Emisor Factura 3", "concepto":"Recibo de gimnasio", "basei":"98,54","vat":"11%", "cantidad":"109,37"}];
	

			

    callLater(successCallback);

}