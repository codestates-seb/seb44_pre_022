package server.questionPost.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.questionPost.entity.Post;
import server.questionPost.exception.ExceptionCode;
import server.questionPost.repository.PostRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionPostService {

  private final PostRepository postRepository;

  public Post createPost(Post post) {
    Post savePost = postRepository.save(post);
    return savePost;
  }

  @Transactional(readOnly = true)
  public Post findPost(long postId) {
    Post findPost = postRepository.findPostById(postId);
    return findPost;
  }

  @Transactional(readOnly = true)
  public List<Post> findAllPosts() {

  }

  public void deletePost(long postId) {
    Post findPost = findVerifiedPost(postId);
    postRepository.delete(findPost);
  }

  @Transactional(readOnly = true)
  public Post findVerifiedPost(long postId) {
    Optional<Post> optionalPost = postRepository.findById(postId);
    Post findPost = optionalPost.orElseThrow(() -> new IllegalArgumentException(ExceptionCode.POST_NOT_FOUND.getMessage()));
    return findPost;
  }

  private void verifyExistsPost() {

  }
}
