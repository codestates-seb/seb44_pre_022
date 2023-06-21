package server.member.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;
import server.member.repository.dto.MemberDto;
import server.member.entity.Member;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
  Member memberPostDtoToMember(MemberDto.Post memberDto);
}
