package ba.isss.controllers;

import java.security.Principal;
import java.util.ArrayList;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

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
    public Iterable<PredmetSemestarDto> buduciPredmeti(Principal principal) {
        return predmetService.findAllFuture(studentService.findByUsername(principal.getName()).getId());
    }
    
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @PostMapping(path="/update_password")
    @ResponseBody
    public String updatePassword(@RequestParam("id") Integer id,@RequestParam("password1") String pass1, 
    		@RequestParam("password2") String pass2, @RequestParam("password") String pass ) throws NoSuchAlgorithmException {
    	
    	Student s = studentService.findOne(id);
    	String hash = StudentService.getMD5(pass);
    	if(s.getPassword() != hash)
    		return "Pogresan stari password";
    	
    	if(pass1 != pass2) 
    		return "Passwordi razliciti";
    	
		
    	if(studentService.updatePassword(id, hash ) == 0)
    		return "ERROR";
    	
    	return "Password promijenjen";
    }
}
