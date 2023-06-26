package server.question.controller;
/*
import com.google.gson.*;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import server.member.entity.Member;
import server.member.service.MemberService;
import server.question.entity.Question;
import server.question.mapper.QuestionMapper;
import server.question.repository.dto.QuestionDto;
import server.question.service.QuestionService;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static server.util.RestDocsUtil.getRequestPreProcessor;
import static server.util.RestDocsUtil.getResponsePreProcessor;*/


/*
@Slf4j
@WebMvcTest(QuestionController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
class QuestionControllerTest {
  @Autowired
  private MockMvc mockMvc;
  @Autowired
  private Gson gson;


  @MockBean
  QuestionService questionService;
  @MockBean
  MemberService memberService;

  @MockBean
  QuestionMapper mapper;

  private QuestionDto.Post question;
  private QuestionDto.Response resQuestion;

  private String content;
  private UserDetails user;

  @BeforeEach
  public void setup() {
    log.info("setup");
    question = new QuestionDto.Post("test title 이것은 15자 이상이 되어야한다고 합니다.",
            "test content를 220자 이상 채워야해서 저는 아무 말이나 써보려고 합니다. 반갑습니다. 이상입니다. 뭐 딱히 API명세서를 작성하면서 할말은 없는 것 같습니다." +
                    "그래서 이제는 Lorem으로 나머지를 채워보려 합니다. 지금까지 감사했습니다." +
                    "Lorem tortor at auctor urna nunc id cursus metus aliquam eleifend mi " +
                    "in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis" +
                    " at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh" +
                    " nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique" +
                    " senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa" +
                    " massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur " +
                    "adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas" +
                    " integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis", 1L); // setup Question DTO
    gson = new GsonBuilder()
            .registerTypeAdapter(LocalDateTime.class, new JsonSerializer<LocalDateTime>() {
              @Override
              public JsonElement serialize(LocalDateTime localDateTime, Type type, JsonSerializationContext jsonSerializationContext) {
                return new JsonPrimitive(DateTimeFormatter.ISO_LOCAL_DATE_TIME.format(localDateTime));
              }
            })
            .registerTypeAdapter(LocalDateTime.class, new JsonDeserializer<LocalDateTime>() {
              @Override
              public LocalDateTime deserialize(JsonElement jsonElement, Type type, JsonDeserializationContext jsonDeserializationContext) throws JsonParseException {
                return LocalDateTime.parse(jsonElement.getAsString(), DateTimeFormatter.ISO_LOCAL_DATE_TIME);
              }
            })
            .create();
    question.setAuditable(LocalDateTime.now(), LocalDateTime.now());
    content = gson.toJson(question); // convert to json
    log.info("content : {}", content);
    // setup user from spring security
    user = User.builder()
            .username("testUser@gmail.com")
            .password("test1234")
            .authorities(List.of(new SimpleGrantedAuthority("ROLE_USER")))
            .build();
    resQuestion = new QuestionDto.Response(
            1L,
            question.getTitle(),
            question.getContent(),
            0,
            0,
            new Member(user.getUsername(), user.getPassword(), "testUser")
    );
    resQuestion.setAuditable(LocalDateTime.now(), LocalDateTime.now());
    resQuestion.getMember().setAuditable(LocalDateTime.now(), LocalDateTime.now());
    log.info("close setup");
  }

  @Test
  @DisplayName("질문글 생성")
  public void testCreateQuestion() throws Exception {
    // Given
    given(mapper.questionPostToQuestion(any(QuestionDto.Post.class))).willReturn(new Question());
    given(questionService.createQuestion(any(Question.class), any(UserDetails.class))).willReturn(new Question());

    // Perform post request
    ResultActions actions = mockMvc.perform(post("/question")
            .contentType(MediaType.APPLICATION_JSON)
            .accept(MediaType.APPLICATION_JSON)
            .with(user(user))
            .content(content)
    );

    // Verify
    actions
            .andExpect(status().isCreated())
            .andDo(print())
            .andDo(document(
                    "question-create",
                    getRequestPreProcessor(),
                    getResponsePreProcessor(),
                    // request fields
                    requestFields(
                            List.of(
                                    fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                    fieldWithPath("content").type(JsonFieldType.STRING).description("질문 내용"),
                                    fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("질문 작성자 ID"),
                                    fieldWithPath("createdAt").type(JsonFieldType.STRING).description("질문 작성일"),
                                    fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("질문 수정일")
                            )
                    ),
                    // response fields
                    responseHeaders(
                            // 등록된 질문글의 ID를 Location 헤더에 담아서 응답
                            headerWithName(HttpHeaders.LOCATION).description("Location header")
                    )
            ));
    verify(questionService, times(1)).createQuestion(any(Question.class), any(UserDetails.class));
  }

  @Test
  @DisplayName("질문글 조회")
  public void testGetQuestion() throws Exception {
    // Given
    when(questionService.findById(anyLong())).thenReturn(new Question());
    given(mapper.questionToQuestionResponse(any(Question.class))).willReturn(resQuestion);


    // Perform get request
    ResultActions actions = mockMvc.perform(
            RestDocumentationRequestBuilders
                    .get("/question/{questionId}", resQuestion.getQuestionId())
                    .accept(MediaType.APPLICATION_JSON)
    );

    // Verify
    actions
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.questionId").value(resQuestion.getQuestionId()))
            .andExpect(jsonPath("$.title").value(resQuestion.getTitle()))
            .andExpect(jsonPath("$.content").value(resQuestion.getContent()))
            .andExpect(jsonPath("$.hit").value(resQuestion.getHit()))
            .andExpect(jsonPath("$.vote").value(resQuestion.getVote()))
            .andExpect(jsonPath("$.member.alias").value(resQuestion.getMember().getAlias()))
            .andDo(print())
            .andDo(document(
                    "question-get",
                    getRequestPreProcessor(),
                    getResponsePreProcessor(),
                    pathParameters(
                            parameterWithName("questionId").description("질문글 ID")
                    ),
                    responseFields(
                            List.of(
                                    fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문글 ID"),
                                    fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                    fieldWithPath("content").type(JsonFieldType.STRING).description("질문 내용"),
                                    fieldWithPath("hit").type(JsonFieldType.NUMBER).description("조회수"),
                                    fieldWithPath("vote").type(JsonFieldType.NUMBER).description("추천수"),
                                    fieldWithPath("createdAt").type(JsonFieldType.STRING).description("생성일"),
                                    fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정일"),
                                    fieldWithPath("member.id").type(JsonFieldType.NUMBER).description("질문글 작성자 ID"),
                                    fieldWithPath("member.email").type(JsonFieldType.STRING).description("질문글 작성자 이메일"),
                                    fieldWithPath("member.password").type(JsonFieldType.STRING).description("질문글 작성자 비밀번호"),
                                    fieldWithPath("member.alias").type(JsonFieldType.STRING).description("질문글 작성자 닉네임"),
                                    fieldWithPath("member.createdAt").type(JsonFieldType.STRING).description("질문글 작성자 생성일"),
                                    fieldWithPath("member.modifiedAt").type(JsonFieldType.STRING).description("질문글 작성자 수정일")
                            )
                    )
            ));
    verify(questionService, times(1)).findById(resQuestion.getQuestionId());
  }

  @Test
  @DisplayName("질문글 전체 조회")
  public void getAllQuestions() throws Exception {
    // Given
    // setup question and add Member at question1
    Question question1 = new Question(question.getTitle(), question.getContent(), new Member(user.getUsername(), user.getPassword(), "testUser"));
    question1.setAuditable(LocalDateTime.now(), LocalDateTime.now());
    question1.getMember().setAuditable(LocalDateTime.now(), LocalDateTime.now());
    QuestionDto.Response resQuestion1 = new QuestionDto.Response(
            question1.getQuestionId(),
            question1.getTitle(),
            question1.getContent(),
            question1.getHit(),
            question1.getVote(),
            new Member(user.getUsername(), user.getPassword(), question1.getMember().getAlias())
    );
    log.info("resQuestion1.getQuestionId() : {}", resQuestion1.getQuestionId());
    log.info("resQuestion1.getMember().getAlias() : {}", resQuestion1.getMember().getAlias());
    // setup question and add Member at question2
    // setup new Question
    Question question2 = new Question("test title 이것은 두번째 질문입니다.",
            "아주 신나는 본문을 작성해야하는 시간이 왔습니다. 제가 이것을 두번이나 작성하게 될 줄은 몰랐는데요. QuestionTestCode 작성 당시" +
                    "이렇게 작성하기 싫어서 Validation을 생략했다가 빌드에러를 만나게 해드렸습니다. 죄송스럽게 생각하고 있습니다." +
                    "하지만 API명세서에서 그럴 수는 없어서 이렇게 작성 중입니다. 뭐 어느정도 채운 것 같습니다. 이제부터 Lorem으로 좀 채워보겠습니다." +
                    "Lorem tortor at auctor urna nunc id cursus metus aliquam eleifend mi " +
                    "in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis" +
                    " at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh" +
                    " nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique" +
                    " senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa" +
                    " massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur " +
                    "adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas" +
                    "혹시 220자가 되지 않을까봐 조금 더 작성해보았습니다. 지금까지 이런 긴 글을 읽어 주셔서 감사합니다.",
            memberService.findMember(user.getUsername())); // setup Question  DTO
    QuestionDto.Response resQuestion2 = new QuestionDto.Response(
            question2.getQuestionId(),
            question2.getTitle(),
            question2.getContent(),
            question2.getHit(),
            question2.getVote(),
            new Member(user.getUsername(), user.getPassword(), "testUser")
    );
    log.info("resQuestion2.getQuestionId() : {}", resQuestion2.getQuestionId());
    log.info("resQuestion2.getMember().getAlias() : {}", resQuestion2.getMember().getAlias());

    resQuestion1.setAuditable(LocalDateTime.now(), LocalDateTime.now());
    resQuestion1.getMember().setAuditable(LocalDateTime.now(), LocalDateTime.now());
    resQuestion2.setAuditable(LocalDateTime.now(), LocalDateTime.now());
    resQuestion2.getMember().setAuditable(LocalDateTime.now(), LocalDateTime.now());

    // setup pagenation
    Page<Question> paging = new PageImpl<>(List.of(question1, question2),
            PageRequest.of(0, 10,
                    Sort.by("createdAt").descending()), List.of(question1, question2).size());


    given(questionService.findAllQuestions(anyInt(), anyInt())).willReturn(paging);
    when(mapper.questionsToQuestionResponses(anyList())).thenReturn(List.of(resQuestion1, resQuestion2));

    // Perform get request
    ResultActions actions = mockMvc.perform(
            RestDocumentationRequestBuilders
                    .get("/question")
                    .param("page", "1")
                    .param("size", "10")
                    .accept(MediaType.APPLICATION_JSON)
    );

    // Verify
    actions
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.data").isArray())
            .andExpect(jsonPath("$.data", hasSize(2)))
            .andDo(print())
            .andDo(document(
                    "question-getAll",
                    getRequestPreProcessor(),
                    getResponsePreProcessor(),
                    requestParameters(
                            parameterWithName("page").description("페이지 번호"),
                            parameterWithName("size").description("페이지 사이즈")
                    ),
                    responseFields(
                            List.of(
                                    fieldWithPath("data").type(JsonFieldType.ARRAY).description("결과 데이터"),
                                    fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("질문글 ID"),
                                    fieldWithPath("data[].title").type(JsonFieldType.STRING).description("질문 제목"),
                                    fieldWithPath("data[].content").type(JsonFieldType.STRING).description("질문 내용"),
                                    fieldWithPath("data[].hit").type(JsonFieldType.NUMBER).description("조회수"),
                                    fieldWithPath("data[].vote").type(JsonFieldType.NUMBER).description("추천수"),
                                    fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("생성일"),
                                    fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("수정일"),
                                    fieldWithPath("data[].member.id").type(JsonFieldType.NUMBER).description("질문글 작성자 ID"),
                                    fieldWithPath("data[].member.email").type(JsonFieldType.STRING).description("질문글 작성자 이메일"),
                                    fieldWithPath("data[].member.password").type(JsonFieldType.STRING).description("질문글 작성자 비밀번호"),
                                    fieldWithPath("data[].member.alias").type(JsonFieldType.STRING).description("질문글 작성자 닉네임"),
                                    fieldWithPath("data[].member.createdAt").type(JsonFieldType.STRING).description("질문글 작성자 생성일"),
                                    fieldWithPath("data[].member.modifiedAt").type(JsonFieldType.STRING).description("질문글 작성자 수정일"),
                                    fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                    fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 번호"),
                                    fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 크기"),
                                    fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("전체 요소 수"),
                                    fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("전체 페이지 수")
                            )
                    )
            ));
    verify(questionService, times(1)).findAllQuestions(0, 10);
  }

  @Test
  @DisplayName("질문글 수정")
  public void testPatchQuestion() throws Exception {
    // Given
    QuestionDto.Patch patchQuestion = new QuestionDto.Patch(
            1L,
            "본문 내용을 변경하면 찾지 못하실 것 같아 제목을 수정해 보겠습니다.",
            question.getContent(),
            memberService.findMember(user.getUsername()));
    String content = gson.toJson(patchQuestion); // convert to json

    // Perform patch request
    given(mapper.questionPatchToQuestion(any(QuestionDto.Patch.class))).willReturn(new Question());
    given(questionService.updateQuestion(any(Question.class))).willReturn(new Question());
    resQuestion = new QuestionDto.Response(
            resQuestion.getQuestionId(),
            patchQuestion.getTitle(),
            patchQuestion.getContent(),
            resQuestion.getHit(),
            resQuestion.getVote(),
            resQuestion.getMember()
    );
    resQuestion.setCreatedAt(question.getCreatedAt());
    resQuestion.setModifiedAt(LocalDateTime.now());
    given(mapper.questionToQuestionResponse(any(Question.class))).willReturn(resQuestion);


    // Perform patch request
    ResultActions actions = mockMvc.perform(
            RestDocumentationRequestBuilders
                    .patch("/question/{questionId}", resQuestion.getQuestionId())
                    .content(content)
                    .contentType(MediaType.APPLICATION_JSON)
                    .accept(MediaType.APPLICATION_JSON)
    );

    // Verify
    actions
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.questionId").value(resQuestion.getQuestionId()))
            .andExpect(jsonPath("$.title").value(patchQuestion.getTitle()))
            .andExpect(jsonPath("$.content").value(patchQuestion.getContent()))
            .andExpect(jsonPath("$.member.alias").value(resQuestion.getMember().getAlias()))
            .andDo(print())
            .andDo(
                    document(
                            "question-patch",
                            getRequestPreProcessor(),
                            getResponsePreProcessor(),
                            pathParameters(
                                    parameterWithName("questionId").description("질문글 ID")
                            ),
                            requestFields(
                                    fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문글 ID"),
                                    fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                    fieldWithPath("content").type(JsonFieldType.STRING).description("질문 내용")
//                                    fieldWithPath("member.alias").type(JsonFieldType.STRING).description("질문글 작성자 닉네임")
                            ),
                            responseFields(
                                    List.of(
                                            fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문글 ID"),
                                            fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                            fieldWithPath("content").type(JsonFieldType.STRING).description("질문 내용"),
                                            fieldWithPath("member.alias").type(JsonFieldType.STRING).description("질문글 작성자 닉네임"),
                                            fieldWithPath("hit").type(JsonFieldType.NUMBER).description("조회수"),
                                            fieldWithPath("vote").type(JsonFieldType.NUMBER).description("추천수"),
                                            fieldWithPath("createdAt").type(JsonFieldType.STRING).description("생성일"),
                                            fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정일"),
                                            fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문글 ID"),
                                            fieldWithPath("member.id").type(JsonFieldType.NUMBER).description("질문글 작성자 ID"),
                                            fieldWithPath("member.email").type(JsonFieldType.STRING).description("질문글 작성자 이메일"),
                                            fieldWithPath("member.password").type(JsonFieldType.STRING).description("질문글 작성자 비밀번호"),
                                            fieldWithPath("member.alias").type(JsonFieldType.STRING).description("질문글 작성자 닉네임"),
                                            fieldWithPath("member.createdAt").type(JsonFieldType.STRING).description("질문글 작성자 생성일"),
                                            fieldWithPath("member.modifiedAt").type(JsonFieldType.STRING).description("질문글 작성자 수정일")
                                    )
                            )
                    )
            );
  }

  @Test
  @DisplayName("질문글 삭제")
  public void testDeleteQuestion() throws Exception {
    // Given
    doNothing().when(questionService).deleteQuestion(resQuestion.getQuestionId());

    // Perform delete request
    ResultActions actions = mockMvc.perform(
            RestDocumentationRequestBuilders
                    .delete("/question/{questionId}", resQuestion.getQuestionId())
                    .accept(MediaType.APPLICATION_JSON)
    );

    // Verify
    actions
            .andExpect(status().isNoContent())
            .andDo(print())
            .andDo(document(
                    "question-delete",
                    getRequestPreProcessor(),
                    getResponsePreProcessor(),
                    pathParameters(
                            parameterWithName("questionId").description("질문글 ID")
                    )
            ));
  }

  @AfterEach
  public void clear() {
    log.info("clear");
    reset(questionService);
    reset(mapper);
  }
}
*/