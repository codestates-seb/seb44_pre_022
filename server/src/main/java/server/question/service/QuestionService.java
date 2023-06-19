package server.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.question.entity.Question;
import server.question.exception.ExceptionCode;
import server.question.repository.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionService {

  private final QuestionRepository questionRepository;

  public Question createPost(Question question) {
    Question saveQuestion = questionRepository.save(question);
    return saveQuestion;
  }

  @Transactional(readOnly = true)
  public Question findPost(long postId) {
    Question findQuestion = questionRepository.findPostById(postId);
    return findQuestion;
  }

  @Transactional(readOnly = true)
  public List<Question> findAllPosts() {

  }

  public void deletePost(long postId) {
    Question findQuestion = findVerifiedPost(postId);
    questionRepository.delete(findQuestion);
  }

  @Transactional(readOnly = true)
  public Question findVerifiedPost(long postId) {
    Optional<Question> optionalPost = questionRepository.findById(postId);
    Question findQuestion = optionalPost.orElseThrow(() -> new IllegalArgumentException(ExceptionCode.POST_NOT_FOUND.getMessage()));
    return findQuestion;
  }

  private void verifyExistsPost() {

  }
}
