package ba.isss.controllers;

import ba.isss.models.Student;
import ba.isss.services.IspitService;
import ba.isss.services.StudentService;
import org.springframework.security.access.prepost.PreAuthorize;
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

import javax.print.attribute.standard.PrinterInfo;
import java.security.Principal;

@RestController
@RequestMapping(path="/prijave")
public class PrijavaController {
	
	@Autowired
	PrijavaService prijavaService;
	
	@Autowired
	IspitService ispitService;

	@Autowired
	StudentService studentService;

	@PreAuthorize("hasAnyRole('ROLE_STUDENT')")
	@PostMapping(path="/prijavi")
	public void prijaviIspit(@ModelAttribute("prijava") Prijava p, Principal principal) throws Exception {
		Student s = studentService.findByUsername(principal.getName());
		prijavaService.SavePrijava(p,s);
	}

	@PreAuthorize("hasAnyRole('ROLE_STUDENT')")
	@RequestMapping(path="/odjavi", method = RequestMethod.POST)
	@ResponseBody
	public void odjaviIspit(@ModelAttribute("odjava") Prijava p, Principal principal) throws Exception {
		Student s = studentService.findByUsername(principal.getName());
		prijavaService.DeletePrijava(p,s);
	}
	
	
}
