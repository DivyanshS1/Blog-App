package com.blog.blog_app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.blog.blog_app.entity.Post;
import java.util.List;
import com.blog.blog_app.entity.User;


public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByUser(User user);

}