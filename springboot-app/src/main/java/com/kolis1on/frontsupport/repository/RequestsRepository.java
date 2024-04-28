package com.kolis1on.frontsupport.repository;

import com.kolis1on.frontsupport.entity.Requests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestsRepository extends JpaRepository<Requests, Long> {
}
