package server.member.repository.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.lang.Nullable;
import server.member.validation.NotSpace;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;

public class MemberDto {
  @Getter
  @AllArgsConstructor
  public static class Post {
    @Email
    @NotBlank
    private String email;
    @Pattern(regexp = "^(?=.*?[a-zA-Z])(?=.*?\\d)(?=.*?[!@#$%^&*+=?]).{8,}$",
            message="비밀번호는 영문,숫자,특수문자 포함 8글자 이상이어야 합니다.")
    @NotBlank
    private String password;
    @NotBlank
    private String alias;
  }

  @Getter
  @AllArgsConstructor
  public static class Patch {
    private long id;
    @NotSpace
    public String email;
    @NotSpace
    @Pattern(regexp = "^(?=.*?[a-zA-Z])(?=.*?\\d)(?=.*?[!@#$%^&*+=?]).{8,}$",
            message="비밀번호는 영문,숫자,특수문자 포함 8글자 이상이어야 합니다.")
    private String password;
    @NotSpace
    private String alias;
    public void setId(long id) {
      this.id = id;
    }
  }

  @Getter
  @AllArgsConstructor
  public static class Response {
    private long id;
    public String email;
    private String password;
    private String alias;
  }
}
