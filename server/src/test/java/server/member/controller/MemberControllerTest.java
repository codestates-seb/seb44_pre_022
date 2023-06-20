package server.member.controller;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import server.member.repository.dto.MemberDto;
import server.member.mapper.MemberMapper;
import server.member.service.MemberService;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Slf4j
@SpringBootTest
@AutoConfigureMockMvc
public class MemberControllerTest {
  @Autowired
  private MockMvc mockMvc;
  @Autowired
  private Gson gson;

  @Test
  public void postMember() throws Exception {
    // given
    MemberDto.Post memberDto = new MemberDto.Post("test@gmail.com","test1234!", "test");

    String content = gson.toJson(memberDto);
    log.info(content);
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
            .andExpect(
                    header().string("Location", is(startsWith("/member")))
            );
  }
}
