package com.blog.blog_app.service;

import com.blog.blog_app.entity.User;
import org.springframework.stereotype.Service;
import java.util.List;
import com.blog.blog_app.entity.Post;
import com.blog.blog_app.repository.PostRepository;

@Service
public class PostService {

    private final PostRepository repo;

    public PostService(PostRepository repo) {
        this.repo = repo;
    }

    public List<Post> getAllPosts() {
        return repo.findAll();
    }
    public List<Post> getPostsByUser(User user) {
        return repo.findByUser(user);
    }

    public Post createPost(Post post) {
        return repo.save(post);
    }

    public void deletePost(Long id) {
        repo.deleteById(id);
    }
    public Post getById(Long id) {
        return repo.findById(id).orElseThrow();
    }
}