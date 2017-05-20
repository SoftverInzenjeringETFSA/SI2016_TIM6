package ba.isss.controllers;

import java.security.Principal;
import java.util.ArrayList;

import ba.isss.dto.PredmetSemestarDto;
import ba.isss.models.Predmet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import ba.isss.models.Student;
import ba.isss.services.PredmetService;
import ba.isss.services.StudentService;

@RestController
@CrossOrigin
@RequestMapping(path="/student")
public class StudentController {

	@Autowired
    private StudentService studentService;
	@Autowired
	private PredmetService predmetService;

    // Pristup svim studentima
    @RequestMapping(value="/get")
    @ResponseBody
    public Student findOne(@RequestParam("id") Integer id) {
    	return studentService.findOne(id);
    }
    // Prikaz profile-a prijavljenog studenta
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public Student getProfile(Principal principal) {
        return studentService.findByUsername(principal.getName());
    }

    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @GetMapping(path="/buduci_predmeti")
    @ResponseBody
    public Iterable<Predmet> buduciPredmeti(Principal principal) {
        return predmetService.findAllFuture(studentService.findByUsername(principal.getName()).getId());
    }
}