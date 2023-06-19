package server.questionPost.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.audit.Auditable;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.Min;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Post extends Auditable {

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

  @PrePersist
  public void presetHitAndVote() {
    this.hit = 0;
    this.vote = 0;
  }

  public Post(String title, String content, int hit, int vote) {
    this.title = title;
    this.content = content;
    this.hit = hit;
    this.vote = vote;
  }
}
