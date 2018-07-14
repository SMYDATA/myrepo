package com.smydata.user.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.model.JobModel;

public interface JobRepositroy extends JpaRepository<JobModel, Long> {

}
