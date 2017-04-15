using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Net.Http;
using System.Text;
using TacoTuesday.Models;

public interface IAuthTokenService{
    string EnsureAuthToken();
}

public class AuthTokenService : IAuthTokenService {
    private readonly AppSettings _appSettings;

    public AuthTokenService(IOptions<AppSettings> appSettingsOptions)
    {
        _appSettings = appSettingsOptions.Value;
    }

    public string EnsureAuthToken() {
        //TODO: store the token somewhere so we don't get it over and over again

        var authTokenRequest = new AuthTokenRequest {
            GrantType = "client_credentials",
            ClientId = _appSettings.YelpAppId,
            ClientSecret = _appSettings.YelpAppSecret
        };

        //TODO: call https://api.yelp.com/oauth2/token
        var client = new HttpClient();
        var content = new StringContent(JsonConvert.SerializeObject(authTokenRequest), Encoding.UTF8, "application/json");
        var result = client.PostAsync("https://api.yelp.com/oauth2/token", content).Result;
        var body = result.Content.ReadAsStringAsync().Result;

        return body;
    }
}