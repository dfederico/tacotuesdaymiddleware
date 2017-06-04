using System.Collections.Generic;
using System.Net.Http;

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

            token = "jVfZbpm5QiJKIhGDqxjOsv9eWZ4xZISqINTaCrKebS-FxftgudOSKJ6BqbfhBBc0cyrO_8EO1RL9-TBLLTueB2Av6DArLJO61mkA5mLwNxT3Pm2QnzXiO4BQOy7yWHYx";
            var httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Add("Authorization", "Bearer jVfZbpm5QiJKIhGDqxjOsv9eWZ4xZISqINTaCrKebS-FxftgudOSKJ6BqbfhBBc0cyrO_8EO1RL9-TBLLTueB2Av6DArLJO61mkA5mLwNxT3Pm2QnzXiO4BQOy7yWHYx");
            HttpResponseMessage result = httpClient.GetAsync("https://api.yelp.com/v3/businesses/search?term=taco&latitude=44.977753&longitude=-99.265011").Result;

            if (result.IsSuccessStatusCode)
            {
                var locations = 
                result.Content.ReadAsStringAsync();
            }
            //3. Return model for results
            return new List<Location>{
                new Location{
                    LocationName = ""
                }
            };
        }
    }
}
