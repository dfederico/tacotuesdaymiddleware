using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using TacoTuesday.Models;

public interface IAuthTokenService{
    AuthTokenResponse EnsureAuthToken();
}

public class AuthTokenService : IAuthTokenService
{
    private readonly AppSettings _appSettings;

    public AuthTokenService(IOptions<AppSettings> appSettingsOptions)
    {
        _appSettings = appSettingsOptions.Value;
    }

    public AuthTokenResponse EnsureAuthToken()
    {
        //TODO: store the token somewhere so we don't get it over and over again

        //TODO: call https://api.yelp.com/oauth2/token
        var client = new HttpClient();
        var content = new FormUrlEncodedContent(
            new Dictionary<string, string>{
                {"grant_type", "client_credentials"},
                {"client_id", _appSettings.YelpAppId},
                {"client_secret", _appSettings.YelpAppSecret}
            }
        );
        //var content = new StringContent(JsonConvert.SerializeObject(authTokenRequest), Encoding.UTF8, "application/json");

        var result = client.PostAsync("https://api.yelp.com/oauth2/token", content).Result;
        var body = result.Content.ReadAsStringAsync().Result;
        var token = JsonConvert.DeserializeObject<AuthTokenResponse>(body);
        return token;
    }
}