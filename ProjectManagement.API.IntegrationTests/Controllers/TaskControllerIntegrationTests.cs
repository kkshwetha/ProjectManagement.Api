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
    

    public class TaskControllerIntegrationTests : IClassFixture<CustomWebApplicationFactory<Startup>>
    {
        private readonly HttpClient _client;

        public TaskControllerIntegrationTests(CustomWebApplicationFactory<Startup> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async System.Threading.Tasks.Task CanGetTasks()
        {
            // The endpoint or route of the controller action.
            var httpResponse = await _client.GetAsync("/api/Task");

            // Must be successful.
            httpResponse.EnsureSuccessStatusCode();

            // Deserialize and examine results.
            var stringResponse = await httpResponse.Content.ReadAsStringAsync();
            var project = JsonConvert.DeserializeObject<IEnumerable<Task>>(stringResponse);
            Assert.Contains(project, p => p.Project.Name == "TestProject1");
            Assert.Contains(project, p => p.Detail == "Create Database Table");
        }


        [Fact]
        public async System.Threading.Tasks.Task CanGetTaskById()
        {
            // The endpoint or route of the controller action.
            var httpResponse = await _client.GetAsync("/api/Task/1");

            // Must be successful.
            httpResponse.EnsureSuccessStatusCode();

            // Deserialize and examine results.
            var stringResponse = await httpResponse.Content.ReadAsStringAsync();
            var task = JsonConvert.DeserializeObject<Task>(stringResponse);
            Assert.Equal(1, task.ID);
            Assert.Equal("TestProject1", task.Project.Name);
        }
    }
}
