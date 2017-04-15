using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TacoTuesday.Models
{
    public class AuthTokenRequest
    {
        [JsonProperty(PropertyName = "grant_type")]
        public string GrantType { get; set; }

        [JsonProperty(PropertyName = "client_id")]
        public string ClientId { get; set; }

        [JsonProperty(PropertyName = "client_secret")]
        public string ClientSecret { get; set; }
    }
}
