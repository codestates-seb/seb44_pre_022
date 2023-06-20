package server.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.question.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

  Question findByQuestionId(Long questionId);
}
