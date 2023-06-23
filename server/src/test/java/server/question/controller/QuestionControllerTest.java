//package server.question.controller;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.test.web.servlet.MockMvc;
//import server.question.entity.Question;
//import server.question.mapper.QuestionMapper;
//import server.question.repository.dto.QuestionDto;
//import server.question.service.QuestionService;
//
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.*;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.*;
//import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@WebMvcTest(QuestionController.class)
//class QuestionControllerTest {
//  @Autowired
//  MockMvc mockMvc;
//
//  @Autowired
//  ObjectMapper objectMapper;
//
//  @MockBean
//  QuestionService questionService;
//
//  @MockBean
//  QuestionMapper mapper;
//
//  @Test
//  public void testCreateQuestion() throws Exception {
//    // Given
//    QuestionDto.Post questionDto = new QuestionDto.Post(); // setup your DTO
//    Question question = new Question(); // setup your Question entity
//    // setup your user
//    UserDetails user = User.builder()
//            .username("testUser")
//            .password("password")
//            .authorities(List.of(new SimpleGrantedAuthority("ROLE_USER")))
//            .build();
//
//    when(mapper.questionPostToQuestion(questionDto)).thenReturn(question);
//    when(questionService.createQuestion(any(Question.class), any(UserDetails.class))).thenReturn(question);
//
//    // Perform post request
//    mockMvc.perform(post("/question")
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .content(objectMapper.writeValueAsString(questionDto)))
//            .andExpect(status().isCreated());
//
//    verify(questionService, times(1)).createQuestion(any(Question.class), any(UserDetails.class));
//  }
//}