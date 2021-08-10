package zadacha_springrest_spring_boot_one.service;



import zadacha_springrest_spring_boot_one.model.Role;
import zadacha_springrest_spring_boot_one.model.User;

import java.util.List;
import java.util.Set;


public interface UserServiceDao {

    public List<User> getAllUser();

    public User getUser(Long id);

    public void update(User user);

    public void deleteUser(Long id);

    public Role getByName(String name);

    public Set<Role> byRole(User user, String[] role);

    public void add(User user);

    public User ByUserName(String s);
}
