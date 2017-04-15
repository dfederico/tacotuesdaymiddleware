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
        private readonly AppSettings _appSettings;

        public LocationController(ILocationService locationService)
        {
            _locationService = locationService;
        }

        //Example: http://localhost:47905/api/Location?logitude=45.123561&latitude=45.123561
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