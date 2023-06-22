package server.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import server.member.entity.Member;
import server.member.repository.MemberRepository;
import server.member.service.MemberService;
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
  private final MemberService memberService;

  public Question createQuestion(Question question, UserDetails userDetails) {
    Question saveQuestion = questionRepository.save(question);
    Member findMember = memberService.findMember(userDetails.getUsername());
    saveQuestion.setMember(findMember);
    return saveQuestion;
  }

  @Transactional(readOnly = true)
  public Question findById(long questionId) {
    Question findQuestion = questionRepository.findByQuestionId(questionId);
    return findQuestion;
  }

  @Transactional(readOnly = true)
  public Page<Question> findAllQuestions(int page, int size) {
    return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
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

  public void deleteQuestion(long questionId) {
    Question findQuestion = findVerifiedQuestion(questionId);
    questionRepository.delete(findQuestion);
  }

  @Transactional(readOnly = true)
  public Question findVerifiedQuestion(long questionId) {
    Optional<Question> optionalPost = questionRepository.findById(questionId);
    Question findQuestion = optionalPost.orElseThrow(() -> new IllegalArgumentException(ExceptionCode.POST_NOT_FOUND.getMessage()));
    return findQuestion;
  }

  private void verifyExistsQuestion() {

  }
}