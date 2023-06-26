package server.member.controller;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import server.member.entity.Member;
import server.member.repository.dto.MemberDto;
import server.member.mapper.MemberMapper;
import server.member.service.MemberService;

import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static server.util.RestDocsUtil.getRequestPreProcessor;
import static server.util.RestDocsUtil.getResponsePreProcessor;

@Slf4j
@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
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
            post("/member")
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
  public void patchMember() throws Exception {
    // given
    long memberId = 1L;
    MemberDto.Patch member = new MemberDto.Patch(1L, "test@gmail.com", "test1234!", "test");
    String content = gson.toJson(member);

    given(mapper.memberPatchDtoToMember(Mockito.any(MemberDto.Patch.class)))
            .willReturn(new Member());
    given(memberService.updateMember(Mockito.any(Member.class)))
            .willReturn(new Member());
    MemberDto.Response response = new MemberDto.Response(1, "test2@gmail.com", "test1234!", "test2");
    given(mapper.memberToMemberResponseDto(Mockito.any(Member.class)))
            .willReturn(response);

    log.info(content);
    // when
    ResultActions actions = mockMvc.perform(
            patch("/member/{member-id}", 1L)
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(content)
    );

    // then
    actions
            .andExpect(
                    status().isOk()
            )
            .andDo(
                    document(
                            "patch-member",
                            getRequestPreProcessor(),
                            getResponsePreProcessor(),
                            pathParameters(
                                    parameterWithName("member-id").description("멤버 식별자")
                            ),
                            requestFields(
                                    List.of(
                                            fieldWithPath("id").type(JsonFieldType.NUMBER).description("멤버 식별자").ignored(),
                                            fieldWithPath("email").type(JsonFieldType.STRING).description("이메일").optional(),
                                            fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호").optional(),
                                            fieldWithPath("alias").type(JsonFieldType.STRING).description("별명").optional()
                                    )
                            ),
                            responseFields(
                                    List.of(
                                            fieldWithPath("id").type(JsonFieldType.NUMBER).description("멤버 식별자"),
                                            fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                            fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
                                            fieldWithPath("alias").type(JsonFieldType.STRING).description("별명")
                                    )
                            )
                    )
            );
  }
  @Test
  public void getMember() throws Exception {
    // give
    Member member = new Member( "test@gmail.com", "test1234!", "테스트");
    member.setMemberId(1L);
    String content = gson.toJson(member);

    given(memberService.findMember(Mockito.anyLong()))
            .willReturn(new Member());

    MemberDto.Response response = new MemberDto.Response(1, "test2@gmail.com", "test1234!", "테스트2");
    given(mapper.memberToMemberResponseDto(Mockito.any(Member.class)))
            .willReturn(response);

    // when
    ResultActions actions = mockMvc.perform(
            get("/member/{member-id}", 1L)
                    .accept(MediaType.APPLICATION_JSON)
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(content)
    );
    // then
    actions
            .andExpect(
                    status().isOk()
            )
            .andDo(
                    document(
                            "get-member",
                            getRequestPreProcessor(),
                            getResponsePreProcessor(),
                            pathParameters(
                                    parameterWithName("member-id").description("멤버 식별자")
                            ),
                            responseFields(
                                    List.of(
                                            fieldWithPath("id").type(JsonFieldType.NUMBER).description("인덱스"),
                                            fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                            fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
                                            fieldWithPath("alias").type(JsonFieldType.STRING).description("별명")
                                    )
                            )
                    )
            );
  }
  @Test
  public void deleteMember() throws Exception {
    // when
    ResultActions actions = mockMvc.perform(
            delete("/member/{member-id}", 1L)
    );
    // then
    actions
            .andExpect(
                    status().isNoContent()
            )
            .andDo(
                    document(
                            "delete-member",
                            getRequestPreProcessor(),
                            getResponsePreProcessor(),
                            pathParameters(
                                    parameterWithName("member-id").description("멤버 식별자")
                            )
                    )
            );
  }
}
