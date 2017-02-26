using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers.Api{
    public class LocationController: Controller{
        [HttpGet]
        public IActionResult Get()
        {
            return Content("");
        }
    }
}