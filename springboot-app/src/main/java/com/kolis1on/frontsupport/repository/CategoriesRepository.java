package com.kolis1on.frontsupport.repository;

import com.kolis1on.frontsupport.entity.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNullApi;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriesRepository extends JpaRepository<Categories, Long> {
    boolean existsByName(String name);
}
