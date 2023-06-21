package server.exception;

import lombok.Getter;
import server.member.exception.ExceptionCode;


public class BusinessLogicException extends RuntimeException {
    private ExceptionCode exceptionCode;
    public BusinessLogicException(ExceptionCode exceptionCode) {
        this.exceptionCode = exceptionCode;
    }
}
