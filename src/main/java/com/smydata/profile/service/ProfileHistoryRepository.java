package com.smydata.profile.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.model.ProfileHistory;


public interface ProfileHistoryRepository extends JpaRepository<ProfileHistory,Long> {
	List<ProfileHistory> findByProfileId(Long profileId);
}
