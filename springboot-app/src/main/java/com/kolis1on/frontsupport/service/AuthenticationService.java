package com.kolis1on.frontsupport.service;

import com.kolis1on.frontsupport.config.JwtService;
import com.kolis1on.frontsupport.dto.security.*;
import com.kolis1on.frontsupport.entity.User;
import com.kolis1on.frontsupport.enums.Role;
import com.kolis1on.frontsupport.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    public String decodePassword(String password){
        return passwordEncoder.encode(password);
    }

    public boolean ifUserExistsByEmail(String email){
      return userRepository.existsByEmail(email);
    }
    public JwtAuthenticationResponseDTO register(RegisterDTO registerDTO){



        var user = User.builder()
                .username(registerDTO.getUsername())
                .email(registerDTO.getEmail())
                .password(passwordEncoder.encode(registerDTO.getPassword()))
                .phoneNumber(registerDTO.getPhoneNumber())
                .role(Role.valueOf(registerDTO.getRole()))
                .build();

        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return JwtAuthenticationResponseDTO.builder()
                .user(UserResponseDTO.userToDTO(user))
                .token(jwtToken)
                .build();


    }
    public JwtAuthenticationResponseDTO login(LoginDTO loginDTO){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDTO.getEmail(),
                loginDTO.getPassword()
        ));

        User user = userRepository.findByEmail(loginDTO.getEmail())
                .orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        return JwtAuthenticationResponseDTO.builder()
                .user(UserResponseDTO.userToDTO(user))
                .token(jwtToken)
                .build();
    }

}
