using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectManagement.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Api.Controllers
{
    [ApiController]
    [Route("api/Project")]
    public class ProjectController : BaseController<Project>
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetAllProjects()
        {
            return Get();
        }

        [HttpGet]
        public IActionResult GetProject(long id)
        {
            return Get(id);
        }

        [HttpPost]
        public IActionResult CreateProject([FromBody] Project project)
        {
            return Post();
        }

        [HttpPut]
        public IActionResult UpdateProject([FromBody] Project project)
        {
            return Put();
        }

        [HttpDelete]
        public IActionResult DeleteProject(long id)
        {
            return Delete(id);
        }

    }
}
