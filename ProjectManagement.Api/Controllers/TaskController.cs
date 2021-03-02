﻿using Microsoft.AspNetCore.Http;
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
        [Route("{id}")]
        public IActionResult GetTask(long id)
        {
            return Get(id);
        }

        [HttpPost]
        public IActionResult CreateTask()
        {
            return Post();
        }

        [HttpPut]
        public IActionResult UpdateTask()
        {
            return Put();
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteTask()
        {
            return Delete();
        }

    }
}
