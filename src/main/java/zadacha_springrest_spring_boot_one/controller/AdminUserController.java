package zadacha_springrest_spring_boot_one.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import zadacha_springrest_spring_boot_one.service.UserServiceDao;
import zadacha_springrest_spring_boot_one.service.UserServiceDaoImpl;

import java.security.Principal;

@Controller
@RequestMapping("")
public class AdminUserController {

    private UserServiceDao userServiceDao;

    @Autowired
    public AdminUserController(UserServiceDao userServiceDao) {
        this.userServiceDao = userServiceDao;
    }

    @GetMapping("/admin")
    public String showAdmin(ModelMap modelMap, Principal principal) {
        modelMap.addAttribute("user", userServiceDao.ByUserName(principal.getName()));
        return "trapOne";
    }

//    @GetMapping("/user")
//    public String showUser() {
//        return "user";
//    }
}
