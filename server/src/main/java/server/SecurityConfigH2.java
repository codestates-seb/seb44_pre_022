package server;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfigH2 extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
            .authorizeRequests()
            .antMatchers("/h2-console/**").permitAll() // Allow all access to /h2-console/*
            .antMatchers("/**").permitAll()
            .anyRequest().authenticated() // Any other request should be authenticated
            .and()
            .csrf().disable() // Disable CSRF protection
            .headers().frameOptions().disable(); // Allow us to load frames from the same origin (this is needed for H2 console)
  }
}
