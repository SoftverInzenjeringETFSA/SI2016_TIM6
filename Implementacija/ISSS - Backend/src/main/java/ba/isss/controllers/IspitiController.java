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
    
    @RequestMapping(value="/find/prijavljeni")
    @ResponseBody
    public Iterable<Ispit> findPrijavljeni(@RequestParam("student_id") Integer id) {
    	return ispitService.findPrijavljeniByStudent(id);
    }
    
    @RequestMapping(value="/find/neprijavljeni")
    @ResponseBody
    public Iterable<Ispit> findNePrijavljeni(@RequestParam("student_id") Integer id) {
    	return ispitService.findNePrijavljeniByStudent(id);
    }
}
