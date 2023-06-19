package server.member.service;

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
import server.member.repository.MemberRepository;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
public class MemberServiceTest {
  @Autowired
  private MemberRepository memberRepository;

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
}
