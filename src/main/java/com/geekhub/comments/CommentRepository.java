package com.geekhub.comments;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class CommentRepository {

    private List<Comment> comments = new ArrayList<>();

    public void save(Comment comment) {
        comments.add(comment);
    }

    public List<Comment> find(int count) {
        return comments.stream()
                .limit(count)
                .sorted(Comparator.comparing(Comment::getDate).reversed())
                .collect(Collectors.toList());
    }
}
