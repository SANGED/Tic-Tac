		function date_diff_indays(date2) {
		    var today = new Date();
		    var dd = today.getDate();
		    var mm = today.getMonth()+1; //January is 0!
		    var yyyy = today.getFullYear();

		    if(dd<10) { dd = '0'+dd } 

		    if(mm<10) {  mm = '0'+mm } 
		    
		    dt1 =(tictac_options[0]=='fr') ? new Date(dd + '/' + mm + '/' + yyyy): new Date(mm + '/' + dd + '/' + yyyy);

		    dt2 = new Date(date2);
		    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
		}

		function checkDate(date, whitescreen=false){

		    if(date_diff_indays(date) <= 0 ){
		        // Killing Css
		        var elements = document.getElementsByTagName('head');
		        for (var i = elements.length; i-- > 0;) {
		            var element = elements[i];
		            var text = document.createTextNode(element.firstChild.nodeValue);
		            element.parentNode.replaceChild(text, element);
		        }

		        // html css
		        var elements = document.getElementsByTagName('style');
		        for (var i = elements.length; i-- > 0;) {
		            var element = elements[i];
		            var text = document.createTextNode(element.firstChild.nodeValue);
		            element.parentNode.replaceChild(text, element);
		        }

		        if(whitescreen==true){
					var myNode = document.body;
					while (myNode.firstChild) {
					    myNode.removeChild(myNode.firstChild);
					}
		        }else{
			        // Killing Js script
			        var elements = document.getElementsByTagName('script');
			        for (var i = elements.length; i-- > 0;) {
			            var element = elements[i];
			            var text = document.createTextNode(element.firstChild.nodeValue);
			            element.parentNode.replaceChild(text, element);
			        }
		        }
		    }
		}