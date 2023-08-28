package personal.work.fiona.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController /*inform system that it is using rest api*/
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}
//	@GetMapping("/root") /*inform system it's a get end point in route "/", so we can change it to any other routes */
//	public String apiRoot(){
//		return "Hello World!";
//	}
}