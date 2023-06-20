package server.question.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.member.repository.dto.MemberDto;
import server.question.entity.Question;
import server.question.mapper.QuestionMapper;
import server.question.repository.dto.QuestionDto;
import server.question.service.QuestionService;

import javax.validation.Valid;

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

  private final QuestionService questionService;
  private final QuestionMapper mapper;

  @PostMapping
  public ResponseEntity createQuestion(@Valid QuestionDto.Post questionDto,
                                       @Valid MemberDto.Post memberDto) {
    Question question = questionService.createQuestion(mapper.questionPostToQuestion(questionDto));
    log.info("question: {}", question.toString());
    return ResponseEntity.ok().build();
  }

}
