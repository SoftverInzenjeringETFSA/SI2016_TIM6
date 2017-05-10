package ba.isss.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Predmet;
import ba.isss.models.Student;
import ba.isss.services.PredmetService;
import ba.isss.services.StudentService;

@RestController
@RequestMapping(path="/predmet")
public class PredmetiController {
	
		@Autowired
	    private PredmetService studentService;
	 
	    @RequestMapping(path="/findall")
	    public Iterable<Predmet> findAll() {
	    	return studentService.findAll();
	    }
	    
	    @RequestMapping(value="/find")
	    @ResponseBody
	    public Predmet findOne(@RequestParam("id") Integer id) {
	    	return studentService.findOne(id);
	    }

}
