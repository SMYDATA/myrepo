package com.smydata.resource.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.model.Profile;


public interface ResourceRepository extends JpaRepository<Profile,String> {

}
