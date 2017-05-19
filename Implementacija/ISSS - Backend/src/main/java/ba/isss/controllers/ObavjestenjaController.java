package ba.isss.controllers;

import ba.isss.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Obavjestenje;
import ba.isss.services.ObavjestenjeService;

import java.security.Principal;

@RestController
@CrossOrigin
@RequestMapping(path="/obavjestenja")
public class ObavjestenjaController {
	

	@Autowired
    private ObavjestenjeService obavjestenjeService;

	@Autowired
    private StudentService studentService;

	// Pristup svim podacima
	@RequestMapping(value="/find")
    @ResponseBody
    public Iterable<Obavjestenje> find(@RequestParam("student_id") Integer id) {
    	return obavjestenjeService.findByStudent(id);
    }

    // Pregled obavjestenja prijavljenog studenta
    @PreAuthorize("hasAnyRole('ROLE_STUDENT')")
    @RequestMapping(value="/pregled")
    @ResponseBody
    public Iterable<Obavjestenje> find(Principal principal) {
        return obavjestenjeService.findByStudent(studentService.findByUsername(principal.getName()).getId());
    }


}
