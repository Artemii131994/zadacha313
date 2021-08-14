package zadacha_springrest_spring_boot_one.dao;

import zadacha_springrest_spring_boot_one.model.Role;
import zadacha_springrest_spring_boot_one.model.User;

import java.util.Set;

public interface RoleDAO {

    public Role getByName(String name);

    public Set<Role> byRole(User user, String[] role);

}

