using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using TacoTuesday.Models;

namespace TacoTuesday.Services
{
    public interface ILocationService
    {
        List<Location> Get(decimal longitude, decimal latitude);
    }

    public class LocationService : ILocationService
    {
        private IAuthTokenService _authTokenService;
        public LocationService(IAuthTokenService authTokenService)
        {
            _authTokenService = authTokenService;
        }
        public List<Location> Get(decimal longitude, decimal latitude)
        {
            var results = new List<Location>();
            //1. Ensusre that we have an access token
            var token = _authTokenService.EnsureAuthToken();
            //2. Call the yelp api Search

            var httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {token.AccessToken}");
            HttpResponseMessage apiResult = httpClient.GetAsync("https://api.yelp.com/v3/businesses/search?term=taco&latitude=44.976456&longitude=-93.270791").Result;

            if (apiResult.IsSuccessStatusCode)
            {
                var locations = 
                apiResult.Content.ReadAsStringAsync();

                var yelpResult = JsonConvert.DeserializeObject<YelpResult>(apiResult.Content.ReadAsStringAsync().Result);
                foreach (var business in yelpResult.Businesses)
                {
                    results.Add(new Location
                    {
                        LocationName = business.Name
                    });
                }
            }
            //3. Return model for results
            return results;
        }
    }
}
