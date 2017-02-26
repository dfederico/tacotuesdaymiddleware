using Microsoft.AspNetCore.Mvc;
using TacoTuesday.Services;

namespace WebApplication.Controllers.Api{
    [Route("api/[controller]")]
    public class LocationController: Controller
    {
        private readonly ILocationService _locationService;

        public LocationController(ILocationService locationService)
        {
            _locationService = locationService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            _locationService.Get(0, 0);
            return Content("");
        }
    }
}