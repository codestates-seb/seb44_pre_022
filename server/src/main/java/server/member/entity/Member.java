package server.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.audit.Auditable;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Table
@Entity
public class Member extends Auditable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  @Column(nullable = false, unique = true)
  private String email;
  @Column(nullable = false)
  private String password;
  @Column(nullable = false, unique = true)
  private String alias;

  public Member(String email, String password, String alias) {
    this.email = email;
    this.password = password;
    this.alias = alias;
  }
  public Member(long id, String email, String password, String alias) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.alias = alias;
  }

  @Override
  public String toString() {
    return "Member{" +
            "id=" + id +
            ", email='" + email + '\'' +
            ", password='" + password + '\'' +
            ", alias='" + alias + '\'' +
            '}';
  }
}
