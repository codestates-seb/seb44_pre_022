package server.member.controller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import server.member.repository.dto.MemberDto;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.service.MemberService;

@SpringBootTest
@AutoConfigureMockMvc
public class MemberControllerTest {
  @Autowired
  private MemberService memberService;
  @Autowired
  private MemberMapper mapper;

  @Test
  @DisplayName("비밀번호 유효성 검증 실패 테스트")
  public void postMemberExample01() {
    MemberDto.Post memberDto = new MemberDto.Post("test@gmail.com", "asdf", "test");
    mapper.memberPostDtoToMember(memberDto);
  }
  @Test
  @DisplayName("비밀번호 유효성 검증 성공 테스트")
  public void postMemberExample02() {
    MemberDto.Post memberDto = new MemberDto.Post("test2@gmail.com", "asdf1234!", "test");

    Member member = mapper.memberPostDtoToMember(memberDto);

    memberService.createMember(member);
  }
}
