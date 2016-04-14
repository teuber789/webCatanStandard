// DO NOT EDIT THIS FILE
var catan = catan || {};
catan.definitions = catan.definitions || {};
catan.definitions.DisplayElement = catan.definitions.DisplayElement || {};

catan.definitions.DisplayElement.PointElement = (function(){
        var DisplayElement = catan.definitions.DisplayElement;
        var Basics = DisplayElement.BasicElements;
        var getImageSource = DisplayElement.getImageSource;
        
		function PointElement(){	
			this.setImage(new Basics.StaticImage("empty","point-img"));
			this.setView(this.buildView());	
		}
			core.defineProperty(PointElement.prototype, "image");
			core.defineProperty(PointElement.prototype, "View");
		
		PointElement.prototype.buildView = function(message){
			return this.getImage();
		}
		
		PointElement.prototype.show= function(){
				this.getImage().setAttribute("src", getImageSource("visible"));
		}
		PointElement.prototype.hide= function(){
				this.getImage().setAttribute("src", getImageSource("empty"));
		}
				
       return PointElement;
			
}());

