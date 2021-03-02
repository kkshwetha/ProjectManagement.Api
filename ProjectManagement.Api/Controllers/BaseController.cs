using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManagement.Api.Controllers
{
    public class BaseController<T> : ControllerBase
    {
        public IActionResult Get()
        {
            return Ok();
            //  throw new NotImplementedException();
        }

        public IActionResult Get(long id)
        {
            return Ok();
            // throw new NotImplementedException();
        }

        public IActionResult Post()
        {
            throw new NotImplementedException();
        }

        public IActionResult Put()
        {
            throw new NotImplementedException();
        }

        public IActionResult Delete()
        {
            throw new NotImplementedException();
        }

    }
}
