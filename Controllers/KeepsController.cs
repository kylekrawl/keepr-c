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
        private readonly KeepRepository db;
        private readonly UserRepository users;
        public KeepsController(KeepRepository KeepRepo, UserRepository UserRepo)
        {
            db = KeepRepo;
            users = UserRepo;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Keep> Get()
        {
            return db.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Keep Get(int id)
        {
            Console.WriteLine(id);
            return db.GetById(id);
        }

        [HttpGet("vaults/{id}")]
        public IEnumerable<Keep> GetByVault(int id)
        {
            Console.WriteLine("GetByVault called!");
            return db.GetByVaultId(id);
        }

        [HttpGet("users/{id}")]
        public IEnumerable<Keep> GetByUser(int id)
        {
            Console.WriteLine("GetKeepsByUser called!");
            return db.GetByUserId(id);
        }

        [Authorize]
        [HttpGet("manage")]
        public IEnumerable<Keep> GetByActiveUser()
        {
            Console.WriteLine("GetKeepsByActiveUser called!");

            var user = HttpContext.User;
            var id = user.Identity.Name;

            UserReturnModel activeUser = null;

            if (id != null)
            {
                activeUser = users.GetUserById(id);
            }
            var uid = activeUser.Id;

            return db.GetByUserId(uid);
        }

        // POST api/values
        [Authorize]
        [HttpPost]
        public Keep Post([FromBody]Keep Keep)
        {

            var user = HttpContext.User;
            var id = user.Identity.Name;

            UserReturnModel activeUser = null;

            if (id != null)
            {
                activeUser = users.GetUserById(id);
            }
            Keep.UserId = activeUser.Id;

            return db.Add(Keep);
        }

        // PUT api/values/5
        [Authorize]
        [HttpPut("{id}")]
        public Keep Put(int id, [FromBody]Keep Keep)
        {
            if (ModelState.IsValid)
            {
                return db.GetOneByIdAndUpdate(id, Keep);
            }
            return null;
        }

        // DELETE api/values/5
        [Authorize]
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return db.FindByIdAndRemove(id);
        }
    }
}
