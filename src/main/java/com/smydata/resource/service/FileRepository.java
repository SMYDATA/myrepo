package com.smydata.resource.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.model.UploadModel;

public interface FileRepository extends JpaRepository<UploadModel, Long> {

}
