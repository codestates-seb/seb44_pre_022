package server.questionPost.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.questionPost.entity.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

  Post findPostById(Long postId);
}
