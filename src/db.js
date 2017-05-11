export class DB {
    
    constructor(){
    }

    getItems(callback) {
 
        var xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        
        xhttp.open("POST", "/server", true);
        xhttp.send();
    }
}