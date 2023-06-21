package server.member.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.member.entity.Member;
import server.member.repository.dto.MemberDto;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-06-20T17:21:18+0900",
    comments = "version: 1.5.3.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 17.0.7 (Amazon.com Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberDto.Post memberDto) {
        if ( memberDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberDto.getEmail() );
        member.setPassword( memberDto.getPassword() );
        member.setAlias( memberDto.getAlias() );

        return member;
    }
}
