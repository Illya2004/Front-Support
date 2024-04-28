package com.kolis1on.frontsupport.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Stream;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "requests")
public class Requests{
    @Id
    @GeneratedValue(generator = "requests_sequence")
    @SequenceGenerator(name="requests_sequence", sequenceName="requests_sequence", allocationSize=1)
    private Long id;

    private String description;

    private Long creationTime;

    private String location;

    @ManyToOne
    private User user;

    @ManyToMany
    @JoinTable(
            name = "request_categories",
            joinColumns = @JoinColumn(name = "request_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private List<Categories> requestCategories;


    @PrePersist
    protected void onCreate() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        this.creationTime = timestamp.getTime();

    }




}
