package server.member.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.springframework.web.bind.annotation.Mapping;
import server.member.dto.MemberDto;
import server.member.entity.Member;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface MemberMapper {
  Member memberPostDtoToMember(MemberDto.Post memberDto);
}
