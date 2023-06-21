package server.member.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import server.member.entity.Member;
import server.member.repository.MemberRepository;

import javax.transaction.Transactional;

@Slf4j
@Transactional
@Service
public class MemberService {
  private MemberRepository memberRepository;

  public MemberService(MemberRepository memberRepository) {
    this.memberRepository = memberRepository;
  }

  public Member createMember(Member member) {
    return memberRepository.save(member);
  }
}
