package com.blog.blog_app.controller;

import org.springframework.web.bind.annotation.*;
import com.blog.blog_app.entity.User;
import com.blog.blog_app.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User u = service.login(user.getUsername(), user.getPassword());

        if (u != null) {
            return com.blog.blog_app.security.JwtUtil.generateToken(u.getUsername());
        }

        return "Invalid credentials";
    }
}