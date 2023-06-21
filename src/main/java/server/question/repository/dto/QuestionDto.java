package server.question.repository.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Min;

public class QuestionDto {

  @Getter
  @AllArgsConstructor
  public static class Post {
//    @Min(15)
    @Column(nullable = false, updatable = true, unique = false)
    private String title;
//    @Min(220)
    @Column(nullable = false, updatable = true, unique = false)
    private String content;

  }

  @Getter
  @Setter
  @AllArgsConstructor
  public static class Patch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
    @Min(15)
    @Column(nullable = false, updatable = true, unique = false)
    private String title;
    @Min(220)
    @Column(nullable = false, updatable = true, unique = false)
    private String content;
  }

  @Getter
  @Builder
  public static class Response {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;
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
  }
}
