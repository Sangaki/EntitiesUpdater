using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Contexts;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class entsController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public entsController(ApplicationContext context)
        {
            _context = context;
        }

        // GET: api/ents
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ent>>> GetEnts()
        {
            return await _context.Ents.ToListAsync();
        }

        // GET: api/ents/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ent>> Getent(string id)
        {
            var ent = await _context.Ents.FindAsync(id);

            if (ent == null)
            {
                return NotFound();
            }

            return ent;
        }

        // PUT: api/ents/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEnt(string id, ent ent)
        {
            if (id != ent.name)
            {
                return BadRequest();
            }

            _context.Entry(ent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!entExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ents
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ent>> PostEnt(ent ent)
        {
            _context.Ents.Add(ent);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (entExists(ent.name))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("Getent", new { id = ent.name }, ent);
        }

        // DELETE: api/ents/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ent>> DeleteEnt(string id)
        {
            var ent = await _context.Ents.FindAsync(id);
            if (ent == null)
            {
                return NotFound();
            }

            _context.Ents.Remove(ent);
            await _context.SaveChangesAsync();

            return ent;
        }

        private bool entExists(string id)
        {
            return _context.Ents.Any(e => e.name == id);
        }
    }
}
