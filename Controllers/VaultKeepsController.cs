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
    public class VaultKeepsController : Controller
    {
        private readonly VaultKeepRepository db;
        public VaultKeepsController(VaultKeepRepository VaultKeepRepo)
        {
            db = VaultKeepRepo;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<VaultKeep> Get()
        {
            return db.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public VaultKeep Get(int id)
        {
            Console.WriteLine(id);
            return db.GetById(id);
        }

        // POST api/values
        [Authorize]
        [HttpPost]
        public VaultKeep Post([FromBody]VaultKeep VaultKeep)
        {
            return db.Add(VaultKeep);
        }

        // PUT api/values/5
        [Authorize]
        [HttpPut("{id}")]
        public VaultKeep Put(int id, [FromBody]VaultKeep VaultKeep)
        {
            if (ModelState.IsValid)
            {
                return db.GetOneByIdAndUpdate(id, VaultKeep);
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