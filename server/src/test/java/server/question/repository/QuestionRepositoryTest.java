//package server.question.repository;
//
//import lombok.extern.slf4j.Slf4j;
//import org.junit.jupiter.api.AfterEach;
//import org.junit.jupiter.api.DisplayName;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import server.member.entity.Member;
//import server.member.repository.MemberRepository;
//import server.question.entity.Question;
//
//import java.util.List;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
///**
// * TODO:
// * COMPLETE
// */
//@Slf4j
//@DataJpaTest
//class QuestionRepositoryTest {
//
//  @Autowired
//  private QuestionRepository questionRepository;
//
//  @Autowired
//  private MemberRepository memberRepository;
//
//  @AfterEach
//  public void clear() {
//    questionRepository.deleteAll();
//    memberRepository.deleteAll();
//  }
//
//  @Test
//  @DisplayName("질문 생성")
//  public void createQuestion() {
//    Member member = new Member("test@gmail.com", "test1234", "testUser");
//    Member savedMember = memberRepository.save(member);
//
//    Question question = new Question("test title", "test content", savedMember);
//    Question saveQuestion = questionRepository.save(question);
//    log.info("saveQuestion: {}", saveQuestion);
//
//    assertThat(saveQuestion.getTitle()).isEqualTo("test title");
//    assertThat(saveQuestion.getContent()).isEqualTo("test content");
//    assertThat(saveQuestion.getMember()).isEqualTo(savedMember);
//    assertThat(saveQuestion.getVote()).isEqualTo(0);
//  }
//
//  @Test
//  @DisplayName("질문 조회")
//  public void findQuestion() {
//    Member member = new Member("test@gmail.com", "test1234", "testUser");
//    Member savedMember = memberRepository.save(member);
//    log.info("savedMember.getId(): {}", savedMember.getId());
//    log.info("savedMember.getEmail(): {}", savedMember.getEmail());
//    log.info("savedMember.getPassword(): {}", savedMember.getPassword());
//    log.info("savedMember.getAlias(): {}", savedMember.getAlias());
//
//    Question question = new Question("test title", "test content", savedMember);
//    Question saveQuestion = questionRepository.save(question);
//    log.info("saveQuestion.getId(): {}", saveQuestion.getQuestionId());
//    log.info("saveQuestion.getTitle(): {}", saveQuestion.getTitle());
//    log.info("saveQuestion.getContent(): {}", saveQuestion.getContent());
//    log.info("saveQuestion.getMember(): {}", saveQuestion.getMember());
//
//    Question findQuestion = questionRepository.findByQuestionId(saveQuestion.getQuestionId());
//    log.info("findQuestion.getId(): {}", findQuestion.getQuestionId());
//    log.info("findQuestion.getTitle(): {}", findQuestion.getTitle());
//    log.info("findQuestion.getContent(): {}", findQuestion.getContent());
//    log.info("findQuestion.getMember(): {}", findQuestion.getMember());
//
//    assertThat(findQuestion.getTitle()).isEqualTo("test title");
//  }
//
//  @Test
//  @DisplayName("질문 전체 조회")
//  public void findAllQuestion() {
//    Member member = new Member("test@gmail.com", "test1234", "testUser");
//    Member savedMember = memberRepository.save(member);
//
//    Question question1 = new Question("test title1", "test content1", savedMember);
//    Question question2 = new Question("test title2", "test content2", savedMember);
//    Question question3 = new Question("test title3", "test content3", savedMember);
//    Question saveQuestion1 = questionRepository.save(question1);
//    Question saveQuestion2 = questionRepository.save(question2);
//    Question saveQuestion3 = questionRepository.save(question3);
//
//    List<Question> allQuestion = questionRepository.findAll();
//
//    assertThat(allQuestion.size()).isEqualTo(3);
//  }
//
//  @Test
//  @DisplayName("질문 삭제")
//  public void deleteQuestion() {
//    Member member = new Member("test@gmail.com", "test1234", "testUser");
//    Member savedMember = memberRepository.save(member);
//
//    Question question = new Question("test title", "test content", savedMember);
//    Question saveQuestion = questionRepository.save(question);
//    questionRepository.delete(saveQuestion);
//    Question findQeustion = questionRepository.findByQuestionId(saveQuestion.getQuestionId());
//
//    assertThat(findQeustion).isNull();
//  }
//}
