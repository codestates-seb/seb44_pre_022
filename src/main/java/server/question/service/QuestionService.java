package server.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.question.entity.Question;
import server.question.exception.ExceptionCode;
import server.question.repository.QuestionRepository;
import server.question.repository.dto.QuestionDto;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionService {

  private final QuestionRepository questionRepository;

  public Question createQuestion(Question question) {
    Question saveQuestion = questionRepository.save(question);
    return saveQuestion;
  }

  @Transactional(readOnly = true)
  public Question findById(long postId) {
    Question findQuestion = questionRepository.findByQuestionId(postId);
    return findQuestion;
  }

  @Transactional(readOnly = true)
  public List<Question> findAllQuestions() {
    return questionRepository.findAll();
  }

  public Question updateQuestion(Question question) {
    Question getQuestion = questionRepository.findById(question.getQuestionId())
            .orElseThrow(() -> new IllegalArgumentException(ExceptionCode.POST_NOT_FOUND.getMessage()));
    Optional.ofNullable(question.getTitle())
            .ifPresent(getQuestion::setTitle);
    Optional.ofNullable(question.getContent())
            .ifPresent(getQuestion::setContent);

    Question findQuestion = questionRepository.save(getQuestion);
    return findQuestion;
  }

  public void deleteQuestion(long postId) {
    Question findQuestion = findVerifiedQuestion(postId);
    questionRepository.delete(findQuestion);
  }

  @Transactional(readOnly = true)
  public Question findVerifiedQuestion(long postId) {
    Optional<Question> optionalPost = questionRepository.findById(postId);
    Question findQuestion = optionalPost.orElseThrow(() -> new IllegalArgumentException(ExceptionCode.POST_NOT_FOUND.getMessage()));
    return findQuestion;
  }

  private void verifyExistsQuestion() {

  }
}
