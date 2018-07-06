package com.smydata.resource.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.model.Profile;


public interface ResourceRepository extends JpaRepository<Profile,String> {
	List<Profile> findByResourceNumber(String mobile);
}
