package com.kolis1on.frontsupport.dto;

import com.kolis1on.frontsupport.dto.security.UserResponseDTO;
import com.kolis1on.frontsupport.entity.Categories;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class RequestResponseDTO {
    private UserResponseDTO user;
    private Long requestId;
    private String description;
    private String location;
    private List<Categories> categories;
}
