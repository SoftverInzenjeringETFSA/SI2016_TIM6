package ba.isss.controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Predmet;
import ba.isss.models.Student;
import ba.isss.services.PredmetService;
import ba.isss.services.StudentService;

@RestController
@CrossOrigin
@RequestMapping(path="/student")
public class StudentController {

	@Autowired
    private StudentService studentService;
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
    
    @GetMapping(path="/buduci_predmeti")
    @ResponseBody
    public Iterable<Predmet> buduciPredmeti(@RequestParam("id") Integer id_studenta) {
    	return predmetService.findAllFuture(id_studenta);
    }
    
}