package server.auth.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import server.auth.utils.CustomAuthUtils;
import server.exception.BusinessLogicException;
import server.member.entity.Member;
import server.member.exception.ExceptionCode;
import server.member.repository.MemberRepository;

import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomUserService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final CustomAuthUtils customAuthUtils;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return new CustomUserDetails(findMember);
    }

    private class CustomUserDetails extends Member implements UserDetails {
        CustomUserDetails(Member findMember) {
            setMemberId(findMember.getMemberId());
            setEmail(findMember.getEmail());
            setPassword(findMember.getPassword());
            setRoles(findMember.getRoles());
            setAlias(findMember.getAlias());
        }

        @Override
        public Collection<GrantedAuthority> getAuthorities() {
            return customAuthUtils.createAuthority(this.getRoles());
        }

        @Override
        public String getPassword() {
            return getPassword();
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
