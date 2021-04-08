using Newtonsoft.Json;
using ProjectManagement.Api;
using ProjectManagement.Entities;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using Xunit;

namespace ProjectManagement.API.IntegrationTests.Controllers
{
    public class UserControllerIntegrationTests : IClassFixture<CustomWebApplicationFactory<Startup>>
    {
        private readonly HttpClient _client;

        public UserControllerIntegrationTests(CustomWebApplicationFactory<Startup> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async System.Threading.Tasks.Task CanGetUsers()
        {
            // The endpoint or route of the controller action.
            var httpResponse = await _client.GetAsync("/api/user");

            // Must be successful.
            httpResponse.EnsureSuccessStatusCode();

            // Deserialize and examine results.
            var stringResponse = await httpResponse.Content.ReadAsStringAsync();
            var users = JsonConvert.DeserializeObject<IEnumerable<User>>(stringResponse);
            Assert.Contains(users, p => p.FirstName == "Test");
            Assert.Contains(users, p => p.LastName == "User1");
        }


        [Fact]
        public async System.Threading.Tasks.Task CanGetUserById()
        {
            // The endpoint or route of the controller action.
            var httpResponse = await _client.GetAsync("/api/User/1");

            // Must be successful.
            httpResponse.EnsureSuccessStatusCode();

            // Deserialize and examine results.
            var stringResponse = await httpResponse.Content.ReadAsStringAsync();
            var user = JsonConvert.DeserializeObject<User>(stringResponse);
            Assert.Equal(1, user.ID);
            Assert.Equal("User1",user.LastName);
        }
    }
}
