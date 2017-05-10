package ba.isss.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Obavjestenje;
import ba.isss.models.Pohadjanje;
import ba.isss.services.ObavjestenjeService;
import ba.isss.services.PohadjanjeService;

@RestController
@RequestMapping(path="/pohadjanje")
public class PohadjanjeController {
	
	@Autowired
    private PohadjanjeService studentService;
 
    @RequestMapping(path="/findall")
    public Iterable<Pohadjanje> findAll() {
    	return studentService.findAll();
    }
    
    @RequestMapping(value="/find")
    @ResponseBody
    public Pohadjanje findAllByStudent(@RequestParam("id") Integer id) {
    	return studentService.findOne(id);
    }
}
