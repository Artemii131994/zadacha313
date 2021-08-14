package zadacha_springrest_spring_boot_one.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import zadacha_springrest_spring_boot_one.dao.RoleDAO;
import zadacha_springrest_spring_boot_one.dao.UserDAO;
import zadacha_springrest_spring_boot_one.model.Role;
import zadacha_springrest_spring_boot_one.model.User;


import java.util.List;
import java.util.Set;

@Service
public class UserServiceDaoImpl implements UserServiceDao {


    private UserDAO userDAO;
    private RoleDAO roleDAO;
    private PasswordEncoder passwordEncoder;


    @Autowired
    public UserServiceDaoImpl(UserDAO userDAO, RoleDAO roleDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.roleDAO = roleDAO;
        this.passwordEncoder = passwordEncoder;

    }

    @Override
    @Transactional(readOnly = true)
    public List<User> getAllUser() {
        return userDAO.getAllUser();
    }


    @Override
    @Transactional(readOnly = true)
    public User getUser(Long id) {
        return userDAO.getUser(id);
    }

    @Override
    @Transactional
    public void update(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userDAO.update(user);

    }

    @Override
    @Transactional
    public void deleteUser(Long id) {
        userDAO.deleteUser(id);
    }

    @Override
    @Transactional
    public Role getByName(String name) {
        return roleDAO.getByName(name);
    }

    @Override
    @Transactional
    public Set<Role> byRole(User user, String[] role) {
        return roleDAO.byRole(user, role);
    }

    @Override
    @Transactional
    public void add(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userDAO.add(user);


    }

    @Override
    @Transactional
    public User ByUserName(String s) {
        return userDAO.ByUserName(s);
    }
}
