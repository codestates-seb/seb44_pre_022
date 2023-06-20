package server.member.repository.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.lang.Nullable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

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

    @Override
    public String toString() {
      return "Post{" +
              "email='" + email + '\'' +
              ", password='" + password + '\'' +
              ", alias='" + alias + '\'' +
              '}';
    }
  }
}
