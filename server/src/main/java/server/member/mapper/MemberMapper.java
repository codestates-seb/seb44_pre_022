package server.member.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import server.member.repository.dto.MemberDto;
import server.member.entity.Member;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface MemberMapper {
  Member memberPostDtoToMember(MemberDto.Post memberDto);
  Member memberPatchDtoToMember(MemberDto.Patch memberDto);

  MemberDto.Response memberToMemberResponseDto(Member updatedMember);

  List<MemberDto.Response> membersToMemberResponseDtos(List<Member> findMembers);
}
