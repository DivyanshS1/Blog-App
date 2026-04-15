package com.blog.blog_app.controller;

import com.blog.blog_app.entity.User;
import org.springframework.web.bind.annotation.*;
import com.blog.blog_app.entity.Post;
import com.blog.blog_app.service.PostService;
import com.blog.blog_app.repository.UserRepository;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService service;
    private final UserRepository userRepository;

    public PostController(PostService service, UserRepository userRepository) {
        this.service = service;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Post> getPosts(@RequestHeader("Authorization") String token) {

        String username = com.blog.blog_app.security.JwtUtil
                .extractUsername(token.replace("Bearer ", ""));

        User user = userRepository.findByUsername(username).orElseThrow();

        return service.getPostsByUser(user);
    }
    @PostMapping
    public Post createPost(
            @RequestBody Post post,
            @RequestHeader("Authorization") String token
    ) {
        String username = com.blog.blog_app.security.JwtUtil
                .extractUsername(token.replace("Bearer ", ""));

        User user = userRepository.findByUsername(username).orElseThrow();

        post.setUser(user);

        return service.createPost(post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id) {
        service.deletePost(id);
    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable Long id, @RequestBody Post updatedPost) {
        Post post = service.getById(id);
        post.setTitle(updatedPost.getTitle());
        post.setContent(updatedPost.getContent());
        return service.createPost(post);
    }
}