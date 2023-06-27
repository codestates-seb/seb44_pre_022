package server.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.audit.Auditable;

import javax.persistence.*;
import javax.security.auth.Subject;
import java.security.Principal;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends Auditable implements Principal {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long memberId;
  @Column(nullable = false)
  private String email;
  @Column(nullable = false)
  private String password;
  @Column(nullable = false, unique = true)
  private String alias;
  @ElementCollection(fetch=FetchType.EAGER)
  private List<String> roles;

  public Member(String email, String password, String alias) {
    this.email = email;
    this.password = password;
    this.alias = alias;
  }

  @Override
  public String getName() {
    return null;
  }

  @Override
  public boolean implies(Subject subject) {
    return Principal.super.implies(subject);
  }
}
