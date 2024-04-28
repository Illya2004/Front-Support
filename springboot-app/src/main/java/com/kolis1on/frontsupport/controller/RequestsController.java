package com.kolis1on.frontsupport.controller;

import com.kolis1on.frontsupport.dto.RequestDTO;
import com.kolis1on.frontsupport.dto.RequestResponseDTO;
import com.kolis1on.frontsupport.dto.RequestResponseWithCountDTO;
import com.kolis1on.frontsupport.entity.Categories;
import com.kolis1on.frontsupport.entity.Requests;
import com.kolis1on.frontsupport.service.RequestsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/requests/")
@AllArgsConstructor
public class RequestsController {

    private RequestsService requestsService;

    @PreAuthorize("hasRole('AUTHOR')")
    @PostMapping("create")
    public HttpStatus createRequest(@RequestBody RequestDTO requestDTO){

        requestsService.createRequest(requestDTO);
        return HttpStatus.CREATED;
    }

    @GetMapping
    public ResponseEntity<RequestResponseWithCountDTO> getRequests(@RequestParam("limit") long limit,
                                                                         @RequestParam("page") long page,
                                                                         @RequestParam(value = "filterDate", required = false) String filterDate,
                                                                         @RequestParam(value = "location", required = false) String location,
                                                                         @RequestParam(value = "categories", required = false) String categories){


        List<RequestResponseDTO> requests = requestsService.findByFilters(limit, page, filterDate, location, categories);
        return ResponseEntity.ok
                (new RequestResponseWithCountDTO(requestsService.countAllRequests(), requests));

    }

    @GetMapping("categories")
    public ResponseEntity<List<Categories>> getAllCategories(){
        return ResponseEntity.ok(requestsService.getAllCategories());
    }
}
