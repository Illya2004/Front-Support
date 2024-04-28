package com.kolis1on.frontsupport.dto;

import com.kolis1on.frontsupport.dto.security.UserResponseDTO;
import com.kolis1on.frontsupport.entity.Categories;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor

public class RequestResponseWithCountDTO{
    private Long count;

    private List<RequestResponseDTO> requests;
}
