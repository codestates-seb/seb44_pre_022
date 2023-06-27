//package server.member.repository;
//
//import org.assertj.core.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import server.member.entity.Member;
//import server.member.repository.MemberRepository;
//
//import static org.assertj.core.api.Assertions.*;
//
//@DataJpaTest
//public class MemberRepositoryTest {
//  @Autowired
//  private MemberRepository memberRepository;
//
//  @Test
//  public void createMember() {
//    Member member = new Member("test@gmail.com", "test1234", "테스트");
//    Member saveMember = memberRepository.save(member);
//
//    assertThat(member).isSameAs(saveMember);
//  }
//}
