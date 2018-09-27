"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// An image directive based on http://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript
var core_1 = require("@angular/core");
// Define the Directive meta data
var ImagePreloader = /** @class */ (function () {
    function ImagePreloader() {
        // Set an input so the directive can set a default image.
        this.defaultImage = '../../../assets/images/loading_small.gif';
    }
    //ngOnInit is needed to access the @inputs() variables. these aren't available on constructor()
    ImagePreloader.prototype.ngOnInit = function () {
        var _this = this;
        //First set the final image to some default image while we prepare our preloader:
        this.finalImage = this.defaultImage;
        this.downloadingImage = new Image(); // create image object
        this.downloadingImage.onload = function () {
            console.log('image downloaded');
            _this.finalImage = _this.targetSource; //do the switch 😀
        };
        // Assign the src to that of some_remote_image_url. Since its an Image Object the
        // on assignment from this.targetSource download would start immediately in the background
        // and trigger the onload()
        this.downloadingImage.src = this.targetSource;
    };
    __decorate([
        core_1.Input('img-preloader'),
        __metadata("design:type", String)
    ], ImagePreloader.prototype, "targetSource", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ImagePreloader.prototype, "defaultImage", void 0);
    ImagePreloader = __decorate([
        core_1.Directive({
            selector: '[img-preloader]',
            host: {
                '[attr.src]': 'finalImage' //the attribute of the host element we want to update. in this case, <img 'src' />
            }
        })
        //Class must implement OnInit for @Input()
    ], ImagePreloader);
    return ImagePreloader;
}());
exports.ImagePreloader = ImagePreloader;
//# sourceMappingURL=img-preload.js.map