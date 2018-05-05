// super class  
function utility(utilityName, utilityDescription) {
    this.utilityName = utilityName;
    this.utilityDescription = utilityDescription;
}

utility.prototype = {
    constructor: utility,  
    college: "UMD",
    info: function() {
        document.writeln("utilityName: " + this.utilityName);
        document.writeln(", utilityDescription: " + this.utilityDescription + "<br />");
    }
};