using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI_asp.net.Models;

namespace WebAPI_asp.net.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*", exposedHeaders: "X-Custom-Header")]
    public class DCandidateController : ApiController
    {
        DonationDBContext _db = new DonationDBContext();

        [HttpPost]
        public IHttpActionResult Add([FromBody] DCandidate candidate)
        {
            _db.DCandidates.Add(candidate);
            int rowCount = _db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok(candidate);
            }
            return BadRequest("Saved failed.");
        }
        /// <summary>
        /// Get all product
        /// </summary>
        /// <returns></returns>

        [HttpGet]
        public IHttpActionResult GetAll()
        {
            var candidates = _db.DCandidates.ToList();
            if (candidates.Count == 0)
            {
                return NotFound();
            }
            return Ok(candidates);
        }

        [HttpGet]
        public IHttpActionResult GetById(int id)
        {
            var candidate = _db.DCandidates.FirstOrDefault(c => c.id == id);
            if (candidate == null)
            {
                return NotFound();
            }
            return Ok(candidate);

        }

        [HttpPut]
        public IHttpActionResult Update(int Id,[FromBody] DCandidate candidate)
        {
            candidate.id = Id;
            if (candidate.id <= 0)
            {
                return NotFound();
            }

            _db.Entry(candidate).State = System.Data.Entity.EntityState.Modified;
            int rowCount = _db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok(candidate);
            }
            return BadRequest("Modified failed.");
        }

        
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var candidate = _db.DCandidates.FirstOrDefault(c => c.id == id);
            if (candidate == null)
            {
                return NotFound();

            }
            _db.DCandidates.Remove(candidate);
            int rowCount = _db.SaveChanges();
            if (rowCount > 0)
            {
                return Ok("candidate has been deleted.");
            }
            return BadRequest("Delete failed.");
        }
    }


}