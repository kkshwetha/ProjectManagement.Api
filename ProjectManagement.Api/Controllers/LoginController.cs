using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectManagement.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("login")]
    public class LoginController : Controller
    {
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]User user)
        {
            return Ok();
        }
    }
}
