package Dashboard.Dashboard;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class RestApiController {

    @RequestMapping(value = "/test/", method = RequestMethod.GET)
    public ResponseEntity<String> listAllUsers() {
        return new ResponseEntity<String>("ceci est un test", HttpStatus.OK);
    }

}
