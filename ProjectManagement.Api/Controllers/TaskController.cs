using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Api.Controllers
{
    [ApiController]
    [Route("api/Task")]
    public class TaskController : BaseController<Task>
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetAllTasks()
        {
            return Get();
        }

        [HttpGet]
        public IActionResult GetTask(long id)
        {
            return Get(id);
        }

        [HttpPost]
        public IActionResult CreateTask([FromBody] Task task)
        {
            return Post();
        }

        [HttpPut]
        public IActionResult UpdateTask([FromBody] Task task)
        {
            return Put();
        }

        [HttpDelete]
        public IActionResult DeleteTask(long id)
        {
            return Delete(id);
        }

    }
}
