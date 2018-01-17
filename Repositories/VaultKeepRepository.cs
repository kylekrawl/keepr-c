using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using keepr.Models;
using Dapper;
using MySql.Data.MySqlClient;

namespace keepr.Repositories
{
    public class VaultKeepRepository
    {
        private readonly IDbConnection _db;

        public VaultKeepRepository(IDbConnection db)
        {
            _db = db;
        }

        public VaultKeep Add(VaultKeep VaultKeep)
        {   
            int id = _db.ExecuteScalar<int>("INSERT INTO vaultkeeps (UserId, VaultId, KeepId)"
                        + $" VALUES(@UserId, @VaultId, @KeepId); SELECT LAST_INSERT_ID()", new
                        {
                            VaultKeep.UserId, 
                            VaultKeep.VaultId,
                            VaultKeep.KeepId
                        });
            VaultKeep.Id = id;
            return VaultKeep;
        }

        public string FindByRelatedIdsAndRemove(int keepId, int vaultId)
        {
            var success = _db.Execute($@"
                DELETE FROM VaultKeeps WHERE vaultId = {vaultId} AND keepId = {keepId}
            ");
            return success > 0 ? "success" : "umm that didnt work";
        }
    }
}
