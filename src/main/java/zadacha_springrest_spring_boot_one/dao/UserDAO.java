package zadacha_springrest_spring_boot_one.dao;

import zadacha_springrest_spring_boot_one.model.User;

import java.util.List;

public interface UserDAO {
    public List<User> getAllUser();

    public User getUser(Long id);

    public void update(User user);

    public void deleteUser(Long id);

    public User ByUserName(String s);

    public void add(User user);

}
