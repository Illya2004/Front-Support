package com.kolis1on.frontsupport.dto;

import jakarta.annotation.Nullable;
import lombok.Data;

import java.util.List;

@Data
public class RequestsFilterDTO {
    private Long limit;
    private Long page;
    private String location;
    private String filterDate;
    private String[] categories;

}
