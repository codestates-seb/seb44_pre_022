package server.audit;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {

  @CreatedDate
  @Setter(lombok.AccessLevel.NONE)
  @Column(name = "CREATED_AT", updatable = false)
  private LocalDateTime createdAt;

  @LastModifiedDate
  @Column(name = "LAST_MODIFIED_AT")
  private LocalDateTime modifiedAt;

  // Test용 Setter Method
  public void setAuditable(LocalDateTime createdAt, LocalDateTime modifiedAt) {
    this.createdAt = LocalDateTime.now();
    this.modifiedAt = LocalDateTime.now();
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = LocalDateTime.now();
  }
  public void setModifiedAt(LocalDateTime modifiedAt) {
    this.modifiedAt = LocalDateTime.now();
  }
}