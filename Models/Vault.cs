namespace keepr.Models
{
    public class Vault
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Published { get; set; }
    }
}