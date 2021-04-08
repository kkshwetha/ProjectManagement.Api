using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using ProjectManagement.Api;
using ProjectManagement.Entities;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

namespace ProjectManagement.API.IntegrationTests.Controllers
{
    public class ProjectControllerIntegrationTests : IClassFixture<CustomWebApplicationFactory<Startup>>
    {
        private readonly HttpClient _client;

        public ProjectControllerIntegrationTests(CustomWebApplicationFactory<Startup> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async System.Threading.Tasks.Task CanGetProjects()
        {
            // The endpoint or route of the controller action.
            var httpResponse = await _client.GetAsync("/api/project");

            // Must be successful.
            httpResponse.EnsureSuccessStatusCode();

            // Deserialize and examine results.
            var stringResponse = await httpResponse.Content.ReadAsStringAsync();
            var project = JsonConvert.DeserializeObject<IEnumerable<Project>>(stringResponse);
            Assert.Contains(project, p => p.Name == "TestProject1");
            Assert.Contains(project, p => p.Detail == "This is Test project 1");
        }


        [Theory]
        [InlineData("/api/project")]
        [InlineData("/api/project/1")]
        public async System.Threading.Tasks.Task GetHttpRequest(string url)
        {
            // The endpoint or route of the controller action.
            var httpResponse = await _client.GetAsync(url);

            // Must be successful.
            httpResponse.EnsureSuccessStatusCode();

            // Deserialize and examine results.
            Assert.Equal("application/json; charset=utf-8", httpResponse.Content.Headers.ContentType.ToString());
           
        }


        //[Fact]
        //public async Task CanGetPlayerById()
        //{
        //    // The endpoint or route of the controller action.
        //    var httpResponse = await _client.GetAsync("/api/players/1");

        //    // Must be successful.
        //    httpResponse.EnsureSuccessStatusCode();

        //    // Deserialize and examine results.
        //    var stringResponse = await httpResponse.Content.ReadAsStringAsync();
        //    var player = JsonConvert.DeserializeObject<Player>(stringResponse);
        //    Assert.Equal(1, player.Id);
        //    Assert.Equal("Wayne", player.FirstName);
        //}
    }
}
