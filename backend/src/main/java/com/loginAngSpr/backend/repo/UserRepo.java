package com.loginAngSpr.backend.repo;

import com.loginAngSpr.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, String>{

    public User findByUserId(String userId);
    
}