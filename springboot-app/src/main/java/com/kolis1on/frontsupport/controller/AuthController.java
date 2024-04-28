package com.kolis1on.frontsupport.controller;

import com.kolis1on.frontsupport.dto.security.JwtAuthenticationResponseDTO;
import com.kolis1on.frontsupport.dto.security.LoginDTO;
import com.kolis1on.frontsupport.dto.security.RegisterDTO;
import com.kolis1on.frontsupport.repository.UserRepository;
import com.kolis1on.frontsupport.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/auth/")
public class AuthController {
    private final AuthenticationService authenticationService;

    @PostMapping("register")
    public ResponseEntity<?> register(@RequestBody RegisterDTO registerDTO){
            if(authenticationService.ifUserExistsByEmail(registerDTO.getEmail())){
                return new ResponseEntity<>("User by this email is already exists!", HttpStatus.CONFLICT);
            }
            return ResponseEntity.ok(authenticationService.register(registerDTO));
    }

    @PostMapping("login")
    public ResponseEntity<JwtAuthenticationResponseDTO> login(@RequestBody LoginDTO loginDto){
        return ResponseEntity.ok(authenticationService.login(loginDto));
    }



}
