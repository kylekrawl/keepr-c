namespace keepr.Models
{
    public class Keep
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public int Views { get; set; }
        public int VaultAdds { get; set; }
        public string ImageUrl { get; set; }
        public string ArticleUrl { get; set; }
        public bool Published { get; set; }

    }
}