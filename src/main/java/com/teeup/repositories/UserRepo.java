package com.teeup.repositories;

import com.teeup.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by BUBBABAIRD on 6/1/17.
 */
public interface UserRepo extends CrudRepository<User, Integer> {

    // Does this need to be String "user" or something else
    // for it to work ????

    // findFirstByUserName -where are the other options located????
    User findFirstByUserName(String name);
}
