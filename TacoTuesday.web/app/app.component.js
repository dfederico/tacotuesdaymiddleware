"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var locations_service_1 = require("./services/locations.service");
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(locationsService) {
        this.locationsService = locationsService;
    }
    AppComponent.prototype.login = function () {
        alert("not implemented");
    };
    AppComponent.prototype.search = function () {
        this.locationsService.GetInfo(94, 95).subscribe(function (result) {
            console.log("pressed");
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar title=\"Taco Tuesday\" class=\"action-bar\"></ActionBar>\n    <StackLayout orientation=\"vertical\">\n      <Button text=\"Login\" class=\"btn btn-primary\" (tap)=\"login()\"></Button>\n      <Button text=\"Find Tacos!\" class=\"btn btn-primary\" (tap)=\"search()\"></Button>\n    \n    </StackLayout>\n  ",
        styles: ["\n  "],
        providers: [locations_service_1.LocationsService]
    }),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxrRUFBZ0U7QUFDaEUsc0NBQTBDO0FBbUIxQyxJQUFhLFlBQVk7SUFDdkIsc0JBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0UsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUF1QjtZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7QUFkWSxZQUFZO0lBZHhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsb1VBT1Q7UUFDRCxNQUFNLEVBQUUsQ0FBQyxNQUNSLENBQUM7UUFDRixTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztLQUM5QixDQUFDO3FDQUVzQyxvQ0FBZ0I7R0FEM0MsWUFBWSxDQWN4QjtBQWRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb25zUmVzdWx0IH0gZnJvbSAnLi90eXBlcy9sb2NhdGlvbnMtcmVzdWx0JztcbmltcG9ydCB7IExvY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2xvY2F0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBidXR0b25Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBiaW5kYWJsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL2JpbmRhYmxlXCI7XG5pbXBvcnQgKiBhcyBvYnNlcnZhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIlRhY28gVHVlc2RheVwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJMb2dpblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKHRhcCk9XCJsb2dpbigpXCI+PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJGaW5kIFRhY29zIVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKHRhcCk9XCJzZWFyY2goKVwiPjwvQnV0dG9uPlxuICAgIFxuICAgIDwvU3RhY2tMYXlvdXQ+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgYF0sXG4gIHByb3ZpZGVyczogW0xvY2F0aW9uc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uc1NlcnZpY2U6IExvY2F0aW9uc1NlcnZpY2Upe1xuICBcbiAgfVxuXG4gIGxvZ2luKCl7XG4gICAgYWxlcnQoXCJub3QgaW1wbGVtZW50ZWRcIik7XG4gIH1cblxuICBzZWFyY2goKXtcbiAgICB0aGlzLmxvY2F0aW9uc1NlcnZpY2UuR2V0SW5mbyg5NCwgOTUpLnN1YnNjcmliZSgocmVzdWx0OiBMb2NhdGlvbnNSZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmVzc2VkXCIpO1xuICAgIH0pO1xuICB9XG59Il19