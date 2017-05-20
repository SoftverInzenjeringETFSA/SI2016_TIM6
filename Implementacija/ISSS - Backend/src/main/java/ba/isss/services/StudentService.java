package ba.isss.services;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ba.isss.models.Student;
import ba.isss.repositories.StudentRepository;

@Service
public class StudentService {
    
    @Autowired
    StudentRepository repository;
  
    public Iterable<Student> findAllStudent() {
        return repository.findAll();
    }
    
    public Student findOne(Integer id) {
    	return repository.findOne(id);
	}

	public Student findByUsername (String username)	{
		return repository.findStudentByUsername(username);
	}
	
	public int updatePassword(Integer student_id, String password_hash) {
		return repository.updatePassword(student_id, password_hash);
	}
	
	public static String getMD5(String data) throws NoSuchAlgorithmException {
		MessageDigest messageDigest=MessageDigest.getInstance("MD5");
        messageDigest.update(data.getBytes());
        byte[] digest=messageDigest.digest();
        StringBuffer sb = new StringBuffer();
		for (int i = 0; i < digest.length; i++)
	        sb.append(Integer.toString((digest[i] & 0xff) + 0x100, 16).substring(1));
		
        return sb.toString();
	}
}