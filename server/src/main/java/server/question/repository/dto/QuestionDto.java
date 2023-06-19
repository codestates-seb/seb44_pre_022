package server.question.repository.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Min;

public class QuestionDto {

  @Getter
  @AllArgsConstructor
  public static class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;
    @Min(15)
    @Column(nullable = false, updatable = true, unique = false)
    private String title;
    @Min(220)
    @Column(nullable = false, updatable = true, unique = false)
    private String content;
  }

  @Getter
  @AllArgsConstructor
  public static class Patch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;
    @Min(15)
    @Column(nullable = false, updatable = true, unique = false)
    private String title;
    @Min(220)
    @Column(nullable = false, updatable = true, unique = false)
    private String content;
  }

  @Getter
  @AllArgsConstructor
  public static class Response {
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
  }
}
