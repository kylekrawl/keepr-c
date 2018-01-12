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
        public KeepsController(KeepRepository KeepRepo)
        {
            db = KeepRepo;
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
            return db.GetKeepsByVaultId(id);
        }

        [HttpGet("users/{id}")]
        public IEnumerable<Keep> GetByUser(int id)
        {
            Console.WriteLine("GetByUser called!");
            return db.GetKeepsByUserId(id);
        }

        // POST api/values
        [Authorize]
        [HttpPost]
        public Keep Post([FromBody]Keep Keep)
        {
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
