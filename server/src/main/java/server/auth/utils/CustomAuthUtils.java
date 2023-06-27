package server.auth.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CustomAuthUtils {
    @Value("${mail.admin.address}")
    private String ADMIN_EMAIL;

    private final List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ROLE_ADMIN", "ROLE_USER");
    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

    private final List<String> ADMIN_ROLES_STR = List.of("ADMIN", "USER");
    private final List<String> USER_ROLES_STR = List.of("USER");

    public List<String> createRoles(String email) {
        if(email.equals(ADMIN_EMAIL)) {
            return ADMIN_ROLES_STR;
        }
        return USER_ROLES_STR;
    }

    public Collection<GrantedAuthority> createAuthority(String email) {
        if(email.equals(ADMIN_EMAIL)) {
            return ADMIN_ROLES;
        }
        return USER_ROLES;
    }

    // DB에 저장된 Role 정보를 통해 권한 목록 생성
    public Collection<GrantedAuthority> createAuthority(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role-> new SimpleGrantedAuthority("ROLE_"+role))
                .collect(Collectors.toList());
        return authorities;
    }
}
