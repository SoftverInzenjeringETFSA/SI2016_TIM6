package ba.isss.controllers;

import java.security.Principal;
import java.util.ArrayList;

import ba.isss.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.dto.PredmetDto;
import ba.isss.dto.PredmetSemestarDto;
import ba.isss.models.Obavjestenje;
import ba.isss.models.Pohadjanje;
import ba.isss.services.ObavjestenjeService;
import ba.isss.services.PohadjanjeService;
import ba.isss.services.PredmetService;

@RestController
@CrossOrigin
@RequestMapping(path="/pohadjanje")
public class PohadjanjeController {
	
	@Autowired
    private PredmetService predmetService;

	@Autowired
    private StudentService studentService;

	// Pristup svim studentima
    @RequestMapping(value="/find")
    @ResponseBody
    public Iterable<PredmetSemestarDto> findAllByStudent(@RequestParam("id") Integer id) {
        return predmetService.findAllSemesters(id);
    }

    // Prikaz predmeta samo za prijavljenog studenta
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @RequestMapping(value="/pregled")
    @ResponseBody
    public Iterable<PredmetSemestarDto> findAllByStudent(Principal principal) {
    	return predmetService.findAllSemesters(studentService.findByUsername(principal.getName()).getId());
    }


}
