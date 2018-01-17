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
    public class ManageController : Controller
    {
        private readonly KeepRepository keepDb;
        private readonly VaultRepository vaultDb;
        private readonly VaultKeepRepository vaultKeepDb;
        private readonly UserRepository userDb;

        public ManageController(KeepRepository KeepRepo, VaultRepository VaultRepo, VaultKeepRepository VaultKeepRepo, UserRepository UserRepo)
        {
            keepDb = KeepRepo;
            vaultDb = VaultRepo;
            vaultKeepDb = VaultKeepRepo;
            userDb = UserRepo;
        }

        [Authorize]
        [HttpGet("keeps")]
        public IEnumerable<Keep> GetKeepsByActiveUser()
        {
            Console.WriteLine("GetKeepsByActiveUser called!");

            var user = HttpContext.User;
            var id = user.Identity.Name;

            UserReturnModel activeUser = null;

            if (id != null)
            {
                activeUser = userDb.GetUserById(id);
            }
            var uid = activeUser.Id;

            return keepDb.GetByUserId(uid);
        }

        [Authorize]
        [HttpGet("vaults")]
        public IEnumerable<Vault> GetVaultsByActiveUser()
        {
            var user = HttpContext.User;
            var id = user.Identity.Name;

            UserReturnModel activeUser = null;

            if (id != null)
            {
                activeUser = userDb.GetUserById(id);
            }
            var uid = activeUser.Id;

            return vaultDb.GetByUserId(uid);
        }

        [Authorize]
        [HttpGet("vaults/{id}/keeps")]
        public IEnumerable<Keep> GetKeepsByVault(int id)
        {
            Console.WriteLine("GetByVault called!");
            return keepDb.GetByVaultId(id);
        }

        [Authorize]
        [HttpPost("vaults/{vaultId}/keeps")]
        public VaultKeep Post([FromBody]VaultKeep VaultKeep)
        {
            var user = HttpContext.User;
            var id = user.Identity.Name;

            UserReturnModel activeUser = null;

            if (id != null)
            {
                activeUser = userDb.GetUserById(id);
            }
            VaultKeep.UserId = activeUser.Id;

            return vaultKeepDb.Add(VaultKeep);
        }

        [Authorize]
        [HttpDelete("vaults/{vaultId}/keeps/{keepId}")]
        public string Delete(int vaultId, int keepId)
        {
            return vaultKeepDb.FindByRelatedIdsAndRemove(keepId, vaultId);
        }

    }
}
