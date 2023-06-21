package server.member.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import server.exception.BusinessLogicException;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.repository.dto.MemberDto;
import server.member.service.MemberService;
import server.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@Validated
@Controller
@RequestMapping("/member")
public class MemberController {
  private final static String MEMBER_DEFAULT_URI = "/member";
  private final MemberService memberService;
  private final MemberMapper mapper;
  public MemberController(MemberService memberService, MemberMapper mapper) {
    this.memberService = memberService;
    this.mapper = mapper;
  }
  @PostMapping
  public ResponseEntity postMember(@RequestBody @Valid MemberDto.Post memberDto) {
    Member member = memberService.createMember(mapper.memberPostDtoToMember(memberDto));

    URI uri = UriCreator.createUri(MEMBER_DEFAULT_URI, member.getId());
    return ResponseEntity.created(uri).build();
  }
  @PatchMapping("/{member-id}")
  public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                    @RequestBody @Valid MemberDto.Patch memberDto) {
    memberDto.setId(memberId);
    Member member = mapper.memberPatchDtoToMember(memberDto);
    Member updatedMember = memberService.updateMember(member);
    return new ResponseEntity(mapper.memberToMemberResponseDto(updatedMember), HttpStatus.OK);
  }
  @GetMapping("/{member-id}")
  public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
    Member findMember = memberService.findMember(memberId);
    return new ResponseEntity(mapper.memberToMemberResponseDto(findMember), HttpStatus.OK);
  }
  @GetMapping
  public ResponseEntity getMembers() {
    List<Member> findMembers = memberService.findMembers();
    return new ResponseEntity(mapper.membersToMemberResponseDtos(findMembers), HttpStatus.OK);
  }
}
