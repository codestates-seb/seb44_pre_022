package server.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.audit.Auditable;
import server.member.entity.Member;

import javax.persistence.*;
import javax.validation.constraints.Min;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Auditable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long postId;
  @Min(15)
  @Column(nullable = false, updatable = true, unique = false)
  private String title;
  @Min(220)
  @Column(nullable = false, updatable = true, unique = false)
  private String content;
  @Column(nullable = false, updatable = true, unique = false, columnDefinition = "integer default 0")
  private int hit;
  @Column(nullable = false, updatable = true, unique = false, columnDefinition = "integer default 0")
  private int vote;

  @ManyToOne
  @JoinColumn(name = "member_id")
  private Member member;

  public void addMember(Member member) {
    this.member = member;
  }

  @PrePersist
  public void presetHitAndVote() {
    this.hit = 0;
    this.vote = 0;
  }

  public Question(String title, String content, int hit, int vote) {
    this.title = title;
    this.content = content;
    this.hit = hit;
    this.vote = vote;
  }
}
