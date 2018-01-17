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
        private readonly VaultRepository vaultDb;
        private readonly VaultKeepRepository vaultKeepDb;
        private readonly UserRepository userDb;
        public VaultsController(VaultRepository VaultRepo, VaultKeepRepository VaultKeepRepo, UserRepository UserRepo)
        {
            vaultDb = VaultRepo;
            vaultKeepDb = VaultKeepRepo;
            userDb = UserRepo;
        }

        [HttpGet("{id}")]
        public Vault Get(int id)
        {
            return vaultDb.GetById(id);
        }

        [Authorize]
        [HttpPost]
        public Vault Post([FromBody]Vault Vault)
        {
            var user = HttpContext.User;
            var id = user.Identity.Name;

            UserReturnModel activeUser = null;

            if (id != null)
            {
                activeUser = userDb.GetUserById(id);
            }
            Vault.UserId = activeUser.Id;

            return vaultDb.Add(Vault);
        }

        [Authorize]
        [HttpPut("{id}")]
        public Vault Put(int id, [FromBody]Vault Vault)
        {
            if (ModelState.IsValid)
            {
                return vaultDb.GetOneByIdAndUpdate(id, Vault);
            }
            return null;
        }

        [Authorize]
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return vaultDb.FindByIdAndRemove(id);
        }
    }
}
