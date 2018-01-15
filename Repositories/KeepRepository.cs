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
    public class KeepRepository
    {
        private readonly IDbConnection _db;

        public KeepRepository(IDbConnection db)
        {
            _db = db;
        }

        public IEnumerable<Keep> GetAll()
        {
            return _db.Query<Keep>("SELECT * FROM keeps");
        }

        public Keep GetById(int id)
        {
            Console.WriteLine("GET REQUEST ID: ", id);
            return _db.QueryFirstOrDefault<Keep>($"SELECT * FROM keeps WHERE id = {id}", id);
        }

        public Keep Add(Keep Keep)
        {
            int id = _db.ExecuteScalar<int>("INSERT INTO keeps (Name, UserId, Views, VaultAdds, ImageUrl, ArticleUrl)"
                        + $" VALUES(@Name, @UserId, @Views, @VaultAdds, @ImageUrl, @ArticleUrl); SELECT LAST_INSERT_ID()", new
                        {
                            Keep.Name,
                            Keep.UserId,
                            Keep.Views,
                            Keep.VaultAdds,
                            Keep.ImageUrl,
                            Keep.ArticleUrl,
                            Keep.Published
                        });
            Keep.Id = id;
            Keep.Published = true;
            return Keep;

        }
        public IEnumerable<Keep> GetByVaultId(int id)
        {
            Console.WriteLine("GET REQUEST ID: ", id);
            return _db.Query<Keep>($@"SELECT * FROM vaultkeeps vk
                                                    INNER JOIN keeps k ON k.id = vk.keepId 
                                                    WHERE (vaultId = {id})", id);
        }

        public IEnumerable<Keep> GetByUserId(int id)
        {
            Console.WriteLine("GET REQUEST ID: ", id);
            return _db.Query<Keep>($@"SELECT * FROM keeps WHERE (userId = {id})", id);
        }

        public Keep GetOneByIdAndUpdate(int id, Keep Keep)
        {
            return _db.QueryFirstOrDefault<Keep>($@"
                UPDATE Keeps SET  
                    Name = @Name, 
                    UserId = @UserId,
                    Views = @Views,
                    VaultAdds = @VaultAdds,
                    ImageUrl = @ImageUrl,
                    ArticleUrl = @ArticleUrl,
                    Published = @Published
                WHERE Id = {id};
                SELECT * FROM keeps WHERE id = {id};", Keep);
        }

        public string FindByIdAndRemove(int id)
        {
            var success = _db.Execute($@"
                DELETE FROM keeps WHERE Id = {id}
            ", id);
            return success > 0 ? "success" : "umm that didnt work";
        }
    }
}
