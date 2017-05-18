package ba.isss.services;

import ba.isss.models.Student;
import ba.isss.repositories.StudentRepository;
import com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithm;
import io.jsonwebtoken.Jwts;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import static io.jsonwebtoken.SignatureAlgorithm.HS512;
import static java.util.Collections.emptyList;

/**
 * Created by Edin on 18.05.2017..
 */
public class TokenAuthenticationService {

    private static StudentRepository studentRepository;

    static final long EXPIRATIONTIME = 864_000_000; // 10 days
    static final String SECRET = "ThisIsASecret";
    static final String TOKEN_PREFIX = "Bearer";
    static final String HEADER_STRING = "Authorization";

    public static void addAuthentication(HttpServletResponse res, String username) {
        String JWT = Jwts.builder()
                .setSubject(username)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(HS512, SECRET)
                .compact();
        res.addHeader(HEADER_STRING, TOKEN_PREFIX + " " + JWT);
    }

    public static Authentication getAuthentication(HttpServletRequest request) {
        ServletContext servletContext = request.getServletContext();
        WebApplicationContext webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);
        studentRepository = webApplicationContext.getBean(StudentRepository.class);

        String token = request.getHeader(HEADER_STRING);
        if (token != null) {
            // parse the token.
            String user = Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                    .getBody()
                    .getSubject();
            Student student = studentRepository.findStudentByUsername(user);
            Collection<GrantedAuthority> authorities = new ArrayList<>();
            if(student != null) {
                authorities.add(new SimpleGrantedAuthority("ROLE_STUDENT"));
            }

            return user != null ?
                    new UsernamePasswordAuthenticationToken(user, null, authorities) :
                    null;

        }
        return null;
    }

}
