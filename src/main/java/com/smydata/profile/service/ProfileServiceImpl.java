package com.smydata.profile.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.model.Profile;
import com.smydata.model.ProfileHistory;
import com.smydata.model.ResourceDetail;

@Service
public class ProfileServiceImpl implements ProfileService {
	
	@Autowired
	ProfileRepository resourceRepository;
	
	@Autowired
	ProfileHistoryRepository profileHistoryRepository;

	@Override
	public List<Profile> saveResourceDetail(List<Profile> profiles) {
		return resourceRepository.saveAll(profiles);
	}

	@Override
	public List<Profile> getResourceDetails() {
		return resourceRepository.findAll();
	}

	@Override
	public List<Profile> getProfilesByMobileNo(String mobile) {
		return resourceRepository.findByUserMobile(mobile);
	}

	@Override
	public List<ProfileHistory> saveProfileHistory(List<ProfileHistory> profileHistories) {
		return profileHistoryRepository.saveAll(profileHistories);
	}

	@Override
	public List<ProfileHistory> getProfileHistory(Long profileId) {
		return profileHistoryRepository.findByProfileId(profileId);
	}

	@Override
	public List<Profile> getProfilesByResourceNo(String resourceNo) {
		return resourceRepository.findByResourceNumber(resourceNo);
	}

	@Override
	public List<Profile> getProfilesByJobId(String jobId) {
		return resourceRepository.findByJobId(jobId);
	}

}
