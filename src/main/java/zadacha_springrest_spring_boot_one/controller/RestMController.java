package zadacha_springrest_spring_boot_one.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import zadacha_springrest_spring_boot_one.model.User;
import zadacha_springrest_spring_boot_one.service.UserServiceDao;

import java.util.List;

@RestController
@RequestMapping("")
public class RestMController {

    private UserServiceDao userServiceDao;

    @Autowired
    public RestMController(UserServiceDao userServiceDao) {
        this.userServiceDao = userServiceDao;

    }

    @GetMapping("/allUsers")
    public ResponseEntity<List<User>> showAllUser(Model model) {
        model.addAttribute("allUser", userServiceDao.getAllUser());
        List<User> users = userServiceDao.getAllUser();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/new")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        userServiceDao.add(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/updateSave/{id}")
    public ResponseEntity<User> edit(@RequestBody User user) {
        userServiceDao.update(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable(name = "id") Long id) {
        userServiceDao.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
