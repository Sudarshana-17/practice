var waterbottle = /** @class */ (function () {
    function waterbottle() {
    }
    waterbottle.prototype.withcap = function () {
        console.log("we can close bottle");
    };
    return waterbottle;
}());
var bislary = new waterbottle();
bislary.withcap();
