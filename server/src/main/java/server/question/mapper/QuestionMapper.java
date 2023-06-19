package server.question.mapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.question.entity.Question;
import server.question.repository.dto.QuestionDto;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
  Question postPostToPost(QuestionDto.Post requestBody);
  Question postPatchToPost(QuestionDto.Patch requestBody);
  QuestionDto.Response postToPostResponse(Question question);
  List<QuestionDto.Response> postsToPostResponses(List<Question> questions);
}
