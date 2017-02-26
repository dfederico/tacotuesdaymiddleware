namespace TacoTuesday.Services
{
    public interface ILocationService
    {
        void Get(decimal logitude, decimal latitude);
    }

    public class LocationService : ILocationService
    {
        public void Get(decimal logitude, decimal latitude)
        {
            
        }
    }
}
