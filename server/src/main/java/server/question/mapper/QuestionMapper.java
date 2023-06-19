package server.question.mapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.question.entity.Question;
import server.question.repository.dto.QuestionDto;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
  Question questionPostToQuestion(QuestionDto.Post requestBody);
  Question questionPatchToQuestion(QuestionDto.Patch requestBody);
  QuestionDto.Response questionToQuestionResponse(Question question);
  List<QuestionDto.Response> questionsToQuestionResponses(List<Question> questions);
}
