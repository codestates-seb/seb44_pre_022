package server.member.exception;

public enum ExceptionCode {
    MEMBER_EXISTS(409, "member exists"),
    MEMBER_NOT_FOUND(404, "member not found");

    private int status;
    private String message;

    ExceptionCode(int status, String message){
        this.status = status;
        this.message = message;
    }
}
