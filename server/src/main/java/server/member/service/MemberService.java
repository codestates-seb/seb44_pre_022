package server.member.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.exception.BusinessLogicException;
import server.member.entity.Member;
import server.member.exception.ExceptionCode;
import server.member.repository.MemberRepository;

import javax.transaction.Transactional;
import java.util.Optional;

@Slf4j
@Transactional
@Service
public class MemberService {
  private final MemberRepository memberRepository;

  public MemberService(MemberRepository memberRepository) {
    this.memberRepository = memberRepository;
  }

  public Member createMember(Member member) {
    verifyExistsEmail(member.getEmail());

    return memberRepository.save(member);
  }
  public void verifyExistsEmail(String email) {
    Optional<Member> findMember = memberRepository.findByEmail(email);

    if (findMember.isPresent()) {
      throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
  }
}
