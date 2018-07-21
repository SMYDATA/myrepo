package com.smydata.profile.service;

import java.util.List;

import com.smydata.model.Profile;
import com.smydata.model.ProfileHistory;

public interface ProfileService {
	List<Profile> saveResourceDetail(List<Profile> profiles);
	List<Profile> getResourceDetails();
	List<Profile> getProfilesByMobileNo(String mobile);
	List<Profile> getProfilesByResourceNo(String resourceNo);
	List<ProfileHistory> saveProfileHistory(List<ProfileHistory> profilesHistory);
	List<ProfileHistory> getProfileHistory(String mobile);
	List<Profile> getProfilesByJobId(String jobId);
}
