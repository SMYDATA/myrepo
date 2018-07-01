package com.smydata.resource.service;

import java.util.List;

import com.smydata.model.Profile;

public interface ResourceService {
	List<Profile> saveResourceDetail(List<Profile> profiles);
	List<Profile> getResourceDetails();
}
