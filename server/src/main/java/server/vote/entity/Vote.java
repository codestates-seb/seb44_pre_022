package server.vote.entity;

import lombok.Getter;
import lombok.Setter;
import server.member.entity.Member;
import server.question.entity.Question;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import static javax.persistence.GenerationType.*;

@Getter
@Setter
@Entity
public class Vote {
  @Id
  @GeneratedValue(strategy = IDENTITY)
  private Long voteId;

  @ManyToOne
  private Member member;

  @ManyToOne
  private Question question;
}
