package server.member.service;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataIntegrityViolationException;
import server.exception.BusinessLogicException;
import server.member.entity.Member;
import server.member.exception.ExceptionCode;
import server.member.mapper.MemberMapper;
import server.member.repository.MemberRepository;
import server.member.repository.dto.MemberDto;

import javax.transaction.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;

@Slf4j
@ExtendWith(MockitoExtension.class)
public class MemberServiceTest {
  @Mock
  private MemberRepository memberRepository;

  @InjectMocks
  private MemberService memberService;

  @Autowired
  private MemberMapper mapper;
  /*
    @Test
    @DisplayName("중복 테스트")
    void createMemberDuplicatedTest() throws BusinessLogicException {
    Member member1 = new Member("test@gmail.com", "test1234!", "테스트1");
    Member createMember1 = memberService.createMember(member1);

    log.info(createMember1.toString());

    Member member2 = new Member( "test@gmail.com", "test1234!", "테스트2");
    Member createMember2 = memberService.createMember(member2);


    //log.info(createMember2.toString());
  }
  @Test
  @DisplayName("비밀번호 유효성 검증 실패 테스트")
  public void postMemberExample01() {
    MemberDto.Post memberDto = new MemberDto.Post("test@gmail.com", "asdf", "test");
    Member member = mapper.memberPostDtoToMember(memberDto);
    memberService.createMember(member);
  }

  @Test
  @DisplayName("비밀번호 유효성 검증 성공 테스트")
  public void postMemberExample02() {
    MemberDto.Post memberDto = new MemberDto.Post("test2@gmail.com", "asdf1234!", "test");

    Member member = mapper.memberPostDtoToMember(memberDto);

    memberService.createMember(member);
  }*/
}
