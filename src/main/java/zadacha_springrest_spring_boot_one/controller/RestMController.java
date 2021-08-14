package zadacha_springrest_spring_boot_one.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
    public List<User> showAllUser(Model model) {
        model.addAttribute("allUser", userServiceDao.getAllUser());
        return userServiceDao.getAllUser();
    }

    @GetMapping("/getUser/{id}")
    public User getUser(@PathVariable Long id) {
        return userServiceDao.getUser(id);
    }

    @PostMapping("/new")
    public User saveUser(@RequestBody User user) {
        userServiceDao.add(user);
        return user;
    }


    @PutMapping("/updateSave/{id}")
    public User edit(@RequestBody User user) {
        userServiceDao.update(user);
        return user;
    }

    @DeleteMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable(name = "id") Long id) {
        userServiceDao.deleteUser(id);
    }
}
