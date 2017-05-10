package ba.isss.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.dto.PredmetDto;
import ba.isss.dto.PredmetSemestarDto;
import ba.isss.models.Obavjestenje;
import ba.isss.models.Pohadjanje;
import ba.isss.services.ObavjestenjeService;
import ba.isss.services.PohadjanjeService;
import ba.isss.services.PredmetService;

@RestController
@CrossOrigin
@RequestMapping(path="/pohadjanje")
public class PohadjanjeController {
	
	@Autowired
    private PredmetService predmetService;
	
    @RequestMapping(value="/find")
    @ResponseBody
    public Iterable<PredmetSemestarDto> findAllByStudent(@RequestParam("id") Integer id) {
    	return predmetService.findAllSemesters(id);
    }
}
