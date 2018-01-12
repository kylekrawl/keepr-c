using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Models;
using keepr.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace keepr.Controllers
{
    [Route("api/[controller]")]
    public class VaultsController : Controller
    {
        private readonly VaultRepository db;
        public VaultsController(VaultRepository VaultRepo)
        {
            db = VaultRepo;
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

        // POST api/values
        [HttpPost]
        public Vault Post([FromBody]Vault Vault)
        {
            return db.Add(Vault);
        }

        // PUT api/values/5
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
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return db.FindByIdAndRemove(id);
        }
    }
}
