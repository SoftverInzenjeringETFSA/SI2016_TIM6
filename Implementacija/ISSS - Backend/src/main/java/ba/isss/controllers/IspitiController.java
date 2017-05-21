package ba.isss.controllers;

import ba.isss.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Ispit;
import ba.isss.services.IspitService;

import java.security.Principal;

@RestController
@CrossOrigin
@RequestMapping(path="/ispit")
public class IspitiController {
	
	@Autowired
    private IspitService ispitService;

    @Autowired
    private StudentService studentService;

    /*** Metode koje se primjenjuju na sve studente ***/
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

    /*** Metode koje se primjenjuju na prijavljenog studenta ***/
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @RequestMapping(value="/prijavljeni")
    @ResponseBody
    public Iterable<Ispit> findPrijavljeni(Principal principal) {
        return ispitService.findPrijavljeniByStudent(studentService.findByUsername(principal.getName()).getId());
    }

    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @RequestMapping(value="/neprijavljeni")
    @ResponseBody
    public Iterable<Ispit> findNePrijavljeni(Principal principal) {
        return ispitService.findNePrijavljeniByStudent(studentService.findByUsername(principal.getName()).getId());
    }

    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @RequestMapping(value="/historija")
    @ResponseBody
    public Iterable<Ispit> findHistorija(Principal principal) {
    	return ispitService.findPrijavljeniForStudentByTermin(studentService.findByUsername(principal.getName()).getId());
    }
}
