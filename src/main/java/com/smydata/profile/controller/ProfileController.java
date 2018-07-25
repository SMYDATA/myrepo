package com.smydata.profile.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.Null;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.smydata.model.FileModel;
import com.smydata.model.Profile;
import com.smydata.model.ProfileHistory;
import com.smydata.model.ResourceDetail;
import com.smydata.profile.service.FileRepository;
import com.smydata.profile.service.ProfileService;

@RestController
@RequestMapping("/api")
@CrossOrigin
@SessionAttributes("userData")
public class ProfileController {
	
	@Autowired
	private ProfileService resourceService;
	
	@Autowired
	FileRepository fileRepository;
	
	private static Map<Integer,FileModel> filesMap = new HashMap<>();
	private static List<ProfileHistory> profilesHistory = null;
	
	private static final Logger logger = LoggerFactory.getLogger(ProfileController.class);
	
	/**
     * Size of a byte buffer to read/write file
     */
//    private static final int BUFFER_SIZE = 4096;
             
/*  	@GetMapping("/downloadtmp")
    public String doDownload(HttpServletRequest request,  HttpServletResponse response) throws IOException {
//  		 logger.info(new FedExLogEntry("Download Template Controller method got invoked...."));
		
    	
    	String fullPath = null;    
        // get absolute path of the application
        ServletContext context = request.getSession().getServletContext();
        String appPath = context.getRealPath("");
        // logger.info(new FedExLogEntry("appPath = " + appPath));
         
        // construct the complete absolute path of the file
        appPath = appPath.replace("webapp", "resources");
        fullPath = appPath + "/uploads/SHIPNGET_Template.xlsx";  
      
        File downloadFile = new File(fullPath);
        FileInputStream inputStream = new FileInputStream(downloadFile);
         
        // get MIME type of the file
        String mimeType = context.getMimeType(fullPath);
        if (mimeType == null) {
            // set to binary type if MIME mapping not found
            mimeType = "application/octet-stream";
        }
//         logger.info(new FedExLogEntry("MIME type: " + mimeType));
 
        // set content attributes for the response
        response.setContentType(mimeType);
        response.setContentLength((int) downloadFile.length());
 
        // set headers for the response
        String headerKey = "Content-Disposition";
        String headerValue = String.format("attachment; filename=\"%s\"",downloadFile.getName());
        response.setHeader(headerKey, headerValue);
 
        // get output stream of the response
        OutputStream outStream = response.getOutputStream();
 
        byte[] buffer = new byte[BUFFER_SIZE];
        int bytesRead = -1;
 
        // write bytes read from the input stream into the output stream
        while ((bytesRead = inputStream.read(buffer)) != -1) {
            outStream.write(buffer, 0, bytesRead);
        }
 
        inputStream.close();
        outStream.close();
       return "done";
    }*/


	/*@PostMapping("/file/upload")
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
	}*/
	
	@SuppressWarnings("unlikely-arg-type")
	@PostMapping("/saveFile")
	public void getUploadFile(@RequestParam("index")String index,@RequestParam("file") MultipartFile file) throws IOException {
		
		logger.info("===>Begin Execution of getUploadFile===>");
		try {
			if(file !=null) {
				FileModel fileModel = new FileModel();
				fileModel.setFileName(file.getOriginalFilename());
				fileModel.setMimeType(file.getContentType());
				fileModel.setFileContent(file.getBytes());
				filesMap.put(Integer.parseInt(index), fileModel);
			} else
				logger.info("Empty file recievd for index :  "+index);
			
		} catch(Exception e) {
			filesMap.remove(index);
			logger.error("Error occured while saving attachment and error is:  ", e);
		}
	}
	
