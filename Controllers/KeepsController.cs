using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    public class KeepsController : Controller
    {
        private readonly KeepRepository keepDb;
        private readonly UserRepository userDb;
        public KeepsController(KeepRepository KeepRepo, UserRepository UserRepo)
        {
            keepDb = KeepRepo;
            userDb = UserRepo;
        }

        [HttpGet]
        public IEnumerable<Keep> GetAllPublic()
        {
            return keepDb.GetAllPublic();
        }

        [HttpGet("{id}")]
        public Keep Get(int id)
        {
            return keepDb.GetById(id);
        }

        [HttpGet("search/{query}")]
        public IEnumerable<Keep> GetAllPublicByQuery(string query)
        {
            return keepDb.GetAllPublicByQuery(query);
        }

        [Authorize]
        [HttpPost]
        public Keep Post([FromBody]Keep Keep)
        {

            var user = HttpContext.User;
            var id = user.Identity.Name;

            UserReturnModel activeUser = null;

            if (id != null)
            {
                activeUser = userDb.GetUserById(id);
            }
            Keep.UserId = activeUser.Id;

            return keepDb.Add(Keep);
        }

        [Authorize]
        [HttpPut("{id}")]
        public Keep Put(int id, [FromBody]Keep Keep)
        {
            if (ModelState.IsValid)
            {
                return keepDb.GetOneByIdAndUpdate(id, Keep);
            }
            return null;
        }

        // DELETE api/values/5
        [Authorize]
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return keepDb.FindByIdAndRemove(id);
        }
    }
}
