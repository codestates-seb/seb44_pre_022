package server.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
