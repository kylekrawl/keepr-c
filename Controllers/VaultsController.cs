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
    public class VaultsController : Controller
    {
        private readonly VaultRepository db;
        private readonly UserRepository users;
        public VaultsController(VaultRepository VaultRepo, UserRepository UserRepo)
        {
            db = VaultRepo;
            users = UserRepo;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Vault> Get()
        {
            return db.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Vault Get(int id)
        {
            Console.WriteLine(id);
            return db.GetById(id);
        }

        [Authorize]
        [HttpGet("manage")]
        public IEnumerable<Vault> GetByActiveUser()
        {
            Console.WriteLine("GetVaultsByActiveUser called!");

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
        public Vault Post([FromBody]Vault Vault)
        {
            return db.Add(Vault);
        }

        // PUT api/values/5
        [Authorize]
        [HttpPut("{id}")]
        public Vault Put(int id, [FromBody]Vault Vault)
        {
            if (ModelState.IsValid)
            {
                return db.GetOneByIdAndUpdate(id, Vault);
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
