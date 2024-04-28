package com.kolis1on.frontsupport.dto.security;

import com.kolis1on.frontsupport.entity.User;
import com.kolis1on.frontsupport.enums.Role;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponseDTO {
    private String username;
    private String email;
    private Role role;

    public static UserResponseDTO userToDTO(User user){

        return UserResponseDTO.builder()
                .username(user.getRealUsername())
                .email(user.getEmail())
                .role(user.getRole())
                .build();

    }

}
