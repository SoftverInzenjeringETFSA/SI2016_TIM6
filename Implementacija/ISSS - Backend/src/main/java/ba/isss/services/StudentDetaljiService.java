package ba.isss.services;

import ba.isss.models.Student;
import ba.isss.repositories.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by Edin on 18.05.2017..
 */
@Service
public class StudentDetaljiService implements UserDetailsService{

    @Autowired
    private StudentRepository studentRepository;
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Student student = studentRepository.findStudentByUsername(s);
        if (student == null)
        {
            throw  new UsernameNotFoundException("Student s datim username-om nije pronadjen");
        }
        return  new User(student.getUsername(), student.getPassword(), getGrantedAuthorities(student));
    }

    private Collection<GrantedAuthority> getGrantedAuthorities(Student student) {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
           if(student != null) {
            authorities.add(new SimpleGrantedAuthority("ROLE_STUDENT"));
        }
        return authorities;
    }

}
