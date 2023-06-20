package server.member.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.repository.dto.MemberDto;
import server.member.service.MemberService;

import java.net.URI;

import static server.utils.UriCreator.createUri;

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
  public ResponseEntity postMember(@RequestBody @Validated MemberDto.Post memberDto) {
    Member member = memberService.createMember(mapper.memberPostDtoToMember(memberDto));

    URI uri = createUri(MEMBER_DEFAULT_URI, member.getId());
    return ResponseEntity.created(uri).build();
  }
}
