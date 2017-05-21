package ba.isss.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import ba.isss.models.Prijava;
import ba.isss.services.PrijavaService;

@RestController
@RequestMapping(path="/prijave")
public class PrijavaController {
	
	@Autowired
	PrijavaService prijavaService;
	
	
	@GetMapping(path="/sve")
	@ResponseBody
	public Iterable<Prijava> svePrijave(@RequestParam("id") Integer id) {
		return prijavaService.findAllByStudentID(id);
	}
	
	@PostMapping(path="/prijavi")
	public void prijaviIspit(@ModelAttribute("prijava") Prijava p) {
		prijavaService.SavePrijava(p);
	}
	
	@RequestMapping(path="/odjavi", method = RequestMethod.POST)
	@ResponseBody
	public void odjaviIspit(@ModelAttribute("odjava") Prijava p) {
		prijavaService.DeletePrijava(p);
	}
	
	
}
