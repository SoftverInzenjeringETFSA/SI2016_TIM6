package ba.isss.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Student;
import ba.isss.services.StudentService;

@RestController
@RequestMapping(path="/student")
public class StudentController {

	@Autowired
    private StudentService studentService;
	
 
    @RequestMapping(path="/findall")
    public Iterable<Student> findAll() {
    	return studentService.findAllStudent();
    }
    
    @RequestMapping(value="/find")
    @ResponseBody
    public Student findOne(@RequestParam("id") Integer id) {
    	return studentService.findOne(id);
    }

 
}