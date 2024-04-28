package com.kolis1on.frontsupport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "categories")
public class Categories {
    @Id
    @GeneratedValue(generator = "categories_sequence")
    @SequenceGenerator(name="categories_sequence", sequenceName="categories_sequence", allocationSize=1)
    private Long id;

    private String name;

}
