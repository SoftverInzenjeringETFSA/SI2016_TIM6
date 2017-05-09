package ba.isss.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Student;
import ba.isss.services.StudentService;

@RestController
@RequestMapping(path="/student")
public class StudentController {

	@Autowired
    private StudentService studentService;
 
    @RequestMapping(path="/save")
    public String process() {
/*    	korisnikService.save(new Customer("Jack", "Smith"));
    	korisnikService.save(new Customer("Adam", "Johnson"));
    	korisnikService.save(new Customer("Kim", "Smith"));
    	korisnikService.save(new Customer("David", "Williams"));
    	korisnikService.save(new Customer("Peter", "Davis"));*/
        return "Done";
    }
 
    @RequestMapping(path="/findall")
    public Iterable<Student> findAll() {
    	return studentService.findAllStudent();
    }
 
}