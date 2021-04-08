using Microsoft.AspNetCore.Mvc;
using Moq;
using ProjectManagement.Api.Controllers;
using ProjectManagement.Data.Implementation;
using ProjectManagement.Data.Interfaces;
using ProjectManagement.Entities;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace ProjectManagement.API.UnitTests
{

    public class ProjectControllerFixture
    {
      public  ProjectController projectController => new ProjectController();
    }
    public  class ProjectControllerTests:IClassFixture<ProjectControllerFixture>
    {

       readonly ProjectControllerFixture _projectControllerFixture;
     public   ProjectControllerTests(ProjectControllerFixture projectControllerFixture)
        {
          
            _projectControllerFixture = projectControllerFixture;
        }
        [Fact]
        public void Get_WhenCalled_ReturnsOkResult()
        {
            var mockPlayerRepo = new Mock<IBaseRepository<Project>>();

            mockPlayerRepo.Setup(mpr => mpr.Get()).Returns(new IQueryable<Project>
            {
                  new Project {Name = "p1"},
                  new Project {Name="p2"}
            });

           // var mockGameRepo = new Mock<IBaseRepository<Project>>();

            //mockGameRepo.Setup(mpr => mpr.GetTodaysGames()).Returns(new List<Game>
            //{
            //      new Game {HomeTeam = "Montreal Canadiens",AwayTeam = "Toronto Maple Leafs",Date = DateTime.Today},
            //      new Game {HomeTeam = "Calgary Flames",AwayTeam = "Vancouver Canucks",Date = DateTime.Today},
            //      new Game {HomeTeam = "Los Angeles Kings",AwayTeam = "Anaheim Ducks",Date = DateTime.Today},
            //});

            // player repository is injected through constructor
            var controller = new BaseController<Project>(mockPlayerRepo.Object);

            // ACT 
            var result = controller.Get(); // game repository is injected through action parameter

            // ASSERT our action result and model
            var viewResult = Assert.IsType<ViewResult>(result);
         //  Assert.Equal("p1",result.)
           // Assert.Equal(2, viewResult.Model..Players.Count);
           // Assert.Equal(3, model.Games.Count);
        }
    }
}
