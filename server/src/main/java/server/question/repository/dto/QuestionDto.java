package server.question.repository.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import server.audit.Auditable;
import server.member.entity.Member;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class QuestionDto {

  @Getter
  @AllArgsConstructor
  public static class Post extends Auditable {
    @Size(min = 15)
    @Column(nullable = false, updatable = true, unique = false)
    private String title;
    @Size(min = 220)
    @Column(nullable = false, updatable = true, unique = false)
    private String content;
    @NotNull
    private long memberId;
  }

  @Getter
  @Setter
  @AllArgsConstructor
  public static class Patch extends Auditable {
    private long questionId;
    @Size(min = 15)
    @Column(nullable = false, updatable = true, unique = false)
    private String title;
    @Size(min = 220)
    @Column(nullable = false, updatable = true, unique = false)
    private String content;

    private Member member;
  }

  @Getter
  @AllArgsConstructor
  @Builder
  public static class Response extends Auditable {
    private long questionId;
    private String title;
    private String content;
    private int hit;
    private int vote;
    private Member member;
  }
}