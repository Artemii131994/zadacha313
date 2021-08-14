package zadacha_springrest_spring_boot_one.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import zadacha_springrest_spring_boot_one.model.User;
import zadacha_springrest_spring_boot_one.service.UserServiceDao;
import javax.validation.Valid;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("")
public class RestMController {

    private UserServiceDao userServiceDao;

    @Autowired
    public RestMController(UserServiceDao userServiceDao) {
        this.userServiceDao = userServiceDao;

    }

//    @GetMapping("/user")
//    public ResponseEntity<User> showAllUser(Model model, Principal userUSS) {
//        model.addAttribute("user_user", userServiceDao.ByUserName(userUSS.getName()));
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

    @GetMapping("/allUsers")
    public List<User> showAllUser(Model model) {
//        model.addAttribute("thisUser", thisUser);
        model.addAttribute("allUser", userServiceDao.getAllUser());
        return userServiceDao.getAllUser();
    }

    @GetMapping("/getUser/{id}")
    public User getUser(@PathVariable Long id) {
        return userServiceDao.getUser(id);
    }

    @PostMapping("/new")
    public User saveUser(@RequestBody User user){
//                           @RequestParam("role") String[] role) {
//        userServiceDao.byRole(user, role);
//        User user1 = new User();
         userServiceDao.add(user);
         return user;
    }


    @PutMapping("/updateSave/{id}")
    public User edit(@RequestBody User user) {
//        userServiceDao.byRole(user, role);
         userServiceDao.update(user);
         return user;
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable(name = "id") Long id) {
        userServiceDao.deleteUser(id);

    }

}
