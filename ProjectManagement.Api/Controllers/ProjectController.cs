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
        [Route("{id}")]
        public IActionResult GetProject(long id)
        {
            return Get(id);
        }

        [HttpPost]
        public IActionResult CreateProject()
        {
            return Post();
        }

        [HttpPut]
        public IActionResult UpdateProject()
        {
            return Put();
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteProject()
        {
           return Delete();
        }

    }
}
