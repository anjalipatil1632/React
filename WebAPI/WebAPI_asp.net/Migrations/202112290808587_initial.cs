namespace WebAPI_asp.net.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DCandidates",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        fullName = c.String(maxLength: 100),
                        mobile = c.String(maxLength: 16),
                        email = c.String(maxLength: 100),
                        age = c.Int(nullable: false),
                        bloodGroup = c.String(maxLength: 3),
                        address = c.String(maxLength: 100),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.DCandidates");
        }
    }
}
