package server.member.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import server.member.repository.dto.MemberDto;
import server.member.entity.Member;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
  Member memberPostDtoToMember(MemberDto.Post memberDto);

  default Member memberPatchDtoToMember(MemberDto.Patch memberDto) {
    Member member = new Member(
            memberDto.getEmail(),
            memberDto.getPassword(),
            memberDto.getAlias()
    );
    return member;
  }

  MemberDto.Response memberToMemberResponseDto(Member updatedMember);

  List<MemberDto.Response> membersToMemberResponseDtos(List<Member> findMembers);
}
