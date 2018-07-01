package com.smydata.resource.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.smydata.model.Profile;
import com.smydata.model.ResourceDetail;
import com.smydata.model.UploadModel;
import com.smydata.resource.service.FileRepository;
import com.smydata.resource.service.ResourceService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ResourceController {
	
	@Autowired
	private ResourceService resourceService;
	
	@Autowired
	FileRepository fileRepository;
	
	private static final Logger logger = LoggerFactory.getLogger(ResourceController.class);

	@PostMapping("/file/upload")
	public String uploadMultipartFile(@RequestParam("uploadfile") MultipartFile file) {
		try {
			UploadModel filemode = new UploadModel(file.getOriginalFilename(), file.getContentType(), file.getBytes());
			fileRepository.save(filemode);
			return "File uploaded successfully! -> filename = " + file.getOriginalFilename();
		} catch (Exception e) {
			return "FAIL! Maybe You had uploaded the file before or the file's size > 500KB";
		}
	}
	 
	@GetMapping("/file/all")
	public List<UploadModel> getListFiles() {
		return fileRepository.findAll();
	}
	
	@PostMapping("/saveProfile")
	public ResponseEntity<?> saveResourceDetails(@RequestBody List<ResourceDetail> resources){
		logger.info("===>Begin Execution of saveResourceDetails===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
		try {
			if(resources != null && !resources.isEmpty()) {
				List<Profile> profilesObject = convertResourceToProfileObject(resources);
				profiles = resourceService.saveResourceDetail(profilesObject);
				if(profiles != null && !profiles.isEmpty()) {
					results = new ResponseEntity<>(profiles, HttpStatus.OK);
				} else {
					results = new ResponseEntity<>(profiles, HttpStatus.OK);	
				}
			} else {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			}
			
		} catch (Exception e) {
			results = new ResponseEntity<>(profiles, HttpStatus.NOT_FOUND);
			logger.error("Error occured while saving Resource Details and error is:  ", e);
		}
		logger.info("===>End Execution of saveResourceDetails===>");
		return results;
	}
	
	private List<Profile> convertResourceToProfileObject(List<ResourceDetail> resources) throws IOException {
		List<Profile> profiles = new ArrayList<>();
		for(ResourceDetail resource: resources) {
			Profile profile = new Profile();
			profile.setClient(resource.getClient());
			profile.setComments(resource.getComments());
			profile.setEmployerEmail(resource.getEmployerEmail());
			profile.setEmployerName(resource.getEmployerName());
			profile.setEmployerNumber(resource.getEmployerNumber());
			profile.setFile(resource.getFile().getBytes());
			profile.setFileName(resource.getFile().getOriginalFilename());
			profile.setResourceAvailability(resource.getResourceAvailability());
			profile.setResourceBillRate(resource.getResourceBillRate());
			profile.setResourceEmail(resource.getResourceEmail());
			profile.setResourceExp(resource.getResourceExp());
			profile.setResourceName(resource.getResourceName());
			profile.setResourceNumber(resource.getResourceNumber());
			profile.setResourceSpec(resource.getResourceSpec());
			profile.setResourceTechnology(resource.getResourceTechnology());
			profile.setResourceVisaType(resource.getResourceVisaType());
			profile.setResourceLocation(resource.getResourceLocation());
			profiles.add(profile);
		}
		return profiles;
		
	}
	@GetMapping("/getProfile")
	public ResponseEntity<?> getResourceDetails(){
		
		logger.info("===>Begin Execution of getResourceDetails===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
		
		try {
			profiles = resourceService.getResourceDetails();
			if(profiles != null && !profiles.isEmpty()) {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			}

		} catch (Exception e) {
			results = new ResponseEntity<>(profiles, HttpStatus.NOT_FOUND);
			logger.error("Error occured while getting Resource Details and error is:{}  ", e);
		}
		logger.info("===>End Execution of getResourceDetails===>");
		return results;
	}
}
