package server.member.controller;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import server.member.entity.Member;
import server.member.repository.dto.MemberDto;
import server.member.mapper.MemberMapper;
import server.member.service.MemberService;

import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static server.util.RestDocsUtil.getRequestPreProcessor;
import static server.util.RestDocsUtil.getResponsePreProcessor;

@Slf4j
@MockBean(JpaMetamodelMappingContext.class)
@WebMvcTest(MemberController.class)
@AutoConfigureRestDocs
public class MemberControllerTest {
  @Autowired
  private MockMvc mockMvc;
  @Autowired
  private Gson gson;

  @MockBean
  private MemberService memberService;

  @MockBean
  private MemberMapper mapper;

  @Test
  public void postMember() throws Exception {
    // given
    MemberDto.Post memberDto = new MemberDto.Post("test@gmail.com","test1234!", "test");
    String content = gson.toJson(memberDto);

    given(mapper.memberPostDtoToMember(Mockito.any(MemberDto.Post.class)))
            .willReturn(new Member());

    given(memberService.createMember(Mockito.any(Member.class)))
            .willReturn(new Member());

    // when
    ResultActions actions = mockMvc.perform(
            MockMvcRequestBuilders.post("/member")
                    .contentType(MediaType.APPLICATION_JSON)
                    .accept(MediaType.APPLICATION_JSON)
                    .content(content)
    );
    // then
    actions
            .andExpect(
                    status().isCreated()
            )
            .andDo(
                    document(
                            "post-member",
                            getRequestPreProcessor(),
                            getResponsePreProcessor(),
                            requestFields(
                              List.of(
                                      fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                      fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
                                      fieldWithPath("alias").type(JsonFieldType.STRING).description("별명")
                              )
                            ),
                            responseHeaders(
                                    headerWithName(HttpHeaders.LOCATION).description("Location")
                            )
                    )
            );
  }

  @Test
  public void pathMember() throws Exception {
    // given
    MemberDto.Patch memberDto = new MemberDto.Patch(1, "test@gmail.com", "test1234!", "test");
    String content = gson.toJson(memberDto);
    // when
    ResultActions actions = mockMvc.perform(
            MockMvcRequestBuilders
                    .patch("/member/1")
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(content)
    );
    // then
    actions.andExpect(
            status().isOk()
    );
  }
  @Test
  public void getMember() throws Exception {
    // given
    MemberDto.Response response = new MemberDto.Response(1, "test@gmail.com", "test1234!", "테스트");
    String content = gson.toJson(response);

    // when
    ResultActions actions = mockMvc.perform(
            MockMvcRequestBuilders.get(
                            "/member/1"
                    )
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(content)
    );
    // then
    actions.andExpect(
            status().isOk()
    );
  }
  @Test
  public void getMembers() throws Exception {
    // given
    List<MemberDto.Response> response = List.of(
            new MemberDto.Response(1, "test@gmail.com", "test1234!", "테스트"),
            new MemberDto.Response(2, "test2@gmail.com", "test1234!", "테스트2")
    );
    String content = gson.toJson(response);

    // when
    ResultActions actions = mockMvc.perform(
            MockMvcRequestBuilders.get(
                            "/member"
                    )
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(content)
    );
    // then
    actions.andExpect(
            status().isOk()
    );
  }
  @Test
  public void deleteMember() throws Exception {
    // when
    ResultActions actions = mockMvc.perform(
            MockMvcRequestBuilders.delete(
                            "/member/1"
                    )
    );
    // then
    actions.andExpect(
            status().isNoContent()
    );
  }
}
