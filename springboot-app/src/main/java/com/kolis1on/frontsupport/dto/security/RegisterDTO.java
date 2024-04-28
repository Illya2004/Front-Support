package com.kolis1on.frontsupport.dto.security;

import lombok.Data;

@Data
public class RegisterDTO {
    private String username;
    private String email;
    private String password;
    private String phoneNumber;
    private String role;
}
