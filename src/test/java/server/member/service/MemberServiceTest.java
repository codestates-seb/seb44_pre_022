package server.member.service;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataIntegrityViolationException;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.repository.MemberRepository;
import server.member.repository.dto.MemberDto;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.assertThrows;

@Slf4j
@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class MemberServiceTest {
  @Autowired
  private MemberRepository memberRepository;

  @Autowired
  private MemberService memberService;

  @Autowired
  private MemberMapper mapper;

  @Test
  @DisplayName("중복 테스트")
  void createMemberDuplicatedTest() {
    /*
    * TODO:
    *   1. 유효성 검사
    *   2. 비즈니스 로직 작동 확인
    * */
    Member member1 = new Member("test@gmail.com", "test1234", "중복 테스트");
    Member member2 = new Member("test@gmail.com", "test1234", "중복 테스트");

    memberRepository.save(member1);

    assertThrows(DataIntegrityViolationException.class, () -> memberRepository.save(member2));
  }
  /*@Test
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
