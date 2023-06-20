package server.member.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import server.member.repository.dto.MemberDto;
import server.member.entity.Member;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface MemberMapper {
  Member memberPostDtoToMember(MemberDto.Post memberDto);
}
