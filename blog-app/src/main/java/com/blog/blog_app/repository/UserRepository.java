package com.blog.blog_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.blog.blog_app.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}