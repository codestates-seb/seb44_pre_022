package server.member.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.exception.BusinessLogicException;
import server.member.entity.Member;
import server.member.exception.ExceptionCode;
import server.member.repository.MemberRepository;

import javax.transaction.Transactional;
import java.util.List;
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


  public Member updateMember(Member member) {
    Member findMember = findVerifiedMember(member.getId());

    Optional.ofNullable(member.getEmail())
            .ifPresent(email->findMember.setEmail(email));
    Optional.ofNullable(member.getPassword())
            .ifPresent(password->findMember.setPassword(password));
    Optional.ofNullable(member.getAlias())
            .ifPresent(alias->findMember.setAlias(alias));

    return memberRepository.save(member);
  }

  private Member findVerifiedMember(long memberId) {
    Optional<Member> findMember = memberRepository.findById(memberId);
    return findMember
            .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
  }

  public void verifyExistsEmail(String email) {
    Optional<Member> findMember = memberRepository.findByEmail(email);

    if (findMember.isPresent()) {
      throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
  }

  public Member findMember(long memberId) {
    return findVerifiedMember(memberId);
  }

  public List<Member> findMembers() {
    List<Member> findMembers = memberRepository.findAll();
    return findMembers;
  }
}
