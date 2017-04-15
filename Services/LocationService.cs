using System.Collections.Generic;

namespace TacoTuesday.Services
{
    public interface ILocationService
    {
        List<Location> Get(decimal longitude, decimal latitude);
    }

    public class LocationService : ILocationService
    {
        private IAuthTokenService _authTokenService;
        public LocationService(IAuthTokenService authTokenService){
            _authTokenService = authTokenService;
        }
        public List<Location> Get(decimal longitude, decimal latitude)
        {
            //1. Ensusre that we have an access token
            var token = _authTokenService.EnsureAuthToken();
            //2. Call the yelp api Search
            //https://api.yelp.com/v3/businesses/search

            //3. Return model for results
            return new List<Location>{
                new Location{
                    LocationName = "Test"
                }
            };
        }
    }
}
