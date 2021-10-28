using LogicalEngineAngular.Models;
using LogicalEngineAngular.Repository;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LogicalEngineAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private readonly IRepository _repository;

        public MemberController(IRepository repository)
        {
            _repository = repository;
        }
        // GET: api/<DataController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarPartUnitContainerMember>>> MemberList()
        {
            return await _repository.SelectAll<CarPartUnitContainerMember>();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CarPartUnitContainerMember>> GetMember(long id)
        {
            var model = await _repository.SelectById<CarPartUnitContainerMember>(id);

            if (model == null)
            {
                return NotFound();
            }

            return model;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMember(long id, CarPartUnitContainerMember model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            await _repository.UpdateAsync<CarPartUnitContainerMember>(model);

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<CarPartUnitContainerMember>> InsertMember([FromBody] CarPartUnitContainerMember model)
        {
            await _repository.CreateAsync<CarPartUnitContainerMember>(model);
            return CreatedAtAction("GetMember", new { id = model.Id }, model);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CarPartUnitContainerMember>> DeleteMember(long id)
        {
            var model = await _repository.SelectById<CarPartUnitContainerMember>(id);

            if (model == null)
            {
                return NotFound();
            }

            await _repository.DeleteAsync<CarPartUnitContainerMember>(model);

            return model;
        }
    }
}