package server.member.dto;

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
  public static class Post {
    @Email
    @NotBlank
    private String email;
    @Pattern(regexp = "/^(?=[a-zA-Z]{1,})(?=[0-9]{1,})(?=[!@#$%^&*+=?]{1,}).{8,20}$/", message="비밀번호는 영문,숫자 12글자 이하 그리고 특수문자 1글자 이상로 이루어져야 합니다.")
    @NotBlank
    private String password;
    @NotBlank
    private String alias;
  }
}
