package server.questionPost.exception;

import lombok.Getter;

public enum ExceptionCode {
  POST_NOT_FOUND(404, "존재하지 않는 게시글입니다.");

  @Getter
  private int code;

  @Getter
  private String message;

  ExceptionCode(int code, String message) {
    this.code = code;
    this.message = message;
  }
}
