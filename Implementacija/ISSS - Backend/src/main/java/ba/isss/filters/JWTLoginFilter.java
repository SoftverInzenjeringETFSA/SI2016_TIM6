package ba.isss.filters;

import ba.isss.services.TokenAuthenticationService;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Collections;

/**
 * Created by Edin on 18.05.2017..
 */
public class JWTLoginFilter extends AbstractAuthenticationProcessingFilter {

    public JWTLoginFilter(String url, AuthenticationManager authManager) {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
    }

    @Override
    public Authentication attemptAuthentication(
            HttpServletRequest req, HttpServletResponse res)
            throws AuthenticationException, IOException, ServletException {
        AccountCredentials creds;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        res.setHeader("Access-Control-Max-Age", "3600");
        res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept, X-Requested-With, remember-me, Access-Control-Allow-Headers, Origin, Access-Control-Request-Method, Access-Control-Request-Headers");
        res.setHeader("Access-Control-Expose-Headers", "Authorization");

        if(!req.getMethod().equals("POST")) {
            creds = new AccountCredentials();
            creds.setUsername("");
            creds.setPassword("");
        } else {
            creds = new ObjectMapper().readValue(req.getInputStream(), AccountCredentials.class);
        }

        String password = creds.getPassword().toString();
        StringBuffer sb = new StringBuffer();
        try {
			MessageDigest messageDigest = MessageDigest.getInstance("MD5");
			messageDigest.update(password.getBytes("UTF-8"));
			byte[] digest = messageDigest.digest();
			
			for (int i = 0; i < digest.length; i++)
			        sb.append(Integer.toString((digest[i] & 0xff) + 0x100, 16).substring(1));

		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
                
        
        return getAuthenticationManager().authenticate(
                new UsernamePasswordAuthenticationToken(
                        creds.getUsername(),
                        sb.toString(),
                        Collections.emptyList()
                )
        );
    }

    @Override
    protected void successfulAuthentication(
            HttpServletRequest req,
            HttpServletResponse res, FilterChain chain,
            Authentication auth) throws IOException, ServletException {
        TokenAuthenticationService
                .addAuthentication(res, auth.getName());
    }
}

