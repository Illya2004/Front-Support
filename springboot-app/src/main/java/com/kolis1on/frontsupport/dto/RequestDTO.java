package com.kolis1on.frontsupport.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kolis1on.frontsupport.entity.Categories;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Data
public class RequestDTO {
    private String description;
    private String location;
    private List<Long> categories;
}
