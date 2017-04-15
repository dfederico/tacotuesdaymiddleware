using Microsoft.AspNetCore.Mvc;
using System.Net;
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
        public IActionResult Get(decimal? logitude, decimal? latitude)
        {
            if(!logitude.HasValue || !latitude.HasValue)
            {
                return new StatusCodeResult((int)HttpStatusCode.BadRequest);
            }
            var locations = _locationService.Get(logitude.Value, latitude.Value);
            return new OkObjectResult(locations);
        }
    }
}