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
    [Route("api/User")]
    public class UserController : BaseController<User>
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetAllUsers()
        {
            return Get();
        }

        [HttpGet]
        public IActionResult GetUser(long id)
        {
            return Get(id);
        }

        [HttpPost]
        public IActionResult CreateUser()
        {
            return Post();
        }

        [HttpPut]
        public IActionResult UpdateUser()
        {
            return Put();
        }

        [HttpDelete]
        public IActionResult DeleteUser(long id)
        {
            return Delete(id);
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login()
        {
            return Ok();
        }
    }
}
