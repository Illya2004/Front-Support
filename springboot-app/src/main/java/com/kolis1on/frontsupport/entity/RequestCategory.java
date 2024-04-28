package com.kolis1on.frontsupport.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "request_categories")
@Data
public class RequestCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "request_id")
    private Requests request;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Categories category;

}