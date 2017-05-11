package ba.isss.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Ispit;
import ba.isss.services.IspitService;

@RestController
@CrossOrigin
@RequestMapping(path="/ispit")
public class IspitiController {
	
	@Autowired
    private IspitService ispitService;
    
    @RequestMapping(value="/find")
    @ResponseBody
    public Iterable<Ispit> find(@RequestParam("student_id") Integer id) {
    	return ispitService.findByStudent(id);
    }
}