	@PostMapping(value ="/saveProfile/{userMobile}")
	public ResponseEntity<?> saveProfiles(@RequestBody List<ResourceDetail> resources,/* @RequestParam("file") MultipartFile file,*/ @PathVariable("userMobile") String userMobile){
		logger.info("===>Begin Execution of saveResourceDetails===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
		List<ProfileHistory> profilesHistry = null;
		List<Profile> profilesObject = null;
		try {
//			ObjectMapper mapper = new ObjectMapper();
//			uploadFiles = mapper.readValue(file, new TypeReference<List<MultipartFile>>() {});
//			resources = mapper.readValue(profile, new TypeReference<List<ResourceDetail>>() {});
			if(resources != null && !resources.isEmpty()) {
				profilesObject = convertResourceToProfileObject(resources, userMobile);
				
				if(profilesObject != null && !profilesObject.isEmpty()) {
						profiles = resourceService.saveResourceDetail(profilesObject);//Save Profiles
				}
				 if(profilesHistory != null && !profilesHistory.isEmpty()) {
							 profilesHistry = resourceService.saveProfileHistory(profilesHistory);//Save history of Profiles
				 }
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
	
	@GetMapping(value ="/getProfileHistroy/{userMobile}/{profileId}")
	public ResponseEntity<?> getProfileHistory(@PathVariable("userMobile") String userMobile, @PathVariable("profileId") Long profileId){
		logger.info("===>Begin Execution of saveResourceDetails===>");
		ResponseEntity<?> results = null;
		List<ProfileHistory> profilesHistory = null;
		List<Profile> profiles = null;
		try {
			if(userMobile.length()>=10) {
				profilesHistory = resourceService.getProfileHistory(profileId);
				results = new ResponseEntity<>(profilesHistory, HttpStatus.OK);	
			} else {
				profiles = resourceService.getProfilesByJobId(userMobile);//here userMobile is JobId passed from UI
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			}
			
		} catch (Exception e) {
			results = new ResponseEntity<>(profilesHistory, HttpStatus.NOT_FOUND);
			logger.error("Error occured while getting Profile History and error is:  ", e);
		}
		logger.info("===>End Execution of saveResourceDetails===>");
		return results;
	}
	
	private List<Profile> convertResourceToProfileObject(List<ResourceDetail> resources, String userMobile) throws IOException {
		List<Profile> profiles = new ArrayList<>();
		/*Map<Integer,FileModel> filesMap = null;
		HttpSession session = request.getSession();
		if(session!=null) {
			Object object = session.getAttribute("filesMap");
			if(object != null && object instanceof HashMap) {
				filesMap = (Map<Integer, FileModel>) object;
			}
		}*/
		if(profilesHistory !=null && !profilesHistory.isEmpty())
			profilesHistory.clear();
				
		for(int i=0;i<resources.size();i++) {
			ResourceDetail resource = resources.get(i);
			Profile profile = new Profile();
			if(filesMap != null && !filesMap.isEmpty()) {
				for(Integer key:filesMap.keySet()) {
					if(key == i) {
						FileModel fileModel = filesMap.get(key);
						profile.setFileContent(fileModel.getFileContent());
						profile.setFileName(fileModel.getFileName());
						profile.setMimetype(fileModel.getMimeType());
						break;
					}
				}
			}
			
			profile.setClient(resource.getClient());
			profile.setClientLocation(resource.getClientLocation());
			profile.setComments(resource.getComments());
			profile.setEmployerEmail(resource.getEmployerEmail());
			profile.setEmployerName(resource.getEmployerName());
			profile.setEmployerNumber(resource.getEmployerNumber());
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
			profile.setUserMobile(userMobile);
			profile.setJobId(resource.getJobId());
			profile.setProfileId(resource.getProfileId());
			profile.setReadOnly(true);
			profiles.add(profile);
			if(resource.isReadOnly()) {
				ProfileHistory profileHistory = new ProfileHistory();
				BeanUtils.copyProperties(profile,profileHistory);
				profilesHistory = new ArrayList<>();
				profilesHistory.add(profileHistory);
			}
		}
		
		return profiles;
		
	}
	
	/**
	 * To fetch user Profiles
	 * @param mobile
	 * @param role
	 * @param request
	 * @return
	 */
	@GetMapping("/getProfile/{mobile}/{role}")
	public ResponseEntity<?> getProfiles(@PathVariable("mobile") String mobile, @PathVariable("role") String role, HttpServletRequest request){
		
		logger.info("===>Begin Execution of getResourceDetails===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
//		User user = null;
		
		try {
//			HttpSession session = request.getSession();
			/*if(session != null) {
				Object obj = session.getAttribute("userData");
				if(obj!=null && obj instanceof User) {
					user = (User) obj;
				}
			}*/
			if(filesMap != null && !filesMap.isEmpty())
				filesMap.clear();
			
			/*HttpSession session = request.getSession();
			session.removeAttribute("filesMap");*/
			if(mobile != null) {
				if("ADMIN".equalsIgnoreCase(role)) {
					profiles = resourceService.getResourceDetails();
					results = new ResponseEntity<>(profiles, HttpStatus.OK);
				} else {
					profiles = resourceService.getProfilesByMobileNo(mobile);
					results = new ResponseEntity<>(profiles, HttpStatus.OK);
				}
					
			}
			/*profiles = resourceService.getResourceDetails();
			if(profiles != null && !profiles.isEmpty()) {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			} else {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			}*/

		} catch (Exception e) {
			results = new ResponseEntity<>(profiles, HttpStatus.NOT_FOUND);
			logger.error("Error occured while getting Resource Details and error is:{}  ", e);
		}
		logger.info("===>End Execution of getResourceDetails===>");
		return results;
	}
	
	/**
	 * Get applied profiles for specified Job Id
	 * @param jobId
	 * @return
	 */
	@GetMapping("/getProfilesByJobId/{jobId}")
	public ResponseEntity<?> getProfilesByJobId(@PathVariable("jobId") String jobId){
		
		logger.info("===>Begin Execution of getProfilesByJobId===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
		
		try {
			
			if(jobId != null) {
				profiles = resourceService.getProfilesByJobId(jobId);
				if(profiles != null && !profiles.isEmpty()) {
					logger.info("===>prfiles found for JobId[{}]===>",jobId);
					results = new ResponseEntity<>(profiles, HttpStatus.OK);
				} else {
					logger.info("===>prfiles not found for JobId[{}]===>",jobId);
					results = new ResponseEntity<>(profiles, HttpStatus.OK);
				}
					
			} else {
				results = new ResponseEntity<>(profiles, HttpStatus.OK);
			}

		} catch (Exception e) {
			results = new ResponseEntity<>(profiles, HttpStatus.NOT_FOUND);
			logger.error("Error occured while getting profiles for JobId [{}] and error is:{}  ",jobId, e);
		}
		logger.info("===>End Execution of getProfilesByJobId()===>");
		return results;
	}
	
	/**
	 *  Method for handling file download request from client
	 * @param mobile
	 * @param request
	 * @param response
	 * @return
	 */
	@GetMapping("/downloadProfile/{mobile}")
	public ResponseEntity<?> downloadProfile(@PathVariable String mobile,HttpServletRequest request,HttpServletResponse response){
		logger.info("===>Begin Execution of fileDownload===>");
		ResponseEntity<?> results = null;
		List<Profile> profiles = null;
		try {
			profiles = resourceService.getProfilesByResourceNo(mobile);
			if(profiles != null && !profiles.isEmpty()) {
				
				Profile profile = profiles.get(0);
		        // set headers for the response
		        String headerKey = "Content-Disposition";
		        String headerValue = String.format("attachment; filename=\"%s\"",profile.getFileName());

		        // set content attributes for the response
		        HttpHeaders headers = new HttpHeaders();
		        headers.add(headerKey, headerValue);
		        headers.add(HttpHeaders.CACHE_CONTROL, "no-cache, no-store, must-revalidate");
		        headers.add(HttpHeaders.PRAGMA,"no-cache");
		        headers.add(HttpHeaders.EXPIRES,"0");
		        headers.add(HttpHeaders.CONTENT_LENGTH, String.valueOf(profile.getFileContent().length));
		        headers.add(HttpHeaders.CONTENT_TYPE, profile.getMimetype());
		        results = new ResponseEntity<>(profile.getFileContent(),headers,HttpStatus.OK);
		       // results =  ResponseEntity.ok().headers(headers).contentLength(profile.getFileContent().length).contentType(MediaType.parseMediaType(profile.getMimetype())).body(profile.getFileContent());
			}
		} catch (Exception e) {
			results = new ResponseEntity<>(HttpStatus.NOT_FOUND);
			logger.error("Error occured while downloading file and error is:{}  ", e);
		}
		logger.info("===>End Execution of fileDownload===>");
		return results;
	}
}
