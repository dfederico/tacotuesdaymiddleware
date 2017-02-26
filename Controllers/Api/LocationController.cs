using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers.Api{
    [Route("api/[controller]")]
    public class LocationController: Controller{
        [HttpGet]
        public IActionResult Get()
        {
            return Content("");
        }
    }
}