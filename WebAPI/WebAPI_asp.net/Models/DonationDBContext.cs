using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_asp.net.Models
{
    public class DonationDBContext:DbContext
    {
        public DonationDBContext() : base("con")
        {

        }


        public DbSet<DCandidate> DCandidates { get; set; }
    }

}
