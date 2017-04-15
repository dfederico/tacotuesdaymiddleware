using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net;
using TacoTuesday.Models;
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

        //Example: http://localhost:47905/api/Location?logitude=45.123561&latitude=45.123561
        [HttpGet]
        public IActionResult Get(decimal? longitude, decimal? latitude)
        {
            if(!longitude.HasValue || !latitude.HasValue)
            {
                return new StatusCodeResult((int)HttpStatusCode.BadRequest);
            }
            var locations = _locationService.Get(longitude.Value, latitude.Value);
            return new OkObjectResult(locations);
        }
    }
}