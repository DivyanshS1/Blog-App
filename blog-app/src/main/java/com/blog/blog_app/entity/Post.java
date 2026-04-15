package com.blog.blog_app.entity;

import jakarta.persistence.*;
import lombok.*;
import jakarta.persistence.ManyToOne;



@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Post {
    @ManyToOne
    private User user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 5000)
    private String content;
}