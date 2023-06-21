package server.question.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.member.repository.dto.MemberDto;
import server.page.dto.MultiResponseDto;
import server.question.entity.Question;
import server.question.mapper.QuestionMapper;
import server.question.repository.dto.QuestionDto;
import server.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

import static server.utils.UriCreator.createUri;

/**
 * TODO:
 * RequiredArgsConstructor 삭제하기
 */
@RestController
@Slf4j
@Validated
@RequiredArgsConstructor
@RequestMapping("/question")
public class QuestionController {

  private final static String QUESTION_DEFAULT_URI = "/question";
  private final QuestionService questionService;
  private final QuestionMapper mapper;

  @PostMapping
  public ResponseEntity createQuestion(@Valid @RequestBody QuestionDto.Post questionDto) {
    Question question = questionService.createQuestion(mapper.questionPostToQuestion(questionDto));
    log.info("question: {}", question.toString());
    URI uri = createUri(QUESTION_DEFAULT_URI, question.getQuestionId());
    return ResponseEntity.created(uri).build();
  }

  @GetMapping("/{question-id}")
  public ResponseEntity getQuestion(@PathVariable("question-id") @Positive Long questionId) {
    Question findQuestion = questionService.findById(questionId);
    return ResponseEntity.ok(mapper.questionToQuestionResponse(findQuestion));
  }

  @GetMapping
  public ResponseEntity getQuestions(@Positive @RequestParam("page") int page,
                                     @Positive @RequestParam("size") int size) {
    Page<Question> pageQuestion = questionService.findAllQuestions(page - 1, size);
    List<Question> allQuestions = pageQuestion.getContent();
    return ResponseEntity.ok(new MultiResponseDto<>(mapper.questionsToQuestionResponses(allQuestions), pageQuestion));
  }

  @PatchMapping("/{question-id}")
  public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive Long questionId,
                                      @Valid @RequestBody QuestionDto.Patch requestBody) {
    requestBody.
    Question question = questionService.updateQuestion(mapper.questionPatchToQuestion(questionDto));
    return ResponseEntity.ok(mapper.questionToQuestionResponse(question));
  }

  @DeleteMapping("/{question-id}")
  public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive Long questionId) {
    questionService.deleteQuestion(questionId);
    return ResponseEntity.noContent().build();
  }
}
