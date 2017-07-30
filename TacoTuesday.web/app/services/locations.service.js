"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var LocationsService = (function () {
    function LocationsService(http) {
        this.http = http;
    }
    LocationsService.prototype.GetInfo = function (long, lat) {
        var url = "http://localhost:47905/api/location?longitude=" + long + "&latitude=" + lat;
        console.log(url);
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
        ;
    };
    LocationsService.prototype.handleErrors = function (error) {
        alert(error);
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    return LocationsService;
}());
LocationsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LocationsService);
exports.LocationsService = LocationsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUMzQyxzQ0FBK0M7QUFDL0MsOENBQTZDO0FBQzdDLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFHakMsSUFBYSxnQkFBZ0I7SUFDekIsMEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUU1QixrQ0FBTyxHQUFkLFVBQWUsSUFBWSxFQUFFLEdBQVc7UUFDcEMsSUFBSSxHQUFHLEdBQUcsbURBQWlELElBQUksa0JBQWEsR0FBSyxDQUFBO1FBQ2pGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUN4QixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFBQSxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FFaUIsV0FBSTtHQURyQixnQkFBZ0IsQ0FnQjVCO0FBaEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uc1Jlc3VsdCB9IGZyb20gJy4vLi4vdHlwZXMvbG9jYXRpb25zLXJlc3VsdCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbnNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBHZXRJbmZvKGxvbmc6IG51bWJlciwgbGF0OiBudW1iZXIpOiBPYnNlcnZhYmxlPExvY2F0aW9uc1Jlc3VsdD57XHJcbiAgICAgICAgdmFyIHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjQ3OTA1L2FwaS9sb2NhdGlvbj9sb25naXR1ZGU9JHtsb25nfSZsYXRpdHVkZT0ke2xhdH1gXHJcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXHJcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpOztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgIH1cclxufSJdfQ==