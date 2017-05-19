package ba.isss.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;
import java.security.Principal;

import ba.isss.models.Student;
import ba.isss.services.StudentService;

@RestController
@CrossOrigin
@RequestMapping(path="/student")
public class StudentController {

	@Autowired
    private StudentService studentService;

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
    
}