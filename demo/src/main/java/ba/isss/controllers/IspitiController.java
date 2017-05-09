package ba.isss.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Ispit;

@RestController
public class IspitiController {

    private static final String template = "Hello, %s!";

    @RequestMapping("/greeting")
    public Ispit greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Ispit(1, String.format(template, name));
    }
}
