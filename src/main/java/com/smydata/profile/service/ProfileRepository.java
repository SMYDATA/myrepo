package com.smydata.profile.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.model.Profile;


public interface ProfileRepository extends JpaRepository<Profile,Long> {
	List<Profile> findByUserMobile(String mobile);
	List<Profile> findByResourceNumber(String resourceNo);
	List<Profile> findByJobId(String jobId);
}
