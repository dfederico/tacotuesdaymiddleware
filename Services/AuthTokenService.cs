public interface IAuthTokenService{
    string EnsureAuthToken();
}

public class AuthTokenService : IAuthTokenService {
    public string EnsureAuthToken() {
        //TODO: store the token somewhere so we don't get it over and over again
        //TODO: store the private key somewhere safe that doesn't get checked into source control.
        string grant_type = "client_credentials";
        string client_id = "GuU_Q6NzJ9o8KbYJ71Q7Zw";
        string client_secret = "super secret key";
         //TODO: call https://api.yelp.com/oauth2/token
         
        return "foo";
    }
}