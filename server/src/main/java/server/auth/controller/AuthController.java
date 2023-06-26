package server.auth.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import server.auth.dto.LoginDto;

import javax.validation.Valid;

@RestController
public class AuthController {
  @GetMapping("/login")
  public ResponseEntity login(
          @RequestBody @Valid String email,
          @RequestBody @Valid String password
  ) {
    return new ResponseEntity(new LoginDto(email, password), HttpStatus.OK);
  }
}
