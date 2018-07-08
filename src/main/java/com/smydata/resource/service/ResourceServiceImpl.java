package com.smydata.resource.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smydata.model.Profile;
import com.smydata.model.ResourceDetail;

@Service
public class ResourceServiceImpl implements ResourceService {
	
	@Autowired
	ResourceRepository resourceRepository;

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

}
