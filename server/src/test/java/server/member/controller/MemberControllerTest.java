package server.member.controller;

import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import server.member.repository.dto.MemberDto;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.service.MemberService;

@Slf4j
@SpringBootTest
@AutoConfigureMockMvc
public class MemberControllerTest {
  @MockBean
  private MemberService memberService;

  @MockBean
  private MemberMapper mapper;
  @Autowired
  private MockBean mockBean;

  @Autowired
  private Gson gson;

  @Test
  private void postMember() {
    // given


    // when

    // then
  }

}
